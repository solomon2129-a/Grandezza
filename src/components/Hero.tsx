"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroLine } from "@/lib/animations";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Parallax image */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <Image
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1800&q=85"
          alt="Luxury interior"
          fill
          priority
          className="object-cover hero-zoom"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(13,13,13,0.45) 0%, rgba(13,13,13,0.6) 60%, rgba(13,13,13,0.85) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ opacity }}
      >
        {/* Eyebrow */}
        <motion.p
          custom={0}
          variants={heroLine}
          initial="hidden"
          animate="visible"
          className="text-[9px] tracking-[0.55em] uppercase text-[#C6A86B] mb-10"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          Grandezza · Backed by Sharieff Creations
        </motion.p>

        {/* Headline */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            custom={1}
            variants={heroLine}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl lg:text-[96px] font-normal text-[#F5F3EF] leading-[1.0] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            From Design to
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            custom={2}
            variants={heroLine}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl lg:text-[96px] font-normal italic text-[#F5F3EF] leading-[1.0] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Execution
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          custom={3}
          variants={heroLine}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl font-normal text-[#F5F3EF]/80 mb-5 tracking-wide"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          Luxury Spaces. Fully Delivered.
        </motion.p>

        {/* Supporting line */}
        <motion.p
          custom={4}
          variants={heroLine}
          initial="hidden"
          animate="visible"
          className="text-[10px] tracking-[0.35em] uppercase text-[#F5F3EF]/45 mb-14"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          30+ years legacy · 500+ skilled workforce
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={5}
          variants={heroLine}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-medium transition-all duration-300"
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
            Start Your Project
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        custom={6}
        variants={heroLine}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#F5F3EF]/30" />
        <span
          className="text-[#F5F3EF]/35 text-[8px] tracking-[0.4em] uppercase"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
