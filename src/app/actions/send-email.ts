"use server";

import { Resend } from "resend";

export type SendEmailResult =
  | { ok: true }
  | { ok: false; error: string };

const SCHOOL_EMAIL = "info@shekinahelementaryschool.com";
const FROM_ADDRESS = `Shekinah Contact Form <${SCHOOL_EMAIL}>`;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/**
 * Contact form → Resend.
 * Uses RESEND_API_KEY from the server env only.
 */
export async function sendEmail(formData: FormData): Promise<SendEmailResult> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !subject || !message) {
    return {
      ok: false,
      error: "Please fill in your name, email, subject, and message.",
    };
  }

  if (!isValidEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (message.length > 5000) {
    return {
      ok: false,
      error: "Message is too long. Please keep it under 5000 characters.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return {
      ok: false,
      error: "Messaging is temporarily unavailable. Please email us directly.",
    };
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim() || SCHOOL_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || FROM_ADDRESS;

  const resend = new Resend(apiKey);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New Message from Contact Form: ${subject}`,
      html: `
        <div style="font-family: system-ui, sans-serif; line-height: 1.6; color: #1a1a1a;">
          <h2 style="margin: 0 0 16px;">New Contact Form Message</h2>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> ${safeEmail}</p>
          <p style="margin: 0 0 8px;"><strong>Phone:</strong> ${safePhone}</p>
          <p style="margin: 0 0 8px;"><strong>Subject:</strong> ${safeSubject}</p>
          <p style="margin: 16px 0 8px;"><strong>Message:</strong></p>
          <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
        </div>
      `,
      text: [
        "New Contact Form Message",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        ok: false,
        error: "We could not send your message. Please try again or email us directly.",
      };
    }

    return { ok: true };
  } catch (err) {
    console.error("Contact form send failed:", err);
    return {
      ok: false,
      error: "We could not send your message. Please try again or email us directly.",
    };
  }
}
