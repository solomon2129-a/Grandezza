import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  image: string;
}

export default function ProjectCard({
  title,
  category,
  location,
  image,
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden cursor-pointer">
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />

        {/* Hover content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span
            className="text-[#C9A84C] text-[9px] tracking-[0.3em] uppercase mb-2"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            {category} · {location}
          </span>
          <h3
            className="text-white text-xl font-light"
            style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Below image info */}
      <div className="py-4 border-b border-[#E8E0D5] group-hover:border-[#C9A84C] transition-colors duration-500">
        <span
          className="text-[#C9A84C] text-[9px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          {category}
        </span>
        <h3
          className="text-[#1A1A1A] text-lg font-light mt-1"
          style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
        >
          {title}
        </h3>
        <p
          className="text-[#6B6560] text-xs mt-1"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          {location}
        </p>
      </div>
    </div>
  );
}
