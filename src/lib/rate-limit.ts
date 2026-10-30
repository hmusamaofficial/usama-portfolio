import { createHmac } from "node:crypto";
// Atomic fixed-window counters across serverless instances, without storing raw IPs/emails.
const script =
  "local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],ARGV[1]) end; return n";
export async function allowContact(ip: string, email: string) {
  const url = process.env.CONTACT_REDIS_URL,
    token = process.env.CONTACT_REDIS_TOKEN,
    secret = process.env.CONTACT_RATE_SECRET;
  if (!url || !token || !secret) {
    // Never silently rely on ephemeral memory for a publicly deployed endpoint.
    if (process.env.NODE_ENV === "production")
      throw new Error("Contact rate limiter is not configured");
    return true;
  }
  const key = (value: string) =>
    createHmac("sha256", secret).update(value).digest("hex");
  for (const [id, max, ttl] of [
    [`ip:${key(ip)}`, 5, 900],
    [`email:${key(email.toLowerCase())}`, 3, 3600],
    ["global", 50, 3600],
  ] as const) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        "EVAL",
        script,
        "1",
        `portfolio:contact:${id}`,
        String(ttl),
      ]),
      signal: AbortSignal.timeout(4000),
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Rate limiter unavailable");
    const data = await response.json();
    if (data.error || typeof data.result !== "number")
      throw new Error("Invalid rate limiter response");
    if (data.result > max) return false;
  }
  return true;
}
