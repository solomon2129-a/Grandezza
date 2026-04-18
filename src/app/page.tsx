import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import AnimateIn from "@/components/AnimateIn";
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from "@/lib/animations";
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
      <Hero />

      {/* STATS — single instance, homepage only */}
      <section style={{ background: "#0D0D0D" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 0.1}>
                <div
                  className="text-center py-8 lg:py-0 lg:px-10 border-r border-[#1F1F1F] last:border-0"
                >
                  <p
                    className="text-5xl font-normal text-[#C6A86B] mb-2"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[#6B6560] text-[9px] tracking-[0.25em] uppercase"
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

      {/* ABOUT PREVIEW */}
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
              className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em] mb-7"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Grandezza — The Modern Face of a 30‑Year Legacy
            </h2>
            <p
              className="text-[#8A8580] text-sm leading-7 mb-5"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Grandezza is the luxury design and construction arm of Sharieff Creations — a firm that has shaped premium spaces for over three decades. We combine world-class design with the operational depth of 500+ specialists.
            </p>
            <p
              className="text-[#8A8580] text-sm leading-7 mb-10"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              From luxury residences and corporate headquarters to custom villas — every detail, from first sketch to final handover, is our responsibility.
            </p>
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
              <div className="relative overflow-hidden" style={{ height: "560px" }}>
                <Image
                  src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=900&q=80"
                  alt="Luxury interior design"
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

      {/* SERVICES */}
      <SectionWrapper surface>
        <AnimateIn>
          <SectionHeader
            eyebrow="What We Do"
            title="Our Services"
            subtitle="A complete spectrum of luxury design and construction — delivered under one roof."
          />
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </SectionWrapper>

      {/* PROCESS */}
      <SectionWrapper dark>
        <AnimateIn>
          <SectionHeader
            eyebrow="How We Work"
            title="Our Process"
            subtitle="From first conversation to final walkthrough — a seamless journey."
            light
          />
        </AnimateIn>
        <div className="space-y-0">
          {PROCESS_STEPS.map((step, i) => (
            <AnimateIn key={step.step} delay={i * 0.08}>
              <div
                className="flex gap-10 py-10 border-b border-[#1F1F1F] last:border-0 group hover:pl-2 transition-all duration-500"
              >
                <span
                  className="text-4xl font-normal text-[#1F1F1F] group-hover:text-[#C6A86B] transition-colors duration-500 w-16 shrink-0 pt-1"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  {step.step}
                </span>
                <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-16 flex-1">
                  <h3
                    className="text-[#F5F3EF] text-xl font-normal w-36 shrink-0"
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
      </SectionWrapper>

      {/* PROJECTS PREVIEW */}
      <SectionWrapper>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16">
          <AnimateIn>
            <SectionHeader
              eyebrow="Portfolio"
              title="Selected Work"
            />
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#0D0D0D] text-[10px] tracking-[0.25em] uppercase font-medium border-b border-[#C6A86B] pb-1 hover:text-[#C6A86B] transition-colors duration-300 mb-16 sm:mb-0 shrink-0"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              All Projects <ArrowRight size={12} />
            </Link>
          </AnimateIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROJECTS.slice(0, 4).map((project, i) => (
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

      {/* WHY CHOOSE US */}
      <SectionWrapper surface>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimateIn variants={fadeLeft}>
            <div className="relative">
              <div className="relative overflow-hidden" style={{ height: "600px" }}>
                <Image
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80"
                  alt="Precision craftsmanship"
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
            <div className="space-y-9">
              {WHY_US.map((item, i) => (
                <div key={item.title} className="flex gap-6 group">
                  <div
                    className="shrink-0 w-8 h-8 border border-[#DDD9D2] group-hover:border-[#C6A86B] flex items-center justify-center transition-colors duration-300"
                  >
                    <span
                      className="text-[#C6A86B] text-xs"
                      style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-[#0D0D0D] text-lg font-normal mb-1"
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

      {/* TESTIMONIALS */}
      <SectionWrapper>
        <AnimateIn>
          <SectionHeader
            eyebrow="Client Stories"
            title="What Our Clients Say"
            centered
          />
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      <CTASection />
    </>
  );
}
