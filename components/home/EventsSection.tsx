"use client";

import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";

const LUMA_SRC =
  "https://lu.ma/embed/calendar/cal-K1JcFGP2bDDKmmj/events?compact=true&lt=light";

export default function EventsSection() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal>
          <p className="text-center font-body text-[16px] font-medium text-muted mb-8 md:mb-10">
            Part of the w3.hub Family
          </p>

          {/* Compact card: heading column (left) + scrollable event list (right) */}
          <div className="relative flex flex-col md:flex-row overflow-hidden rounded-3xl bg-white border border-warm-grey shadow-[0px_3px_0px_#DDD8D4]">
            {/* Left: heading + CTA */}
            <div className="shrink-0 md:w-[320px] p-6 md:p-8 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="font-body text-[14px] font-bold uppercase tracking-[0.05em] text-ink/80">
                    Events
                  </span>
                </div>
                <h2 className="mt-2.5 font-display text-[28px] sm:text-[32px] font-extrabold leading-[1.15] md:leading-[40px] text-ink">
                  All upcoming
                  <br />
                  Events
                </h2>
              </div>

              <Link
                href="https://lu.ma/w3hub"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3.5 self-start rounded-full bg-mint pl-5 pr-[3px] py-[3px] hover:bg-[#a6f0b7] transition-colors"
              >
                <span className="font-body text-[16px] font-medium text-ink">
                  See all events
                </span>
                <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-ink text-white">
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
            </div>

            {/* Right: live event list — scrolls internally on hover */}
            <div className="flex-1 border-t md:border-t-0 md:border-l border-warm-grey bg-[#F7F8F9]">
              <iframe
                src={LUMA_SRC}
                title="Upcoming w3.hub events"
                className="block w-full h-[300px] md:h-[320px] border-0"
                allowFullScreen
                tabIndex={0}
              />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
