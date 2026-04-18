import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export default function TestimonialCard({
  name,
  role,
  quote,
  image,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-10 border border-[#E8E0D5] hover:border-[#C9A84C] transition-colors duration-500 flex flex-col h-full">
      {/* Quote mark */}
      <div
        className="text-6xl text-[#C9A84C] leading-none mb-6 font-light"
        style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
      >
        &ldquo;
      </div>

      {/* Quote */}
      <p
        className="text-[#1A1A1A] text-base leading-8 flex-1 mb-8 font-light italic"
        style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.1rem" }}
      >
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-[#E8E0D5]">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <p
            className="text-[#1A1A1A] text-sm font-medium"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            {name}
          </p>
          <p
            className="text-[#C9A84C] text-[10px] tracking-[0.15em] uppercase mt-0.5"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
