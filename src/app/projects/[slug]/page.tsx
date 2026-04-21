import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, Maximize2, User } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimateIn from "@/components/AnimateIn";
import { fadeLeft, fadeRight, fadeUp } from "@/lib/animations";
import { PROJECTS } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found | Grandezza" };
  return {
    title: `${project.title} | Grandezza`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = PROJECTS.filter(
    (p) => p.slug !== slug && p.category === project.category
  ).slice(0, 3);

  const meta = [
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Calendar, label: "Year", value: project.year },
    { icon: Maximize2, label: "Area", value: project.area },
    { icon: User, label: "Client", value: project.client },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative flex items-end justify-start overflow-hidden"
        style={{ height: "85vh", minHeight: "560px" }}
      >
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,13,13,0.15) 0%, rgba(13,13,13,0.75) 100%)",
          }}
        />

        {/* Back link */}
        <Link
          href="/projects"
          className="absolute top-28 left-6 lg:left-16 z-20 inline-flex items-center gap-2 text-white/60 hover:text-white text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          <ArrowLeft size={12} /> All Projects
        </Link>

        {/* Category badge */}
        <div className="absolute top-28 right-6 lg:right-16 z-20">
          <span
            className="px-4 py-1.5 text-[8px] tracking-[0.3em] uppercase border border-[#C6A86B]/50 text-[#C6A86B]"
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              background: "rgba(13,13,13,0.4)",
              backdropFilter: "blur(4px)",
            }}
          >
            {project.category}
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pb-20 w-full">
          <p
            className="text-[#C6A86B] text-[9px] tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            {project.location}
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-[5rem] font-normal text-[#F5F3EF] leading-[1.0] tracking-[-0.02em] max-w-3xl"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            {project.title}
          </h1>
        </div>
      </section>

      {/* PROJECT META + DESCRIPTION */}
      <section style={{ background: "#F5F3EF" }} className="px-5 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Meta sidebar */}
            <AnimateIn variants={fadeLeft}>
              <div className="space-y-0 border-t border-[#DDD9D2]">
                {meta.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-5 py-5 border-b border-[#DDD9D2]"
                  >
                    <div className="w-8 h-8 border border-[#DDD9D2] flex items-center justify-center shrink-0">
                      <Icon size={11} className="text-[#C6A86B]" />
                    </div>
                    <div>
                      <p
                        className="text-[8px] tracking-[0.25em] uppercase text-[#C6A86B] mb-0.5"
                        style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-[#0D0D0D] text-sm"
                        style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                      >
                        {value}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Services */}
                <div className="py-5 border-b border-[#DDD9D2]">
                  <p
                    className="text-[8px] tracking-[0.25em] uppercase text-[#C6A86B] mb-3"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    Services Delivered
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 text-[9px] tracking-[0.15em] uppercase border border-[#DDD9D2] text-[#8A8580]"
                        style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 text-[10px] tracking-[0.25em] uppercase font-medium transition-colors duration-300 bg-[#0D0D0D] text-[#F5F3EF] hover:bg-[#C6A86B]"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    Start a Project
                  </Link>
                </div>
              </div>
            </AnimateIn>

            {/* Description */}
            <AnimateIn variants={fadeRight} className="lg:col-span-2">
              <p
                className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-6"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Project Overview
              </p>
              <p
                className="text-[#0D0D0D] text-xl sm:text-2xl font-normal leading-[1.6] mb-8"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                {project.description}
              </p>
              <p
                className="text-[#8A8580] text-sm leading-8"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                {project.descriptionLong}
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ background: "#0D0D0D" }} className="grain px-5 sm:px-8 lg:px-16 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <AnimateIn variants={fadeUp}>
            <p
              className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-12"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Gallery
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((src, i) => (
              <AnimateIn key={src} delay={i * 0.08}>
                <div
                  className={`relative overflow-hidden img-reveal ${
                    i === 0 ? "md:col-span-2 h-[300px] sm:h-[500px]" : "h-[220px] sm:h-[320px]"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${project.title} — image ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                  />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {related.length > 0 && (
        <section style={{ background: "#F5F3EF" }} className="px-5 sm:px-8 lg:px-16 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto">
            <AnimateIn variants={fadeUp}>
              <div className="flex items-center justify-between mb-14">
                <div>
                  <p
                    className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-3"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    More {project.category}
                  </p>
                  <h2
                    className="text-3xl md:text-4xl font-normal text-[#0D0D0D] leading-[1.1] tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                  >
                    Related Projects
                  </h2>
                </div>
                <Link
                  href="/projects"
                  className="hidden sm:inline-flex items-center gap-3 text-[#0D0D0D] text-[10px] tracking-[0.25em] uppercase font-medium border-b border-[#C6A86B] pb-1 hover:text-[#C6A86B] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  View All <ArrowLeft size={12} className="rotate-180" />
                </Link>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p, i) => (
                <AnimateIn key={p.id} delay={i * 0.1}>
                  <Link href={`/projects/${p.slug}`} className="group block">
                    <div className="relative overflow-hidden h-[240px] sm:h-[300px]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(13,13,13,0.65) 0%, transparent 55%)" }}
                      />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-9 h-9 border border-[#C6A86B] flex items-center justify-center">
                          <ArrowUpRight size={13} className="text-[#C6A86B]" />
                        </div>
                      </div>
                      <div className="absolute bottom-5 left-5 right-5">
                        <span
                          className="text-[#C6A86B] text-[9px] tracking-[0.3em] uppercase block mb-1"
                          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                        >
                          {p.location}
                        </span>
                        <h3
                          className="text-[#F5F3EF] text-lg font-normal"
                          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                        >
                          {p.title}
                        </h3>
                      </div>
                    </div>
                    <div className="py-3 border-b border-[#DDD9D2] group-hover:border-[#C6A86B] transition-colors duration-500">
                      <h3
                        className="text-[#0D0D0D] text-base font-normal"
                        style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                      >
                        {p.title}
                      </h3>
                      <p
                        className="text-[#8A8580] text-xs mt-0.5"
                        style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                      >
                        {p.category} · {p.location}
                      </p>
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
