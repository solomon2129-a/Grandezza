"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = "Ready to Begin?",
  subtitle = "Tell us about your project. We'll handle the rest.",
  buttonText = "Book a Consultation",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section
      className="relative py-36 overflow-hidden"
      style={{ background: "#0D0D0D" }}
    >
      {/* Subtle gold horizontal lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #C6A86B40, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #C6A86B40, transparent)" }} />

      <motion.div
        className="relative max-w-3xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.p
          variants={fadeUp}
          className="text-[9px] tracking-[0.45em] uppercase text-[#C6A86B] mb-8"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          Let&apos;s Create Something Extraordinary
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-5xl md:text-7xl font-normal text-[#F5F3EF] leading-[1.05] tracking-[-0.02em] mb-6"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          {title}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-[#6B6560] text-sm leading-7 mb-12"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          {subtitle}
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-3 px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-medium transition-all duration-300 hover:gap-5"
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              background: "#C6A86B",
              color: "#0D0D0D",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#F5F3EF";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#C6A86B";
            }}
          >
            {buttonText}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
