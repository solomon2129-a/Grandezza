import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import CTASection from "@/components/CTASection";
import { STATS, WHY_US } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | Grandezza",
  description:
    "Grandezza is the luxury design and construction arm of Sharieff Creations — a 30-year legacy firm.",
};

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end justify-start overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1800&q=85"
          alt="About Grandezza"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
          <p
            className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            Our Story
          </p>
          <h1
            className="text-5xl md:text-7xl font-light text-white leading-tight"
            style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
          >
            About Grandezza
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-4"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              Who We Are
            </p>
            <div className="w-12 h-px bg-[#C9A84C] mb-6" />
            <h2
              className="text-4xl md:text-5xl font-light text-[#1A1A1A] leading-tight mb-6"
              style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
            >
              Luxury Defined by Legacy
            </h2>
            <p
              className="text-[#6B6560] text-sm leading-7 mb-5"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              Grandezza was born from a simple but powerful idea: that luxury design
              should never be separated from flawless execution. In a market crowded
              with firms that can sketch beautiful concepts but struggle to build them,
              we set out to be different.
            </p>
            <p
              className="text-[#6B6560] text-sm leading-7 mb-5"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              We are the premium design and construction arm of Sharieff Creations —
              a company that has been in the construction and fit-out industry for over
              30 years. That heritage gives us something most luxury design firms
              simply don't have: the infrastructure, the workforce, and the proven
              processes to bring even the most ambitious visions to life.
            </p>
            <p
              className="text-[#6B6560] text-sm leading-7"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              With an in-house team of 500+ specialists — designers, architects,
              engineers, craftsmen, and project managers — Grandezza is built to
              deliver at scale, without ever compromising on the detail that defines
              truly luxurious spaces.
            </p>
          </div>
          <div className="relative">
            <div className="relative h-[550px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80"
                alt="Grandezza team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#C9A84C] -z-10" />
          </div>
        </div>
      </SectionWrapper>

      {/* STATS */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-x-0 lg:divide-x lg:divide-[#2A2A2A]">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center py-4 lg:py-0 lg:px-8">
                <p
                  className="text-4xl md:text-5xl font-light text-[#C9A84C] mb-2"
                  style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[#9E9890] text-[10px] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHARIEFF CREATIONS LEGACY */}
      <SectionWrapper className="bg-[#F2EDE8]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"
                alt="Sharieff Creations legacy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-[#C9A84C] -z-10" />
          </div>
          <div className="order-1 lg:order-2">
            <p
              className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-4"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              The Foundation
            </p>
            <div className="w-12 h-px bg-[#C9A84C] mb-6" />
            <h2
              className="text-4xl md:text-5xl font-light text-[#1A1A1A] leading-tight mb-6"
              style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
            >
              Sharieff Creations — 30 Years of Building Excellence
            </h2>
            <p
              className="text-[#6B6560] text-sm leading-7 mb-5"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              Founded on the principles of quality, integrity, and precision,
              Sharieff Creations has spent three decades earning the trust of
              India's most discerning developers, institutions, and private clients.
              From large-scale commercial construction to intricate residential
              fit-outs, the firm's portfolio spans over 1,200 completed projects
              across 15+ cities.
            </p>
            <p
              className="text-[#6B6560] text-sm leading-7 mb-10"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              Grandezza channels that decades-long expertise into a modern,
              design-led experience for clients who expect both beauty and
              performance from their spaces.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* VALUES */}
      <SectionWrapper>
        <p
          className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-4"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          Our Principles
        </p>
        <div className="w-12 h-px bg-[#C9A84C] mb-6" />
        <h2
          className="text-4xl md:text-5xl font-light text-[#1A1A1A] leading-tight mb-16 max-w-xl"
          style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
        >
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US.map((item, index) => (
            <div
              key={item.title}
              className="p-8 border border-[#E8E0D5] hover:border-[#C9A84C] transition-colors duration-500"
            >
              <span
                className="text-4xl font-light text-[#C9A84C] block mb-4"
                style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                className="text-xl font-light text-[#1A1A1A] mb-3"
                style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-[#6B6560] text-xs leading-6"
                style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
