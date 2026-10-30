import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ContactError, deliverContact, validateContact } from "@/lib/contact";
import { allowContact } from "@/lib/rate-limit";
import { profile } from "@/data/profile";
export const runtime = "nodejs";
const MAX_BYTES = 24000;
async function readBody(req: NextRequest) {
  if (Number(req.headers.get("content-length")) > MAX_BYTES)
    throw new ContactError(413, "Message is too large.");
  const reader = req.body?.getReader();
  if (!reader) throw new ContactError(400, "Message is missing.");
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BYTES) {
        await reader.cancel();
        throw new ContactError(413, "Message is too large.");
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    throw new ContactError(400, "Invalid message format.");
  }
}
export async function POST(req: NextRequest) {
  const json = (body: object, status = 200) =>
    NextResponse.json(body, {
      status,
      headers: {
        "Cache-Control": "no-store",
        ...(status === 429 ? { "Retry-After": "3600" } : {}),
      },
    });
  try {
    const allowed = new Set([
      profile.url,
      ...(process.env.CONTACT_ALLOWED_ORIGINS || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    ]);
    if (process.env.NODE_ENV !== "production") allowed.add(req.nextUrl.origin);
    if (!allowed.has(req.headers.get("origin") || ""))
      throw new ContactError(403, "This origin is not permitted.");
    if (
      !req.headers
        .get("content-type")
        ?.toLowerCase()
        .startsWith("application/json")
    )
      throw new ContactError(415, "Please send a JSON message.");
    const contact = validateContact(await readBody(req));
    if (contact.website)
      return json({ success: true, confirmationSent: false });
    // Vercel overwrites x-vercel-forwarded-for; do not trust arbitrary client x-forwarded-for.
    const ip = process.env.VERCEL
      ? req.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() ||
        "unknown"
      : "shared";
    if (!(await allowContact(ip, contact.email)))
      return json(
        {
          error:
            "Too many messages. Please try again later or email me directly.",
        },
        429,
      );
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD)
      throw new Error("Mail is not configured");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 10000,
    });
    const result = await deliverContact(
      contact,
      {
        sender: process.env.GMAIL_USER,
        recipient: process.env.GMAIL_USER,
        name: profile.name,
      },
      (mail) => transporter.sendMail(mail),
    );
    if (!result.confirmationSent)
      console.warn("Contact notification accepted; confirmation failed.");
    return json(result);
  } catch (error) {
    if (error instanceof ContactError)
      return json({ error: error.message }, error.status);
    console.error("Contact service unavailable."); // Never log message bodies, email addresses, or credentials.
    return json(
      {
        error:
          "The contact service is temporarily unavailable. Please email me directly.",
      },
      503,
    );
  }
}
