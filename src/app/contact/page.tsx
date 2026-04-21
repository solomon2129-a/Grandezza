"use client";

import Image from "next/image";
import { Phone, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";
import { fadeUp } from "@/lib/animations";
import { COMPANY } from "@/lib/constants";

export default function ContactPage() {
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

      {/* ── GET IN TOUCH ──────────────────────────────────────── */}
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
        <div className="max-w-5xl mx-auto px-6 pb-16">
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
                  whileHover={{ scale: 1.1, rotate: 4 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 border border-[#C6A86B]/30 flex items-center justify-center mb-5 group-hover:border-[#C6A86B] transition-colors duration-300"
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

      {/* ── DIVIDER ───────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-[#1E1E1C]" />
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
                whileHover={{ y: -2 }}
                className="px-8 py-3 border border-[#1E1E1C] text-[#4A4A46] hover:border-[#C6A86B] hover:text-[#C6A86B] transition-all duration-300 text-[9px] tracking-[0.3em] uppercase"
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
