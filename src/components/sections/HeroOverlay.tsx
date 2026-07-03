"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PillButton from "@/components/ui/PillButton";
import { easeOutSoft, fadeUp, heroStagger } from "@/lib/animations";

export default function HeroOverlay() {
  return (
    <div className="relative z-10 h-full mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12 flex flex-col justify-end pb-16 md:pb-20 lg:pb-24">
      <motion.div
        initial="hidden"
        animate="show"
        variants={heroStagger}
        className="max-w-[1080px]"
      >
        <motion.p variants={fadeUp}>
          <Image
            src="/images/logo-wordmark.svg"
            alt="w3.hub"
            width={121}
            height={32}
            priority
            className="h-7 w-auto md:h-8"
          />
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-4 md:mt-5 font-body text-[13px] md:text-[14px] font-bold uppercase tracking-[0.14em] text-mint"
        >
          The Premiere Builder Club
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-2 font-display font-semibold text-white tracking-tight text-[36px] leading-[1.1] sm:text-[44px] sm:leading-[1.1] md:text-[52px] md:leading-[1.1] lg:text-[60px] lg:leading-[1.05]"
        >
          Berlin&apos;s Innovation
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          &amp; Startup Hub
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-[640px] font-body text-[16px] md:text-[18px] font-medium leading-7 text-white/85"
        >
          For builders in AI, Robotics, Quantum &amp; Blockchain.
        </motion.p>

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

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: easeOutSoft }}
        className="absolute right-5 md:right-8 lg:right-12 bottom-[66px] md:bottom-[82px] lg:bottom-[98px] z-10"
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
    </div>
  );
}
