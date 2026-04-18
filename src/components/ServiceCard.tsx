"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  image,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group relative"
    >
      <Link href="/services" className="block">
        {/* Image container */}
        <div className="relative overflow-hidden h-[220px] sm:h-[260px] lg:h-[280px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(to top, rgba(13,13,13,0.6) 0%, transparent 60%)",
            }}
          />
          {/* Index number watermark */}
          <div className="absolute top-5 right-5">
            <span
              className="text-white/20 text-6xl font-normal leading-none select-none"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          {/* Bottom image label */}
          <div className="absolute bottom-5 left-5 right-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
            <span
              className="text-[#C6A86B] text-[9px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              View Service
            </span>
          </div>
        </div>

        {/* Content */}
        <div
          className="p-7 border-x border-b border-[#DDD9D2] group-hover:border-[#C6A86B] transition-colors duration-500 relative"
          style={{ background: "#F5F3EF" }}
        >
          {/* Gold top accent line */}
          <div
            className="absolute top-0 left-0 h-0.5 bg-[#C6A86B] transition-all duration-500"
            style={{ width: "0%", left: "0" }}
          />
          <div
            className="absolute top-0 left-0 h-0.5 bg-[#C6A86B] w-0 group-hover:w-full transition-all duration-500"
          />

          <div className="flex items-start justify-between gap-4 mb-3">
            <h3
              className="text-xl font-normal text-[#0D0D0D] leading-snug"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              {title}
            </h3>
            <div className="w-8 h-8 border border-[#DDD9D2] group-hover:border-[#C6A86B] group-hover:bg-[#C6A86B] flex items-center justify-center shrink-0 transition-all duration-300 mt-0.5">
              <ArrowUpRight
                size={13}
                className="text-[#8A8580] group-hover:text-white transition-colors duration-300"
              />
            </div>
          </div>
          <p
            className="text-[#8A8580] text-sm leading-6"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
