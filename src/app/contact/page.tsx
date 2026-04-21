import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MapPin, Mail } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import { fadeUp } from "@/lib/animations";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Grandezza",
  description:
    "Get in touch with Grandezza — luxury interior design and construction. Based in Mumbai.",
};

export default function ContactPage() {
  return (
    <div style={{ background: "#0D0D0D" }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ height: "55vh", minHeight: "380px" }}>
        <Image
          src="/assets/dining-luxury.png"
          alt="Contact Grandezza"
          fill priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "rgba(13,13,13,0.65)" }} />

        <div className="relative z-10 px-4 text-center">
          <div
            className="inline-block px-12 sm:px-20 py-5 sm:py-7 border border-[#F5F3EF]/70"
          >
            <h1
              className="font-normal text-[#F5F3EF] tracking-[0.22em] uppercase"
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "clamp(1.2rem, 3.5vw, 2.2rem)",
                letterSpacing: "0.22em",
              }}
            >
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH HEADING ──────────────────────────────── */}
      <AnimateIn variants={fadeUp}>
        <div className="text-center pt-16 pb-12 px-6">
          <p
            className="font-normal text-[#C6A86B] italic"
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
            }}
          >
            Get in touch with us!
          </p>
        </div>
      </AnimateIn>

      {/* ── THREE COLUMN CONTACT INFO ─────────────────────────── */}
      <AnimateIn variants={fadeUp} delay={0.1}>
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#F5F3EF]/10">

            {/* Phone */}
            <div className="flex flex-col items-center text-center px-8 py-10 group">
              <div
                className="w-12 h-12 border border-[#C6A86B]/40 flex items-center justify-center mb-5 group-hover:border-[#C6A86B] transition-colors duration-400"
              >
                <Phone size={18} className="text-[#C6A86B]" />
              </div>
              <p
                className="text-[#C6A86B] text-[9px] tracking-[0.4em] uppercase mb-4"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Phone
              </p>
              <a
                href={`tel:${COMPANY.phone}`}
                className="text-[#F5F3EF]/80 text-sm leading-7 hover:text-[#C6A86B] transition-colors duration-300"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                {COMPANY.phone}
              </a>
              <p
                className="text-[#F5F3EF]/30 text-[9px] tracking-[0.15em] mt-2"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Mon – Sat · 9 AM – 7 PM IST
              </p>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center text-center px-8 py-10 group">
              <div
                className="w-12 h-12 border border-[#C6A86B]/40 flex items-center justify-center mb-5 group-hover:border-[#C6A86B] transition-colors duration-400"
              >
                <MapPin size={18} className="text-[#C6A86B]" />
              </div>
              <p
                className="text-[#C6A86B] text-[9px] tracking-[0.4em] uppercase mb-4"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Address
              </p>
              <p
                className="text-[#F5F3EF]/80 text-sm leading-7"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                {COMPANY.address}
              </p>
              <p
                className="text-[#F5F3EF]/30 text-[9px] tracking-[0.15em] mt-2"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                By appointment only
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center px-8 py-10 group">
              <div
                className="w-12 h-12 border border-[#C6A86B]/40 flex items-center justify-center mb-5 group-hover:border-[#C6A86B] transition-colors duration-400"
              >
                <Mail size={18} className="text-[#C6A86B]" />
              </div>
              <p
                className="text-[#C6A86B] text-[9px] tracking-[0.4em] uppercase mb-4"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Email
              </p>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-[#F5F3EF]/80 text-sm leading-7 hover:text-[#C6A86B] transition-colors duration-300 break-all"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                {COMPANY.email}
              </a>
              <p
                className="text-[#F5F3EF]/30 text-[9px] tracking-[0.15em] mt-2"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Response within 24 hours
              </p>
            </div>

          </div>
        </div>
      </AnimateIn>

      {/* ── DIVIDER ───────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-[#F5F3EF]/8" />
      </div>

      {/* ── CONNECT WITH US ───────────────────────────────────── */}
      <AnimateIn variants={fadeUp} delay={0.15}>
        <div className="text-center py-14 px-6">
          <p
            className="font-normal text-[#C6A86B] italic mb-8"
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            }}
          >
            Connect with us!
          </p>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {[
              { label: "Instagram", href: COMPANY.instagram },
              { label: "LinkedIn", href: COMPANY.linkedin },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-[#F5F3EF]/15 hover:border-[#C6A86B] flex items-center justify-center text-[#F5F3EF]/50 hover:text-[#C6A86B] transition-colors duration-300 text-[8px] tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                {label.slice(0, 2)}
              </a>
            ))}
          </div>
          <p
            className="text-[#F5F3EF]/20 text-[8px] tracking-[0.35em] uppercase mt-10"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            A Sharieff Creations Co.
          </p>
        </div>
      </AnimateIn>

    </div>
  );
}
