import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import CTASection from "@/components/CTASection";
import { PROCESS_STEPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services | Grandezza",
  description:
    "Grandezza offers end-to-end luxury interior design, turnkey projects, renovation, custom furniture, and construction services.",
};

const DETAILED_SERVICES = [
  {
    title: "Interior Design",
    eyebrow: "01",
    description:
      "Our design team combines global aesthetics with contextual sensitivity to craft spaces that are both breathtaking and deeply personal. We work across every scale — from intimate private residences to sprawling corporate environments.",
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
      "Our signature offering — complete design-to-delivery execution with zero coordination overhead for the client. One point of contact, one contract, one team responsible for everything.",
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
      "We transform existing spaces into extraordinary ones. Whether it's a single room refresh or a full-building overhaul, our renovation services are executed with surgical precision and minimal disruption.",
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
      "With our in-house fabrication facilities, we design and manufacture bespoke furniture pieces that are built to last and crafted to impress. Every piece is made to exact specifications, using premium materials.",
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
      "Backed by Sharieff Creations' 30-year track record, our construction services cover everything from structural builds to precision fit-outs. We operate with full compliance, safety, and transparency.",
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
      <section className="relative h-[60vh] min-h-[450px] flex items-end justify-start overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1800&q=85"
          alt="Services hero"
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
            What We Offer
          </p>
          <h1
            className="text-5xl md:text-7xl font-light text-white leading-tight"
            style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
          >
            Our Services
          </h1>
        </div>
      </section>

      {/* SERVICES LIST */}
      {DETAILED_SERVICES.map((service, idx) => (
        <SectionWrapper
          key={service.title}
          className={idx % 2 !== 0 ? "bg-[#F2EDE8]" : ""}
        >
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              service.reversed ? "lg:[direction:rtl]" : ""
            }`}
          >
            <div className={service.reversed ? "lg:[direction:ltr]" : ""}>
              <p
                className="text-[#C9A84C] text-[10px] tracking-[0.35em] uppercase mb-2"
                style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
              >
                {service.eyebrow}
              </p>
              <div className="w-12 h-px bg-[#C9A84C] mb-6" />
              <h2
                className="text-4xl md:text-5xl font-light text-[#1A1A1A] leading-tight mb-6"
                style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
              >
                {service.title}
              </h2>
              <p
                className="text-[#6B6560] text-sm leading-7 mb-8"
                style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
              >
                {service.description}
              </p>
              <ul className="space-y-3 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check size={13} className="text-[#C9A84C] shrink-0" />
                    <span
                      className="text-[#6B6560] text-xs"
                      style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-[#1A1A1A] text-[10px] tracking-[0.25em] uppercase font-medium border-b border-[#C9A84C] pb-1 hover:text-[#C9A84C] transition-colors duration-300"
                style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
              >
                Enquire Now <ArrowRight size={13} />
              </Link>
            </div>
            <div className={`relative ${service.reversed ? "lg:[direction:ltr]" : ""}`}>
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </SectionWrapper>
      ))}

      {/* PROCESS */}
      <SectionWrapper dark>
        <p
          className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-4"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          How We Work
        </p>
        <div className="w-12 h-px bg-[#C9A84C] mb-6" />
        <h2
          className="text-4xl md:text-5xl font-light text-white leading-tight mb-16 max-w-xl"
          style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
        >
          Our Delivery Process
        </h2>
        <div className="space-y-0">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="flex gap-8 py-10 border-b border-[#2A2A2A] last:border-0 group"
            >
              <span
                className="text-5xl font-light text-[#2A2A2A] group-hover:text-[#C9A84C] transition-colors duration-500 w-20 shrink-0"
                style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
              >
                {step.step}
              </span>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 flex-1">
                <h3
                  className="text-white text-2xl font-light w-48 shrink-0"
                  style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[#9E9890] text-sm leading-7"
                  style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
