"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  image: string;
  index?: number;
}

export default function ProjectCard({ title, category, location, image, index = 0 }: ProjectCardProps) {
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
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#0D0D0D]/0 group-hover:bg-[#0D0D0D]/55 transition-all duration-500" />
        <div className="absolute inset-0 flex flex-col justify-end p-7 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0" style={{ transitionDuration: "400ms" }}>
          <span
            className="text-[#C6A86B] text-[9px] tracking-[0.3em] uppercase mb-2"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            {category} · {location}
          </span>
          <h3
            className="text-[#F5F3EF] text-xl font-normal"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Below */}
      <div
        className="py-5 border-b group-hover:border-[#C6A86B] transition-colors duration-500"
        style={{ borderColor: "#DDD9D2" }}
      >
        <span
          className="text-[#C6A86B] text-[9px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          {category}
        </span>
        <h3
          className="text-[#0D0D0D] text-lg font-normal mt-1"
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
