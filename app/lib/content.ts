import type { ElementType } from "react";
import {
  CheckCircle2,
  Code2,
  Globe2,
  IndianRupee,
  MapPin,
  MessageCircle,
  PenTool,
  Rocket,
  Search,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Zap,
} from "lucide-react";

export type Stat = { value: string; label: string; icon: ElementType };
export type Service = { title: string; text: string; icon: ElementType };
export type Step = { step: string; title: string; text: string; icon: ElementType };
export type Work = { name: string; type: string; desc: string };
export type Plan = {
  name: string;
  tagline: string;
  price: string;
  featured?: boolean;
  features: string[];
};
export type Faq = { q: string; a: string };

export const stats: Stat[] = [
  { value: "7–10 Days", label: "Average delivery timeline", icon: Zap },
  { value: "100%", label: "Transparent hosting & pricing", icon: IndianRupee },
  { value: "Mobile-First", label: "Responsive on every device", icon: Smartphone },
  { value: "Approval First", label: "You approve before launch", icon: CheckCircle2 },
];

export const services: Service[] = [
  {
    title: "Business Websites",
    text: "Premium websites for shops, cafés, salons, gyms, coaching institutes and local brands.",
    icon: Globe2,
  },
  {
    title: "Backend Systems",
    text: "Lead forms, admin panels, dashboards and custom backend flows that actually work.",
    icon: ServerCog,
  },
  {
    title: "WhatsApp Integration",
    text: "Direct WhatsApp buttons so customers can reach you instantly, without confusion.",
    icon: MessageCircle,
  },
  {
    title: "Maps & Local SEO",
    text: "Google Maps, location sections and SEO-ready structure so customers find you.",
    icon: MapPin,
  },
  {
    title: "E-Commerce Setup",
    text: "Product catalogues, order flows and payment-ready storefronts for selling online.",
    icon: ShoppingBag,
  },
  {
    title: "Hosting & Maintenance",
    text: "Transparent hosting setup, SSL, updates and optional ongoing support after launch.",
    icon: ShieldCheck,
  },
];

export const steps: Step[] = [
  {
    step: "01",
    title: "Discovery",
    text: "We learn about your business, your customers and what you want the website to achieve.",
    icon: Search,
  },
  {
    step: "02",
    title: "Design",
    text: "We craft a premium, on-brand design concept and share it with you for feedback.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Build",
    text: "We develop a fast, mobile-first site with WhatsApp, Maps and a working contact system.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch",
    text: "After your approval, we set up domain, hosting & SSL and take your business live.",
    icon: Rocket,
  },
];

export const work: Work[] = [
  {
    name: "Urban Cafe",
    type: "Restaurant Website",
    desc: "Menu showcase, location, WhatsApp orders and premium brand design.",
  },
  {
    name: "Glow Salon",
    type: "Salon Website",
    desc: "Services, appointment CTA, gallery and a beauty-focused premium layout.",
  },
  {
    name: "FitZone Gym",
    type: "Fitness Website",
    desc: "Membership plans, trainer section, transformation gallery and enquiry form.",
  },
  {
    name: "Smart Tuition",
    type: "Coaching Website",
    desc: "Courses, admissions CTA, faculty cards and a student enquiry system.",
  },
];

export const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "For simple business websites",
    price: "≈ ₹2,000–₹4,000 / year",
    features: ["Domain setup", "Hosting setup", "SSL security", "Mobile-first design"],
  },
  {
    name: "Business",
    tagline: "For growing local businesses",
    price: "≈ ₹4,000–₹8,000 / year",
    featured: true,
    features: [
      "Everything in Starter",
      "WhatsApp + Maps integration",
      "Lead form to your inbox",
      "Basic maintenance option",
    ],
  },
  {
    name: "Premium",
    tagline: "For advanced features",
    price: "Custom quote",
    features: [
      "Everything in Business",
      "Backend / admin dashboard",
      "E-commerce / payments",
      "Priority support",
    ],
  },
];

export const faqs: Faq[] = [
  {
    q: "Do I need to pay before seeing the website?",
    a: "No. For selected first businesses we create and show the website concept first. You approve the work before moving ahead.",
  },
  {
    q: "What cost does the client pay?",
    a: "For the launch offer, development is free for selected businesses. You only pay the actual domain and hosting cost, shown to you transparently.",
  },
  {
    q: "Will the website work on mobile?",
    a: "Yes. Every website is built mobile-first, so it works perfectly on phones, tablets and laptops.",
  },
  {
    q: "Can you add WhatsApp and Google Maps?",
    a: "Absolutely. WhatsApp chat buttons, Google Maps, call buttons and working contact forms are all included.",
  },
  {
    q: "Do you work with businesses outside Dehradun & Moradabad?",
    a: "Yes. We're based in Dehradun and Moradabad but work with clients across India — everything is handled online.",
  },
];
