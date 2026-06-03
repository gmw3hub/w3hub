"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DottedDivider from "@/components/ui/DottedDivider";
import { easeOutSoft, staggerFadeUp } from "@/lib/animations";

type Props = { q: string; a: string; index: number };

export default function FaqItem({ q, a, index }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      {...staggerFadeUp(index, 12, 0.04)}
      className="rounded-3xl bg-white px-6 md:px-7 shadow-card backdrop-blur-[2px]"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-4 text-left"
      >
        <span className="font-display font-extrabold text-ink text-[16px] leading-6">
          {q}
        </span>
        <motion.span
          aria-hidden
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2, ease: easeOutSoft }}
          className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 2v10M2 7h10"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: easeOutSoft }}
            className="overflow-hidden"
          >
            <DottedDivider variant="light" className="h-[2px] w-full" />
            <p className="pt-4 pb-4 font-body text-[16px] leading-6 text-ink/80 max-w-[68ch]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
