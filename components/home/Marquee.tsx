"use client";

import { motion } from "framer-motion";

// From CLAUDE.md / Figma. Mix between brief list ("Vibessss", "Winners") and
// Figma export ("Vibesssssssssssssss"). Using Figma flavor for the long one.
const TAGS_ROW_1 = [
  "Vibesssssssssssssss",
  "Pizza",
  "Hackathons",
  "Community Space",
  "Flowers",
  "Meetups",
  "Hairy Friends",
  "Demo Days",
  "More Pizza",
  "Winners",
];

const TAGS_ROW_2 = [
  "Hackathons",
  "Vibesssssssssssssss",
  "Demo Days",
  "Community Space",
  "Pizza",
  "Hairy Friends",
  "Winners",
  "Meetups",
  "Flowers",
  "More Pizza",
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-ink text-white px-5 py-2.5 text-[14px] leading-[18px] whitespace-nowrap">
      {children}
    </span>
  );
}

function Row({
  tags,
  reverse = false,
  duration = 32,
}: {
  tags: string[];
  reverse?: boolean;
  duration?: number;
}) {
  // Duplicate for seamless loop
  const items = [...tags, ...tags];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((t, i) => (
          <Pill key={t + i}>{t}</Pill>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="w-full bg-paper py-12 md:py-16 overflow-hidden">
      <div className="flex flex-col gap-3">
        <Row tags={TAGS_ROW_1} duration={36} />
        <Row tags={TAGS_ROW_2} duration={40} reverse />
      </div>
    </section>
  );
}
