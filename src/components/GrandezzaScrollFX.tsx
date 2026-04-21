"use client";

import React, { useRef } from "react";
import {
  FullScreenScrollFX,
  FullScreenFXAPI,
} from "@/components/ui/full-screen-scroll-fx";

const SECTIONS = [
  {
    id: "interior-design",
    leftLabel: "Interior Design",
    title: "Spaces That Inspire",
    rightLabel: "Concept · Reality",
    background: "/assets/living-room-2.png",
  },
  {
    id: "turnkey",
    leftLabel: "Turnkey Projects",
    title: "One Team. Full Delivery.",
    rightLabel: "Design · Build",
    background: "/assets/dining-luxury.png",
  },
  {
    id: "renovation",
    leftLabel: "Renovation",
    title: "Transformed",
    rightLabel: "Precision · Craftsmanship",
    background: "/assets/bedroom-grey-1.png",
  },
  {
    id: "furniture",
    leftLabel: "Custom Furniture",
    title: "Crafted to Perfection",
    rightLabel: "In-House · Bespoke",
    background: "/assets/wardrobe-wood.png",
  },
  {
    id: "construction",
    leftLabel: "Construction",
    title: "Built on Legacy",
    rightLabel: "30 Years · 500+ Team",
    background: "/assets/kitchen-1.png",
  },
];

export default function GrandezzaScrollFX() {
  const apiRef = useRef<FullScreenFXAPI>(null);

  return (
    <FullScreenScrollFX
      apiRef={apiRef}
      sections={SECTIONS}
      fontFamily='"Playfair Display", Georgia, "Times New Roman", serif'
      header={
        <>
          <div style={{ fontStyle: "italic", fontWeight: 400 }}>From Design</div>
          <div style={{ fontWeight: 700, letterSpacing: "-0.04em" }}>
            to Execution
          </div>
        </>
      }
      footer={undefined}
      showProgress
      bgTransition="fade"
      parallaxAmount={5}
      durations={{ change: 0.85, snap: 900 }}
      gridPaddingX={3}
      gap={1}
      colors={{
        text: "rgba(245, 243, 239, 0.92)",
        overlay: "rgba(13, 13, 13, 0.48)",
        pageBg: "#F5F3EF",
        stageBg: "#0D0D0D",
      }}
      ariaLabel="Grandezza — Luxury interior design and construction services"
    />
  );
}
