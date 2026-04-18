"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const LEADERS = [
  {
    name: "Daniyal Sharieff",
    title: "Principal Architect & Founder",
    bio: "With a vision for spaces that transcend aesthetics, Daniyal has led the creative direction of Grandezza since its founding — combining architectural precision with an intuitive understanding of how people inhabit luxury environments.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  },
  {
    name: "Suffiyan Kareem",
    title: "Managing Director",
    bio: "Suffiyan brings operational excellence and strategic vision to Grandezza, ensuring that every project is delivered to the highest standard. His 20+ year background in large-scale construction drives the company's turnkey execution model.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
];

export default function LeadershipSection() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {LEADERS.map((leader, i) => (
          <motion.div
            key={leader.name}
            variants={fadeUp}
            custom={i}
            className="group"
          >
            {/* Portrait */}
            <div className="relative overflow-hidden mb-7" style={{ height: "400px" }}>
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#0D0D0D]/5 group-hover:bg-transparent transition-colors duration-500" />
              {/* Gold bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: "#C6A86B" }}
              />
            </div>

            {/* Info */}
            <div className="px-1">
              <h3
                className="text-2xl font-normal text-[#0D0D0D] mb-1"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                {leader.name}
              </h3>
              <p
                className="text-[#C6A86B] text-[9px] tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                {leader.title}
              </p>
              <p
                className="text-[#8A8580] text-sm leading-7"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                {leader.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
