import type { ReactNode } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import DottedDivider from "@/components/ui/DottedDivider";
import DoodleBackdrop from "@/components/ui/DoodleBackdrop";
import DashedFrame from "@/components/ui/DashedFrame";

type Reason = { title: string; body: string; icon: ReactNode };

const REASONS: Reason[] = [
  {
    title: "Flexible formats",
    body: "From a two-hour sneak peek to a multi-day deep dive, shaped around your goals and schedule.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Insider-led",
    body: "Hosted by the people who actually run Berlin's Web3 scene, not a scripted city walk.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="8" r="3.5" fill="currentColor" />
        <path d="M5 19c0-3.6 3.1-6 7-6s7 2.4 7 6" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Unrivalled network",
    body: "Direct access to the founders, funds, protocols and builders shaping the onchain economy.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="6" cy="6" r="2.4" fill="currentColor" />
        <circle cx="18" cy="6" r="2.4" fill="currentColor" />
        <circle cx="12" cy="18" r="2.4" fill="currentColor" />
        <path d="M7.6 7.4 11 15.4M16.4 7.4 13 15.4M8 6h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Inspiring venue",
    body: "Set inside w3.hub at Gleisdreieck Park, a living, working hub for Web3, AI and frontier tech.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 20V9.5L12 4l8 5.5V20H4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function ReasonCard({ r }: { r: Reason }) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_14px_40px_-22px_rgba(16,20,34,0.22)] ring-1 ring-black/5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink-800 text-white">
          {r.icon}
        </span>
        <h3 className="font-display text-[20px] font-extrabold leading-6 text-ink">
          {r.title}
        </h3>
      </div>
      <DottedDivider variant="dark-tight" className="h-[5px] w-full" />
      <p className="font-body text-[15px] leading-6 text-muted">{r.body}</p>
    </article>
  );
}

export default function WhyTours() {
  return (
    <section className="relative w-full overflow-hidden">
      <DoodleBackdrop />

      <div className="relative mx-auto max-w-[1136px] px-4 py-14 sm:px-6 md:py-20">
        <DashedFrame
          className="shadow-[0_28px_70px_-34px_rgba(16,20,34,0.22)]"
          innerClassName="relative overflow-hidden px-6 py-14 md:px-12 md:py-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "url(/images/features/bg-doodle.webp)",
              backgroundRepeat: "repeat",
              backgroundSize: "500px",
            }}
          />

          <div className="relative">
            <SectionReveal className="mx-auto mb-12 max-w-[760px] text-center">
              <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
                Why a w3.hub Ecosystem Tour
              </h2>
              <p className="mt-4 font-body text-[16px] font-medium leading-6 text-muted">
                Direct access to the people and projects building Europe&apos;s
                onchain future. All designed, hosted and curated by w3.hub.
              </p>
            </SectionReveal>

            <div className="mx-auto grid max-w-[940px] grid-cols-1 gap-5 sm:grid-cols-2">
              {REASONS.map((r, i) => (
                <SectionReveal key={r.title} index={i} step={0.08} y={20} className="h-full">
                  <ReasonCard r={r} />
                </SectionReveal>
              ))}
            </div>
          </div>
        </DashedFrame>
      </div>
    </section>
  );
}
