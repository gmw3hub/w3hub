"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";

type Card = { src: string; alt: string; label: string };

// Order left → right, matching the live site.
const CARDS: Card[] = [
  {
    src: "/images/coworking/tile-coffee.webp",
    alt: "Cosy community lounge with plants and modular sofas",
    label: "Enjoy a chill coffee",
  },
  {
    src: "/images/coworking/tile-sun.webp",
    alt: "Sun-filled lounge with sofas and tall windows",
    label: "Chill in the sun",
  },
  {
    src: "/images/coworking/tile-highscore.webp",
    alt: "Arcade machine and lounge seating at w3.hub Berlin",
    label: "Break the highscore",
  },
];

function CommunityCard({
  card,
  x,
  rotate,
  z,
  priority,
}: {
  card: Card;
  x: MotionValue<string> | number;
  rotate: MotionValue<number> | number;
  z: number;
  priority?: boolean;
}) {
  return (
    <motion.div
      style={{ x, rotate, zIndex: z }}
      className="relative w-[clamp(104px,27vw,250px)] shrink-0 rounded-[20px] bg-white p-2.5 shadow-[0_22px_44px_-22px_rgba(16,20,34,0.32)] ring-1 ring-black/[0.05] will-change-transform"
    >
      <div className="relative aspect-[6/7] overflow-hidden rounded-[14px]">
        <Image
          src={card.src}
          alt={card.alt}
          fill
          priority={priority}
          sizes="250px"
          className="object-cover"
        />
      </div>
      <p className="pt-2 text-center font-handwriting text-[18px] font-bold text-ink md:text-[24px]">
        {card.label}
      </p>
    </motion.div>
  );
}

export default function CommunitySpace() {
  const rowRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Drive the spread off the section scrolling into view: stacked when it
  // enters from the bottom, fully fanned out by the time it nears centre.
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start 0.9", "center 0.62"],
  });

  // Side cards start piled on the centre card (translated inward + tilted),
  // then settle into their columns upright.
  const leftX = useTransform(scrollYProgress, [0, 1], ["116%", "0%"]);
  const leftRot = useTransform(scrollYProgress, [0, 1], [-9, 0]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["-116%", "0%"]);
  const rightRot = useTransform(scrollYProgress, [0, 1], [9, 0]);

  return (
    <section className="w-full overflow-hidden bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mx-auto mb-12 max-w-[760px] text-center md:mb-16">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[44px] leading-[1.1]">
            Hang out in our community Space
          </h2>
          <p className="mt-4 font-body text-[16px] font-medium leading-6 text-muted">
            We are a cornerstone of the Web3 community, fostering collaboration
            and thriving.
          </p>
        </SectionReveal>

        <div
          ref={rowRef}
          className="flex items-start justify-center gap-3 sm:gap-5 md:gap-8"
        >
          <CommunityCard
            card={CARDS[0]}
            x={reduce ? 0 : leftX}
            rotate={reduce ? 0 : leftRot}
            z={10}
            priority
          />
          <CommunityCard card={CARDS[1]} x={0} rotate={0} z={20} />
          <CommunityCard
            card={CARDS[2]}
            x={reduce ? 0 : rightX}
            rotate={reduce ? 0 : rightRot}
            z={10}
          />
        </div>
      </div>
    </section>
  );
}
