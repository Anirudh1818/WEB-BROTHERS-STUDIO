import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "@/app/components/Logo";
import { site, waLink, telLink, prettyPhone } from "@/app/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-[1500px] px-6 pb-10 sm:px-10 lg:px-16">
      <div className="rounded-[2rem] bg-ink p-8 text-white lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Logo variant="dark" />
            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              {site.description}
            </p>
            <p className="mt-4 text-sm text-slate-500">{site.serviceArea}</p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-bold">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-bold">Talk to the founders</p>
            <ul className="mt-4 space-y-4">
              {site.founders.map((f) => (
                <li key={f.phone} className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="text-sm font-semibold text-white">
                    {f.name}
                    <span className="ml-2 font-normal text-slate-500">{prettyPhone(f.phone)}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <a
                      href={waLink(f.phone, site.defaultWhatsAppMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp ${f.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#25D366] transition hover:bg-[#25D366]/25"
                    >
                      <MessageCircle size={16} />
                    </a>
                    <a
                      href={telLink(f.phone)}
                      aria-label={`Call ${f.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
                    >
                      <Phone size={16} />
                    </a>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-5 space-y-2 text-sm text-slate-400">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Mail size={15} /> {site.email}
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={15} /> {site.locations.join(" · ")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Built with care by {site.founders.map((f) => f.name).join(" & ")}.</p>
        </div>
      </div>
    </footer>
  );
}
