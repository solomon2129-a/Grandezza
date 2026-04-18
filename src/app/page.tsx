import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import GoldDivider from "@/components/GoldDivider";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import SectionWrapper from "@/components/SectionWrapper";
import AnimateIn from "@/components/AnimateIn";
import { fadeLeft, fadeRight, fadeUp } from "@/lib/animations";
import {
  STATS,
  SERVICES,
  PROCESS_STEPS,
  PROJECTS,
  TESTIMONIALS,
  WHY_US,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <Hero />

      {/* ─── MARQUEE TICKER ─── */}
      <Marquee />

      {/* ─── STATS ─── */}
      <section className="relative grain" style={{ background: "#0D0D0D" }}>
        {/* Large decorative watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none"
          aria-hidden="true"
        >
          <span
            className="text-white/[0.02] font-normal leading-none whitespace-nowrap"
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(6rem, 20vw, 18rem)",
            }}
          >
            GRANDEZZA
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {STATS.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 0.12}>
                <div className="relative text-center px-6 py-10 lg:py-12 group">
                  {/* Top gold line that grows on hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-px bg-[#C6A86B] group-hover:w-full transition-all duration-700" />
                  <p
                    className="font-normal text-[#C6A86B] mb-3 leading-none"
                    style={{
                      fontFamily: "var(--font-playfair, Georgia, serif)",
                      fontSize: "clamp(3rem, 5vw, 4.5rem)",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[#4A4A46] text-[9px] tracking-[0.3em] uppercase"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimateIn variants={fadeLeft}>
            <p
              className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Our Legacy
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em] mb-7"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Grandezza — The Modern Face of a{" "}
              <span className="italic text-[#C6A86B]">30-Year Legacy</span>
            </h2>
            <p
              className="text-[#8A8580] text-sm leading-7 mb-5"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Grandezza is the luxury design and construction arm of Sharieff
              Creations — a firm that has shaped premium spaces for over three
              decades. We bring together world-class design and the operational
              depth of 500+ specialists.
            </p>
            <p
              className="text-[#8A8580] text-sm leading-7 mb-10"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              From luxury residences and corporate headquarters to custom
              villas — every detail, from first sketch to final handover, is
              our responsibility.
            </p>

            {/* Two key facts */}
            <div className="grid grid-cols-2 gap-5 mb-10">
              {[
                { num: "1994", label: "Year Founded" },
                { num: "15+", label: "Cities Served" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="border border-[#DDD9D2] p-5 hover:border-[#C6A86B] transition-colors duration-300"
                >
                  <p
                    className="text-3xl font-normal text-[#0D0D0D] mb-1"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                  >
                    {f.num}
                  </p>
                  <p
                    className="text-[#8A8580] text-[9px] tracking-[0.25em] uppercase"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    {f.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-[#0D0D0D] text-[10px] tracking-[0.25em] uppercase font-medium border-b border-[#C6A86B] pb-1 hover:text-[#C6A86B] transition-colors duration-300"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Our Story <ArrowRight size={12} />
            </Link>
          </AnimateIn>

          <AnimateIn variants={fadeRight}>
            <div className="relative">
              {/* Main image */}
              <div
                className="relative overflow-hidden img-reveal"
                style={{ height: "580px" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=900&q=80"
                  alt="Luxury interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Offset gold box */}
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#C6A86B] -z-10"
              />
              {/* Floating badge */}
              <div
                className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 py-6 px-4"
                style={{ background: "#0D0D0D" }}
              >
                <span
                  className="vertical-text text-[#C6A86B] text-[8px] tracking-[0.35em] uppercase"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  Sharieff Creations
                </span>
                <div className="w-px h-8 bg-[#C6A86B]/40" />
                <span
                  className="vertical-text text-[#F5F3EF]/40 text-[8px] tracking-[0.25em] uppercase"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  Est. 1994
                </span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </SectionWrapper>

      <GoldDivider className="max-w-7xl mx-auto px-6 lg:px-16" />

      {/* ─── SERVICES ─── */}
      <SectionWrapper surface>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <AnimateIn variants={fadeLeft}>
            <p
              className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              What We Do
            </p>
            <h2
              className="text-4xl md:text-5xl font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Our Services
            </h2>
          </AnimateIn>
          <AnimateIn variants={fadeRight} delay={0.1}>
            <p
              className="text-[#8A8580] text-sm leading-7 max-w-sm"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              A complete spectrum of luxury design and construction — delivered under one roof.
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              index={i}
            />
          ))}
        </div>

        <AnimateIn delay={0.3}>
          <div className="mt-10 flex justify-end">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-[#0D0D0D] text-[10px] tracking-[0.25em] uppercase font-medium border-b border-[#C6A86B] pb-1 hover:text-[#C6A86B] transition-colors duration-300"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              All Services <ArrowRight size={12} />
            </Link>
          </div>
        </AnimateIn>
      </SectionWrapper>

      {/* ─── PROCESS ─── */}
      <section className="relative grain overflow-hidden" style={{ background: "#0D0D0D" }}>
        {/* Vertical gold accent line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#C6A86B]/8 pointer-events-none hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-28 lg:py-36">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-8">
            <AnimateIn variants={fadeLeft}>
              <p
                className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                How We Work
              </p>
              <h2
                className="text-4xl md:text-5xl font-normal text-[#F5F3EF] leading-[1.1] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Our Process
              </h2>
            </AnimateIn>
            <AnimateIn variants={fadeRight} delay={0.1}>
              <p
                className="text-[#6B6560] text-sm leading-7 max-w-xs"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                A seamless journey from first conversation to final walkthrough.
              </p>
            </AnimateIn>
          </div>

          <div className="space-y-0">
            {PROCESS_STEPS.map((step, i) => (
              <AnimateIn key={step.step} delay={i * 0.08}>
                <div className="relative flex gap-8 lg:gap-16 py-10 border-b border-[#1A1A1A] last:border-0 group">
                  {/* Giant watermark step number */}
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    <span
                      className="text-white/[0.025] font-normal leading-none"
                      style={{
                        fontFamily: "var(--font-playfair, Georgia, serif)",
                        fontSize: "clamp(5rem, 12vw, 10rem)",
                      }}
                    >
                      {step.step}
                    </span>
                  </div>

                  {/* Step number */}
                  <div className="shrink-0 w-14 h-14 border border-[#1F1F1F] group-hover:border-[#C6A86B] flex items-center justify-center transition-colors duration-500">
                    <span
                      className="text-[#C6A86B] text-sm font-normal"
                      style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                    >
                      {step.step}
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 flex-1 pr-24">
                    <h3
                      className="text-[#F5F3EF] text-xl font-normal w-40 shrink-0"
                      style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#6B6560] text-sm leading-7"
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS PREVIEW ─── */}
      <SectionWrapper>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16">
          <AnimateIn variants={fadeLeft}>
            <p
              className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Portfolio
            </p>
            <h2
              className="text-4xl md:text-5xl font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Selected Work
            </h2>
          </AnimateIn>
          <AnimateIn variants={fadeRight} delay={0.2}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#0D0D0D] text-[10px] tracking-[0.25em] uppercase font-medium border-b border-[#C6A86B] pb-1 hover:text-[#C6A86B] transition-colors duration-300 mt-6 sm:mt-0 shrink-0"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              All Projects <ArrowRight size={12} />
            </Link>
          </AnimateIn>
        </div>

        {/* Featured large project */}
        <AnimateIn>
          <div className="relative overflow-hidden img-reveal mb-5 group cursor-pointer" style={{ height: "460px" }}>
            <Image
              src={PROJECTS[0].image}
              alt={PROJECTS[0].title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(13,13,13,0.75) 0%, transparent 50%)",
              }}
            />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <span
                  className="text-[#C6A86B] text-[9px] tracking-[0.35em] uppercase mb-2 block"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  {PROJECTS[0].category} · {PROJECTS[0].location}
                </span>
                <h3
                  className="text-[#F5F3EF] text-3xl font-normal"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  {PROJECTS[0].title}
                </h3>
              </div>
              <div className="w-12 h-12 border border-[#C6A86B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 ml-4">
                <ArrowRight size={16} className="text-[#C6A86B]" />
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROJECTS.slice(1, 4).map((project, i) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              location={project.location}
              image={project.image}
              index={i}
            />
          ))}
        </div>
      </SectionWrapper>

      <GoldDivider className="max-w-7xl mx-auto px-6 lg:px-16" />

      {/* ─── WHY CHOOSE US ─── */}
      <SectionWrapper surface>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimateIn variants={fadeLeft}>
            <div className="relative">
              <div
                className="relative overflow-hidden img-reveal"
                style={{ height: "620px" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80"
                  alt="Precision craftsmanship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute -top-6 -right-6 w-28 h-28 border border-[#C6A86B] -z-10"
              />
              {/* Stats overlay card */}
              <div
                className="absolute bottom-8 left-8 p-6 hidden md:block"
                style={{ background: "rgba(13,13,13,0.9)", backdropFilter: "blur(8px)" }}
              >
                <p
                  className="text-[#C6A86B] text-4xl font-normal mb-1"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  500+
                </p>
                <p
                  className="text-[#F5F3EF]/60 text-[9px] tracking-[0.25em] uppercase"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  In-House Specialists
                </p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn variants={fadeRight}>
            <p
              className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Why Grandezza
            </p>
            <h2
              className="text-4xl md:text-5xl font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em] mb-12"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Built for those who demand the finest
            </h2>
            <div className="space-y-0">
              {WHY_US.map((item, i) => (
                <div
                  key={item.title}
                  className="flex gap-6 py-8 border-b border-[#DDD9D2] last:border-0 group"
                >
                  <div className="shrink-0 pt-1">
                    <span
                      className="text-2xl font-normal text-[#DDD9D2] group-hover:text-[#C6A86B] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-[#0D0D0D] text-lg font-normal mb-2"
                      style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#8A8580] text-sm leading-6"
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </SectionWrapper>

      {/* ─── TESTIMONIALS ─── */}
      <SectionWrapper>
        <AnimateIn variants={fadeUp}>
          <div className="flex items-center gap-6 mb-5">
            <div className="w-10 h-px bg-[#C6A86B]" />
            <p
              className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B]"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Client Stories
            </p>
          </div>
          <h2
            className="text-4xl md:text-5xl font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em] mb-20 max-w-xl"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Trusted by those who expect nothing but excellence
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={t.name}
              name={t.name}
              role={t.role}
              quote={t.quote}
              image={t.image}
              index={i}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTASection />
    </>
  );
}
