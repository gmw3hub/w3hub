"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";
import Eyebrow from "@/components/ui/Eyebrow";
import Chevron from "@/components/ui/Chevron";
import DottedDivider from "@/components/ui/DottedDivider";
import { staggerFadeUp } from "@/lib/animations";

type Solution = {
  title: string;
  body: string;
  href: string;
  images: string[];
};

const SOLUTIONS: Solution[] = [
  {
    title: "Become a member",
    body: "Become part of Berlin's most vibrant Web3 community. Choose from flexible desks to dedicated workspaces that fit your style. Access cutting-edge facilities and community events where enthusiasts, startups, and creatives meet.",
    href: "/co-working",
    images: [
      "/images/solutions/member-1.webp",
      "/images/solutions/member-2.webp",
      "/images/solutions/member-3.webp",
    ],
  },
  {
    title: "Office Space",
    body: "Private, professional environments for your team to thrive. Our office spaces combine privacy with community access, giving you a dedicated space to scale comfortably with flexible terms tailored to growing companies.",
    href: "/co-working",
    images: [
      "/images/solutions/office-1.webp",
      "/images/solutions/office-2.webp",
      "/images/solutions/office-3.webp",
    ],
  },
  {
    title: "Event Space",
    body: "Host impactful events in our Berlin-style venue. From intimate meetups or dinners to larger conferences, our configurable space adapts to your vision. Full tech setup and community promotion included, you just need to bring your ideas and audience.",
    href: "/event-space",
    images: [
      "/images/solutions/event-1.webp",
      "/images/solutions/event-2.webp",
      "/images/solutions/event-3.webp",
    ],
  },
  {
    title: "Meeting Rooms",
    body: "Professional spaces available for members and non-members that can book by the day for client meetings, team sessions, or collaborative work. Fully equipped with presentation tools and comfortable seating – your temporary base in Berlin's Web3 hub.",
    href: "/meeting-rooms",
    images: [
      "/images/solutions/meeting-1.webp",
      "/images/solutions/meeting-2.webp",
      "/images/solutions/meeting-3.webp",
    ],
  },
];

function Carousel({ images, label }: { images: string[]; label: string }) {
  const [index, setIndex] = useState(0);
  const n = images.length;
  const go = (delta: number) => setIndex((p) => (p + delta + n) % n);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % n), 6000);
    return () => clearInterval(t);
  }, [n]);

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-warm-grey"
      style={{ aspectRatio: "784 / 360" }}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={src} className="relative h-full w-full shrink-0">
            <Image
              src={src}
              alt={`${label} – image ${i + 1}`}
              fill
              sizes="(min-width: 840px) 784px, 100vw"
              className="object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous image"
        className="absolute left-6 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-black/35"
      >
        <Chevron dir="left" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next image"
        className="absolute right-6 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-black/35"
      >
        <Chevron dir="right" />
      </button>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`h-2 w-2 rounded-full bg-white transition-opacity ${
              index === i ? "opacity-100" : "opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function SolutionCard({ s, index }: { s: Solution; index: number }) {
  return (
    <motion.article
      {...staggerFadeUp(index % 2, 24)}
      className="rounded-3xl bg-white p-2 shadow-card ring-1 ring-black/10"
    >
      <Carousel images={s.images} label={s.title} />

      <div className="flex flex-col gap-4 px-6 py-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-display font-extrabold text-ink text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.15] lg:leading-[40px]">
            {s.title}
          </h3>
          <DottedDivider variant="light" />
          <p className="font-body text-[16px] leading-6 text-ink">{s.body}</p>
        </div>

        <PillButton href={s.href} size="lg" className="self-start">
          Learn more
        </PillButton>
      </div>
    </motion.article>
  );
}

export default function Solutions() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[800px] px-5">
        <SectionReveal className="flex flex-col items-start gap-4">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[48px]">
            Our Custom Solutions
          </h2>
          <Eyebrow>Tailored to your needs</Eyebrow>
        </SectionReveal>

        <div className="mt-10 flex flex-col gap-10">
          {SOLUTIONS.map((s, i) => (
            <SolutionCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
