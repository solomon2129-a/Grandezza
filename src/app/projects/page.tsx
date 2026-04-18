"use client";

import { useState } from "react";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { PROJECTS } from "@/lib/constants";

const CATEGORIES = ["All", "Residential", "Commercial", "Villas", "Offices"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end justify-start overflow-hidden">
        <div
          className="absolute inset-0 bg-[#1A1A1A]"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1800&q=85")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
          <p
            className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            Our Portfolio
          </p>
          <h1
            className="text-5xl md:text-7xl font-light text-white leading-tight"
            style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
          >
            Our Projects
          </h1>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="bg-[#FAF8F5] px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 text-[10px] tracking-[0.25em] uppercase font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-[#C9A84C] text-white"
                    : "border border-[#E8E0D5] text-[#6B6560] hover:border-[#C9A84C] hover:text-[#C9A84C]"
                }`}
                style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div key={project.id} className="group relative overflow-hidden cursor-pointer">
                <div className="relative h-[380px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span
                      className="text-[#C9A84C] text-[9px] tracking-[0.3em] uppercase mb-2"
                      style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                    >
                      {project.category} · {project.location}
                    </span>
                    <h3
                      className="text-white text-2xl font-light"
                      style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="py-5 border-b border-[#E8E0D5] group-hover:border-[#C9A84C] transition-colors duration-500">
                  <span
                    className="text-[#C9A84C] text-[9px] tracking-[0.3em] uppercase"
                    style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                  >
                    {project.category}
                  </span>
                  <h3
                    className="text-[#1A1A1A] text-xl font-light mt-1"
                    style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-[#6B6560] text-xs mt-1"
                    style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                  >
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p
                className="text-[#9E9890] text-sm"
                style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
              >
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
