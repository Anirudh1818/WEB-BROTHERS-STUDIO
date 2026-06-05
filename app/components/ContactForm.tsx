"use client";

import { useActionState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { submitLead, type LeadState } from "@/app/actions";
import { site, waLink } from "@/app/lib/site";

const initialState: LeadState = { ok: false, message: "" };

const fields = [
  { name: "name", label: "Your Name", type: "text", placeholder: "e.g. Rahul Sharma", required: true },
  { name: "business", label: "Business Name", type: "text", placeholder: "e.g. Sharma Sweets", required: true },
  { name: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "e.g. +91 98xxxxxxxx", required: true },
  { name: "email", label: "Email (optional)", type: "email", placeholder: "you@email.com", required: false },
  { name: "city", label: "City (optional)", type: "text", placeholder: "e.g. Dehradun", required: false },
] as const;

const inputClass =
  "w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-ink outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitLead, initialState);

  if (state.ok) {
    const wa = waLink(site.primaryPhone, state.waText ?? site.defaultWhatsAppMessage);
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-emerald-100 bg-emerald-50/60 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 size={34} />
        </span>
        <h3 className="mt-6 font-serif text-3xl font-bold text-ink">Enquiry received 🎉</h3>
        <p className="mt-3 max-w-sm leading-7 text-slate-600">{state.message}</p>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-7 py-4 font-semibold text-white shadow-[0_14px_40px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5"
        >
          <MessageCircle size={20} />
          Send it on WhatsApp now
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-4">
      {fields.map((f) => (
        <div key={f.name}>
          <label htmlFor={f.name} className="mb-1.5 block text-sm font-semibold text-slate-700">
            {f.label}
          </label>
          <input
            id={f.name}
            name={f.name}
            type={f.type}
            placeholder={f.placeholder}
            required={f.required}
            aria-invalid={Boolean(state.errors?.[f.name])}
            className={inputClass}
          />
          {state.errors?.[f.name] && (
            <p className="mt-1.5 text-sm font-medium text-red-600">{state.errors[f.name]}</p>
          )}
        </div>
      ))}

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-slate-700">
          What kind of website do you need?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a little about your business and what you'd like…"
          className={inputClass}
        />
      </div>

      {state.message && !state.ok && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600" aria-live="polite">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? (
          "Sending…"
        ) : (
          <>
            Get Free Website Demo
            <ArrowRight size={18} />
          </>
        )}
      </button>

      <p className="text-xs text-slate-400">
        No spam — your details are only used to contact you about your website.
      </p>
    </form>
  );
}
