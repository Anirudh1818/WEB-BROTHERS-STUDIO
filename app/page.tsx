import type { ReactNode } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { stats, services, steps, work, plans, faqs } from "@/app/lib/content";
import { site, waLink, telLink, prettyPhone } from "@/app/lib/site";
import Reveal from "@/app/components/Reveal";
import ContactForm from "@/app/components/ContactForm";
import Faq from "@/app/components/Faq";

/* ---------- small shared bits ---------- */

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
      {children}
    </p>
  );
}

function Check({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`flex items-center gap-2 text-sm ${dark ? "text-blue-50" : "text-slate-600"}`}>
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
          dark ? "bg-white text-blue-700" : "bg-blue-50 text-blue-600"
        }`}
      >
        ✓
      </span>
      <span>{children}</span>
    </div>
  );
}

function PremiumMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[760px]">
      <div className="absolute -right-10 top-16 hidden h-72 w-72 rounded-full bg-blue-200/40 blur-3xl lg:block" />
      <div className="absolute -left-8 bottom-6 hidden h-48 w-48 rounded-full bg-amber-100 blur-3xl lg:block" />

      <div className="relative rounded-[2rem] border border-slate-200 bg-slate-950 p-3 shadow-[0_40px_110px_rgba(15,23,42,0.20)]">
        <div className="overflow-hidden rounded-[1.35rem] bg-[#f7f3ed]">
          <div className="flex items-center justify-between border-b border-black/5 bg-white px-7 py-5">
            <div>
              <p className="font-serif text-xl font-bold tracking-tight text-slate-950">UrbanSpace</p>
              <p className="text-[10px] uppercase tracking-[0.45em] text-slate-400">Interiors</p>
            </div>
            <span className="rounded-md bg-slate-950 px-5 py-2 text-[10px] font-bold uppercase tracking-wide text-white">
              Book
            </span>
          </div>

          <div className="grid min-h-[300px] grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center px-8 py-8">
              <h3 className="font-serif text-3xl leading-[1.05] tracking-tight text-slate-950 sm:text-4xl">
                Elegant Spaces.
                <br />
                Elevated Living.
              </h3>
              <p className="mt-4 max-w-[270px] text-sm leading-6 text-slate-600">
                A premium website concept built to create trust and enquiries.
              </p>
              <span className="mt-7 w-fit rounded-lg border border-slate-950 px-5 py-3 text-[11px] font-bold uppercase tracking-wide text-slate-950">
                Explore Projects
              </span>
            </div>

            <div className="relative overflow-hidden bg-[#ddd4c8]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.95),transparent_32%),linear-gradient(120deg,rgba(255,255,255,0.70),rgba(185,166,145,0.42))]" />
              <div className="absolute bottom-10 left-10 h-16 w-64 rounded-full bg-black/10 blur-xl" />
              <div className="absolute bottom-24 left-12 h-24 w-64 rounded-[32px] bg-[#e8dfd4] shadow-2xl" />
              <div className="absolute bottom-24 left-28 h-20 w-52 rounded-[30px] bg-[#d3c0ae]" />
              <div className="absolute bottom-24 right-12 h-32 w-20 rounded-t-full bg-[#c7ad94]" />
              <div className="absolute bottom-32 right-24 h-28 w-28 rounded-full border-[18px] border-[#bda890]" />
            </div>
          </div>

          <div className="grid grid-cols-4 border-t border-black/5 bg-white">
            {[
              ["120+", "Projects"],
              ["95%", "Trust"],
              ["24/7", "Support"],
              ["SEO", "Ready"],
            ].map((item) => (
              <div key={item[0]} className="px-4 py-5 text-center">
                <p className="font-serif text-2xl font-semibold text-slate-950">{item[0]}</p>
                <p className="mt-1 text-[10px] text-slate-500">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-7 right-12 hidden rounded-2xl border border-slate-200 bg-white/90 px-5 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.14)] backdrop-blur lg:block">
        <p className="text-sm font-semibold text-slate-950">Secure. Fast. Reliable.</p>
        <p className="mt-1 text-xs text-slate-500">Hosting, SSL and mobile-ready setup.</p>
      </div>
    </div>
  );
}

/* ---------- page ---------- */

export default function Home() {
  const heroWa = waLink(site.primaryPhone, site.defaultWhatsAppMessage);

  return (
    <main className="overflow-hidden bg-[#f8fafc] text-slate-950">
      {/* HERO */}
      <section id="top" className="relative pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_22%,rgba(37,99,235,0.13),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fafc_62%,#eef2f7_100%)]" />

        <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          <div className="grid items-center gap-12 py-8 lg:grid-cols-[1fr_1.05fr] lg:py-14">
            <div className="max-w-[620px] animate-fade-up">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-ink shadow-sm">
                <Sparkles size={15} className="text-gold" />
                Modern Websites. <span className="text-blue-600">Real Results.</span>
              </div>

              <h1 className="font-serif text-[clamp(2.6rem,4.4vw,4.7rem)] font-bold leading-[1.02] tracking-[-0.045em] text-slate-950">
                We make local businesses look{" "}
                <span className="text-blue-600">premium</span> online.
              </h1>

              <p className="mt-7 max-w-[590px] text-lg leading-8 text-slate-600">
                Fast, modern, SEO-ready websites with beautiful design, a working
                backend, WhatsApp integration, Maps, and transparent hosting —
                everything your business needs to grow online.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={heroWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  <MessageCircle size={18} /> Get Free Website Demo
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-ink transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg"
                >
                  View Our Work <ArrowRight size={18} />
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
                <Check>No Hidden Costs</Check>
                <Check>Transparent Hosting</Check>
                <Check>Approval Before Payment</Check>
              </div>
            </div>

            <Reveal delay={120}>
              <PremiumMockup />
            </Reveal>
          </div>

          {/* Stats */}
          <Reveal className="pb-4">
            <div className="rounded-3xl border border-slate-200 bg-white/85 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur">
              <div className="grid divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">
                {stats.map((stat) => (
                  <div key={stat.value} className="flex items-center gap-5 px-7 py-7">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <stat.icon size={22} strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="text-xl font-bold tracking-tight text-slate-950">{stat.value}</p>
                      <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Complete digital solutions for your business.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Everything required to make a business look trusted, modern and ready
              to receive customers online.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 80}>
              <article className="group h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.1)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <service.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="mt-7 text-2xl font-bold tracking-tight text-slate-950">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{service.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              A simple, transparent process.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.step} delay={(i % 4) * 80}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white">
                    <step.icon size={22} />
                  </span>
                  <span className="font-serif text-3xl font-black text-slate-200">{step.step}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <SectionLabel>Demo Portfolio</SectionLabel>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Websites that make businesses look premium.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Demo project directions we can create for local businesses before
                turning them into real client case studies.
              </p>
            </div>
            <a
              href="#contact"
              className="w-fit rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-ink transition hover:border-blue-200 hover:shadow-lg"
            >
              Start Your Demo →
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {work.map((item, index) => (
            <Reveal key={item.name} delay={(index % 4) * 80}>
              <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.1)]">
                <div className="relative h-44 w-full">
                  <div
                    className={`absolute inset-0 ${
                      index === 0
                        ? "bg-[radial-gradient(circle_at_30%_30%,#f59e0b,transparent_30%),linear-gradient(135deg,#0f172a,#1e293b)]"
                        : index === 1
                        ? "bg-[radial-gradient(circle_at_30%_30%,#ec4899,transparent_30%),linear-gradient(135deg,#0f172a,#312e81)]"
                        : index === 2
                        ? "bg-[radial-gradient(circle_at_30%_30%,#22c55e,transparent_30%),linear-gradient(135deg,#020617,#1e293b)]"
                        : "bg-[radial-gradient(circle_at_30%_30%,#3b82f6,transparent_30%),linear-gradient(135deg,#0f172a,#172554)]"
                    }`}
                  />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur">
                    <p className="text-xs text-white/70">{item.type}</p>
                    <h3 className="mt-1 text-xl font-bold">{item.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LAUNCH OFFER */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16">
        <Reveal>
          <div className="grid gap-8 rounded-[2rem] bg-ink p-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)] lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <div>
              <SectionLabel>Launch Offer</SectionLabel>
              <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                First selected businesses get website development free.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-blue-100">
                We are building our first public portfolio. For selected local
                businesses, we design and develop the website without charging
                development fees. You only pay the actual domain and hosting cost,
                shown transparently.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <Check dark>Written review request</Check>
                <Check dark>Permission to show portfolio</Check>
                <Check dark>No hidden development fee</Check>
                <Check dark>Transparent hosting cost</Check>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Transparent Hosting</SectionLabel>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Simple pricing. No surprise charges.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Development is free for the first selected businesses. Hosting &amp;
              domain cost is shown clearly before any purchase.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={(i % 3) * 80}>
              <article
                className={`relative h-full rounded-3xl border p-8 transition hover:-translate-y-1 ${
                  plan.featured
                    ? "border-blue-600 bg-white shadow-[0_30px_90px_rgba(37,99,235,0.18)]"
                    : "border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.06)]"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-slate-950">{plan.name}</h3>
                <p className="mt-2 text-slate-500">{plan.tagline}</p>
                <p className="mt-6 text-2xl font-bold leading-tight text-blue-600 md:text-3xl">{plan.price}</p>
                <div className="mt-7 space-y-3">
                  {plan.features.map((feat) => (
                    <Check key={feat}>{feat}</Check>
                  ))}
                </div>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3.5 font-semibold transition ${
                    plan.featured
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-slate-300 text-ink hover:border-blue-200"
                  }`}
                >
                  Get Started
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_90px_rgba(15,23,42,0.08)] lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Ready to make your business look premium online?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Send your business details and we'll prepare a website direction that
              fits your brand — or reach us directly on WhatsApp.
            </p>

            <div className="mt-8 space-y-4">
              {site.founders.map((f) => (
                <div
                  key={f.phone}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
                >
                  <div>
                    <p className="font-bold text-ink">{f.name}</p>
                    <p className="text-sm text-slate-500">{prettyPhone(f.phone)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={waLink(f.phone, site.defaultWhatsAppMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                    >
                      <MessageCircle size={16} /> WhatsApp
                    </a>
                    <a
                      href={telLink(f.phone)}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-blue-200"
                    >
                      <Phone size={16} /> Call
                    </a>
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-2 px-1 pt-1 text-sm text-slate-600 sm:flex-row sm:items-center sm:gap-6">
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition hover:text-blue-600">
                  <Mail size={15} /> {site.email}
                </a>
                <p className="flex items-center gap-2">
                  <MapPin size={15} /> {site.locations.join(" · ")} · India
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Clear answers before we start.
            </h2>
          </div>
        </Reveal>
        <Faq />
      </section>
    </main>
  );
}
