"use client";

import Image from "next/image";
import { Phone, MapPin, Mail, ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";
import { fadeUp, fadeLeft, fadeRight } from "@/lib/animations";
import { COMPANY } from "@/lib/constants";

const PROJECT_TYPES = [
  "Complete Home",
  "Bedroom",
  "Living & Dining",
  "Kitchen",
  "Office / Commercial",
  "Renovation",
  "Custom Furniture",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  type: string;
  budget: string;
  message: string;
}

function FloatingInput({
  label,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className="w-full bg-transparent outline-none text-[#F0EDE8] text-sm pt-6 pb-2 border-b transition-colors duration-300"
        style={{
          fontFamily: "var(--font-inter, sans-serif)",
          borderColor: focused ? "#C6A86B" : "#1E1E1C",
        }}
      />
      <label
        className="absolute left-0 transition-all duration-300 pointer-events-none"
        style={{
          fontFamily: "var(--font-inter, sans-serif)",
          top: lifted ? "2px" : "18px",
          fontSize: lifted ? "8px" : "12px",
          letterSpacing: lifted ? "0.25em" : "0.1em",
          textTransform: "uppercase",
          color: focused ? "#C6A86B" : lifted ? "#C6A86B" : "#3A3733",
        }}
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;
  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={4}
        className="w-full bg-transparent outline-none text-[#F0EDE8] text-sm pt-6 pb-2 border-b resize-none transition-colors duration-300"
        style={{
          fontFamily: "var(--font-inter, sans-serif)",
          borderColor: focused ? "#C6A86B" : "#1E1E1C",
        }}
      />
      <label
        className="absolute left-0 transition-all duration-300 pointer-events-none"
        style={{
          fontFamily: "var(--font-inter, sans-serif)",
          top: lifted ? "2px" : "18px",
          fontSize: lifted ? "8px" : "12px",
          letterSpacing: lifted ? "0.25em" : "0.1em",
          textTransform: "uppercase",
          color: focused ? "#C6A86B" : lifted ? "#C6A86B" : "#3A3733",
        }}
      >
        {label}
      </label>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", type: "", budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (key: keyof FormState) => (v: string) => setForm((f) => ({ ...f, [key]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div style={{ background: "#080808" }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ height: "55vh", minHeight: "380px" }}>
        <Image
          src="/assets/dining-luxury.png"
          alt="Contact Grandezza"
          fill priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "rgba(6,6,6,0.7)" }} />

        <div className="relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block px-12 sm:px-20 py-5 sm:py-7 border border-[#F0EDE8]/30 hover:border-[#C6A86B]/60 transition-colors duration-500"
          >
            <h1
              className="font-normal text-[#F0EDE8] tracking-[0.22em] uppercase"
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "clamp(1.2rem, 3.5vw, 2.2rem)",
                letterSpacing: "0.22em",
              }}
            >
              Contact Us
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── THREE COLUMN CONTACT INFO ─────────────────────────── */}
      <AnimateIn variants={fadeUp} delay={0.1}>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#1E1E1C]">

            {[
              {
                icon: Phone,
                label: "Phone",
                value: COMPANY.phone,
                sub: "Mon – Sat · 9 AM – 7 PM IST",
                href: `tel:${COMPANY.phone}`,
              },
              {
                icon: MapPin,
                label: "Address",
                value: COMPANY.address,
                sub: "By appointment only",
                href: undefined,
              },
              {
                icon: Mail,
                label: "Email",
                value: COMPANY.email,
                sub: "Response within 24 hours",
                href: `mailto:${COMPANY.email}`,
              },
            ].map(({ icon: Icon, label, value, sub, href }) => (
              <div key={label} className="flex flex-col items-center text-center px-8 py-10 group">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 border border-[#C6A86B]/30 flex items-center justify-center mb-5 group-hover:border-[#C6A86B] transition-colors duration-400"
                >
                  <Icon size={20} className="text-[#C6A86B]" />
                </motion.div>
                <p
                  className="text-[#C6A86B] text-[9px] tracking-[0.4em] uppercase mb-4"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="text-[#F0EDE8]/75 text-sm leading-7 hover:text-[#C6A86B] transition-colors duration-300 break-all"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    {value}
                  </a>
                ) : (
                  <p
                    className="text-[#F0EDE8]/75 text-sm leading-7"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    {value}
                  </p>
                )}
                <p
                  className="text-[#2A2A26] text-[9px] tracking-[0.15em] mt-2"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* ── ENQUIRY FORM ──────────────────────────────────────── */}
      <section style={{ background: "#060606" }} className="px-5 sm:px-8 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: Info panel */}
            <AnimateIn variants={fadeLeft}>
              <div
                className="relative overflow-hidden px-8 sm:px-12 lg:px-20 py-20 lg:py-28 flex flex-col justify-between min-h-[500px]"
                style={{ background: "#0A0A0A" }}
              >
                {/* Watermark */}
                <div className="absolute inset-0 flex items-end justify-start overflow-hidden pointer-events-none select-none" aria-hidden="true">
                  <span
                    className="text-white/[0.02] font-normal leading-none"
                    style={{ fontFamily: "var(--font-playfair)", fontSize: "12rem" }}
                  >
                    G
                  </span>
                </div>

                <div className="relative">
                  <div className="w-px h-12 bg-[#C6A86B]/40 mb-8" />
                  <p
                    className="text-[9px] tracking-[0.5em] uppercase text-[#C6A86B] mb-6"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    Let&apos;s Create Together
                  </p>
                  <h2
                    className="font-normal text-[#F0EDE8] leading-[1.1] tracking-[-0.02em] mb-8"
                    style={{
                      fontFamily: "var(--font-playfair, Georgia, serif)",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                    }}
                  >
                    Tell us about your <span className="italic text-[#C6A86B]">dream space</span>
                  </h2>
                  <p
                    className="text-[#4A4A46] text-sm leading-7"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    Our team typically responds within 24 hours. For urgent enquiries, call us directly.
                  </p>
                </div>

                {/* Bottom fact list */}
                <div className="relative space-y-4 mt-12">
                  {[
                    "Free initial consultation",
                    "No obligation quote",
                    "Response within 24 hours",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 bg-[#C6A86B] shrink-0" />
                      <span
                        className="text-[#6B6560] text-xs tracking-[0.1em]"
                        style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* Right: Form */}
            <AnimateIn variants={fadeRight}>
              <div className="px-8 sm:px-12 lg:px-16 py-20 lg:py-28">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-16"
                  >
                    <div className="w-16 h-16 border border-[#C6A86B] flex items-center justify-center mb-8">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l5 5L19 7" stroke="#C6A86B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-[9px] tracking-[0.5em] uppercase text-[#C6A86B] mb-4" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                      Enquiry Sent
                    </p>
                    <h3
                      className="text-3xl font-normal text-[#F0EDE8] mb-4"
                      style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                    >
                      Thank you
                    </h3>
                    <p className="text-[#6B6560] text-sm leading-7" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                      We&apos;ll be in touch within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <p
                      className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-10"
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      Enquiry Form
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <FloatingInput label="Your Name" value={form.name} onChange={set("name")} required />
                      <FloatingInput label="Email Address" type="email" value={form.email} onChange={set("email")} required />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <FloatingInput label="Phone Number" type="tel" value={form.phone} onChange={set("phone")} />
                      <div className="relative">
                        <select
                          value={form.type}
                          onChange={(e) => set("type")(e.target.value)}
                          className="w-full bg-transparent outline-none text-sm pt-6 pb-2 border-b border-[#1E1E1C] transition-colors duration-300 appearance-none cursor-pointer hover:border-[#C6A86B]"
                          style={{
                            fontFamily: "var(--font-inter, sans-serif)",
                            color: form.type ? "#F0EDE8" : "#3A3733",
                          }}
                        >
                          <option value="" disabled style={{ background: "#0A0A0A" }}>Project Type</option>
                          {PROJECT_TYPES.map((t) => (
                            <option key={t} value={t} style={{ background: "#0A0A0A", color: "#F0EDE8" }}>{t}</option>
                          ))}
                        </select>
                        <label
                          className="absolute left-0 top-0.5 pointer-events-none"
                          style={{
                            fontFamily: "var(--font-inter, sans-serif)",
                            fontSize: "8px",
                            letterSpacing: "0.25em",
                            textTransform: "uppercase",
                            color: form.type ? "#C6A86B" : "#3A3733",
                          }}
                        >
                          Project Type
                        </label>
                        <div className="absolute right-0 bottom-3 pointer-events-none">
                          <ArrowRight size={10} className="text-[#C6A86B] rotate-90" />
                        </div>
                      </div>
                    </div>

                    <FloatingInput label="Approximate Budget (optional)" value={form.budget} onChange={set("budget")} />

                    <FloatingTextarea label="Tell us about your project" value={form.message} onChange={set("message")} />

                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{ gap: "20px" }}
                      className="inline-flex items-center gap-3 px-10 py-4 text-[10px] tracking-[0.3em] uppercase font-medium transition-all duration-300 mt-4 disabled:opacity-60"
                      style={{
                        fontFamily: "var(--font-inter, sans-serif)",
                        background: "#C6A86B",
                        color: "#080808",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#F0EDE8"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#C6A86B"; }}
                    >
                      {submitting ? (
                        <>
                          <span>Sending</span>
                          <span className="inline-block w-3 h-3 border border-[#080808]/40 border-t-[#080808] rounded-full animate-spin" />
                        </>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <Send size={12} />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CONNECT ───────────────────────────────────────────── */}
      <AnimateIn variants={fadeUp} delay={0.1}>
        <div className="text-center py-16 px-6">
          <p
            className="font-normal text-[#C6A86B] italic mb-8"
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            }}
          >
            Connect with us
          </p>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {[
              { label: "Instagram", href: COMPANY.instagram },
              { label: "LinkedIn", href: COMPANY.linkedin },
            ].map(({ label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ borderColor: "#C6A86B", color: "#C6A86B", y: -2 }}
                className="px-8 py-3 border border-[#1E1E1C] text-[#4A4A46] transition-colors duration-300 text-[9px] tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                {label}
              </motion.a>
            ))}
          </div>
          <p
            className="text-[#1E1E1C] text-[8px] tracking-[0.35em] uppercase mt-10"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            A Sharieff Creations Co.
          </p>
        </div>
      </AnimateIn>

    </div>
  );
}
