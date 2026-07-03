import type { ReactNode } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";
import DottedDivider from "@/components/ui/DottedDivider";

const TRIAL_URL = "https://form.typeform.com/to/qdGDfsSN";

type Benefit = { title: string; body: string; icon: ReactNode };

function IconBuilder() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <path d="M16 3 3 9l13 6 13-6-13-6Z" />
      <path d="M3 16l13 6 13-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 22l13 6 13-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconDesk() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <rect x="3" y="6" width="26" height="14" rx="2.5" />
      <rect x="6" y="22" width="3" height="6" rx="1" />
      <rect x="23" y="22" width="3" height="6" rx="1" />
    </svg>
  );
}
function IconEvents() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <rect x="4" y="6" width="24" height="22" rx="3" />
      <rect x="9" y="3" width="2.6" height="6" rx="1.3" />
      <rect x="20.4" y="3" width="2.6" height="6" rx="1.3" />
      <rect x="8" y="15" width="4" height="4" rx="1" fill="#fff" />
      <rect x="14" y="15" width="4" height="4" rx="1" fill="#fff" />
      <rect x="20" y="15" width="4" height="4" rx="1" fill="#fff" />
    </svg>
  );
}
function IconCommunity() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <circle cx="11" cy="11" r="4.4" />
      <circle cx="22" cy="12.5" r="3.6" />
      <path d="M11 16.5c-4.4 0-8 3.1-8 7v2h16v-2c0-3.9-3.6-7-8-7Z" />
      <path d="M22 17c-1 0-1.9.2-2.7.6 2.2 1.6 3.7 4.1 3.7 7v1.4h6v-1.8c0-4-3.2-7.2-7-7.2Z" />
    </svg>
  );
}
function IconGuest() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <circle cx="16" cy="11" r="5" />
      <path d="M6 28v-1.5C6 21.8 10.5 18 16 18s10 3.8 10 8.5V28H6Z" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="12.5" fill="currentColor" />
      <path d="M16 9v7.5l5 3" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const BENEFITS: Benefit[] = [
  {
    title: "Builder Space",
    body: "Join a community of active developers and innovators collectively advancing frontier technologies.",
    icon: <IconBuilder />,
  },
  {
    title: "Co-Working",
    body: "Experience a productive atmosphere where focus and collaboration create the perfect balance.",
    icon: <IconDesk />,
  },
  {
    title: "Member Events",
    body: "Participate in regular industry gatherings that foster learning, networking, and innovation.",
    icon: <IconEvents />,
  },
  {
    title: "Community Space",
    body: "Connect with like-minded professionals in our thoughtfully designed collaborative environments.",
    icon: <IconCommunity />,
  },
  {
    title: "Guest Policy",
    body: "Bring colleagues and clients to our space with our flexible and accommodating visitor options.",
    icon: <IconGuest />,
  },
  {
    title: "24/7 Access",
    body: "Enjoy round-the-clock workspace entry exclusively for our dedicated fix desk membership holders.",
    icon: <IconClock />,
  },
];

export default function MemberBenefits() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mx-auto mb-12 max-w-[760px] text-center">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
            Benefits of Being a w3.hub Member
          </h2>
          <p className="mt-4 font-body text-[16px] font-medium leading-6 text-muted">
            We are a cornerstone of Berlin&apos;s startup community, fostering
            collaboration and growth.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <SectionReveal
              key={b.title}
              as="article"
              index={i}
              step={0.06}
              y={18}
              className="flex flex-col gap-2 rounded-3xl bg-white p-5 shadow-card ring-1 ring-warm-grey"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center text-ink">
                  {b.icon}
                </span>
                <h3 className="font-display font-extrabold text-ink text-[16px] leading-6">
                  {b.title}
                </h3>
              </div>
              <DottedDivider variant="light" />
              <p className="font-body text-[16px] leading-6 text-ink">{b.body}</p>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-12 flex justify-center">
          <PillButton href={TRIAL_URL} external size="lg">
            Apply For a Trial Day
          </PillButton>
        </SectionReveal>
      </div>
    </section>
  );
}
