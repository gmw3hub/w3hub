"use client";

import { motion } from "framer-motion";
import PillButton from "@/components/ui/PillButton";
import { fadeUp, heroStagger } from "@/lib/animations";

const TYPEFORM_URL = "https://form.typeform.com/to/upEoDN4G";

export default function EventHeroOverlay() {
  return (
    <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-16 md:px-8 md:pb-20 lg:px-12 lg:pb-24">
      <motion.div
        initial="hidden"
        animate="show"
        variants={heroStagger}
        className="max-w-[1080px]"
      >
        <motion.h1
          variants={fadeUp}
          className="font-display font-semibold tracking-tight text-white text-[44px] leading-[1.05] sm:text-[56px] md:text-[72px] lg:text-[88px] lg:leading-[88px]"
        >
          The Venue
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-[640px] font-body text-[16px] font-medium leading-6 text-white/90 md:mt-5 md:text-[18px] md:leading-7"
        >
          Two 500 sqm factory lofts in Berlin Kreuzberg. The leading event location
          for AI, robotics, quantum and blockchain conferences, hackathons,
          meetups and demo days.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-7 md:mt-8">
          <PillButton href={TYPEFORM_URL} external variant="light">
            Request Event Space
          </PillButton>
        </motion.div>
      </motion.div>
    </div>
  );
}
