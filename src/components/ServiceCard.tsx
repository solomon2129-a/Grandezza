import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden bg-white">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="p-8 border border-t-0 border-[#E8E0D5] group-hover:border-[#C9A84C] transition-colors duration-500">
        <h3
          className="text-2xl font-light text-[#1A1A1A] mb-3"
          style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
        >
          {title}
        </h3>
        <p
          className="text-[#6B6560] text-sm leading-6 mb-6"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          {description}
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase font-medium hover:gap-4 transition-all duration-300"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          Learn More <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
