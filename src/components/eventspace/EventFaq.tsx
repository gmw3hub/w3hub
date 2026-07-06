import SectionReveal from "@/components/ui/SectionReveal";
import FaqItem from "@/components/sections/FaqItem";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "What does it cost to rent the w3.hub event space?",
    a: "Every event is scoped to your format and headcount, so pricing is on request. Send us your date, headcount and format and we'll come back with an exact quote.",
  },
  {
    q: "What's included?",
    a: "The venue, a full AV setup and our in-house events team. Bar, kitchen and catering are available on request.",
  },
  {
    q: "How many people fit into the event space?",
    a: "Up to 250 guests standing or 100 seated, across two 500 sqm factory lofts in Berlin Kreuzberg.",
  },
  {
    q: "Can we book catering?",
    a: "Yes, through our partners. Tell us your headcount and dietary needs and we'll arrange it.",
  },
  {
    q: "How far in advance should we book?",
    a: "Two to three months for peak dates during Berlin Blockchain Week and Q4. Shorter notice often works outside those windows.",
  },
  {
    q: "Can we host multi-day hackathons?",
    a: "Yes. The venue supports 24/7 access for multi-day hackathons, with overnight logistics on request.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function EventFaq() {
  return (
    <section className="w-full bg-paper py-16 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mb-8 md:mb-12 max-w-[820px]">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px] tracking-tight">
            Event FAQ
          </h2>
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
