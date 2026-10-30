import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { NextRequest } from "next/server";
const { sendMail, allow } = vi.hoisted(() => ({
  sendMail: vi.fn(),
  allow: vi.fn(),
}));
vi.mock("nodemailer", () => ({
  default: { createTransport: () => ({ sendMail }) },
}));
vi.mock("../../src/lib/rate-limit", () => ({ allowContact: allow }));
import { POST } from "../../src/app/api/contact/route";
const payload = {
  name: "Test User",
  email: "test@example.com",
  subject: "Hello",
  message: "A test inquiry",
};
function request(
  body: unknown = payload,
  origin = "https://hmusama.vercel.app",
  type = "application/json",
) {
  return new NextRequest("https://hmusama.vercel.app/api/contact", {
    method: "POST",
    headers: { origin, "Content-Type": type },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}
beforeEach(() => {
  vi.stubEnv("GMAIL_USER", "owner@example.com");
  vi.stubEnv("GMAIL_APP_PASSWORD", "test-only");
  allow.mockReset().mockResolvedValue(true);
  sendMail.mockReset().mockResolvedValue({});
  vi.spyOn(console, "error").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});
describe("Contact HTTP boundary", () => {
  it("rejects foreign origins without sending mail", async () => {
    expect(
      (await POST(request(payload, "https://attacker.example"))).status,
    ).toBe(403);
    expect(sendMail).not.toHaveBeenCalled();
  });
  it("rejects unsupported content type", async () => {
    expect((await POST(request(payload, undefined, "text/plain"))).status).toBe(
      415,
    );
  });
  it("rejects malformed JSON", async () => {
    expect((await POST(request("{bad"))).status).toBe(400);
  });
  it("enforces streaming body size", async () => {
    expect((await POST(request("x".repeat(24001)))).status).toBe(413);
    expect(sendMail).not.toHaveBeenCalled();
  });
  it("silently discards honeypot submissions", async () => {
    expect((await POST(request({ ...payload, website: "bot" }))).status).toBe(
      200,
    );
    expect(sendMail).not.toHaveBeenCalled();
  });
  it("returns 429 with retry information", async () => {
    allow.mockResolvedValue(false);
    const r = await POST(request());
    expect(r.status).toBe(429);
    expect(r.headers.get("Retry-After")).toBe("3600");
    expect(sendMail).not.toHaveBeenCalled();
  });
  it("returns successful partial delivery", async () => {
    sendMail
      .mockResolvedValueOnce({})
      .mockRejectedValueOnce(new Error("confirmation failed"));
    const r = await POST(request());
    expect(r.status).toBe(200);
    expect(await r.json()).toEqual({ success: true, confirmationSent: false });
  });
  it("returns 503 for failed primary delivery without exposing details", async () => {
    sendMail.mockRejectedValue(new Error("sensitive SMTP diagnostics"));
    const r = await POST(request());
    expect(r.status).toBe(503);
    expect(await r.text()).not.toContain("sensitive");
    expect(sendMail).toHaveBeenCalledTimes(1);
  });
  it("returns success only after notification delivery", async () => {
    const r = await POST(request());
    expect(await r.json()).toEqual({ success: true, confirmationSent: true });
    expect(sendMail).toHaveBeenCalledTimes(2);
  });
});
