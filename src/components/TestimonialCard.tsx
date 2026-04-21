"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  initials: string;
  index?: number;
}

export default function TestimonialCard({
  name,
  role,
  quote,
  initials,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      className="group relative flex flex-col h-full p-8 border border-[#1A1A18] hover:border-[#C6A86B]/40 transition-colors duration-500"
      style={{ background: "#0C0C0C" }}
    >
      {/* Top gold accent */}
      <div className="h-px w-12 bg-[#C6A86B] mb-8 group-hover:w-full transition-all duration-700" />

      {/* Large decorative quote mark */}
      <div className="relative mb-4">
        <span
          className="absolute -top-2 -left-1 text-[120px] leading-none text-[#C6A86B]/[0.06] select-none font-normal"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <span
          className="relative text-3xl leading-none text-[#C6A86B] font-normal"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          &ldquo;
        </span>
      </div>

      {/* Quote text */}
      <p
        className="text-[#9A9590] leading-[1.85] flex-1 mb-8 italic"
        style={{
          fontFamily: "var(--font-playfair, Georgia, serif)",
          fontSize: "1.05rem",
        }}
      >
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-[#1A1A18]">
        <div
          className="w-12 h-12 shrink-0 flex items-center justify-center ring-1 ring-[#C6A86B]/30 group-hover:ring-[#C6A86B] transition-all duration-300"
          style={{ background: "#161614" }}
        >
          <span
            className="text-[#C6A86B] text-sm font-normal"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            {initials}
          </span>
        </div>
        <div>
          <p
            className="text-[#F0EDE8] text-sm font-medium"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            {name}
          </p>
          <p
            className="text-[#C6A86B] text-[9px] tracking-[0.25em] uppercase mt-0.5"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
