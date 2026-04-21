import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import CTASection from "@/components/CTASection";
import LeadershipSection from "@/components/LeadershipSection";
import GoldDivider from "@/components/GoldDivider";
import AnimateIn from "@/components/AnimateIn";
import CountUp from "@/components/CountUp";
import { fadeLeft, fadeRight, fadeUp } from "@/lib/animations";
import { WHY_US } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | Grandezza",
  description: "Grandezza is the luxury design and construction arm of Sharieff Creations — a 30-year legacy firm.",
};

const TIMELINE = [
  { year: "1994", label: "Sharieff Creations founded" },
  { year: "2010", label: "Expanded to 10+ cities across India" },
  { year: "2020", label: "Grandezza launched as luxury design arm" },
  { year: "2024", label: "500+ specialist team, 1200+ projects" },
];

const STATS = [
  { value: 30, suffix: "+", label: "Years of Legacy" },
  { value: 500, suffix: "+", label: "Skilled Specialists" },
  { value: 1200, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Cities Served" },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO — centered editorial */}
      <section
        className="relative flex flex-col items-center justify-center overflow-hidden text-center"
        style={{ height: "80vh", minHeight: "520px" }}
      >
        <Image
          src="/assets/living-room-2.png"
          alt="About Grandezza"
          fill priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "rgba(13,13,13,0.60)" }} />

        <div className="relative z-10 px-6 flex flex-col items-center">
          <div className="h-px w-16 bg-[#C6A86B] mb-8" />
          <p
            className="text-[#C6A86B] text-[9px] tracking-[0.5em] uppercase mb-6"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            Our Story
          </p>
          <h1
            className="font-normal text-[#F5F3EF] leading-[1.05] tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
            }}
          >
            About <span className="italic">Grandezza</span>
          </h1>
          <div className="h-px w-16 bg-[#C6A86B] mt-8" />
        </div>
      </section>

      {/* ANIMATED STAT COUNTERS */}
      <section className="relative grain" style={{ background: "#0D0D0D" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {STATS.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 0.1}>
                <div className="relative text-center px-4 sm:px-6 py-10 sm:py-14 group">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-px bg-[#C6A86B] group-hover:w-full transition-all duration-700" />
                  <p
                    className="font-normal text-[#C6A86B] mb-3 leading-none"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
                  >
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-[#4A4A46] text-[9px] tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                    {stat.label}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimateIn variants={fadeLeft}>
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em] mb-7" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
              Luxury Defined by <span className="italic text-[#C6A86B]">Legacy</span>
            </h2>
            <p className="text-[#8A8580] text-sm leading-7 mb-5" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
              Grandezza was born from a simple but powerful idea: luxury design should never be
              separated from flawless execution. In a market crowded with firms that sketch
              beautiful concepts but struggle to build them, we set out to be different.
            </p>
            <p className="text-[#8A8580] text-sm leading-7 mb-5" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
              We are the premium design arm of Sharieff Creations — a firm with over 30 years
              in the construction and fit-out industry. That heritage gives us what most luxury
              design firms simply don't have.
            </p>
            <p className="text-[#8A8580] text-sm leading-7 mb-10" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
              With an in-house team of 500+ specialists — designers, architects, engineers,
              craftsmen, and project managers — Grandezza is built to deliver at scale,
              without ever compromising on detail.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-[#0D0D0D] text-[10px] tracking-[0.25em] uppercase font-medium border-b border-[#C6A86B] pb-1 hover:text-[#C6A86B] transition-colors duration-300"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Start a Conversation <ArrowRight size={12} />
            </Link>
          </AnimateIn>

          <AnimateIn variants={fadeRight}>
            <div className="relative">
              <div className="relative overflow-hidden img-reveal h-[300px] sm:h-[420px] lg:h-[580px]">
                <Image src="/assets/dining-3.png" alt="Grandezza interiors" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="absolute -bottom-5 -left-5 w-28 h-28 border border-[#C6A86B] -z-10" />
              <div className="absolute -right-4 bottom-16 hidden lg:block px-6 py-5" style={{ background: "#0D0D0D" }}>
                <p className="text-[#C6A86B] text-3xl font-normal" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>30+</p>
                <p className="text-[#F5F3EF]/50 text-[8px] tracking-[0.25em] uppercase mt-1" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>Years</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </SectionWrapper>

      <GoldDivider className="max-w-7xl mx-auto px-6 lg:px-16" />

      {/* SHARIEFF CREATIONS + TIMELINE */}
      <SectionWrapper surface>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <AnimateIn variants={fadeLeft} className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative overflow-hidden img-reveal h-[260px] sm:h-[380px] lg:h-[520px]">
                <Image src="/assets/dining-2.png" alt="Sharieff Creations" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="absolute -top-5 -right-5 w-28 h-28 border border-[#C6A86B] -z-10" />
            </div>
          </AnimateIn>

          <AnimateIn variants={fadeRight} className="order-1 lg:order-2">
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>The Foundation</p>
            <h2 className="text-4xl md:text-5xl font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em] mb-7" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
              Sharieff Creations — <span className="italic">30 Years</span> of Building Excellence
            </h2>
            <p className="text-[#8A8580] text-sm leading-7 mb-10" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
              Founded on principles of quality, integrity, and precision, Sharieff Creations has
              spent three decades earning the trust of India's most discerning clients. Their
              portfolio spans 1,200+ completed projects across 15+ cities.
            </p>
            <div className="space-y-0 border-l-2 border-[#C6A86B]/30 pl-6">
              {TIMELINE.map((item, i) => (
                <AnimateIn key={item.year} delay={i * 0.1}>
                  <div className="flex items-start gap-5 py-4 group">
                    <span className="text-[#C6A86B] text-sm font-medium shrink-0 w-10" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                      {item.year}
                    </span>
                    <span className="text-[#8A8580] text-sm group-hover:text-[#0D0D0D] transition-colors" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                      {item.label}
                    </span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </AnimateIn>
        </div>
      </SectionWrapper>

      {/* LEADERSHIP */}
      <SectionWrapper>
        <AnimateIn variants={fadeUp}>
          <div className="flex items-center gap-6 mb-5">
            <div className="w-10 h-px bg-[#C6A86B]" />
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B]" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>The Team</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em] mb-16" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
            Leadership
          </h2>
        </AnimateIn>
        <LeadershipSection />
      </SectionWrapper>

      <GoldDivider className="max-w-7xl mx-auto px-6 lg:px-16" />

      {/* VALUES */}
      <SectionWrapper surface>
        <AnimateIn variants={fadeUp}>
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>Our Principles</p>
          <h2 className="text-4xl md:text-5xl font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em] mb-16 max-w-lg" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
            What We Stand For
          </h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_US.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.1}>
              <div className="relative p-8 border border-[#DDD9D2] hover:border-[#C6A86B] transition-colors duration-500 h-full overflow-hidden group">
                <span
                  className="absolute -right-3 -bottom-4 text-[#0D0D0D]/[0.03] select-none pointer-events-none font-normal leading-none"
                  aria-hidden="true"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "7rem" }}
                >
                  {i + 1}
                </span>
                <span className="text-3xl font-normal text-[#C6A86B] block mb-5" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-normal text-[#0D0D0D] mb-3" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>{item.title}</h3>
                <p className="text-[#8A8580] text-xs leading-6" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>{item.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
