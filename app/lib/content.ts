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
  oldPrice?: string;
  offer?: string;
  featured?: boolean;
  custom?: boolean;
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
    name: "Basic",
    tagline: "A clean, professional website to get your business online.",
    price: "₹8,000",
    oldPrice: "₹10,000",
    offer: "Launch price · first 100 customers",
    features: [
      "Premium single-page website",
      "Mobile-first responsive design",
      "WhatsApp & call buttons",
      "Contact form + Google Maps",
      "Domain & hosting setup help",
    ],
  },
  {
    name: "Premium",
    tagline: "Top-notch website with a full custom backend & features.",
    price: "₹15,000",
    oldPrice: "₹18,000",
    offer: "Launch price · first 100 customers",
    featured: true,
    features: [
      "Everything in Basic",
      "Advanced custom design (frontend)",
      "Backend / admin dashboard",
      "Lead management + email alerts",
      "E-commerce / payments ready",
      "Priority support",
    ],
  },
  {
    name: "Custom",
    tagline: "Build exactly the website you imagine.",
    price: "Let's talk",
    custom: true,
    features: [
      "Fully customised to your needs",
      "Any feature, any complexity",
      "Design your own website with us",
      "Tailored quote after a quick chat",
    ],
  },
];

export const faqs: Faq[] = [
  {
    q: "Do I need to pay before seeing the website?",
    a: "No. For selected first businesses we create and show the website concept first. You approve the work before moving ahead.",
  },
  {
    q: "How much does a website cost?",
    a: "Basic is ₹8,000 (special launch price for our first 100 customers — normally ₹10,000) and Premium is ₹15,000 (launch price — normally ₹18,000). Need something unique? Our Custom plan is quoted after a quick chat. Domain and hosting are charged separately at actual cost and always shown upfront.",
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
