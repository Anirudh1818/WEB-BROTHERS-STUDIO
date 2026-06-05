"use server";

import { site } from "@/app/lib/site";

export type LeadState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
  /** Plain-text summary used to pre-fill WhatsApp on success */
  waText?: string;
};

type Lead = {
  name: string;
  business: string;
  phone: string;
  email: string;
  city: string;
  message: string;
  at: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitLead(
  _prev: LeadState,
  formData: FormData
): Promise<LeadState> {
  const get = (k: string) => (formData.get(k) ?? "").toString().trim();

  const name = get("name");
  const business = get("business");
  const phone = get("phone");
  const email = get("email");
  const city = get("city");
  const message = get("message");

  // ---- Server-side validation ------------------------------------------
  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (business.length < 2) errors.business = "Please enter your business name.";
  if (phone.replace(/[^0-9]/g, "").length < 10)
    errors.phone = "Please enter a valid phone number.";
  if (email && !emailRe.test(email))
    errors.email = "Please enter a valid email address.";

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Please fix the highlighted fields.", errors };
  }

  const lead: Lead = {
    name,
    business,
    phone,
    email,
    city,
    message,
    at: new Date().toISOString(),
  };

  // 1) Always record on the server (shows in your terminal / hosting logs)
  console.log("📩 New website lead:", lead);

  // 2) Email delivery — activates automatically once RESEND_API_KEY is set
  try {
    await deliverLeadEmail(lead);
  } catch (err) {
    // Never block the user; the lead is already logged above.
    console.error("Lead email delivery failed:", err);
  }

  const waText = [
    "New website enquiry",
    `Name: ${name}`,
    `Business: ${business}`,
    `Phone: ${phone}`,
    email && `Email: ${email}`,
    city && `City: ${city}`,
    message && `Message: ${message}`,
  ]
    .filter(Boolean)
    .join("\n");

  return {
    ok: true,
    message:
      "Thanks! We've received your details and will reach out shortly. You can also send them straight to our WhatsApp below.",
    waText,
  };
}

/**
 * Sends the lead to your inbox via Resend (https://resend.com).
 * If RESEND_API_KEY isn't configured yet, this silently no-ops —
 * the lead is still logged and the WhatsApp channel keeps working.
 */
async function deliverLeadEmail(lead: Lead): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return;

  const from =
    process.env.LEAD_FROM_EMAIL ??
    "Web Brothers Digital <onboarding@resend.dev>";

  const text =
    `New website enquiry from ${site.name}\n\n` +
    `Name:     ${lead.name}\n` +
    `Business: ${lead.business}\n` +
    `Phone:    ${lead.phone}\n` +
    `Email:    ${lead.email || "—"}\n` +
    `City:     ${lead.city || "—"}\n` +
    `Message:  ${lead.message || "—"}\n\n` +
    `Received: ${lead.at}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: site.leadRecipients,
      subject: `New enquiry — ${lead.business}`,
      text,
      reply_to: lead.email || undefined,
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
  }
}
