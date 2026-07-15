"use server";

import { Resend } from "resend";

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string };

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
 * Validates the contact form and emails the school via Resend.
 * Secrets stay on the server — never call Resend from the client.
 */
export async function sendContactMessage(
  formData: FormData,
): Promise<ContactResult> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in your name, email, and message." };
  }

  if (!isValidEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (message.length > 5000) {
    return { ok: false, error: "Message is too long. Please keep it under 5000 characters." };
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return {
      ok: false,
      error: "Messaging is temporarily unavailable. Please email us directly.",
    };
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim() || "info@shekinahelementary.co.ug";
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "Shekinah Elementary <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Website inquiry from ${name}`,
      html: `
        <h2>New contact form message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
      text: [
        "New contact form message",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
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
