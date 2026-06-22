import SectionReveal from "@/components/ui/SectionReveal";
import { TIERS, TOUR_ENQUIRY_URL, type Tier } from "./tour-data";

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="mt-[3px] shrink-0 text-ink"
    >
      <path
        d="M3 8.25 6.25 11.5 13 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  return (
    <article
      className={`flex h-full flex-col gap-5 rounded-3xl bg-white p-6 ring-1 transition-transform duration-300 hover:-translate-y-1 ${
        tier.featured
          ? "ring-2 ring-mint shadow-[0_18px_50px_-18px_rgba(16,20,34,0.28)]"
          : "ring-black/5 shadow-[0_14px_40px_-18px_rgba(16,20,34,0.18)]"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className={`inline-flex w-fit items-center rounded-full px-3 py-1 font-body text-[13px] font-semibold ${tier.badge}`}
        >
          {tier.name}
        </span>
        {tier.featured && (
          <span className="inline-flex items-center rounded-full bg-mint px-3 py-1 font-body text-[12px] font-semibold text-ink">
            Most popular
          </span>
        )}
      </div>

      <p className="flex items-baseline gap-1.5 text-ink">
        <span className="font-display text-[28px] font-extrabold leading-none">
          On request
        </span>
      </p>
      <p className="-mt-3 font-body text-[14px] font-medium text-muted">
        {tier.duration}
      </p>

      <p className="font-body text-[15px] leading-6 text-muted">{tier.tagline}</p>

      <h4 className="font-display text-[20px] font-extrabold leading-6 text-ink">
        Includes
      </h4>

      <ul className="flex flex-col gap-3">
        {tier.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2.5 font-body text-[15px] leading-6 text-ink"
          >
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={TOUR_ENQUIRY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-mint px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-[#9bf0af]"
      >
        {tier.cta}
      </a>
    </article>
  );
}

export default function TourTiers() {
  return (
    <section id="tiers" className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mx-auto mb-12 max-w-[760px] text-center">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
            Choose Your Tour
          </h2>
          <p className="mt-4 font-body text-[16px] font-medium leading-6 text-muted">
            Three starting points — every tour is tailored to your team, so
            pricing is shared on request once we&apos;ve scoped your visit.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TIERS.map((tier, i) => (
            <SectionReveal key={tier.name} index={i} step={0.08} y={20} className="h-full">
              <TierCard tier={tier} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
