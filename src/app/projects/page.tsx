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
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,6,6,0.2) 0%, rgba(6,6,6,0.85) 100%)" }} />

        <div className="absolute right-10 bottom-20 hidden lg:flex flex-col items-center gap-3">
          <span
            className="text-[#C6A86B] font-normal"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "3.5rem", lineHeight: 1 }}
          >
            {PROJECTS.length}
          </span>
          <div className="w-px h-12 bg-[#C6A86B]/30" />
          <span
            className="vertical-text text-white/25 text-[8px] tracking-[0.4em] uppercase"
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
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#F0EDE8] leading-[1.0] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Our <span className="italic">Projects</span>
          </h1>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section style={{ background: "#080808" }} className="px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto">

          {/* Filter tabs — animated pill indicator */}
          <AnimateIn>
            <div className="flex flex-wrap items-center gap-0 mb-16 border-b border-[#1A1A18]">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className="relative px-6 py-4 text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-300 group"
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                    color: active === cat ? "#C6A86B" : "#3A3733",
                  }}
                >
                  {cat}
                  {active === cat && (
                    <motion.div
                      layoutId="filter-indicator"
                      className="absolute bottom-0 left-0 right-0 h-px bg-[#C6A86B]"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span
                    className="ml-2 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "#C6A86B" }}
                  >
                    {cat === "All" ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length}
                  </span>
                </button>
              ))}

              {/* Active count */}
              <div className="ml-auto pb-4 pr-1 hidden sm:block">
                <motion.span
                  key={filtered.length}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[#3A3733] text-[9px] tracking-[0.25em] uppercase"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  {filtered.length} {filtered.length === 1 ? "project" : "projects"}
                </motion.span>
              </div>
            </div>
          </AnimateIn>

          {/* Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: "#1A1A18" }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={active}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95 }}
                  layout
                  style={{ background: "#080808" }}
                >
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <div className="relative overflow-hidden h-[260px] sm:h-[320px] lg:h-[380px]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Base gradient */}
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(6,6,6,0.75) 0%, rgba(6,6,6,0.05) 50%)" }}
                      />

                      {/* Hover overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: "rgba(198,168,107,0.06)" }}
                      />

                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="px-3 py-1 text-[8px] tracking-[0.25em] uppercase border border-white/20 text-white/75"
                          style={{
                            fontFamily: "var(--font-inter, sans-serif)",
                            background: "rgba(6,6,6,0.4)",
                            backdropFilter: "blur(4px)",
                          }}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Year tag — reveals on hover */}
                      <div
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                      >
                        <span
                          className="text-[#C6A86B]/70 text-[9px] tracking-[0.2em]"
                          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                        >
                          {project.year}
                        </span>
                      </div>

                      {/* Arrow icon */}
                      <div
                        className="absolute top-1/2 right-6 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-400 scale-90 group-hover:scale-100"
                      >
                        <div className="w-10 h-10 border border-[#C6A86B] flex items-center justify-center">
                          <ArrowUpRight size={14} className="text-[#C6A86B]" />
                        </div>
                      </div>

                      {/* Bottom info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span
                          className="text-[#C6A86B] text-[9px] tracking-[0.3em] uppercase block mb-1.5"
                          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                        >
                          {project.location}
                        </span>
                        <h3
                          className="text-[#F0EDE8] text-xl font-normal leading-tight"
                          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                        >
                          {project.title}
                        </h3>
                        {/* Area — reveals on hover */}
                        <p
                          className="text-[#F0EDE8]/30 text-[9px] tracking-[0.15em] uppercase mt-1.5 max-h-0 overflow-hidden group-hover:max-h-8 transition-all duration-400"
                          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                        >
                          {project.area}
                        </p>
                      </div>
                    </div>

                    {/* Below image */}
                    <div className="py-4 px-1 border-b border-[#1A1A18] group-hover:border-[#C6A86B]/30 transition-colors duration-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-[#F0EDE8] text-base font-normal" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                            {project.title}
                          </h3>
                          <p className="text-[#3A3733] text-xs mt-0.5" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                            {project.category} · {project.location}
                          </p>
                        </div>
                        <ArrowUpRight
                          size={14}
                          className="text-[#3A3733] group-hover:text-[#C6A86B] transition-colors duration-300 shrink-0"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-[#3A3733] text-sm py-20"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              No projects in this category.
            </motion.p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
