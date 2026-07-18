"use server";

import { sendEmail } from "./send-email";

/** Thin async wrapper — "use server" files may only export async functions. */
export async function sendContactMessage(formData: FormData) {
  return sendEmail(formData);
}
