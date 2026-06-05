/**
 * Central site configuration.
 * Edit anything here and it updates everywhere on the site.
 */

export type Founder = {
  name: string;
  role: string;
  phone: string; // E.164 style, e.g. +919412142364
};

export const site = {
  name: "Web Brothers Digital",
  shortName: "Web Brothers",
  tagline: "Premium websites for growing local businesses",
  description:
    "We design fast, modern, SEO-ready websites for local businesses across India — with WhatsApp integration, Google Maps, transparent hosting and a backend that actually works.",

  founders: [
    { name: "Anirudh", role: "Co-Founder", phone: "+919412142364" },
    { name: "Anubhav", role: "Co-Founder", phone: "+919368044596" },
  ] satisfies Founder[],

  /** Primary number used for the floating button + main CTAs */
  primaryPhone: "+919412142364",

  /** Public email shown on the site */
  email: "saxenaanirudh59@gmail.com",

  /** Where lead emails are delivered (add Anubhav's email here anytime) */
  leadRecipients: ["saxenaanirudh59@gmail.com"],

  /** Home base + reach */
  locations: ["Dehradun", "Moradabad"],
  serviceArea: "Serving businesses across India",

  defaultWhatsAppMessage:
    "Hi Web Brothers Digital! I'm interested in getting a website for my business.",

  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

/** Canonical site URL (set NEXT_PUBLIC_SITE_URL in production) */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.webbrothersdigital.in";

/** Build a wa.me link, optionally pre-filled with a message */
export function waLink(phone: string, message?: string): string {
  const num = phone.replace(/[^0-9]/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${num}${text}`;
}

/** Build a tel: link */
export function telLink(phone: string): string {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

/** Pretty-print a phone number for display */
export function prettyPhone(phone: string): string {
  const digits = phone.replace(/[^0-9]/g, "");
  if (digits.length === 12 && digits.startsWith("91")) {
    const n = digits.slice(2);
    return `+91 ${n.slice(0, 5)} ${n.slice(5)}`;
  }
  return phone;
}
