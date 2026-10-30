export type Contact = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};
export class ContactError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}
export function validateContact(value: unknown): Contact {
  if (!value || typeof value !== "object" || Array.isArray(value))
    throw new ContactError(400, "Please provide a valid message.");
  const input = value as Record<string, unknown>;
  const result: Record<string, string> = {};
  for (const [key, max] of [
    ["name", 100],
    ["email", 254],
    ["subject", 160],
    ["message", 5000],
    ["website", 200],
  ] as const) {
    const raw = input[key] ?? (key === "website" ? "" : null);
    if (
      typeof raw !== "string" ||
      raw.length > max ||
      (key !== "website" && !raw.trim())
    )
      throw new ContactError(400, `Please check the ${key} field.`);
    result[key] = raw.trim();
  }
  if (
    !/^[^\s@<>"\r\n]+@[^\s@<>"\r\n]+\.[^\s@<>"\r\n]+$/.test(result.email) ||
    /[\r\n\x00-\x1f]/.test(result.name + result.subject)
  )
    throw new ContactError(
      400,
      "Please check your name, subject, and email address.",
    );
  return result as Contact;
}
export function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
}
export type Mail = {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
};
export async function deliverContact(
  contact: Contact,
  config: { sender: string; recipient: string; name: string },
  send: (mail: Mail) => Promise<unknown>,
) {
  const { name, email, subject, message } = contact;
  // Recipient notification is authoritative. Confirmation is a best-effort courtesy.
  await send({
    from: config.sender,
    to: config.recipient,
    replyTo: email,
    subject: `Portfolio inquiry: ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `<p>From: ${escapeHtml(name)} (${escapeHtml(email)})</p><h2>${escapeHtml(subject)}</h2><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
  });
  let confirmationSent = true;
  try {
    // Do not reflect arbitrary subject/body content to an unverified third-party address.
    await send({
      from: config.sender,
      to: email,
      subject: `Your message to ${config.name}`,
      text: `Thank you for contacting ${config.name}. Your message has been received.`,
      html: `<p>Thank you for contacting ${escapeHtml(config.name)}. Your message has been received.</p>`,
    });
  } catch {
    confirmationSent = false;
  }
  return { success: true, confirmationSent };
}
