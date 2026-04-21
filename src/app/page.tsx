import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import GoldDivider from "@/components/GoldDivider";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import SectionWrapper from "@/components/SectionWrapper";
import AnimateIn from "@/components/AnimateIn";
import { fadeLeft, fadeRight, fadeUp } from "@/lib/animations";
import {
  STATS,
  TESTIMONIALS,
  WHY_US,
  SERVICES,
  PROJECTS,
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

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-14 sm:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {STATS.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 0.12}>
                <div className="relative text-center px-4 sm:px-6 py-8 sm:py-10 lg:py-12 group">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              <div className="relative overflow-hidden img-reveal h-[320px] sm:h-[440px] lg:h-[580px]">
                <Image
                  src="/assets/master-bedroom-1.png"
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

      {/* ─── WHY CHOOSE US ─── */}
      <SectionWrapper surface>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimateIn variants={fadeLeft}>
            <div className="relative">
              <div className="relative overflow-hidden img-reveal h-[300px] sm:h-[440px] lg:h-[620px]">
                <Image
                  src="/assets/dining-luxury.png"
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

      {/* ─── SERVICES ─── */}
      <section className="relative grain overflow-hidden" style={{ background: "#0D0D0D" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 lg:mb-20 gap-6">
            <AnimateIn variants={fadeLeft}>
              <p
                className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                What We Offer
              </p>
              <h2
                className="text-4xl md:text-5xl font-normal text-[#F5F3EF] leading-[1.1] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Five Ways We Deliver
              </h2>
            </AnimateIn>
            <AnimateIn variants={fadeRight} delay={0.1}>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 text-[#C6A86B] text-[10px] tracking-[0.25em] uppercase font-medium border-b border-[#C6A86B]/40 pb-1 hover:border-[#C6A86B] transition-colors duration-300"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                All Services <ArrowRight size={12} />
              </Link>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
            {SERVICES.map((service, i) => (
              <AnimateIn key={service.title} delay={i * 0.07}>
                <div className="relative overflow-hidden group border-r border-[#1A1A1A] last:border-0 h-[380px] sm:h-[420px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ background: "linear-gradient(to top, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.45) 50%, rgba(13,13,13,0.2) 100%)" }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span
                      className="text-[#C6A86B] text-[8px] tracking-[0.35em] uppercase mb-3 block"
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="text-[#F5F3EF] text-lg font-normal leading-tight mb-3"
                      style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-[#6B6560] text-[11px] leading-5 mb-5 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500"
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      {service.description}
                    </p>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-[#C6A86B] text-[9px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      Learn More <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider className="max-w-7xl mx-auto px-6 lg:px-16" />

      {/* ─── FEATURED PROJECTS ─── */}
      <SectionWrapper surface>
        <AnimateIn variants={fadeUp}>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-6">
              <div className="w-10 h-px bg-[#C6A86B]" />
              <p
                className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B]"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Portfolio
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-3 text-[#0D0D0D] text-[10px] tracking-[0.25em] uppercase font-medium border-b border-[#C6A86B] pb-1 hover:text-[#C6A86B] transition-colors duration-300"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              View All <ArrowRight size={12} />
            </Link>
          </div>
          <h2
            className="text-4xl md:text-5xl font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em] mb-16"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Selected Works
          </h2>
        </AnimateIn>

        {/* Featured projects: 1 large + 2 smaller */}
        {(() => {
          const featured = PROJECTS.filter((p) => p.featured);
          const [first, ...rest] = featured;
          return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Large card */}
              <AnimateIn variants={fadeLeft}>
                <Link href={`/projects/${first.slug}`} className="group block">
                  <div className="relative overflow-hidden h-[300px] sm:h-[440px] lg:h-[600px]">
                    <Image
                      src={first.image}
                      alt={first.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 55%)" }} />
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-3 py-1 text-[8px] tracking-[0.25em] uppercase border border-white/25 text-white/80"
                        style={{ fontFamily: "var(--font-inter, sans-serif)", background: "rgba(13,13,13,0.35)", backdropFilter: "blur(4px)" }}
                      >
                        {first.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-9 h-9 border border-[#C6A86B] flex items-center justify-center">
                        <ArrowUpRight size={13} className="text-[#C6A86B]" />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-[#C6A86B] text-[9px] tracking-[0.3em] uppercase block mb-1" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>{first.location}</span>
                      <h3 className="text-[#F5F3EF] text-2xl font-normal" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>{first.title}</h3>
                    </div>
                  </div>
                  <div className="py-4 border-b border-[#DDD9D2] group-hover:border-[#C6A86B] transition-colors duration-500">
                    <h3 className="text-[#0D0D0D] text-lg font-normal" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>{first.title}</h3>
                    <p className="text-[#8A8580] text-xs mt-0.5" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>{first.category} · {first.location} · {first.area}</p>
                  </div>
                </Link>
              </AnimateIn>

              {/* Two stacked cards */}
              <div className="flex flex-col gap-5">
                {rest.map((project, i) => (
                  <AnimateIn key={project.id} variants={fadeRight} delay={i * 0.1}>
                    <Link href={`/projects/${project.slug}`} className="group block">
                      <div className="relative overflow-hidden h-[200px] sm:h-[260px] lg:h-[285px]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 55%)" }} />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 text-[8px] tracking-[0.25em] uppercase border border-white/25 text-white/80" style={{ fontFamily: "var(--font-inter, sans-serif)", background: "rgba(13,13,13,0.35)", backdropFilter: "blur(4px)" }}>{project.category}</span>
                        </div>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-9 h-9 border border-[#C6A86B] flex items-center justify-center">
                            <ArrowUpRight size={13} className="text-[#C6A86B]" />
                          </div>
                        </div>
                        <div className="absolute bottom-5 left-5 right-5">
                          <span className="text-[#C6A86B] text-[9px] tracking-[0.3em] uppercase block mb-1" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>{project.location}</span>
                          <h3 className="text-[#F5F3EF] text-xl font-normal" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>{project.title}</h3>
                        </div>
                      </div>
                      <div className="py-3 border-b border-[#DDD9D2] group-hover:border-[#C6A86B] transition-colors duration-500">
                        <h3 className="text-[#0D0D0D] text-base font-normal" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>{project.title}</h3>
                        <p className="text-[#8A8580] text-xs mt-0.5" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>{project.category} · {project.location} · {project.area}</p>
                      </div>
                    </Link>
                  </AnimateIn>
                ))}
              </div>
            </div>
          );
        })()}

        <AnimateIn variants={fadeUp} delay={0.2}>
          <div className="mt-12 flex justify-center sm:justify-start">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-[#0D0D0D] text-[10px] tracking-[0.25em] uppercase font-medium border-b border-[#C6A86B] pb-1 hover:text-[#C6A86B] transition-colors duration-300 sm:hidden"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              View All Projects <ArrowRight size={12} />
            </Link>
          </div>
        </AnimateIn>
      </SectionWrapper>

      <GoldDivider className="max-w-7xl mx-auto px-6 lg:px-16" />

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={t.name}
              name={t.name}
              role={t.role}
              quote={t.quote}
              initials={t.initials}
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
