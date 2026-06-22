"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import PillButton from "@/components/ui/PillButton";
import DoodleBackdrop from "@/components/ui/DoodleBackdrop";
import { TOUR_ENQUIRY_URL } from "./tour-data";
import { fadeUp, heroStagger } from "@/lib/animations";

export default function EcosystemHero() {
  return (
    <section className="relative w-full overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
      <DoodleBackdrop />

      <motion.div
        initial="hidden"
        animate="show"
        variants={heroStagger}
        className="relative mx-auto flex max-w-[820px] flex-col items-center px-5 text-center md:px-8"
      >
        <motion.div variants={fadeUp}>
          <Badge variant="eyebrow-mint">Ecosystem Tours</Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-6 font-display font-extrabold tracking-tight text-ink text-[36px] leading-[1.08] sm:text-[44px] md:text-[52px] lg:text-[60px] lg:leading-[1.05]"
        >
          Tour Berlin&apos;s Web3 Ecosystem
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-[680px] font-body text-[16px] font-medium leading-6 text-muted md:text-[17px]"
        >
          Step inside Europe&apos;s most active Web3, crypto and AI hub. Curated,
          insider-led tours that connect your team to the founders, funds and
          builders shaping the onchain economy — all from w3.hub, Berlin&apos;s
          home of Web3.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8">
          <PillButton href={TOUR_ENQUIRY_URL} external size="lg">
            Request a Tour
          </PillButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
