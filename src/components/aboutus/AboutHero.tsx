"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, heroStagger } from "@/lib/animations";

export default function AboutHero() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={heroStagger}
      className="flex flex-col items-center text-center"
    >
      <motion.p
        variants={fadeUp}
        className="font-body text-[16px] font-semibold leading-5 text-[#6d4aff]"
      >
        The Faces Behind
      </motion.p>

      <motion.div variants={fadeUp} className="mt-4">
        <Image
          src="/images/logos/w3hub-wordmark.webp"
          alt="w3.hub"
          width={320}
          height={85}
          priority
          className="h-auto w-[220px] md:w-[280px] lg:w-[320px]"
        />
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="mt-8 max-w-[760px] font-body text-[16px] leading-7 font-medium text-ink/80 md:text-[18px] md:leading-8"
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
