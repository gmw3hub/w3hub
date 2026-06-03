"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { easeOutSoft } from "@/lib/animations";

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

const DOTTED: React.CSSProperties = {
  backgroundImage: "radial-gradient(circle, #B2B2B2 1.6px, transparent 1.8px)",
  backgroundSize: "11px 4px",
  backgroundRepeat: "repeat-x",
  backgroundPosition: "left center",
};

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" aria-hidden>
      <path
        d={dir === "right" ? "M1 1l5 5-5 5" : "M6 1L1 6l5 5"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

      {/* Arrows */}
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

      {/* Dots */}
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: easeOutSoft, delay: (index % 2) * 0.06 }}
      className="rounded-3xl bg-white p-2 shadow-[0px_3px_0px_#DDD8D4] ring-1 ring-black/10"
    >
      <Carousel images={s.images} label={s.title} />

      <div className="flex flex-col gap-4 px-6 py-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-display font-extrabold text-ink text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.15] lg:leading-[40px]">
            {s.title}
          </h3>
          <div className="h-1 w-full" style={DOTTED} aria-hidden />
          <p className="font-body text-[16px] leading-6 text-ink">{s.body}</p>
        </div>

        <Link
          href={s.href}
          className="group inline-flex items-center gap-3.5 self-start rounded-full bg-[#181A1C] py-[3px] pl-5 pr-[3px]"
        >
          <span className="font-body text-[16px] font-medium leading-5 text-white">
            Learn more
          </span>
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-[#181A1C] transition-colors group-hover:bg-mint">
            <Chevron dir="right" />
          </span>
        </Link>
      </div>
    </motion.article>
  );
}

export default function SolutionsCards() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[800px] px-5">
        <SectionReveal className="flex flex-col items-start gap-4">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[48px]">
            Our Custom Solutions
          </h2>
          <span className="inline-flex items-center rounded-full bg-mint px-3 py-1">
            <span className="font-body text-[14px] font-bold uppercase tracking-[0.05em] leading-6 text-ink/80">
              Tailored to your needs
            </span>
          </span>
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
