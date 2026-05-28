"use client";

import { motion } from "framer-motion";
import PillButton from "@/components/ui/PillButton";
import { easeOutSoft, fadeUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden text-white">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/og-image.png"
        aria-hidden
      />
      {/* Subtle scrim for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/10"
      />

      {/* Overlay content — bottom-left */}
      <div className="relative z-10 h-full mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12 flex flex-col justify-end pb-16 md:pb-20 lg:pb-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="max-w-[1080px]"
        >
          <motion.p
            variants={fadeUp}
            className="font-display text-[20px] md:text-[24px] lg:text-[25.8px] font-normal leading-[1.2] text-white/95"
          >
            <span className="opacity-80">w3.</span>
            <span>hub</span>
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-3 md:mt-4 font-display font-semibold text-white tracking-tight text-[36px] leading-[1.1] sm:text-[44px] sm:leading-[1.1] md:text-[52px] md:leading-[1.1] lg:text-[60px] lg:leading-[88px]"
          >
            Berlin&apos;s Home
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            for Web3, AI and
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Frontier Tech
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-3"
          >
            <PillButton href="/co-working" variant="light">
              Become a member
            </PillButton>
            <PillButton href="/event-space" variant="light">
              Host an event
            </PillButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: easeOutSoft }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-white/50 backdrop-blur-sm bg-white/5"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3.5 5.25L7 8.75L10.5 5.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
