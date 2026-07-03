"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PillButton from "@/components/ui/PillButton";
import { fadeUp, heroStagger } from "@/lib/animations";

const TYPEFORM =
  "https://form.typeform.com/to/qdGDfsSN?utm_source=website&utm_medium=community&utm_campaign=join";

export default function CommunityHero() {
  return (
    <section className="relative w-full overflow-hidden pt-28 pb-14 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20">
      <motion.div
        initial="hidden"
        animate="show"
        variants={heroStagger}
        className="mx-auto flex max-w-[1136px] flex-col items-center px-5 text-center md:px-8"
      >
        <motion.h1
          variants={fadeUp}
          className="font-display font-extrabold tracking-tight text-ink text-[36px] leading-[1.08] sm:text-[44px] md:text-[52px] lg:text-[60px] lg:leading-[1.05]"
        >
          Berlin&apos;s Builder
          <br className="hidden md:block" />
          <span className="md:hidden"> </span>
          Community
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-[640px] font-body text-[16px] font-medium leading-6 text-muted md:text-[17px]"
        >
          A cornerstone of Berlin&apos;s startup community, fostering collaboration
          and growth in the heart of Berlin.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8">
          <PillButton href={TYPEFORM} external size="lg">
            Become part of the community
          </PillButton>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative mt-10 w-full overflow-hidden rounded-3xl shadow-card ring-1 ring-black/10 md:mt-12"
        >
          <Image
            src="/images/community-hero.avif"
            alt="The w3.hub community gathered at our Berlin space"
            width={1600}
            height={900}
            priority
            sizes="(min-width: 1200px) 1136px, 100vw"
            className="h-auto w-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
