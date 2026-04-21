"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { heroLine } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

const SLIDES = [
  "/assets/dining-luxury.png",
  "/assets/living-room-2.png",
  "/assets/master-bedroom-1.png",
  "/assets/dining-3.png",
  "/assets/bedroom-blue-3.png",
];

const INTERVAL = 4500;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* Slideshow backgrounds */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${SLIDES[current]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(13,13,13,0.45) 0%, rgba(13,13,13,0.62) 60%, rgba(13,13,13,0.82) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-8 w-full max-w-4xl mx-auto">
        <motion.h1
          custom={0}
          variants={heroLine}
          initial="hidden"
          animate="visible"
          className="font-normal text-[#F5F3EF] leading-[1.0] tracking-[0.04em] mb-6"
          style={{
            fontFamily: "var(--font-playfair, Georgia, serif)",
            fontSize: "clamp(3.5rem, 11vw, 8rem)",
          }}
        >
          Grandezza
        </motion.h1>

        <motion.p
          custom={1}
          variants={heroLine}
          initial="hidden"
          animate="visible"
          className="text-[#F5F3EF]/65 tracking-[0.18em] uppercase mb-14"
          style={{
            fontFamily: "var(--font-inter, sans-serif)",
            fontSize: "clamp(0.6rem, 1.4vw, 0.75rem)",
          }}
        >
          Luxury interiors, fully delivered
        </motion.p>

        <motion.div custom={2} variants={heroLine} initial="hidden" animate="visible">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-[#F5F3EF]/80 hover:text-[#C6A86B] transition-colors duration-400 text-[10px] sm:text-[11px] tracking-[0.3em] uppercase border-b border-[#F5F3EF]/25 hover:border-[#C6A86B] pb-1"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            Start your project <ArrowRight size={11} />
          </Link>
        </motion.div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all duration-500"
            style={{
              width: i === current ? "24px" : "6px",
              height: "2px",
              background: i === current ? "#C6A86B" : "rgba(245,243,239,0.3)",
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
