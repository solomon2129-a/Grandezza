"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroLine } from "@/lib/animations";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* Parallax image */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <Image
          src="/assets/dining-luxury.png"
          alt="Luxury interior"
          fill
          priority
          className="object-cover hero-zoom"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(13,13,13,0.4) 0%, rgba(13,13,13,0.58) 60%, rgba(13,13,13,0.82) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-5 sm:px-8 w-full max-w-5xl mx-auto"
        style={{ opacity }}
      >
        <motion.p
          custom={0}
          variants={heroLine}
          initial="hidden"
          animate="visible"
          className="text-[8px] sm:text-[9px] tracking-[0.45em] sm:tracking-[0.55em] uppercase text-[#C6A86B] mb-6 sm:mb-10"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          Grandezza · Backed by Sharieff Creations
        </motion.p>

        <div className="overflow-hidden mb-2 sm:mb-4">
          <motion.h1
            custom={1}
            variants={heroLine}
            initial="hidden"
            animate="visible"
            className="font-normal text-[#F5F3EF] leading-[1.0] tracking-[-0.025em]"
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(2.4rem, 8vw, 6.5rem)",
            }}
          >
            From Design to
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6 sm:mb-10">
          <motion.h1
            custom={2}
            variants={heroLine}
            initial="hidden"
            animate="visible"
            className="font-normal italic text-[#F5F3EF] leading-[1.0] tracking-[-0.025em]"
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(2.4rem, 8vw, 6.5rem)",
            }}
          >
            Execution
          </motion.h1>
        </div>

        <motion.p
          custom={3}
          variants={heroLine}
          initial="hidden"
          animate="visible"
          className="font-normal text-[#F5F3EF]/80 mb-3 sm:mb-5 tracking-wide"
          style={{
            fontFamily: "var(--font-playfair, Georgia, serif)",
            fontSize: "clamp(1rem, 3vw, 1.5rem)",
          }}
        >
          Luxury Spaces. Fully Delivered.
        </motion.p>

        <motion.p
          custom={4}
          variants={heroLine}
          initial="hidden"
          animate="visible"
          className="text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.35em] uppercase text-[#F5F3EF]/40 mb-10 sm:mb-14"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          30+ years legacy · 500+ skilled workforce
        </motion.p>

        <motion.div custom={5} variants={heroLine} initial="hidden" animate="visible">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-7 sm:px-10 py-3.5 sm:py-4 text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-medium transition-all duration-300"
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

      {/* Scroll indicator */}
      <motion.div
        custom={6}
        variants={heroLine}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#F5F3EF]/30" />
        <span
          className="text-[#F5F3EF]/30 text-[7px] tracking-[0.4em] uppercase"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
