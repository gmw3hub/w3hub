"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { easeOutSoft } from "@/lib/animations";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutSoft },
  },
};

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
      variants={variants ?? defaultVariants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
