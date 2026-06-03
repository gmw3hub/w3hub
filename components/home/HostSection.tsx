"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";

const DOTTED: React.CSSProperties = {
  backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.30) 2px, transparent 2.3px)",
  backgroundSize: "11.87px 5px",
  backgroundRepeat: "repeat-x",
  backgroundPosition: "left center",
};

export default function HostSection() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto flex max-w-[1136px] flex-col items-center px-5 md:px-8">
        {/* Header: mint badge + heading, centered */}
        <SectionReveal className="flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center rounded-full bg-mint px-3 py-1 font-body text-[14px] font-bold uppercase leading-6 tracking-[0.05em] text-black/80">
            part of w3.group
          </span>
          <h2 className="font-display font-extrabold text-ink text-[32px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[48px]">
            About the host
          </h2>
        </SectionReveal>

        {/* Card: image left (fills height), text right */}
        <SectionReveal className="mt-10 w-full">
          <div className="flex flex-col overflow-hidden rounded-3xl bg-white p-2 shadow-[0px_3px_0px_#DDD8D4] ring-1 ring-black/10 md:flex-row md:items-stretch">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl md:aspect-auto md:w-[472px] md:shrink-0">
              <Image
                src="/images/JALlzNO0QwsmOaHL6qWDlv6twbA.jpg"
                alt="The w3.group team in Berlin"
                fill
                sizes="(min-width: 768px) 472px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-4 px-4 py-6 md:px-6 md:py-8">
              <h3 className="font-display font-extrabold text-ink text-[26px] sm:text-[30px] leading-[1.12]">
                Fueling Web3
                <br />
                from Berlin
              </h3>

              <div className="h-[5px] w-full" style={DOTTED} aria-hidden />

              <p className="font-body text-[16px] leading-6 text-ink">
                w3.group is the leading Web3 ecosystem in Germany and is comprised
                of an investment arm, an infrastructure provider as well as a media
                house with strong network effects.
              </p>

              <Link
                href="https://w3.group"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-1 inline-flex items-center gap-3.5 self-start rounded-full bg-[#181A1C] py-[3px] pl-5 pr-[3px]"
              >
                <span className="font-body text-[16px] font-medium leading-5 text-white">
                  Learn about w3.group
                </span>
                <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-[#181A1C] transition-colors group-hover:bg-mint">
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" aria-hidden>
                    <path
                      d="M1 1l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
