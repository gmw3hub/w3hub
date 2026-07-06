import SmartLink from "@/components/ui/SmartLink";
import SectionReveal from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/badge";

type Member = {
  name: string;
  role: string;
  /** Link to the member's Community Alpha feature. */
  href: string;
  /** Avatar accent (bg + text) — pick from the set below. */
  accent: string;
};

// Add new member highlights here. Initials are derived from the name.
const MEMBERS: Member[] = [
  {
    name: "Imke Ohms",
    role: "Hacker School",
    href: "https://w3communityalpha.beehiiv.com/p/i-have-to-admit-the-change",
    accent: "bg-[#cde6f7] text-[#1f5b86]",
  },
  {
    name: "Chloe White",
    role: "Former financial regulator",
    href: "https://w3communityalpha.beehiiv.com/p/i-have-a-secret-for-your-wallet",
    accent: "bg-[#e1d7f6] text-[#5a3fa0]",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function MemberCard({ m }: { m: Member }) {
  return (
    <SmartLink
      href={m.href}
      className="group flex h-full flex-col gap-4 rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/10 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center gap-4">
        <span
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-[18px] font-extrabold ${m.accent}`}
        >
          {initials(m.name)}
        </span>
        <div className="flex flex-col">
          <h3 className="font-display text-[20px] font-extrabold leading-6 text-ink">
            {m.name}
          </h3>
          <p className="font-body text-[14px] font-medium leading-5 text-muted">
            {m.role}
          </p>
        </div>
      </div>

      <span className="mt-auto inline-flex items-center gap-1.5 font-body text-[15px] font-semibold text-ink">
        Read their story
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        >
          <path
            d="M3.5 8h9M9 4.5 12.5 8 9 11.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </SmartLink>
  );
}

export default function MemberHighlights() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mx-auto mb-10 flex max-w-[760px] flex-col items-center gap-4 text-center">
          <Badge variant="eyebrow-mint">From Community Alpha</Badge>
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
            Member highlights
          </h2>
          <p className="font-body text-[16px] font-medium leading-6 text-muted">
            New faces from the community, in their own words.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MEMBERS.map((m, i) => (
            <SectionReveal key={m.name} index={i % 3} step={0.08} y={20} className="h-full">
              <MemberCard m={m} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
