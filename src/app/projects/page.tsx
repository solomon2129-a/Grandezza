"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CTASection from "@/components/CTASection";
import AnimateIn from "@/components/AnimateIn";
import { scaleIn, staggerContainer } from "@/lib/animations";
import { PROJECTS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = ["All", "Complete Home", "Bedroom", "Living & Dining"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative flex items-end justify-start overflow-hidden" style={{ height: "65vh", minHeight: "480px" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/living-room-2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.2) 0%, rgba(13,13,13,0.8) 100%)" }} />

        {/* Vertical project count */}
        <div className="absolute right-10 bottom-20 hidden lg:flex flex-col items-center gap-3">
          <span
            className="text-[#C6A86B] font-normal"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "3.5rem", lineHeight: 1 }}
          >
            {PROJECTS.length}
          </span>
          <div className="w-px h-12 bg-[#C6A86B]/30" />
          <span
            className="vertical-text text-white/30 text-[8px] tracking-[0.4em] uppercase"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            Projects
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pb-20 w-full">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#C6A86B]" />
            <p className="text-[#C6A86B] text-[9px] tracking-[0.45em] uppercase" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>Portfolio</p>
          </div>
          <h1
            className="text-5xl md:text-7xl font-normal text-[#F5F3EF] leading-[1.0] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Our <span className="italic">Projects</span>
          </h1>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section style={{ background: "#F5F3EF" }} className="px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          <AnimateIn>
            <div className="flex flex-wrap gap-2 mb-16">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className="px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                    background: active === cat ? "#0D0D0D" : "transparent",
                    color: active === cat ? "#F5F3EF" : "#8A8580",
                    border: active === cat ? "1px solid #0D0D0D" : "1px solid #DDD9D2",
                  }}
                >
                  {cat}
                  {active === cat && (
                    <span className="ml-2 text-[#C6A86B]">
                      {filtered.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </AnimateIn>

          {/* Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={active}
          >
            <AnimatePresence mode="wait">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden h-[240px] sm:h-[320px] lg:h-[380px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Gradient */}
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(13,13,13,0.65) 0%, transparent 55%)" }}
                    />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-3 py-1 text-[8px] tracking-[0.25em] uppercase border border-white/25 text-white/80"
                        style={{
                          fontFamily: "var(--font-inter, sans-serif)",
                          background: "rgba(13,13,13,0.35)",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                    {/* Hover arrow */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-9 h-9 border border-[#C6A86B] flex items-center justify-center">
                        <ArrowUpRight size={13} className="text-[#C6A86B]" />
                      </div>
                    </div>
                    {/* Bottom info */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <span
                        className="text-[#C6A86B] text-[9px] tracking-[0.3em] uppercase block mb-1"
                        style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                      >
                        {project.location}
                      </span>
                      <h3
                        className="text-[#F5F3EF] text-xl font-normal"
                        style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  {/* Below image */}
                  <div className="py-4 border-b border-[#DDD9D2] group-hover:border-[#C6A86B] transition-colors duration-500">
                    <h3 className="text-[#0D0D0D] text-lg font-normal" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                      {project.title}
                    </h3>
                    <p className="text-[#8A8580] text-xs mt-0.5" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                      {project.category} · {project.location}
                    </p>
                  </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-[#8A8580] text-sm py-20" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
              No projects in this category.
            </p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
