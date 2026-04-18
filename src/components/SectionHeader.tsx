interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-4"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          {eyebrow}
        </p>
      )}
      <div className={`flex items-center gap-4 mb-6 ${centered ? "justify-center" : ""}`}>
        <div className="w-12 h-px bg-[#C9A84C]" />
      </div>
      <h2
        className={`text-4xl md:text-5xl font-light leading-tight ${light ? "text-white" : "text-[#1A1A1A]"}`}
        style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-sm leading-7 max-w-xl ${centered ? "mx-auto" : ""} ${light ? "text-[#9E9890]" : "text-[#6B6560]"}`}
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
