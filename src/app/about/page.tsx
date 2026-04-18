import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import CTASection from "@/components/CTASection";
import LeadershipSection from "@/components/LeadershipSection";
import AnimateIn from "@/components/AnimateIn";
import { fadeLeft, fadeRight, fadeUp } from "@/lib/animations";
import { WHY_US } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | Grandezza",
  description:
    "Grandezza is the luxury design and construction arm of Sharieff Creations — a 30-year legacy firm.",
};

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        className="relative flex items-end justify-start overflow-hidden"
        style={{ height: "60vh", minHeight: "460px" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1800&q=85"
          alt="About Grandezza"
          fill
          priority
          className="object-cover"
          sizes="100vw"
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
            Our Story
          </p>
          <h1
            className="text-5xl md:text-7xl font-normal text-[#F5F3EF] leading-[1.0] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            About Grandezza
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimateIn variants={fadeLeft}>
            <p
              className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Who We Are
            </p>
            <h2
              className="text-4xl md:text-5xl font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em] mb-7"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Luxury Defined by Legacy
            </h2>
            <p
              className="text-[#8A8580] text-sm leading-7 mb-5"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Grandezza was born from a simple but powerful idea: luxury design should never be
              separated from flawless execution. In a market crowded with firms that sketch
              beautiful concepts but struggle to build them, we set out to be different.
            </p>
            <p
              className="text-[#8A8580] text-sm leading-7 mb-5"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              We are the premium design and construction arm of Sharieff Creations — a firm
              with over 30 years in the construction and fit-out industry. That heritage gives
              us something most luxury design firms simply don't have: the infrastructure, the
              workforce, and the proven processes to bring even the most ambitious visions to life.
            </p>
            <p
              className="text-[#8A8580] text-sm leading-7 mb-10"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              With an in-house team of 500+ specialists — designers, architects, engineers,
              craftsmen, and project managers — Grandezza is built to deliver at scale, without
              ever compromising on detail.
            </p>
          </AnimateIn>

          <AnimateIn variants={fadeRight}>
            <div className="relative">
              <div className="relative overflow-hidden" style={{ height: "580px" }}>
                <Image
                  src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80"
                  alt="Grandezza team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute -bottom-5 -left-5 w-28 h-28 border border-[#C6A86B]"
                style={{ zIndex: -1 }}
              />
            </div>
          </AnimateIn>
        </div>
      </SectionWrapper>

      {/* SHARIEFF CREATIONS */}
      <SectionWrapper surface>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimateIn variants={fadeLeft} className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative overflow-hidden" style={{ height: "520px" }}>
                <Image
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"
                  alt="Sharieff Creations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute -top-5 -right-5 w-28 h-28 border border-[#C6A86B]"
                style={{ zIndex: -1 }}
              />
            </div>
          </AnimateIn>

          <AnimateIn variants={fadeRight} className="order-1 lg:order-2">
            <p
              className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              The Foundation
            </p>
            <h2
              className="text-4xl md:text-5xl font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em] mb-7"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Sharieff Creations — 30 Years of Building Excellence
            </h2>
            <p
              className="text-[#8A8580] text-sm leading-7 mb-5"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Founded on principles of quality, integrity, and precision, Sharieff Creations
              has spent three decades earning the trust of India's most discerning developers,
              institutions, and private clients. Their portfolio spans 1,200+ completed projects
              across 15+ cities.
            </p>
            <p
              className="text-[#8A8580] text-sm leading-7"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Grandezza channels that expertise into a modern, design-led experience for clients
              who expect both beauty and performance from their spaces.
            </p>
          </AnimateIn>
        </div>
      </SectionWrapper>

      {/* LEADERSHIP */}
      <SectionWrapper>
        <AnimateIn>
          <p
            className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            The Team
          </p>
          <h2
            className="text-4xl md:text-5xl font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em] mb-16"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Leadership
          </h2>
        </AnimateIn>
        <LeadershipSection />
      </SectionWrapper>

      {/* VALUES */}
      <SectionWrapper surface>
        <AnimateIn>
          <p
            className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            Our Principles
          </p>
          <h2
            className="text-4xl md:text-5xl font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em] mb-16 max-w-lg"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            What We Stand For
          </h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_US.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.1}>
              <div className="p-8 border border-[#DDD9D2] hover:border-[#C6A86B] transition-colors duration-500 h-full">
                <span
                  className="text-3xl font-normal text-[#C6A86B] block mb-5"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="text-lg font-normal text-[#0D0D0D] mb-3"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#8A8580] text-xs leading-6"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  {item.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
