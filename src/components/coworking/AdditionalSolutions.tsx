import type { ReactNode } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import DottedDivider from "@/components/ui/DottedDivider";
import DoodleBackdrop from "@/components/ui/DoodleBackdrop";
import DashedFrame from "@/components/ui/DashedFrame";
import PillButton from "@/components/ui/PillButton";

const BOOK_URL =
  "https://w3hub.cobot.me/book/29341a3ea9eb11778694f3c80983ea8e/resources";

type Solution = { title: string; body: string; icon: ReactNode };

const SOLUTIONS: Solution[] = [
  {
    title: "Meeting Rooms",
    body: "Collaborate with clients and team members in our professional meeting spaces designed for productivity.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="2.5" y="6.5" width="12" height="11" rx="2.5" fill="currentColor" />
        <path d="M16 10.5 21 7.5v9l-5-3v-2Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Event Space",
    body: "Host impactful gatherings, workshops, hackathons and networking events in our versatile event & community venue.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 10v4a1.5 1.5 0 0 0 1.5 1.5H7l1 4.5h2l-1-4.5 9 4V6L9 10H4Z"
          fill="currentColor"
        />
        <path d="M19.5 10.5a2.5 2.5 0 0 1 0 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Biz Address",
    body: "Establish your professional presence with our business address solution for mail handling and business registration.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="5.5" width="18" height="13" rx="2.5" fill="currentColor" />
        <path d="m5.5 8.5 6.5 4.5 6.5-4.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function SolutionCard({ s }: { s: Solution }) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_14px_40px_-22px_rgba(16,20,34,0.22)] ring-1 ring-black/5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink-800 text-white">
          {s.icon}
        </span>
        <h3 className="font-display text-[20px] font-extrabold leading-6 text-ink">
          {s.title}
        </h3>
      </div>
      <DottedDivider variant="dark-tight" className="h-[5px] w-full" />
      <p className="font-body text-[15px] leading-6 text-muted">{s.body}</p>
    </article>
  );
}

export default function AdditionalSolutions() {
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
                Additional Solutions
              </h2>
              <p className="mt-4 font-body text-[16px] font-medium leading-6 text-muted">
                We are a cornerstone of Berlin&apos;s startup community,
                fostering collaboration and growth.
              </p>
            </SectionReveal>

            <div className="mx-auto grid max-w-[940px] grid-cols-1 gap-5 md:grid-cols-3">
              {SOLUTIONS.map((s, i) => (
                <SectionReveal key={s.title} index={i} step={0.08} y={20} className="h-full">
                  <SolutionCard s={s} />
                </SectionReveal>
              ))}
            </div>

            <SectionReveal index={3} step={0.08} className="mt-12 flex justify-center">
              <PillButton href={BOOK_URL} external size="lg">
                Find &amp; Book Resources
              </PillButton>
            </SectionReveal>
          </div>
        </DashedFrame>
      </div>
    </section>
  );
}
