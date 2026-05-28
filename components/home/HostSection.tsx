"use client";

import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";

export default function HostSection() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr,1fr] gap-10 lg:gap-16 items-center">
          <SectionReveal>
            <p className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.08em] text-ink/80">
              part of w3.group
            </p>
            <h2 className="mt-3 font-display font-extrabold text-ink text-[32px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[48px] tracking-tight">
              About the host
            </h2>

            <h3 className="mt-8 font-display font-extrabold text-ink text-[22px] md:text-[24px] leading-[1.15] md:leading-8">
              Fueling Web3<br className="hidden md:block" /> from Berlin
            </h3>
            <p className="mt-4 font-body text-[16px] leading-6 text-ink max-w-[44ch]">
              w3.group is the leading Web3 ecosystem in Germany and is comprised of an investment arm, an infrastructure provider as well as a media house with strong network effects.
            </p>

            <div className="mt-8">
              <PillButton href="https://w3.group" variant="dark">
                Learn about w3.group
              </PillButton>
            </div>
          </SectionReveal>

          <SectionReveal className="relative overflow-hidden rounded-3xl ring-1 ring-black/[0.04] shadow-[0_8px_32px_-16px_rgba(16,20,34,0.12)] aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/GC3dbv0bQoQI5cZ7Afsvmc0vlM.png"
              alt="w3.group hosting Web3 events in Berlin"
              fill
              sizes="(min-width: 1200px) 600px, 100vw"
              className="object-cover"
            />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
