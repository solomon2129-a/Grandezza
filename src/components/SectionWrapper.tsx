interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  surface?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  dark = false,
  surface = false,
}: SectionWrapperProps) {
  const bg = dark ? "#080808" : surface ? "#0F0F0F" : "#080808";
  return (
    <section
      id={id}
      className={`px-5 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 ${className}`}
      style={{ background: bg }}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
