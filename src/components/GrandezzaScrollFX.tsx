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
    background:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=85",
  },
  {
    id: "turnkey",
    leftLabel: "Turnkey Projects",
    title: "One Team. Full Delivery.",
    rightLabel: "Design · Build",
    background:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1800&q=85",
  },
  {
    id: "renovation",
    leftLabel: "Renovation",
    title: "Transformed",
    rightLabel: "Precision · Craftsmanship",
    background:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1800&q=85",
  },
  {
    id: "furniture",
    leftLabel: "Custom Furniture",
    title: "Crafted to Perfection",
    rightLabel: "In-House · Bespoke",
    background:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1800&q=85",
  },
  {
    id: "construction",
    leftLabel: "Construction",
    title: "Built on Legacy",
    rightLabel: "30 Years · 500+ Team",
    background:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1800&q=85",
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
