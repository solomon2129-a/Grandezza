import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import CTASection from "@/components/CTASection";
import GoldDivider from "@/components/GoldDivider";
import AnimateIn from "@/components/AnimateIn";
import { fadeLeft, fadeRight, fadeUp } from "@/lib/animations";
import { PROCESS_STEPS } from "@/lib/constants";
import { ServiceImageAccordion } from "@/components/ui/interactive-image-accordion";

export const metadata: Metadata = {
  title: "Services | Grandezza",
  description: "End-to-end luxury interior design, turnkey construction, renovation, custom furniture, and construction services.",
};

const DETAILED_SERVICES = [
  {
    title: "Interior Design",
    eyebrow: "01",
    description:
      "Our design team combines global aesthetics with contextual sensitivity to craft spaces that are both breathtaking and deeply personal — from intimate residences to sprawling corporate environments.",
    features: [
      "Concept development & mood boards",
      "3D visualization & photorealistic rendering",
      "Material & finish selection",
      "Furniture layout & spatial planning",
      "Lighting design",
      "Art & accessory curation",
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80",
  },
  {
    title: "Turnkey Projects",
    eyebrow: "02",
    description:
      "Our signature offering — complete design-to-delivery execution with zero coordination overhead. One point of contact, one contract, one team responsible for everything.",
    features: [
      "Single-vendor accountability",
      "Integrated design and build",
      "Procurement & material sourcing",
      "On-site project management",
      "Quality control at every stage",
      "On-time delivery guarantee",
    ],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80",
    reversed: true,
  },
  {
    title: "Renovation",
    eyebrow: "03",
    description:
      "We transform existing spaces into extraordinary ones. Whether a single room or a full building overhaul, our renovation services are executed with surgical precision and minimal disruption.",
    features: [
      "Site assessment & feasibility",
      "Structural modifications",
      "MEP upgrades",
      "Finishes & surface treatment",
      "Custom joinery & cabinetry",
      "Post-renovation inspection",
    ],
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80",
  },
  {
    title: "Custom Furniture",
    eyebrow: "04",
    description:
      "With our in-house fabrication facilities, we design and manufacture bespoke furniture pieces built to last and crafted to impress — using premium materials, made to exact specifications.",
    features: [
      "Custom design for each piece",
      "Premium wood, metal & fabric options",
      "In-house manufacturing",
      "Quality assurance & finishing",
      "White-glove delivery & installation",
      "After-sales care",
    ],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80",
    reversed: true,
  },
  {
    title: "Construction",
    eyebrow: "05",
    description:
      "Backed by Sharieff Creations' 30-year track record, our construction services cover everything from structural builds to precision fit-outs — operated with full compliance and transparency.",
    features: [
      "Civil & structural works",
      "MEP (mechanical, electrical, plumbing)",
      "False ceiling & flooring",
      "Façade & exterior works",
      "Compliance & safety management",
      "Snagging & handover",
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative flex items-end justify-start overflow-hidden" style={{ height: "65vh", minHeight: "480px" }}>
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1800&q=85"
          alt="Services"
          fill priority className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.2) 0%, rgba(13,13,13,0.8) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pb-20 w-full">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#C6A86B]" />
            <p className="text-[#C6A86B] text-[9px] tracking-[0.45em] uppercase" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>What We Offer</p>
          </div>
          <h1
            className="text-5xl md:text-7xl font-normal text-[#F5F3EF] leading-[1.0] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Our <span className="italic">Services</span>
          </h1>
        </div>
      </section>

      {/* INTERACTIVE ACCORDION */}
      <section className="relative grain" style={{ background: "#0D0D0D" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-28 pb-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-6">
            <AnimateIn variants={fadeLeft}>
              <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>Hover to Explore</p>
              <h2
                className="text-4xl md:text-5xl font-normal text-[#F5F3EF] leading-[1.1] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Five Ways We Deliver
              </h2>
            </AnimateIn>
            <AnimateIn variants={fadeRight} delay={0.1}>
              <p className="text-[#6B6560] text-sm leading-7 max-w-xs" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                From concept to construction, every discipline under one roof.
              </p>
            </AnimateIn>
          </div>
          <AnimateIn>
            <ServiceImageAccordion />
          </AnimateIn>
        </div>
      </section>

      <GoldDivider className="max-w-7xl mx-auto px-6 lg:px-16 py-0" />

      {/* DETAILED SERVICES */}
      {DETAILED_SERVICES.map((service, idx) => (
        <SectionWrapper key={service.title} surface={idx % 2 !== 0}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimateIn
              variants={service.reversed ? fadeRight : fadeLeft}
              className={service.reversed ? "order-1 lg:order-2" : ""}
            >
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="text-5xl font-normal text-[#DDD9D2]"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  {service.eyebrow}
                </span>
                <div className="flex-1 h-px bg-[#DDD9D2]" />
              </div>
              <h2
                className="text-4xl md:text-5xl font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em] mb-6"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                {service.title}
              </h2>
              <p className="text-[#8A8580] text-sm leading-7 mb-8" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                {service.description}
              </p>
              <ul className="space-y-3 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 group">
                    <div className="w-4 h-4 border border-[#DDD9D2] group-hover:border-[#C6A86B] flex items-center justify-center shrink-0 transition-colors duration-300">
                      <Check size={9} className="text-[#C6A86B]" />
                    </div>
                    <span className="text-[#8A8580] text-xs" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-[#0D0D0D] text-[10px] tracking-[0.25em] uppercase font-medium border-b border-[#C6A86B] pb-1 hover:text-[#C6A86B] transition-colors duration-300"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Enquire Now <ArrowRight size={12} />
              </Link>
            </AnimateIn>

            <AnimateIn
              variants={service.reversed ? fadeLeft : fadeRight}
              className={service.reversed ? "order-2 lg:order-1" : ""}
            >
              <div className="relative overflow-hidden img-reveal" style={{ height: "520px" }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Eyebrow overlay */}
                <div className="absolute top-6 left-6">
                  <span
                    className="text-white/20 font-normal"
                    style={{
                      fontFamily: "var(--font-playfair, Georgia, serif)",
                      fontSize: "5rem",
                      lineHeight: 1,
                    }}
                  >
                    {service.eyebrow}
                  </span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </SectionWrapper>
      ))}

      {/* PROCESS */}
      <section className="relative grain overflow-hidden" style={{ background: "#0D0D0D" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-28 lg:py-36">
          <AnimateIn variants={fadeUp}>
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>How We Work</p>
            <h2
              className="text-4xl md:text-5xl font-normal text-[#F5F3EF] leading-[1.1] tracking-[-0.02em] mb-16 max-w-xl"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Our Delivery Process
            </h2>
          </AnimateIn>
          <div>
            {PROCESS_STEPS.map((step, i) => (
              <AnimateIn key={step.step} delay={i * 0.08}>
                <div className="relative flex gap-8 lg:gap-16 py-10 border-b border-[#1A1A1A] last:border-0 group">
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
                  <div className="shrink-0 w-14 h-14 border border-[#1F1F1F] group-hover:border-[#C6A86B] flex items-center justify-center transition-colors duration-500">
                    <span className="text-[#C6A86B] text-sm font-normal" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                      {step.step}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 flex-1 pr-24">
                    <h3 className="text-[#F5F3EF] text-xl font-normal w-40 shrink-0" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                      {step.title}
                    </h3>
                    <p className="text-[#6B6560] text-sm leading-7" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
