"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { easeOutSoft } from "@/lib/animations";
import PillButton from "@/components/ui/PillButton";

// Smallest downloaded images are logo-shaped. Mapping to real partner names
// pending — these are picked by file size to keep the layout populated.
const PARTNER_LOGOS = [
  "/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
  "/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
  "/images/mKkHg4zjWie0a2gErYvJ0G9nk.png",
  "/images/wgestw1MeQtJzy04RZQ5ziRfVmg.png",
  "/images/m0ZNZsXT1VHqNLq8H8XAIfNhui8.png",
  "/images/U3hL1B5bTvMeUcJpHhiUeDIt6g.png",
  "/images/VaEkvzHMO4lj1llh1jQtUphkipg.png",
  "/images/oWLRwFAsMARSZ6yrh1uXKNgIg.png",
  "/images/bfQYajgAUFGPNmzTcMlrbH6JIU.png",
  "/images/GjHiSp0xprENq98tKiwGxrrfebs.png",
  "/images/Ic9uuri1WjHCFylIornEa6au4.png",
  "/images/7trINXt5xoZZuyyZ9LxU2fuOFMc.png",
];

export default function PartnersSection() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <SectionReveal className="max-w-[820px] mb-10 md:mb-14">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px] tracking-tight">
            Our House Partners
          </h2>
          <p className="mt-4 font-body text-[16px] leading-6 font-medium text-muted">
            Meet our house partners who, together with our community, form the backbone of the w3.hub, bringing expertise and opportunities to the ecosystem.
          </p>
        </SectionReveal>

        <SectionReveal className="rounded-3xl bg-white shadow-[0_8px_32px_-16px_rgba(16,20,34,0.12)] ring-1 ring-black/[0.04] p-6 md:p-10 lg:p-14">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-10 items-center">
            {PARTNER_LOGOS.map((src, i) => (
              <motion.li
                key={src}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: easeOutSoft, delay: i * 0.04 }}
                className="flex items-center justify-center"
              >
                <div className="relative h-10 w-full opacity-80 hover:opacity-100 transition-opacity">
                  <Image
                    src={src}
                    alt="House partner"
                    fill
                    sizes="(min-width: 1400px) 160px, (min-width: 1200px) 200px, 30vw"
                    className="object-contain"
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal className="mt-10 md:mt-12 flex justify-center">
          <PillButton href="/about-us" variant="dark">
            Become a house partner
          </PillButton>
        </SectionReveal>
      </div>
    </section>
  );
}
