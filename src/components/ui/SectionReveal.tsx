"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/animations";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  variants?: Variants;
  as?: "div" | "section" | "article";
};

export default function SectionReveal({
  children,
  className,
  delay = 0,
  amount = 0.2,
  variants,
  as = "div",
}: Props) {
  const MotionTag =
    as === "section" ? motion.section : as === "article" ? motion.article : motion.div;
  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={{ delay }}
      variants={variants ?? fadeUp}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
