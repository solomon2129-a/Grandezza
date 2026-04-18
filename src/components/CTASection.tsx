import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = "Ready to Begin Your Project?",
  subtitle = "Let's transform your vision into a living reality. Our team is ready to listen.",
  buttonText = "Book a Consultation",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative py-32 overflow-hidden bg-[#1A1A1A]">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      {/* Background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-16 h-px bg-[#C9A84C]" />
          <div className="w-1.5 h-1.5 bg-[#C9A84C] rotate-45" />
          <div className="w-16 h-px bg-[#C9A84C]" />
        </div>

        <h2
          className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
        >
          {title}
        </h2>
        <p
          className="text-[#9E9890] text-sm leading-7 mb-12 max-w-lg mx-auto"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          {subtitle}
        </p>
        <Link
          href={buttonHref}
          className="inline-flex items-center gap-3 px-10 py-4 bg-[#C9A84C] text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#8B6914] transition-colors duration-300"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
