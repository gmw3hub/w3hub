import SectionReveal from "@/components/ui/SectionReveal";
import FaqItem from "./FaqItem";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "What is w3.hub?",
    a: "w3.hub is Berlin's home for Web3, AI and frontier tech — a coworking and event space at Gleisdreieck Park that brings together founders, builders, investors and community organisers under one roof.",
  },
  {
    q: "Where is w3.hub located?",
    a: "We're at Möckernstraße 120 in Berlin Kreuzberg, right next to Gleisdreieck Park. Closest stations are Möckernbrücke (U1, U7), Gleisdreieck (U2, U3) and Anhalter Bahnhof (S1, S2, S25, S26).",
  },
  {
    q: "Who uses w3.hub?",
    a: "Our members are Web3, crypto, blockchain and AI teams — from solo founders and freelancers to small companies and visiting collectives — plus the community organisers who run regular meetups, demo days, hackathons and dinners in our event space.",
  },
  {
    q: "What does a membership cost?",
    a: "Pricing depends on the plan you pick — flex desks, dedicated desks or private offices. Reach out via the membership page for current rates and availability.",
  },
  {
    q: "Can I book w3.hub for an event?",
    a: "Yes. Our event space is configurable for meetups, workshops, dinners and larger conferences, with full tech setup and optional community promotion. Use the Event Space page to enquire.",
  },
  {
    q: "Who runs w3.hub?",
    a: "w3.hub is a collaboration between Betahaus, Bauwerk and w3.group — bringing together established coworking expertise and Germany's leading Web3 ecosystem under one roof.",
  },
];

export default function Faq() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-28">
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
