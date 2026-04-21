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
      className="relative py-24 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #C6A86B30, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #C6A86B30, transparent)" }} />

      <motion.div
        className="relative max-w-2xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.p
          variants={fadeUp}
          className="text-[9px] tracking-[0.45em] uppercase text-[#C6A86B] mb-6"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          Let&apos;s Create Something Extraordinary
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-[3.2rem] font-normal text-[#F0EDE8] leading-[1.05] tracking-[-0.02em] mb-5"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          {title}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-[#6B6560] text-sm leading-7 mb-10"
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
              color: "#080808",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#F0EDE8";
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
