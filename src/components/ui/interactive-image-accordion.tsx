"use client";

import React, { useState } from "react";
import Image from "next/image";

interface AccordionItem {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}

const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: "Interior Design",
    subtitle: "Concept to reality",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80",
  },
  {
    id: 2,
    title: "Turnkey Projects",
    subtitle: "Full delivery",
    imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80",
  },
  {
    id: 3,
    title: "Renovation",
    subtitle: "Space transformation",
    imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80",
  },
  {
    id: 4,
    title: "Custom Furniture",
    subtitle: "In-house crafted",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80",
  },
  {
    id: 5,
    title: "Construction",
    subtitle: "Built to last",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
  },
];

interface AccordionItemProps {
  item: AccordionItem;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionPanel = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className="relative overflow-hidden cursor-pointer group"
      style={{
        height: "520px",
        width: isActive ? "38%" : "15.5%",
        transition: "width 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
        flexShrink: 0,
      }}
      onMouseEnter={onMouseEnter}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover"
          style={{
            transform: isActive ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>

      {/* Dark gradient overlay — stronger when inactive */}
      <div
        className="absolute inset-0"
        style={{
          background: isActive
            ? "linear-gradient(to top, rgba(13,13,13,0.7) 0%, rgba(13,13,13,0.1) 60%)"
            : "rgba(13,13,13,0.55)",
          transition: "background 0.6s ease",
        }}
      />

      {/* Gold left border accent when active */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{
          background: "#C6A86B",
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Label — vertical when inactive, horizontal when active */}
      <div className="absolute inset-0 flex items-end p-7">
        <div
          style={{
            opacity: 1,
            transform: isActive ? "rotate(0deg)" : "rotate(0deg)",
          }}
        >
          {/* Vertical title for inactive */}
          <div
            className="absolute bottom-7 left-1/2"
            style={{
              transform: isActive ? "translateX(-50%) rotate(0deg)" : "translateX(-50%) rotate(90deg)",
              transformOrigin: "center center",
              opacity: isActive ? 0 : 1,
              transition: "opacity 0.3s ease, transform 0.5s ease",
              whiteSpace: "nowrap",
            }}
          >
            <span
              className="text-[#F5F3EF] text-sm font-normal tracking-wider"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              {item.title}
            </span>
          </div>

          {/* Horizontal content for active */}
          <div
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
            }}
          >
            <p
              className="text-[#C6A86B] text-[9px] tracking-[0.35em] uppercase mb-2"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              {item.subtitle}
            </p>
            <h3
              className="text-[#F5F3EF] text-2xl font-normal"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              {item.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export function ServiceImageAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Mobile/tablet: simple 2-column grid */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {accordionItems.map((item) => (
          <div key={item.id} className="relative overflow-hidden h-[180px]">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 55%)" }}
            />
            <div className="absolute bottom-4 left-4">
              <p
                className="text-[#C6A86B] text-[8px] tracking-[0.25em] uppercase mb-1"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                {item.subtitle}
              </p>
              <h3
                className="text-[#F5F3EF] text-sm font-normal"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: horizontal hover accordion */}
      <div
        className="hidden md:flex flex-row items-stretch w-full overflow-hidden"
        style={{ gap: "3px" }}
      >
        {accordionItems.map((item, index) => (
          <AccordionPanel
            key={item.id}
            item={item}
            isActive={index === activeIndex}
            onMouseEnter={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </>
  );
}
