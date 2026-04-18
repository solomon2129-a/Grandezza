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
  const bg = dark ? "#0D0D0D" : surface ? "#ECEAE5" : "#F5F3EF";
  return (
    <section
      id={id}
      className={`px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-32 ${className}`}
      style={{ background: bg }}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
