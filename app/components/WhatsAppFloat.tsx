import { MessageCircle } from "lucide-react";
import { site, waLink } from "@/app/lib/site";

export default function WhatsAppFloat() {
  const wa = waLink(site.primaryPhone, site.defaultWhatsAppMessage);
  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="animate-soft-pulse fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_40px_rgba(37,211,102,0.45)] transition hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={26} strokeWidth={2.2} />
    </a>
  );
}
