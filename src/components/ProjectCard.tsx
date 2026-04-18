"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  image: string;
  index?: number;
}

export default function ProjectCard({
  title,
  category,
  location,
  image,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "340px" }}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {/* Gradient */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 55%)",
            opacity: 0.5,
          }}
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-7"
          style={{ background: "rgba(13,13,13,0.55)" }}
        >
          <span
            className="text-[#C6A86B] text-[9px] tracking-[0.35em] uppercase mb-2"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            {category} · {location}
          </span>
          <div className="flex items-end justify-between">
            <h3
              className="text-[#F5F3EF] text-xl font-normal leading-tight"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              {title}
            </h3>
            <div className="w-9 h-9 border border-[#C6A86B] flex items-center justify-center shrink-0 ml-3">
              <ArrowUpRight size={14} className="text-[#C6A86B]" />
            </div>
          </div>
        </div>

        {/* Always-visible category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 text-[8px] tracking-[0.25em] uppercase border border-white/30 text-white/80 backdrop-blur-sm"
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              background: "rgba(13,13,13,0.3)",
            }}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Below image */}
      <div
        className="py-5 border-b border-[#DDD9D2] group-hover:border-[#C6A86B] transition-colors duration-500"
      >
        <h3
          className="text-[#0D0D0D] text-lg font-normal"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          {title}
        </h3>
        <p
          className="text-[#8A8580] text-xs mt-1"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          {location}
        </p>
      </div>
    </motion.div>
  );
}
