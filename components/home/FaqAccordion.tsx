"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { easeOutSoft } from "@/lib/animations";

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
    a: "w3.hub is operated by w3.group — Germany's leading Web3 ecosystem, comprising an investment arm, an infrastructure provider and a media house.",
  },
];

function AccordionItem({ qa, index }: { qa: QA; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: easeOutSoft, delay: index * 0.04 }}
      className="rounded-3xl bg-white px-6 md:px-7 shadow-[0_3px_0_#DDD8D4] backdrop-blur-[2px]"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-4 text-left"
      >
        <span className="font-display font-extrabold text-ink text-[16px] leading-6">
          {qa.q}
        </span>
        <motion.span
          aria-hidden
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2, ease: easeOutSoft }}
          className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: easeOutSoft }}
            className="overflow-hidden"
          >
            <div
              aria-hidden
              className="h-[2px] w-full bg-[radial-gradient(circle,_#C9C4BF_1px,_transparent_1.2px)] bg-repeat-x [background-size:12px_2px]"
            />
            <p className="pt-4 pb-4 font-body text-[16px] leading-6 text-ink/80 max-w-[68ch]">
              {qa.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqAccordion() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[800px] px-5">
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
            <AccordionItem key={qa.q} qa={qa} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
