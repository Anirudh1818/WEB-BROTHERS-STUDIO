import type { ElementType, ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  IndianRupee,
  MapPin,
  MessageCircle,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-[22px] border ${
          footer
            ? "border-white/10 bg-white/5"
            : "border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
        } h-[70px] w-[70px]`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,166,74,0.18),transparent_35%)]" />

        <svg
          viewBox="0 0 72 72"
          className="h-[52px] w-[52px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 16L15 56L26 28L36 56L46 16"
            stroke={footer ? "#ffffff" : "#102A66"}
            strokeWidth="4.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44 18H55C61 18 64 20.8 64 25.8C64 29.8 61.5 32.2 56.5 33.1C62.3 33.8 66 36.8 66 42.6C66 49.2 61.1 53 52.4 53H44"
            stroke={footer ? "#ffffff" : "#102A66"}
            strokeWidth="4.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="58" cy="13" r="3.2" fill="#D4A64A" />
        </svg>
      </div>

      <div>
        <p
          className={`text-[1.85rem] font-extrabold leading-none tracking-[-0.04em] ${
            footer ? "text-white" : "text-blue-950"
          }`}
        >
          Web Brothers Digital
        </p>
        <p
          className={`mt-1 text-sm font-medium tracking-[0.02em] ${
            footer ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Founded by Anirudh & Anubhav
        </p>
      </div>
    </div>
  );
}


const stats: {
  value: string;
  label: string;
  icon: ElementType;
}[] = [
  {
    value: "7–10 Days",
    label: "Average delivery timeline",
    icon: Zap,
  },
  {
    value: "100%",
    label: "Transparent hosting & pricing",
    icon: IndianRupee,
  },
  {
    value: "Mobile-First",
    label: "Responsive across all devices",
    icon: Smartphone,
  },
  {
    value: "Approval First",
    label: "You approve before final launch",
    icon: CheckCircle2,
  },
];

const services: {
  title: string;
  text: string;
  icon: ElementType;
}[] = [
  {
    title: "Business Websites",
    text: "Premium websites for shops, cafes, salons, gyms, coaching institutes and local brands.",
    icon: Globe2,
  },
  {
    title: "Backend Systems",
    text: "Lead forms, admin panels, dashboards and custom backend flows for your business.",
    icon: ServerCog,
  },
  {
    title: "WhatsApp Integration",
    text: "Direct WhatsApp buttons so customers can contact you instantly without confusion.",
    icon: MessageCircle,
  },
  {
    title: "Maps & Local SEO",
    text: "Google Maps, location sections and local SEO-ready structure to help customers find you.",
    icon: MapPin,
  },
  {
    title: "E-Commerce Setup",
    text: "Product catalogues, order flows and payment-ready storefront layouts for selling online.",
    icon: ShoppingBag,
  },
  {
    title: "Hosting & Maintenance",
    text: "Transparent hosting setup, SSL, updates and optional support after launch.",
    icon: ShieldCheck,
  },
];

const work = [
  {
    name: "Urban Cafe",
    type: "Restaurant Website",
    desc: "Menu showcase, location, WhatsApp orders and premium brand design.",
  },
  {
    name: "Glow Salon",
    type: "Salon Website",
    desc: "Services, appointment CTA, gallery and beauty-focused premium layout.",
  },
  {
    name: "FitZone Gym",
    type: "Fitness Website",
    desc: "Membership plans, trainer section, transformation gallery and enquiry form.",
  },
  {
    name: "Smart Tuition",
    type: "Coaching Website",
    desc: "Courses, admissions CTA, faculty cards and student enquiry system.",
  },
];

const faqs = [
  {
    q: "Do I need to pay before seeing the website?",
    a: "No. For selected first businesses, we first create and show the website concept. You approve the work before moving ahead.",
  },
  {
    q: "What cost does the client pay?",
    a: "For the launch offer, development is free for selected businesses. The client only pays actual domain and hosting cost transparently.",
  },
  {
    q: "Will the website work on mobile?",
    a: "Yes. Every website is built mobile-first so it works properly on phones, tablets and laptops.",
  },
  {
    q: "Can you add WhatsApp and Google Maps?",
    a: "Yes. WhatsApp chat buttons, Google Maps, call buttons and contact forms can be added.",
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
      {children}
    </p>
  );
}

function Check({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 text-sm ${
        dark ? "text-blue-50" : "text-slate-600"
      }`}
    >
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold ${
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
              <p className="font-serif text-xl font-bold tracking-tight text-slate-950">
                UrbanSpace
              </p>
              <p className="text-[10px] uppercase tracking-[0.45em] text-slate-400">
                Interiors
              </p>
            </div>

            <button className="rounded-md bg-slate-950 px-5 py-2 text-[10px] font-bold uppercase tracking-wide text-white">
              Book
            </button>
          </div>

          <div className="grid min-h-[300px] grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center px-8 py-8">
              <h3 className="font-serif text-4xl leading-[1.05] tracking-tight text-slate-950">
                Elegant Spaces.
                <br />
                Elevated Living.
              </h3>
              <p className="mt-4 max-w-[270px] text-sm leading-6 text-slate-600">
                A premium website concept for an interior business, built to
                create trust and enquiries.
              </p>
              <button className="mt-7 w-fit rounded-lg border border-slate-950 px-5 py-3 text-[11px] font-bold uppercase tracking-wide text-slate-950">
                Explore Projects
              </button>
            </div>

            <div className="relative overflow-hidden bg-[#ddd4c8]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.95),transparent_32%),linear-gradient(120deg,rgba(255,255,255,0.70),rgba(185,166,145,0.42))]" />
              <div className="absolute bottom-10 left-10 h-16 w-64 rounded-full bg-black/10 blur-xl" />
              <div className="absolute bottom-24 left-12 h-24 w-64 rounded-[32px] bg-[#e8dfd4] shadow-2xl" />
              <div className="absolute bottom-24 left-28 h-20 w-52 rounded-[30px] bg-[#d3c0ae]" />
              <div className="absolute bottom-24 right-12 h-32 w-20 rounded-t-full bg-[#c7ad94]" />
              <div className="absolute bottom-32 right-24 h-28 w-28 rounded-full border-[18px] border-[#bda890]" />
              <div className="absolute right-7 top-0 h-full w-24 bg-[repeating-linear-gradient(90deg,#9b836b_0px,#9b836b_4px,transparent_4px,transparent_13px)] opacity-30" />
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
                <p className="font-serif text-2xl font-semibold text-slate-950">
                  {item[0]}
                </p>
                <p className="mt-1 text-[10px] text-slate-500">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-7 right-16 hidden rounded-2xl border border-slate-200 bg-white/90 px-5 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.14)] backdrop-blur lg:block">
        <p className="text-sm font-semibold text-slate-950">Secure. Fast. Reliable.</p>
        <p className="mt-1 text-xs text-slate-500">
          Hosting, SSL and mobile-ready setup.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] text-slate-950">
      <section className="relative mx-auto max-w-[1500px] px-6 py-7 sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_28%,rgba(37,99,235,0.13),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_62%,#eef2f7_100%)]" />

        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
  <span className="font-serif text-3xl font-black tracking-[-0.16em] text-blue-950">
    WB
  </span>
  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#d4a64a]" />
</div>

<div>
  <p className="text-xl font-extrabold tracking-tight text-blue-950">
    Web Brothers Digital
  </p>
  <p className="hidden text-xs font-medium tracking-wide text-slate-500 sm:block">
    Founded by Anirudh & Anubhav
  </p>
</div>

        <div className="grid min-h-[650px] items-center gap-14 py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-[620px]">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-blue-950 shadow-sm">
              <span className="text-[#d4a64a]">✦</span>
              Modern Websites.
              <span className="text-blue-600">Real Results.</span>
            </div>

            <h1 className="font-serif text-[clamp(2.7rem,4.45vw,4.85rem)] font-bold leading-[1] tracking-[-0.052em] text-slate-950">
              We make local businesses look{" "}
              <span className="text-blue-600">premium</span> online.
            </h1>

            <p className="mt-7 max-w-[590px] text-lg leading-8 text-slate-600">
              We build modern, fast and SEO-ready websites with beautiful design,
              powerful backend, WhatsApp integration, Maps, and transparent
              hosting — everything your business needs to grow online.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Get Free Website Demo ↗
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-blue-950 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg"
              >
                ▶ View Our Work
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
              <Check>No Hidden Costs</Check>
              <Check>Transparent Hosting</Check>
              <Check>Approval Before Payment</Check>
            </div>
          </div>

          <PremiumMockup />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/85 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="grid divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">
            {stats.map((stat) => (
              <div key={stat.value} className="flex items-center gap-5 px-7 py-7">
               <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
  <stat.icon size={22} strokeWidth={2.2} />
</span>
                <div>
                  <p className="text-xl font-bold tracking-tight text-slate-950">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="font-serif text-5xl font-bold tracking-tight text-slate-950">
            Complete digital solutions for your business.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Everything required to make a business look trusted, modern and ready
            to receive customers online.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.1)]"
            >
           <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
  <service.icon size={28} strokeWidth={2} />
</div>
              <h3 className="mt-7 text-2xl font-bold tracking-tight text-slate-950">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {service.text}
              </p>
              <span className="mt-6 inline-flex text-2xl text-blue-600 transition group-hover:translate-x-1">
                →
              </span>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel>Demo Portfolio</SectionLabel>
            <h2 className="font-serif text-5xl font-bold tracking-tight text-slate-950">
              Websites that make businesses look premium.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              These are demo project directions we can create for local businesses
              before converting them into real client case studies.
            </p>
          </div>

          <a
            href="#contact"
            className="w-fit rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-blue-950 transition hover:border-blue-200 hover:shadow-lg"
          >
            Start Your Demo →
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {work.map((item, index) => (
            <article
              key={item.name}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.1)]"
            >
             <div className="relative mx-auto w-full max-w-[690px]">
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
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur">
                  <p className="text-sm text-white/70">{item.type}</p>
                  <h3 className="mt-1 text-2xl font-bold">{item.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-6 text-slate-600">{item.desc}</p>
                <button className="mt-5 font-semibold text-blue-600">
                  View Demo →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-8 rounded-[2rem] bg-blue-950 p-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)] lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div>
            <SectionLabel>Launch Offer</SectionLabel>
            <h2 className="font-serif text-5xl font-bold tracking-tight">
              First selected businesses get website development free.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-blue-100">
              We are building our first public portfolio. For selected local
              businesses, we will design and develop the website without charging
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
      </section>

      <section id="pricing" className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Transparent Hosting</SectionLabel>
          <h2 className="font-serif text-5xl font-bold tracking-tight text-slate-950">
            Simple pricing. No surprise charges.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Development is free for first selected businesses. Hosting/domain cost
            will be shown clearly before purchase.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Starter", "For simple business websites", "Approx. ₹2,000–₹4,000/year"],
            ["Business", "For growing local businesses", "Approx. ₹4,000–₹8,000/year"],
            ["Premium", "For advanced features", "Custom quote"],
          ].map((plan) => (
            <article
              key={plan[0]}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)]"
            >
              <h3 className="text-2xl font-bold text-slate-950">{plan[0]}</h3>
              <p className="mt-2 text-slate-500">{plan[1]}</p>
              <p className="mt-7 text-2xl font-bold leading-tight text-blue-600 md:text-3xl">
  {plan[2]}
</p>
              <div className="mt-7 space-y-3">
                <Check>Domain setup</Check>
                <Check>Hosting setup</Check>
                <Check>SSL support</Check>
                <Check>Basic maintenance option</Check>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_90px_rgba(15,23,42,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-serif text-5xl font-bold tracking-tight text-slate-950">
              Ready to make your business look premium online?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Send your business details. We will understand your business and
              prepare a website direction that fits your brand.
            </p>

            <div className="mt-8 rounded-3xl bg-slate-50 p-6">
              <p className="font-bold text-slate-950">Founded by Anirudh & Anubhav</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Built by two young founders focused on helping local businesses
                upgrade their digital presence with premium websites.
              </p>
            </div>
          </div>

          <form className="grid gap-4">
            {[
              "Name",
              "Business Name",
              "Phone Number",
              "Business Type",
              "City",
            ].map((field) => (
              <input
                key={field}
                placeholder={field}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-300 focus:bg-white"
              />
            ))}

            <textarea
              placeholder="Tell us what kind of website you need"
              rows={5}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-300 focus:bg-white"
            />

            <button
              type="button"
              className="rounded-2xl bg-blue-600 px-8 py-5 font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get Free Website Demo <ArrowRight size={18} className="ml-2" />
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-serif text-5xl font-bold tracking-tight text-slate-950">
            Clear answers before we start.
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <article
              key={faq.q}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.05)]"
            >
              <h3 className="text-xl font-bold text-slate-950">{faq.q}</h3>
              <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="mx-auto max-w-[1500px] px-6 pb-10 sm:px-10 lg:px-16">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white lg:p-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <p className="font-serif text-4xl font-black tracking-[-0.12em]">
                WB
              </p>
              <h3 className="mt-4 text-2xl font-bold">Web Brothers Digital</h3>
              <p className="mt-3 max-w-md text-slate-400">
                Premium websites for growing local businesses. Founded by
                Anirudh & Anubhav.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <p className="font-bold">Services</p>
                <div className="mt-4 space-y-2 text-sm text-slate-400">
                  <p>Business Websites</p>
                  <p>Backend Systems</p>
                  <p>WhatsApp Integration</p>
                </div>
              </div>

              <div>
                <p className="font-bold">Company</p>
                <div className="mt-4 space-y-2 text-sm text-slate-400">
                  <p>Work</p>
                  <p>Pricing</p>
                  <p>Contact</p>
                </div>
              </div>

              <div>
                <p className="font-bold">Start</p>
                <div className="mt-4 space-y-2 text-sm text-slate-400">
                  <p>Get Free Website Demo</p>
                  <p>WhatsApp Us</p>
                  <p>Book Consultation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
            © 2026 Web Brothers Digital. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
