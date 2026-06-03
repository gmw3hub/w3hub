import SectionReveal from "@/components/ui/SectionReveal";
import DottedDivider from "@/components/ui/DottedDivider";

type Plan = {
  name: string;
  price: string;
  unit?: string;
  tagline: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "The Club",
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
    price: "€275",
    unit: "net / month",
    tagline: "Get full 24/7 access to the entire building with premium perks.",
    features: [
      "24/7 Full Access to the entire building",
      "15 hours of Meeting Rooms included",
      "Global Roaming (2x/month at betahaus)",
      "30 days flexible cancellation",
    ],
    cta: "Secure Seat",
    href: "https://w3hub.cobot.me/membership_signup/new?plan_id=e5b792d7e58936ab0af8534ef1a44ede",
    featured: true,
  },
  {
    name: "Day Pass",
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
    price: "Custom",
    tagline: "Establish your team in a private suite customized to your company needs.",
    features: [
      "Private & secure office space",
      "All Pro Membership perks included",
      "6 months minimum commitment",
      "Business registration & mail service",
    ],
    cta: "Contact Us",
    href: "https://cal.com/quinn-w3/office",
  },
];

function CheckIcon({ dark }: { dark?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
      className={`mt-[3px] shrink-0 ${dark ? "text-mint" : "text-ink"}`}
    >
      <circle cx="9" cy="9" r="9" fill="currentColor" />
      <path
        d="M5.25 9.25 7.75 11.75 12.75 6.5"
        stroke={dark ? "#181a1c" : "#fff"}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const featured = plan.featured;
  const surface = featured ? "bg-ink-800 text-white" : "bg-white text-ink shadow-card ring-1 ring-warm-grey";
  const ctaCls = featured
    ? "bg-mint text-ink hover:bg-white"
    : "bg-ink-800 text-white hover:bg-ink-900";

  return (
    <article
      className={`flex h-full flex-col gap-5 rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 ${surface}`}
    >
      <div className="flex flex-col gap-1">
        <h3 className="font-display text-[18px] font-extrabold leading-6">
          {plan.name}
        </h3>
        <p className={`flex items-baseline gap-1.5 ${featured ? "text-white" : "text-ink"}`}>
          <span className="font-display text-[30px] font-extrabold leading-none">
            {plan.price}
          </span>
          {plan.unit && (
            <span
              className={`font-body text-[14px] font-medium ${
                featured ? "text-white/70" : "text-muted"
              }`}
            >
              {plan.unit}
            </span>
          )}
        </p>
      </div>

      <p
        className={`font-body text-[15px] leading-6 ${
          featured ? "text-white/80" : "text-muted"
        }`}
      >
        {plan.tagline}
      </p>

      <DottedDivider
        variant={featured ? "light" : "dark-tight"}
        className="h-[5px] w-full"
      />

      <ul className="flex flex-1 flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 font-body text-[15px] leading-6">
            <CheckIcon dark={featured} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={plan.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-[16px] font-medium leading-5 transition-colors ${ctaCls}`}
      >
        {plan.cta}
      </a>
    </article>
  );
}

export default function MembershipPlans() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, i) => (
            <SectionReveal key={plan.name} index={i} step={0.08} y={20} className="h-full">
              <PlanCard plan={plan} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
