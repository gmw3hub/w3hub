"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeUp, heroStagger } from "@/lib/animations";

export default function AboutHero() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={heroStagger}
      className="flex flex-col items-center text-center"
    >
      <motion.div variants={fadeUp}>
        <Badge variant="eyebrow-mint">about us</Badge>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="mt-5 font-display font-extrabold text-ink tracking-tight text-[34px] leading-[1.08] sm:text-[44px] md:text-[52px] lg:text-[60px] lg:leading-[64px]"
      >
        The Faces Behind
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-6 max-w-[760px] font-body text-[16px] leading-7 font-medium text-ink/80 md:text-[17px]"
      >
        w3.hub was founded in 2022 as part of w3.group. Today it is the central
        meeting point for Berlin&apos;s Web3, blockchain, crypto and AI
        community. Our 1,500&nbsp;sqm space at M&ouml;ckernstra&szlig;e&nbsp;120
        in Berlin Kreuzberg brings together coworking, private offices, meeting
        rooms and a 500&nbsp;sqm event location in a listed factory loft. Since
        2026, w3.hub is operated in partnership with betahaus.
      </motion.p>
    </motion.div>
  );
}
