"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { easeOutSoft } from "@/lib/animations";

type Feature = { title: string; body: string };

// Copy verbatim from figma-1400.rtf
const FEATURES: Feature[] = [
  {
    title: "Web3 Native Space",
    body: "Be exclusively surrounded by Web3 professionals and events. Work alongside peers who speak your language.",
  },
  {
    title: "Bang For Your Buck",
    body: "w3.hub is more than a space to work: Become part of a thriving ecosystem of web3 innovators and resources.",
  },
  {
    title: "Community First",
    body: "Our members shape our priorities and culture. We've built an environment where your growth is supported by the community.",
  },
  {
    title: "Prime Location & Setup",
    body: "Be productive with our ergonomic work-setup. Events are hosted in our Berlin-style space, perfect for celebrating Web3.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <SectionReveal className="max-w-[820px] mb-12 md:mb-16">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px] tracking-tight">
            Berlin&apos;s Premier Coworking &amp; Event
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            Ecosystem for Web3
          </h2>
          <p className="mt-4 font-body text-[16px] leading-6 font-medium text-muted">
            The w3.hub is your gateway to Berlin&apos;s Web3 ecosystem
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-10 md:gap-y-14">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: easeOutSoft, delay: i * 0.07 }}
            >
              <div className="mb-4 inline-flex h-1 w-10 rounded-full bg-accent" aria-hidden />
              <h3 className="font-display font-extrabold text-ink text-[16px] leading-6">
                {f.title}
              </h3>
              <p className="mt-3 font-body text-[16px] leading-6 text-ink">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
