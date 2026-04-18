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
    <div className={`mb-16 lg:mb-20 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className="text-[9px] tracking-[0.4em] uppercase text-[#C6A86B] mb-5"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-[-0.02em] ${
          light ? "text-[#F5F3EF]" : "text-[#0D0D0D]"
        } ${centered ? "mx-auto" : ""}`}
        style={{
          fontFamily: "var(--font-playfair, Georgia, serif)",
          maxWidth: centered ? "700px" : undefined,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-sm leading-7 ${centered ? "mx-auto" : ""} ${
            light ? "text-[#6B6560]" : "text-[#8A8580]"
          }`}
          style={{
            fontFamily: "var(--font-inter, sans-serif)",
            maxWidth: "480px",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
