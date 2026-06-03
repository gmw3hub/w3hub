"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PillButton from "@/components/ui/PillButton";
import Chevron from "@/components/ui/Chevron";
import DottedDivider from "@/components/ui/DottedDivider";
import { staggerFadeUp } from "@/lib/animations";

export type Solution = {
  title: string;
  body: string;
  href: string;
  images: string[];
};

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

export default function SolutionCard({ s, index }: { s: Solution; index: number }) {
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
