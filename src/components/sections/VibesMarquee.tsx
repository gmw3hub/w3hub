"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import DoodleBackdrop from "@/components/ui/DoodleBackdrop";
import { easeOutSoft } from "@/lib/animations";

type Slide = { src: string; label: string };

const SLIDES: Slide[] = [
  { label: "Vibes", src: "/images/marquee/vibes.webp" },
  { label: "Pizza", src: "/images/marquee/pizza.webp" },
  { label: "Hackathons", src: "/images/marquee/hackathons.webp" },
  { label: "Community Space", src: "/images/marquee/community-space.webp" },
  { label: "Flowers", src: "/images/marquee/flowers.webp" },
  { label: "Meetups", src: "/images/marquee/meetups.webp" },
  { label: "Hairy Friends", src: "/images/marquee/hairy-friends.webp" },
  { label: "Demo Days", src: "/images/marquee/demo-days.webp" },
  { label: "More Pizza", src: "/images/marquee/more-pizza.webp" },
  { label: "Winners", src: "/images/marquee/winners.webp" },
];

// Second row rotates the deck so the two tracks never align column-for-column.
const ROW_1 = SLIDES;
const ROW_2 = [...SLIDES.slice(5), ...SLIDES.slice(0, 5)];

const trackReveal: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutSoft },
  },
};

function Card({ slide }: { slide: Slide }) {
  return (
    <motion.div
      variants={cardReveal}
      className="shrink-0 w-[300px] md:w-[350px] rounded-3xl bg-white p-2 shadow-card"
    >
      <div className="relative h-[214px] md:h-[250px] w-full overflow-hidden rounded-[20px]">
        <Image
          src={slide.src}
          alt={slide.label}
          fill
          sizes="350px"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-end bg-linear-to-b from-transparent to-black/60 p-4">
          <span className="text-right font-body text-[14px] leading-[18px] text-white">
            {slide.label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function Row({
  slides,
  reverse = false,
  duration,
}: {
  slides: Slide[];
  reverse?: boolean;
  duration: number;
}) {
  // Duplicated once for a seamless -50% loop (see keyframes in globals.css).
  const items = [...slides, ...slides];
  return (
    <div className="overflow-visible">
      <motion.div
        className="flex w-max gap-4"
        style={{
          animation: `${reverse ? "marquee-x-reverse" : "marquee-x"} ${duration}s linear infinite`,
        }}
        variants={trackReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {items.map((s, i) => (
          <Card key={s.label + i} slide={s} />
        ))}
      </motion.div>
    </div>
  );
}

export default function VibesMarquee() {
  return (
    <section className="relative w-full overflow-hidden py-10 md:py-14">
      <DoodleBackdrop />
      <div className="relative flex flex-col gap-4">
        <Row slides={ROW_1} duration={80} />
        <Row slides={ROW_2} duration={92} reverse />
      </div>
    </section>
  );
}
