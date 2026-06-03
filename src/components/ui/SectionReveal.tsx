"use client";

import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { easeOutSoft, fadeUp } from "@/lib/animations";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  amount?: number;
  variants?: Variants;
  as?: "div" | "section" | "article";
  /** Stagger index — when set, derives delay from `index * step`. */
  index?: number;
  step?: number;
  y?: number;
};

export default function SectionReveal({
  children,
  className,
  style,
  delay = 0,
  amount = 0.2,
  variants,
  as = "div",
  index,
  step = 0.06,
  y,
}: Props) {
  const MotionTag =
    as === "section" ? motion.section : as === "article" ? motion.article : motion.div;
  const computedDelay = index !== undefined ? index * step : delay;
  const useStaggerVariant = index !== undefined || y !== undefined;
  const resolvedVariants =
    variants ??
    (useStaggerVariant
      ? ({
          hidden: { opacity: 0, y: y ?? 16 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: easeOutSoft },
          },
        } as Variants)
      : fadeUp);
  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={{ delay: computedDelay }}
      variants={resolvedVariants}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
}
