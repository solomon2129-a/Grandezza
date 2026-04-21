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
    className="mx-6 text-[#C6A86B]/50 select-none"
    aria-hidden="true"
  >
    ◆
  </span>
);

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className="overflow-hidden py-5 border-y"
      style={{ background: "#0A0A0A", borderColor: "#1E1E1C" }}
    >
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span
              className="text-[#C6A86B] text-[9px] tracking-[0.4em] uppercase font-medium shrink-0"
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
