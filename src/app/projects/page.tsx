"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CTASection from "@/components/CTASection";
import AnimateIn from "@/components/AnimateIn";
import { PROJECTS } from "@/lib/constants";
import { scaleIn, staggerContainer } from "@/lib/animations";

const CATEGORIES = ["All", "Residential", "Commercial", "Villas", "Offices"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      {/* PAGE HERO */}
      <section
        className="relative flex items-end justify-start overflow-hidden"
        style={{ height: "60vh", minHeight: "460px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1800&q=85')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.75) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pb-20 w-full">
          <p
            className="text-[#C6A86B] text-[9px] tracking-[0.45em] uppercase mb-4"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            Portfolio
          </p>
          <h1
            className="text-5xl md:text-7xl font-normal text-[#F5F3EF] leading-[1.0] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Our Projects
          </h1>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section style={{ background: "#F5F3EF" }} className="px-6 lg:px-16 py-28">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
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
                </button>
              ))}
            </div>
          </AnimateIn>

          {/* Projects Grid */}
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
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden" style={{ height: "380px" }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 transition-all duration-500"
                      style={{ background: "rgba(13,13,13,0)" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLDivElement).style.background =
                          "rgba(13,13,13,0.5)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLDivElement).style.background =
                          "rgba(13,13,13,0)")
                      }
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-7 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span
                        className="text-[#C6A86B] text-[9px] tracking-[0.3em] uppercase mb-2"
                        style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                      >
                        {project.category} · {project.location}
                      </span>
                      <h3
                        className="text-[#F5F3EF] text-2xl font-normal"
                        style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div
                    className="py-5 border-b border-[#DDD9D2] group-hover:border-[#C6A86B] transition-colors duration-500"
                  >
                    <span
                      className="text-[#C6A86B] text-[9px] tracking-[0.3em] uppercase"
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      {project.category}
                    </span>
                    <h3
                      className="text-[#0D0D0D] text-xl font-normal mt-1"
                      style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-[#8A8580] text-xs mt-1"
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      {project.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p
              className="text-center text-[#8A8580] text-sm py-20"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              No projects in this category.
            </p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
