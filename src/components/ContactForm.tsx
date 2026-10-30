"use client";
import { useRef, useState } from "react";
export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const submitting = useRef(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form));
    setState("sending");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(30000),
      });
      const data = await response.json();
      if (!response.ok || !data.success)
        throw new Error(
          data.error ||
            "Unable to send your message. Please email me directly.",
        );
      setState("success");
      setMessage(
        data.confirmationSent
          ? "Your message has been received. A confirmation email is on its way."
          : "Your message has been received. The confirmation email could not be sent; you do not need to submit again.",
      );
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error && error.name === "Error"
          ? error.message
          : "Delivery could not be confirmed. Please email me directly before retrying.",
      );
    } finally {
      submitting.current = false;
    }
  }
  return (
    <form
      className="contact-form"
      onSubmit={submit}
      aria-busy={state === "sending"}
    >
      <div className="form-row">
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" required maxLength={160} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          aria-describedby="privacy-note"
        />
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          maxLength={200}
        />
      </div>
      <p id="privacy-note" className="form-hint">
        Your details are used to respond to this inquiry. Please don’t include
        passwords, customer data, or confidential information.
      </p>
      <div role="status" aria-live="polite" aria-atomic="true">
        {message && (
          <p className={`form-status ${state === "error" ? "error" : ""}`}>
            {message}
          </p>
        )}
      </div>
      <button
        className="button primary"
        type="submit"
        disabled={state === "sending"}
      >
        {state === "sending" ? "Sending…" : "Send message ↗"}
      </button>
    </form>
  );
}
