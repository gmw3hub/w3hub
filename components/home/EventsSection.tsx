"use client";

import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";

const LUMA_SRC =
  "https://lu.ma/embed/calendar/cal-K1JcFGP2bDDKmmj/events?compact=true&lt=light";

export default function EventsSection() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <SectionReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-10 mb-8 md:mb-10">
          <div>
            <p className="font-body text-[16px] font-medium text-muted">
              Part of the w3.hub Family
            </p>
            <h2 className="mt-2 font-display font-extrabold text-ink text-[28px] sm:text-[32px] leading-[1.15] md:leading-[40px]">
              All upcoming
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              Events
            </h2>
          </div>
          <Link
            href="https://lu.ma/w3hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[16px] font-medium text-ink hover:opacity-70 transition-opacity self-start md:self-auto"
          >
            See all events
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </SectionReveal>

        <SectionReveal
          className="w-full h-[560px] md:h-[660px] lg:h-[720px] overflow-hidden rounded"
          /* Live site uses Lu.ma's compact embed in a thin-bordered container */
        >
          <iframe
            src={LUMA_SRC}
            width="100%"
            height="100%"
            title="Upcoming w3.hub events"
            className="block w-full h-full border-0"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </SectionReveal>
      </div>
    </section>
  );
}
