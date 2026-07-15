import SectionReveal from "@/components/ui/SectionReveal";

type Plan = {
  name: string;
  badge: string;
  price: string;
  unit?: string;
  tagline: string;
  features: string[];
  cta: string;
  href: string;
};

const PLANS: Plan[] = [
  {
    name: "The Club",
    badge: "bg-[#f3e3c6] text-[#7a5a1f]",
    price: "€180",
    unit: "net / month",
    tagline: "Work from our vibrant Club Lounge during regular business hours.",
    features: [
      "Flex desk in the Club Lounge area",
      "Access Mon - Fri (09:00 to 17:00)",
      "Community events & Kitchen access",
      "30 days flexible cancellation",
    ],
    cta: "Secure Seat",
    href: "https://w3hub.cobot.me/membership_signup/new?plan_id=ea2974e0c9cf4d2ba5158a344be34a74",
  },
  {
    name: "The Pro",
    badge: "bg-[#cde6f7] text-[#1f5b86]",
    price: "€275",
    unit: "net / month",
    tagline: "Get full 24/7 access to the entire building with premium perks.",
    features: [
      "24/7 Full Access to the entire building",
      "15 hours of Meeting Rooms included",
      "High-speed fiber & community events",
      "30 days flexible cancellation",
    ],
    cta: "Secure Seat",
    href: "https://w3hub.cobot.me/membership_signup/new?plan_id=e5b792d7e58936ab0af8534ef1a44ede",
  },
  {
    name: "Day Pass",
    badge: "bg-[#e1d7f6] text-[#5a3fa0]",
    price: "€30",
    unit: "net / day",
    tagline: "Drop in for a single day of focused work and community vibes.",
    features: [
      "Access Mon - Fri (09:00 to 17:00)",
      "High-speed WiFi & Coffee/Tea",
      "Access to community areas & booths",
      "No commitment",
    ],
    cta: "Buy Pass",
    href: "https://w3hub.cobot.me/drop-in/9a69faf1dd0c0fe2e60336d2d02a0078#/29341a3ea9eb11778694f3c80983ea8e/drop-in-checkout/9a69faf1dd0c0fe2e60336d2d02a0078",
  },
  {
    name: "Office",
    badge: "bg-[#e9e7e3] text-ink/70",
    price: "On request",
    tagline: "Private offices for teams of 4 to 12, customised to your company.",
    features: [
      "Private & secure office for 4 to 12 people",
      "All Pro Membership perks included",
      "6 months minimum commitment",
      "Business registration & mail service",
    ],
    cta: "Contact Us",
    href: "https://cal.com/quinn-w3/office",
  },
];

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

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article className="flex h-full flex-col gap-5 rounded-3xl bg-white p-6 shadow-[0_14px_40px_-18px_rgba(16,20,34,0.18)] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1">
      <span
        className={`inline-flex w-fit items-center rounded-full px-3 py-1 font-body text-[13px] font-semibold ${plan.badge}`}
      >
        {plan.name}
      </span>

      <p className="flex items-baseline gap-1.5 text-ink">
        <span className="font-display text-[32px] font-extrabold leading-none">
          {plan.price}
        </span>
        {plan.unit && (
          <span className="font-body text-[14px] font-medium text-muted">
            {plan.unit}
          </span>
        )}
      </p>

      <p className="font-body text-[15px] leading-6 text-muted">{plan.tagline}</p>

      <h4 className="font-display text-[20px] font-extrabold leading-6 text-ink">
        Features
      </h4>

      <ul className="flex flex-col gap-3">
        {plan.features.map((f) => (
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
        href={plan.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-mint px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-[#9bf0af]"
      >
        {plan.cta}
      </a>
    </article>
  );
}

export default function MembershipPlans() {
  return (
    <section id="memberships" className="w-full scroll-mt-24 bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mx-auto mb-12 max-w-[760px] text-center">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
            Memberships Plans
          </h2>
          <p className="mt-4 font-body text-[16px] font-medium leading-6 text-muted">
            Choose from our range of membership plans designed for your needs -
            from flex desks to dedicated spaces, all competitively priced.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 min-[1024px]:grid-cols-4">
          {PLANS.map((plan, i) => (
            <SectionReveal
              key={plan.name}
              id={plan.name === "Office" ? "offices" : undefined}
              index={i}
              step={0.08}
              y={20}
              className={`h-full ${plan.name === "Office" ? "scroll-mt-24" : ""}`}
            >
              <PlanCard plan={plan} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
