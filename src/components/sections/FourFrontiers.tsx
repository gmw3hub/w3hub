import Link from "next/link";
import type { ReactNode } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import DottedDivider from "@/components/ui/DottedDivider";

type Frontier = { title: string; body: string; icon: ReactNode };

const FRONTIERS: Frontier[] = [
  {
    title: "Artificial Intelligence",
    body: "From LLM hack nights to the AI Agents Summit: Berlin's AI builders meet, ship and demo at w3.hub.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3l1.6 4.1L18 8l-4.4 1.9L12 14l-1.6-4.1L6 8l4.4-.9L12 3Z" fill="currentColor" />
        <path d="M18 14l.9 2.3L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.7L18 14Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Robotics",
    body: "Hardware needs space. Our factory loft hosts robotics demos, workshops and the teams building embodied AI.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4.5" y="8" width="15" height="11" rx="3" fill="currentColor" />
        <path d="M12 4v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="3.2" r="1.4" fill="currentColor" />
        <circle cx="9.5" cy="13" r="1.6" fill="#fff" />
        <circle cx="14.5" cy="13" r="1.6" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "Quantum",
    body: "Where Berlin's quantum researchers and startups translate breakthroughs into companies.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.6" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    title: "Blockchain",
    body: "Our roots. Home of the Berlin Blockchain Festival and Europe's most active onchain builder community.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3.5" width="8" height="8" rx="2" fill="currentColor" />
        <rect x="13" y="3.5" width="8" height="8" rx="2" fill="currentColor" opacity="0.55" />
        <rect x="8" y="12.5" width="8" height="8" rx="2" fill="currentColor" opacity="0.8" />
      </svg>
    ),
  },
];

function FrontierCard({ f }: { f: Frontier }) {
  return (
    <Link
      href="/event-calendar"
      className="group flex h-full flex-col gap-4 rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/10 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-800 text-white">
          {f.icon}
        </span>
        <h3 className="font-display text-[20px] font-extrabold leading-6 text-ink sm:text-[22px]">
          {f.title}
        </h3>
      </div>
      <DottedDivider variant="dark-tight" className="h-[5px] w-full" />
      <p className="font-body text-[15px] leading-6 text-muted">{f.body}</p>
    </Link>
  );
}

export default function FourFrontiers() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1000px] px-5 md:px-8">
        <SectionReveal className="mx-auto mb-12 max-w-[760px] text-center">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
            One roof. Four frontiers.
          </h2>
          <p className="mt-4 font-body text-[16px] font-medium leading-6 text-muted">
            w3.hub brings Berlin&apos;s deep tech scene together — four verticals,
            one community.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {FRONTIERS.map((f, i) => (
            <SectionReveal key={f.title} index={i} step={0.08} y={20} className="h-full">
              <FrontierCard f={f} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
