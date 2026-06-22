import SectionReveal from "@/components/ui/SectionReveal";
import FaqItem from "@/components/sections/FaqItem";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "What is a w3.hub Ecosystem Tour?",
    a: "A curated, insider-led visit to Berlin's Web3 ecosystem, hosted from w3.hub at Gleisdreieck Park. Depending on the format, it combines a tour of the hub, briefings on the onchain economy, meetings with founders and funds, and networking.",
  },
  {
    q: "Who are the tours for?",
    a: "Corporate and innovation teams, investors and funds, universities and visiting delegations, and public-sector groups — anyone who wants direct, grounded exposure to where Web3, crypto and AI are actually being built.",
  },
  {
    q: "How long does a tour take?",
    a: "Anywhere from a two-hour Sneak Peek to a multi-day Tailor-Made programme. The Innovation Snapshot is a half day. We shape the length around your goals and schedule.",
  },
  {
    q: "What does a tour cost?",
    a: "Because every tour is tailored to your group, we share pricing on request once we've scoped your visit. Tell us your format, group size and goals and we'll send a quote.",
  },
  {
    q: "Can the programme be customised?",
    a: "Yes. The Tailor-Made format is fully bespoke — workshops, roundtables, investor and partner introductions, optional dinners and external site visits. Even the shorter formats are adapted to your sector and interests.",
  },
  {
    q: "How do we book?",
    a: "Send us an enquiry with your preferred dates and group details. We'll confirm availability, scope the agenda with you, and lock in the visit.",
  },
];

export default function EcosystemFaq() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mb-8 md:mb-12 max-w-[820px]">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px] tracking-tight">
            Tour FAQ
          </h2>
          <p className="mt-4 font-body text-[16px] leading-6 font-medium text-muted">
            Everything you need to plan your visit
          </p>
        </SectionReveal>

        <div className="flex flex-col gap-5">
          {FAQS.map((qa, i) => (
            <FaqItem key={qa.q} q={qa.q} a={qa.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
