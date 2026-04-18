"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
  index?: number;
}

export default function TestimonialCard({
  name,
  role,
  quote,
  image,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      className="group relative flex flex-col h-full"
      style={{ background: "#F5F3EF" }}
    >
      {/* Top gold accent */}
      <div
        className="h-px w-12 bg-[#C6A86B] mb-8 group-hover:w-full transition-all duration-700"
      />

      {/* Large decorative quote mark */}
      <div className="relative mb-4">
        <span
          className="absolute -top-2 -left-1 text-[120px] leading-none text-[#C6A86B]/10 select-none font-normal"
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
        className="text-[#0D0D0D] leading-[1.85] flex-1 mb-8 italic"
        style={{
          fontFamily: "var(--font-playfair, Georgia, serif)",
          fontSize: "1.05rem",
        }}
      >
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-[#DDD9D2]">
        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 ring-1 ring-[#C6A86B]/30 group-hover:ring-[#C6A86B] transition-all duration-300">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            sizes="48px"
          />
        </div>
        <div>
          <p
            className="text-[#0D0D0D] text-sm font-medium"
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
