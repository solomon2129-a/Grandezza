interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`px-6 lg:px-12 py-24 lg:py-32 ${dark ? "bg-[#1A1A1A]" : "bg-[#FAF8F5]"} ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
