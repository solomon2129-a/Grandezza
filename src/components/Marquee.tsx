const ITEMS = [
  "Interior Design",
  "Turnkey Projects",
  "Renovation",
  "Custom Furniture",
  "Construction",
  "30+ Years Legacy",
  "500+ Skilled Team",
  "1200+ Projects",
  "Mumbai · Pune · Goa · Bangalore · Delhi",
];

const SEPARATOR = (
  <span
    className="mx-5 text-[#0D0D0D]/40 select-none"
    aria-hidden="true"
  >
    ◆
  </span>
);

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className="overflow-hidden py-4 border-y border-[#C6A86B]/30"
      style={{ background: "#C6A86B" }}
    >
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span
              className="text-[#0D0D0D] text-[9px] tracking-[0.35em] uppercase font-semibold shrink-0"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              {item}
            </span>
            {SEPARATOR}
          </span>
        ))}
      </div>
    </div>
  );
}
