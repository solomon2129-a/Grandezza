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
    image: "/assets/living-room-2.png",
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
    image: "/assets/dining-luxury.png",
    reversed: true,
  },
  {
    title: "Renovation",
    eyebrow: "03",
    description:
      "We transform existing spaces into extraordinary ones. Whether a single room or a full home overhaul, our renovation services are executed with surgical precision and minimal disruption.",
    features: [
      "Site assessment & feasibility",
      "Structural modifications",
      "MEP upgrades",
      "Finishes & surface treatment",
      "Custom joinery & cabinetry",
      "Post-renovation inspection",
    ],
    image: "/assets/bedroom-grey-1.png",
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
    image: "/assets/pooja-unit.png",
    reversed: true,
  },
  {
    title: "Construction",
    eyebrow: "05",
    description:
      "Backed by Sharieff Creations' 30-year track record, our construction services cover everything from false ceilings and flooring to full fit-outs — operated with full compliance and transparency.",
    features: [
      "Civil & structural works",
      "MEP (mechanical, electrical, plumbing)",
      "False ceiling & flooring",
      "Façade & exterior works",
      "Compliance & safety management",
      "Snagging & handover",
    ],
    image: "/assets/kitchen-1.png",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative flex items-end justify-start overflow-hidden" style={{ height: "65vh", minHeight: "480px" }}>
        <Image
          src="/assets/dining-luxury.png"
          alt="Services"
          fill priority className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,6,6,0.2) 0%, rgba(6,6,6,0.85) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pb-20 w-full">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#C6A86B]" />
            <p className="text-[#C6A86B] text-[9px] tracking-[0.45em] uppercase" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>What We Offer</p>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#F0EDE8] leading-[1.0] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Our <span className="italic">Services</span>
          </h1>
        </div>
      </section>

      {/* INTERACTIVE ACCORDION */}
      <section className="relative grain" style={{ background: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-16 sm:pt-24 lg:pt-28 pb-14 sm:pb-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 sm:mb-14 gap-4 sm:gap-6">
            <AnimateIn variants={fadeLeft}>
              <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>Hover to Explore</p>
              <h2
                className="text-3xl md:text-4xl font-normal text-[#F0EDE8] leading-[1.1] tracking-[-0.02em]"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn
              variants={service.reversed ? fadeRight : fadeLeft}
              className={service.reversed ? "order-1 lg:order-2" : ""}
            >
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="text-5xl font-normal text-[#282825]"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  {service.eyebrow}
                </span>
                <div className="flex-1 h-px bg-[#1E1E1C]" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-normal text-[#F0EDE8] leading-[1.1] tracking-[-0.02em] mb-6"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                {service.title}
              </h2>
              <p className="text-[#6B6560] text-sm leading-7 mb-8" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                {service.description}
              </p>
              <ul className="space-y-3 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 group">
                    <div className="w-4 h-4 border border-[#1E1E1C] group-hover:border-[#C6A86B] flex items-center justify-center shrink-0 transition-colors duration-300">
                      <Check size={9} className="text-[#C6A86B]" />
                    </div>
                    <span className="text-[#6B6560] text-xs" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-[#F0EDE8] text-[10px] tracking-[0.25em] uppercase font-medium border-b border-[#C6A86B] pb-1 hover:text-[#C6A86B] transition-colors duration-300"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Enquire Now <ArrowRight size={12} />
              </Link>
            </AnimateIn>

            <AnimateIn
              variants={service.reversed ? fadeLeft : fadeRight}
              className={service.reversed ? "order-2 lg:order-1" : ""}
            >
              <div className="relative overflow-hidden img-reveal h-[260px] sm:h-[380px] lg:h-[520px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-6 left-6">
                  <span
                    className="text-white/[0.12] font-normal"
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
      <section className="relative grain overflow-hidden" style={{ background: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-36">
          <AnimateIn variants={fadeUp}>
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>How We Work</p>
            <h2
              className="text-3xl md:text-4xl font-normal text-[#F0EDE8] leading-[1.1] tracking-[-0.02em] mb-16 max-w-xl"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Our Delivery Process
            </h2>
          </AnimateIn>
          <div>
            {PROCESS_STEPS.map((step, i) => (
              <AnimateIn key={step.step} delay={i * 0.08}>
                <div className="relative flex gap-5 sm:gap-8 lg:gap-16 py-8 sm:py-10 border-b border-[#141414] last:border-0 group cursor-default">
                  {/* Large ghost number */}
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden sm:block"
                    aria-hidden="true"
                  >
                    <span
                      className="text-white/[0.015] group-hover:text-white/[0.04] font-normal leading-none transition-colors duration-500"
                      style={{
                        fontFamily: "var(--font-playfair, Georgia, serif)",
                        fontSize: "clamp(5rem, 12vw, 10rem)",
                      }}
                    >
                      {step.step}
                    </span>
                  </div>

                  {/* Step indicator box */}
                  <div className="shrink-0 w-10 h-10 sm:w-14 sm:h-14 border border-[#1E1E1C] group-hover:border-[#C6A86B] group-hover:bg-[#C6A86B]/5 flex items-center justify-center transition-all duration-500">
                    <span className="text-[#C6A86B] text-sm font-normal" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                      {step.step}
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-16 flex-1 sm:pr-24">
                    <h3
                      className="text-[#F0EDE8] text-lg sm:text-xl font-normal md:w-40 shrink-0 group-hover:text-[#C6A86B] transition-colors duration-400"
                      style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#4A4A46] group-hover:text-[#6B6560] text-sm leading-7 transition-colors duration-300" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                      {step.description}
                    </p>
                  </div>

                  {/* Right arrow reveal */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 hidden lg:block">
                    <div className="w-8 h-px bg-[#C6A86B]" />
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
