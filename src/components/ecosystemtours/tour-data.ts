// Single source for the tour enquiry/booking link — referenced from the hero,
// the tier cards and the closing CTA.
export const TOUR_ENQUIRY_URL = "https://cal.com/quinn-w3/15min";

export type Tier = {
  name: string;
  badge: string;
  duration: string;
  tagline: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const TIERS: Tier[] = [
  {
    name: "Sneak Peek",
    badge: "bg-[#f3e3c6] text-[#7a5a1f]",
    duration: "2 hours",
    tagline:
      "A guided walk-through of w3.hub with an ecosystem overview and one founder meeting.",
    features: [
      "Guided tour of the hub",
      "Web3 ecosystem 101 briefing",
      "One founder or operator meeting",
      "Open Q&A",
    ],
    cta: "Request a quote",
  },
  {
    name: "Innovation Snapshot",
    badge: "bg-[#cde6f7] text-[#1f5b86]",
    duration: "Half day",
    tagline:
      "A deeper half-day with curated speaker sessions, live Q&A and networking.",
    features: [
      "Everything in Sneak Peek",
      "2–3 curated speaker sessions",
      "Live Q&A + networking",
      "Coffee & lunch in the hub",
    ],
    cta: "Request a quote",
    featured: true,
  },
  {
    name: "Tailor-Made",
    badge: "bg-[#e1d7f6] text-[#5a3fa0]",
    duration: "1–5 days",
    tagline:
      "A fully custom programme with workshops, roundtables and partner visits.",
    features: [
      "Bespoke multi-day agenda",
      "Hands-on workshops & roundtables",
      "Investor & partner introductions",
      "Optional dinners & site visits",
    ],
    cta: "Talk to us",
  },
];
