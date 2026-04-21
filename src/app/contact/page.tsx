import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import CTASection from "@/components/CTASection";
import { fadeUp, fadeLeft } from "@/lib/animations";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Grandezza",
  description:
    "Get in touch with Grandezza — luxury interior design and construction. Based in Mumbai.",
};

const ROWS = [
  {
    index: "01",
    label: "Phone",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone}`,
    note: "Mon – Sat, 9 AM – 7 PM IST",
  },
  {
    index: "02",
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    note: "Response within 24 hours",
  },
  {
    index: "03",
    label: "Office",
    value: COMPANY.address,
    href: "#",
    note: "By appointment only",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ─── MINIMAL DARK HEADER ───────────────────────────────────── */}
      <section
        className="grain flex flex-col justify-end px-6 sm:px-10 lg:px-20 pb-16 sm:pb-20"
        style={{ background: "#0D0D0D", paddingTop: "calc(5rem + 80px)" }}
      >
        <AnimateIn variants={fadeLeft}>
          <p
            className="text-[#C6A86B] text-[9px] tracking-[0.5em] uppercase mb-6"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            Let&apos;s Connect
          </p>
          <h1
            className="font-normal text-[#F5F3EF] leading-[1.0] tracking-[-0.03em]"
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
            }}
          >
            Contact <span className="italic">Us</span>
          </h1>
        </AnimateIn>
      </section>

      {/* ─── EDITORIAL CONTACT ROWS ────────────────────────────────── */}
      <section style={{ background: "#F5F3EF" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          {ROWS.map((row, i) => (
            <AnimateIn key={row.index} variants={fadeUp} delay={i * 0.08}>
              <a
                href={row.href}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 py-10 sm:py-12 border-b border-[#DDD9D2] hover:border-[#C6A86B] transition-colors duration-500"
              >
                {/* Index */}
                <span
                  className="text-[#C6A86B]/50 text-[10px] tracking-[0.3em] sm:w-16 shrink-0"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  {row.index}
                </span>

                {/* Label */}
                <span
                  className="text-[#8A8580] text-[9px] tracking-[0.35em] uppercase sm:w-32 shrink-0"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  {row.label}
                </span>

                {/* Value — the star */}
                <span
                  className="flex-1 font-normal text-[#0D0D0D] group-hover:text-[#C6A86B] transition-colors duration-400 leading-snug"
                  style={{
                    fontFamily: "var(--font-playfair, Georgia, serif)",
                    fontSize: "clamp(1.15rem, 2.8vw, 2rem)",
                  }}
                >
                  {row.value}
                </span>

                {/* Note + arrow */}
                <div className="flex items-center gap-4 sm:w-52 justify-end shrink-0">
                  <span
                    className="text-[#BDBAB5] text-[9px] tracking-[0.2em] text-right hidden md:block"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    {row.note}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-[#C6A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0"
                  />
                </div>
              </a>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ─── OFFICE HOURS + SOCIAL ─────────────────────────────────── */}
      <section style={{ background: "#F5F3EF" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-20">
          <AnimateIn variants={fadeUp}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0 sm:divide-x sm:divide-[#DDD9D2]">
              {/* Hours */}
              <div className="sm:pr-12">
                <p
                  className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-4"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  Office Hours
                </p>
                <p
                  className="text-[#0D0D0D] text-sm leading-7"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  Monday – Saturday
                  <br />
                  9:00 AM – 7:00 PM IST
                </p>
              </div>

              {/* Follow */}
              <div className="sm:px-12">
                <p
                  className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-4"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  Follow
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={COMPANY.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0D0D0D] text-sm hover:text-[#C6A86B] transition-colors duration-300 flex items-center gap-2"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    Instagram <ArrowUpRight size={11} className="opacity-50" />
                  </a>
                  <a
                    href={COMPANY.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0D0D0D] text-sm hover:text-[#C6A86B] transition-colors duration-300 flex items-center gap-2"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    LinkedIn <ArrowUpRight size={11} className="opacity-50" />
                  </a>
                </div>
              </div>

              {/* Brand */}
              <div className="sm:pl-12 flex flex-col justify-between gap-6">
                <p
                  className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-4"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  Our Work
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/projects"
                    className="text-[#0D0D0D] text-sm hover:text-[#C6A86B] transition-colors duration-300 flex items-center gap-2"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    View Projects <ArrowUpRight size={11} className="opacity-50" />
                  </Link>
                  <Link
                    href="/services"
                    className="text-[#0D0D0D] text-sm hover:text-[#C6A86B] transition-colors duration-300 flex items-center gap-2"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    Our Services <ArrowUpRight size={11} className="opacity-50" />
                  </Link>
                </div>
                <p
                  className="text-[#BDBAB5] text-[8px] tracking-[0.35em] uppercase mt-auto pt-4 border-t border-[#DDD9D2]"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  A Sharieff Creations Co.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
