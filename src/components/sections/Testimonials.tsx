import SmartLink from "@/components/ui/SmartLink";
import SectionReveal from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/badge";

type Quote = {
  quote: string;
  name: string;
  handle: string;
  role?: string;
  href: string;
  accent: string;
};

// Real community posts about w3.hub (verbatim, lightly tidied for reading).
const QUOTES: Quote[] = [
  {
    quote: "Name a better community space than w3.hub in Berlin. I'll wait.",
    name: "Alex Scharrer",
    handle: "@alex_scharrer",
    href: "https://x.com/alex_scharrer/status/1900207451556741253",
    accent: "bg-[#cde6f7] text-[#1f5b86]",
  },
  {
    quote:
      "Money is now open in Berlin. Major event at w3.hub as we keep rolling through Europe for USDC and EURC.",
    name: "Jeremy Allaire",
    handle: "@jerallaire",
    role: "Co-founder & CEO, Circle",
    href: "https://x.com/jerallaire/status/1839716207718482403",
    accent: "bg-[#e1d7f6] text-[#5a3fa0]",
  },
  {
    quote:
      "IRL > URL. w3.hub is what multichain networking should look like: Solana, Ethereum, Cardano, Base, Near, Stellar and Algorand all under one roof.",
    name: "thyme",
    handle: "@design_thyme",
    href: "https://x.com/design_thyme/status/1935658446482821627",
    accent: "bg-[#f3e3c6] text-[#7a5a1f]",
  },
];

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

function QuoteCard({ q }: { q: Quote }) {
  return (
    <SmartLink
      href={q.href}
      className="group flex h-full flex-col gap-5 rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/10 transition-transform duration-300 hover:-translate-y-1"
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden className="text-mint">
        <path d="M13 9c-3.3 1.4-5 4-5 8v6h7v-7h-3c0-2.4 1-4 3-4.8L13 9Zm12 0c-3.3 1.4-5 4-5 8v6h7v-7h-3c0-2.4 1-4 3-4.8L25 9Z" fill="currentColor" />
      </svg>

      <p className="flex-1 font-body text-[16px] leading-7 text-ink">{q.quote}</p>

      <div className="flex items-center gap-3">
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-[15px] font-extrabold ${q.accent}`}>
          {initials(q.name)}
        </span>
        <div className="flex flex-col">
          <span className="font-display text-[15px] font-extrabold leading-5 text-ink">
            {q.name}
          </span>
          <span className="font-body text-[13px] font-medium leading-4 text-muted">
            {q.role ?? q.handle}
          </span>
        </div>
      </div>
    </SmartLink>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mx-auto mb-10 flex max-w-[760px] flex-col items-center gap-4 text-center">
          <Badge variant="eyebrow-mint">Straight from the community</Badge>
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
            What builders say
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <SectionReveal key={q.handle} index={i} step={0.08} y={20} className="h-full">
              <QuoteCard q={q} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
