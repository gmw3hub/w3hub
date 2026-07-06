"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PillButton from "@/components/ui/PillButton";
import DoodleBackdrop from "@/components/ui/DoodleBackdrop";
import { fadeUp, heroStagger } from "@/lib/animations";

const TRIAL_URL = "https://form.typeform.com/to/qdGDfsSN";

export default function CoworkingHero() {
  return (
    <section className="relative w-full overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
      <DoodleBackdrop />

      <motion.div
        initial="hidden"
        animate="show"
        variants={heroStagger}
        className="relative mx-auto flex max-w-[760px] flex-col items-center px-5 text-center md:px-8"
      >
        <motion.div variants={fadeUp} className="w-full max-w-[640px]">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-warm-grey shadow-card ring-1 ring-black/5">
            <Image
              src="/images/photos/coworking-open-floor.webp"
              alt="Members working at desks in the w3.hub coworking space in Berlin Kreuzberg"
              fill
              sizes="(min-width: 768px) 640px, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-6 font-display font-extrabold tracking-tight text-ink text-[36px] leading-[1.08] sm:text-[44px] md:text-[52px] lg:text-[60px] lg:leading-[1.05]"
        >
          Your Ideal Place To Work
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-[640px] font-body text-[16px] font-medium leading-6 text-muted md:text-[17px]"
        >
          Flex desks, dedicated desks and private offices for AI, robotics,
          quantum and blockchain teams in Berlin Kreuzberg.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8">
          <PillButton href={TRIAL_URL} external size="lg">
            Apply For a Trial Day
          </PillButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
