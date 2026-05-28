"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import ArrowCircle from "./ArrowCircle";

type Variant = "dark" | "light";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

// Black pill with white text and a white-circle arrow icon on the right.
// Figma: Inter 500/16. Hover: subtle scale + arrow nudge.
export default function PillButton({
  href,
  children,
  variant = "dark",
  className,
}: Props) {
  const isDark = variant === "dark";
  return (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className={"inline-block " + (className ?? "")}
    >
      <Link
        href={href}
        className={
          "group inline-flex items-center gap-3 rounded-full pl-5 pr-1.5 py-1.5 text-[16px] font-medium leading-5 transition-colors " +
          (isDark
            ? "bg-ink text-white hover:bg-ink-800"
            : "bg-white text-ink hover:bg-paper")
        }
      >
        <span>{children}</span>
        <motion.span
          className="inline-flex"
          whileHover={{ x: 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
          <ArrowCircle invert={!isDark} size={28} />
        </motion.span>
      </Link>
    </motion.span>
  );
}
