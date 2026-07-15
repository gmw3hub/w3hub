import SectionReveal from "@/components/ui/SectionReveal";
import FaqItem from "./FaqItem";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "What is w3.hub?",
    a: "w3.hub is Berlin's innovation & startup hub and builder club for AI, robotics, quantum and blockchain. 2,500 sqm of coworking and event space in a factory loft in Berlin Kreuzberg (Möckernstraße 120).",
  },
  {
    q: "Where is w3.hub located?",
    a: "We're at Möckernstraße 120 in Berlin Kreuzberg, right next to Gleisdreieck Park. Closest stations are Möckernbrücke (U1, U7), Gleisdreieck (U2, U3) and Anhalter Bahnhof (S1, S2, S25, S26).",
  },
  {
    q: "Who uses w3.hub?",
    a: "Founders, engineers and researchers in AI, robotics, quantum and blockchain, plus startups, VCs and creatives from Berlin and abroad.",
  },
  {
    q: "What does a membership cost?",
    a: "Pricing depends on the plan you pick: flex desks, dedicated desks or private offices. Reach out via the membership page for current rates and availability.",
  },
  {
    q: "Can I book w3.hub for an event?",
    a: "Yes. Two 500 sqm event lofts for tech conferences, hackathons, meetups, panels and private dinners, up to 250 guests standing or 100 seated. Open to members and external clients.",
  },
  {
    q: "Who runs w3.hub?",
    a: "w3.hub is operated by w3.group, a leading frontier tech ecosystem in Germany, comprising an investment arm, an infrastructure provider and a media house.",
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

export default function Faq() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mb-8 md:mb-12 max-w-[820px]">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px] tracking-tight">
            FAQ
          </h2>
          <p className="mt-4 font-body text-[16px] leading-6 font-medium text-muted">
            Got questions? We&apos;ve got the answers
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
