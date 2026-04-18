import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
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
      {/* HERO */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1800&q=85"
          alt="Luxury interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p
            className="text-[#C9A84C] text-[10px] tracking-[0.5em] uppercase mb-8"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            Backed by Sharieff Creations · 30+ Year Legacy
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8"
            style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
          >
            From Design to Execution —<br />
            <span className="italic text-[#E8D5A3]">Luxury Spaces,</span>
            <br />
            Fully Delivered
          </h1>
          <p
            className="text-white/70 text-sm tracking-widest mb-14 max-w-xl mx-auto leading-7"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            30+ years of legacy · 500+ skilled workforce · Complete turnkey solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-[#C9A84C] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#8B6914] transition-colors duration-300"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              Start Your Project
            </Link>
            <Link
              href="/projects"
              className="px-10 py-4 border border-white/50 text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:border-white hover:bg-white/10 transition-all duration-300"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <ChevronDown size={20} className="text-white/50" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#1A1A1A] py-16">
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

      {/* ABOUT PREVIEW */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-4"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              Our Legacy
            </p>
            <div className="w-12 h-px bg-[#C9A84C] mb-6" />
            <h2
              className="text-4xl md:text-5xl font-light text-[#1A1A1A] leading-tight mb-6"
              style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
            >
              Grandezza — The Modern Face of a 30-Year Legacy
            </h2>
            <p
              className="text-[#6B6560] text-sm leading-7 mb-6"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              Grandezza is the luxury interior design and construction arm of Sharieff
              Creations — a firm that has been shaping premium spaces for over three
              decades. We bring together world-class design thinking and the operational
              muscle of 500+ specialists to deliver spaces that are truly extraordinary.
            </p>
            <p
              className="text-[#6B6560] text-sm leading-7 mb-10"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              From luxury residences and corporate headquarters to boutique hotels and
              custom villas — we handle every detail, from the first sketch to the
              final handover.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-[#1A1A1A] text-[10px] tracking-[0.25em] uppercase font-medium border-b border-[#C9A84C] pb-1 hover:text-[#C9A84C] transition-colors duration-300"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              Our Story <ArrowRight size={13} />
            </Link>
          </div>
          <div className="relative">
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=900&q=80"
                alt="Luxury interior design"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Gold accent box */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#C9A84C] -z-10" />
          </div>
        </div>
      </SectionWrapper>

      {/* SERVICES */}
      <SectionWrapper className="bg-[#F2EDE8]">
        <SectionHeader
          eyebrow="What We Do"
          title="Our Services"
          subtitle="A full spectrum of luxury interior and construction services — delivered under one roof."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* PROCESS */}
      <SectionWrapper dark>
        <SectionHeader
          eyebrow="How We Work"
          title="Our Process"
          subtitle="A seamless journey from first conversation to final walkthrough."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-[#2A2A2A]" />

          {PROCESS_STEPS.map((step, index) => (
            <div key={step.step} className="relative flex flex-col items-center md:items-start text-center md:text-left px-4">
              {/* Step number circle */}
              <div className="relative z-10 w-16 h-16 border border-[#C9A84C] flex items-center justify-center mb-6 bg-[#1A1A1A]">
                <span
                  className="text-[#C9A84C] text-lg font-light"
                  style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
                >
                  {step.step}
                </span>
              </div>
              <h3
                className="text-white text-lg font-light mb-3"
                style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[#9E9890] text-xs leading-6"
                style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* PROJECTS PREVIEW */}
      <SectionWrapper>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16">
          <SectionHeader
            eyebrow="Our Portfolio"
            title="Featured Projects"
            subtitle="A selection of spaces we've brought to life."
          />
          <Link
            href="/projects"
            className="shrink-0 inline-flex items-center gap-2 text-[#1A1A1A] text-[10px] tracking-[0.25em] uppercase font-medium border-b border-[#C9A84C] pb-1 hover:text-[#C9A84C] transition-colors duration-300 mb-16 sm:mb-0"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            All Projects <ArrowRight size={13} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.slice(0, 4).map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              location={project.location}
              image={project.image}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* WHY CHOOSE US */}
      <SectionWrapper className="bg-[#F2EDE8]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-[600px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80"
                alt="Luxury construction"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-[#C9A84C] -z-10" />
          </div>
          <div>
            <p
              className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-4"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              Why Grandezza
            </p>
            <div className="w-12 h-px bg-[#C9A84C] mb-6" />
            <h2
              className="text-4xl md:text-5xl font-light text-[#1A1A1A] leading-tight mb-10"
              style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
            >
              Built for those who demand the finest
            </h2>
            <div className="space-y-8">
              {WHY_US.map((item, index) => (
                <div key={item.title} className="flex gap-6">
                  <div className="shrink-0 w-8 h-8 border border-[#C9A84C] flex items-center justify-center">
                    <span
                      className="text-[#C9A84C] text-xs"
                      style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-[#1A1A1A] text-lg font-light mb-1"
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* TESTIMONIALS */}
      <SectionWrapper>
        <SectionHeader
          eyebrow="Client Stories"
          title="What Our Clients Say"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              image={testimonial.image}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* FINAL CTA */}
      <CTASection />
    </>
  );
}
