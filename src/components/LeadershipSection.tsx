"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const LEADERS = [
  {
    name: "Daniyal Sharieff",
    title: "Principal Designer & Founder",
    bio: "With a vision for spaces that transcend aesthetics, Daniyal has led the creative direction of Grandezza since its founding — combining design precision with an intuitive understanding of how people inhabit luxury environments.",
    initials: "DS",
  },
  {
    name: "Suffiyan Kareem",
    title: "Managing Director",
    bio: "Suffiyan brings operational excellence and strategic vision to Grandezza, ensuring that every project is delivered to the highest standard. His background in large-scale fit-outs drives the company's turnkey execution model.",
    initials: "SK",
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
