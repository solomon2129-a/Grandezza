"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface AnimateInProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function AnimateIn({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  once = true,
}: AnimateInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        ...variants,
        visible: {
          ...(variants.visible as object),
          transition: {
            ...((variants.visible as { transition?: object })?.transition ?? {}),
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
