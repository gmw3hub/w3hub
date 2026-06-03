"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";

type Partner = { src: string; alt: string; w: number; h: number };

// Logos + order taken 1:1 from the live site (w3hub.berlin) DOM.
const PARTNERS: Partner[] = [
  { src: "/images/oWLRwFAsMARSZ6yrh1uXKNgIg.png", alt: "Ledger", w: 171, h: 59 },
  { src: "/images/ThV0KoK1V9k0D4UqGuf7KXz6kTY.png", alt: "Jägermeister", w: 214, h: 81 },
  { src: "/images/yivG1RPjQ9i4s5aldStDzSG5E.png", alt: "w3.labs", w: 155, h: 56 },
];

const DOTTED: React.CSSProperties = {
  backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.30) 2px, transparent 2.3px)",
  backgroundSize: "7.07px 5px",
  backgroundRepeat: "repeat-x",
  backgroundPosition: "left center",
};

function PartnerCard({ p }: { p: Partner }) {
  return (
    <div className="relative flex h-[163px] w-[280px] flex-col items-center gap-3 overflow-hidden rounded-3xl bg-white p-6 shadow-[0px_3px_0px_#DDD8D4] ring-1 ring-black/10">
      <div className="flex h-20 w-full items-center justify-center px-2.5">
        <Image
          src={p.src}
          alt={p.alt}
          width={p.w}
          height={p.h}
          className="h-auto max-h-[68px] w-auto object-contain"
        />
      </div>
      <div className="h-[5px] w-[216px]" style={DOTTED} aria-hidden />
    </div>
  );
}

function Deco({
  src,
  className,
  width,
  height,
}: {
  src: string;
  className: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden
      width={width}
      height={height}
      className={`pointer-events-none absolute select-none ${className}`}
    />
  );
}

export default function PartnersSection() {
  return (
    <section className="relative w-full overflow-hidden bg-paper">
      {/* Green textured backdrop: continues the marquee green and flanks the
          panel so the paper panel "emerges" from the green (matches Figma). */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundColor: "#AEEFBD",
          backgroundImage: "url(/images/features/bg-doodle.webp)",
          backgroundRepeat: "repeat",
          backgroundSize: "500px",
        }}
      />
      <div className="relative mx-auto max-w-[1136px] px-4 pt-14 sm:px-6 md:pt-20">
        <div className="relative mx-auto max-w-[1120px] rounded-t-[48px] border-2 border-b-0 border-[#96908D]/50 bg-paper px-6 pb-20 pt-16 md:pt-20">
          {/* Decorative stickers (desktop only) */}
          <Deco
            src="/images/features/building.webp"
            width={160}
            height={164}
            className="hidden lg:block bottom-0 left-[-33px] z-0 w-[160px]"
          />
          <Deco
            src="/images/features/cactus-slim.webp"
            width={188}
            height={282}
            className="hidden lg:block right-[-6px] bottom-0 z-0 w-[188px]"
          />
          <Deco
            src="/images/features/flower-agave.webp"
            width={175}
            height={175}
            className="hidden lg:block right-[64px] bottom-0 z-0 w-[175px]"
          />

          <SectionReveal className="relative z-10 flex flex-col items-center gap-3 text-center">
            <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
              Our House Partners
            </h2>
            <p className="max-w-[800px] font-body text-[16px] font-medium leading-6 text-muted">
              Meet our house partners who, together with our community, form the
              backbone of the w3.hub, bringing expertise and opportunities to the
              ecosystem.
            </p>
          </SectionReveal>

          <SectionReveal className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-8">
            {PARTNERS.map((p) => (
              <PartnerCard key={p.alt} p={p} />
            ))}
          </SectionReveal>

          <SectionReveal className="relative z-10 mt-10 flex justify-center">
            <Link
              href="/about-us"
              className="group inline-flex items-center gap-3.5 rounded-full bg-[#181A1C] py-[3px] pl-5 pr-[3px] transition-colors hover:bg-black"
            >
              <span className="font-body text-[16px] font-medium leading-5 text-white">
                Become a house partner
              </span>
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-[#181A1C]">
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" aria-hidden>
                  <path
                    d="M1 1l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
