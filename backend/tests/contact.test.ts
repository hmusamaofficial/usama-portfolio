import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  validateContact,
  deliverContact,
  escapeHtml,
} from "../../src/lib/contact";
import { allowContact } from "../../src/lib/rate-limit";
const contact = {
  name: "Usama",
  email: "visitor@example.com",
  subject: "Testing help",
  message: "Please review our workflow.",
};
const config = {
  sender: "owner@example.com",
  recipient: "owner@example.com",
  name: "Muhammad Usama",
};
afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});
describe("Contact validation and delivery", () => {
  it.each([
    null,
    [],
    {},
    { ...contact, name: 42 },
    { ...contact, email: "a@b\r\nBcc:x@y.com" },
    { ...contact, message: " " },
    { ...contact, subject: "x".repeat(161) },
    { ...contact, name: "Name\nInjected" },
  ])("rejects malformed payload %j", (value) => {
    expect(() => validateContact(value)).toThrow();
  });
  it("trims values and accepts legitimate apostrophes", () => {
    expect(validateContact({ ...contact, name: "  O'Brien " }).name).toBe(
      "O'Brien",
    );
  });
  it("escapes all HTML syntax", () => {
    expect(escapeHtml('<a href="x">&\'</a>')).toBe(
      "&lt;a href=&quot;x&quot;&gt;&amp;&#39;&lt;/a&gt;",
    );
  });
  it("escapes notification and does not reflect message content to visitor", async () => {
    const send = vi.fn().mockResolvedValue({});
    await deliverContact(
      { ...contact, message: "<img src=x onerror=alert(1)>" },
      config,
      send,
    );
    expect(send.mock.calls[0][0].html).not.toContain("<img");
    expect(send.mock.calls[1][0].html).not.toContain("onerror");
    expect(send.mock.calls[0][0].replyTo).toBe(contact.email);
  });
  it("returns success when confirmation fails after owner delivery", async () => {
    const send = vi
      .fn()
      .mockResolvedValueOnce({})
      .mockRejectedValueOnce(new Error("SMTP failure"));
    expect(await deliverContact(contact, config, send)).toEqual({
      success: true,
      confirmationSent: false,
    });
    expect(send).toHaveBeenCalledTimes(2);
  });
  it("does not send confirmation when owner delivery fails", async () => {
    const send = vi.fn().mockRejectedValue(new Error("SMTP failure"));
    await expect(deliverContact(contact, config, send)).rejects.toThrow();
    expect(send).toHaveBeenCalledTimes(1);
  });
});
describe("Distributed abuse control", () => {
  beforeEach(() => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("CONTACT_REDIS_URL", "https://redis.example");
    vi.stubEnv("CONTACT_REDIS_TOKEN", "test-token");
    vi.stubEnv("CONTACT_RATE_SECRET", "test-secret");
  });
  it("fails closed when production configuration is absent", async () => {
    vi.stubEnv("CONTACT_REDIS_URL", "");
    await expect(allowContact("127.0.0.1", contact.email)).rejects.toThrow();
  });
  it("enforces IP quota and hashes identifying values", async () => {
    const fetch = vi
      .fn()
      .mockResolvedValue({ ok: true, json: async () => ({ result: 6 }) });
    vi.stubGlobal("fetch", fetch);
    expect(await allowContact("127.0.0.1", contact.email)).toBe(false);
    const body = fetch.mock.calls[0][1].body;
    expect(body).not.toContain("127.0.0.1");
    expect(body).not.toContain(contact.email);
  });
  it("enforces email quota across distinct IPs", async () => {
    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValueOnce({ ok: true, json: async () => ({ result: 1 }) })
        .mockResolvedValueOnce({ ok: true, json: async () => ({ result: 4 }) }),
    );
    expect(await allowContact("other-ip", contact.email)).toBe(false);
  });
  it("fails closed on store failure", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
    await expect(allowContact("ip", contact.email)).rejects.toThrow();
  });
  it("allows traffic under all quotas", async () => {
    const fetch = vi
      .fn()
      .mockResolvedValue({ ok: true, json: async () => ({ result: 1 }) });
    vi.stubGlobal("fetch", fetch);
    expect(await allowContact("ip", contact.email)).toBe(true);
    expect(fetch).toHaveBeenCalledTimes(3);
  });
});
