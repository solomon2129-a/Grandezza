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

export default function ServiceCard({ title, description, image, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group"
    >
      <Link href="/services" className="block">
        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: "260px" }}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-[#0D0D0D]/10 group-hover:bg-[#0D0D0D]/25 transition-colors duration-500" />
        </div>

        {/* Content */}
        <div
          className="p-7 border-x border-b group-hover:border-[#C6A86B] transition-colors duration-500"
          style={{ background: "#F5F3EF", borderColor: "#DDD9D2" }}
        >
          <div className="flex items-start justify-between gap-4">
            <h3
              className="text-xl font-normal text-[#0D0D0D] leading-snug"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              {title}
            </h3>
            <ArrowUpRight
              size={16}
              className="text-[#C6A86B] shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <p
            className="mt-3 text-[#8A8580] text-sm leading-6"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
