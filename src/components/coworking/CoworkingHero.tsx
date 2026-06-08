"use client";

import { motion } from "framer-motion";
import PillButton from "@/components/ui/PillButton";
import { Badge } from "@/components/ui/badge";
import { fadeUp, heroStagger } from "@/lib/animations";

const TRIAL_URL = "https://form.typeform.com/to/qdGDfsSN";

export default function CoworkingHero() {
  return (
    <section className="relative w-full overflow-hidden bg-paper pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
      <motion.div
        initial="hidden"
        animate="show"
        variants={heroStagger}
        className="mx-auto flex max-w-[760px] flex-col items-center px-5 text-center md:px-8"
      >
        <motion.div variants={fadeUp}>
          <Badge variant="eyebrow-mint">Co-Working</Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-5 font-display font-extrabold tracking-tight text-ink text-[36px] leading-[1.08] sm:text-[44px] md:text-[52px] lg:text-[60px] lg:leading-[1.05]"
        >
          Your Ideal
          <br />
          Place To Work
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-[560px] font-body text-[16px] font-medium leading-6 text-muted md:text-[17px]"
        >
          Flex desks, dedicated desks and private offices for Web3, AI and tech
          teams in Berlin Kreuzberg. High speed internet, meeting rooms,
          community events and access to one of the most active Web3 and AI
          networks in Europe.
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
