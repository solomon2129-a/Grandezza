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

export default function TestimonialCard({ name, role, quote, image, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      className="flex flex-col h-full p-9 border border-[#DDD9D2] hover:border-[#C6A86B] transition-colors duration-500"
      style={{ background: "#F5F3EF" }}
    >
      {/* Gold mark */}
      <span
        className="text-5xl leading-none text-[#C6A86B] font-normal mb-6 select-none"
        style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
      >
        &ldquo;
      </span>

      <p
        className="text-[#0D0D0D] text-base leading-[1.8] flex-1 mb-8 font-normal italic"
        style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "1.05rem" }}
      >
        {quote}
      </p>

      <div className="flex items-center gap-4 pt-6 border-t border-[#DDD9D2]">
        <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
          <Image src={image} alt={name} fill className="object-cover grayscale" sizes="44px" />
        </div>
        <div>
          <p
            className="text-[#0D0D0D] text-sm font-medium"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            {name}
          </p>
          <p
            className="text-[#C6A86B] text-[9px] tracking-[0.2em] uppercase mt-0.5"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
