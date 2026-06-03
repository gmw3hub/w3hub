"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PillButton from "@/components/ui/PillButton";
import { Badge } from "@/components/ui/badge";
import { fadeUp, heroStagger } from "@/lib/animations";

const TRIAL_URL =
  "https://form.typeform.com/to/qdGDfsSN";

export default function CoworkingHero() {
  return (
    <section className="relative w-full overflow-hidden bg-paper pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
      <div className="mx-auto grid max-w-[1136px] items-center gap-10 px-5 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-14">
        <motion.div initial="hidden" animate="show" variants={heroStagger}>
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
            className="mt-5 max-w-[520px] font-body text-[16px] font-medium leading-6 text-muted md:text-[17px]"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-card ring-1 ring-warm-grey lg:aspect-auto lg:h-[440px]"
        >
          <Image
            src="/images/photos/coworking-open-floor.jpg"
            alt="Coworking floor at w3.hub Berlin"
            fill
            priority
            sizes="(min-width: 1200px) 520px, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
