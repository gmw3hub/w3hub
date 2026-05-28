"use client";

import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";

export default function LocationDetails() {
  const mapsHref =
    "https://www.google.com/maps/place/M%C3%B6ckernstra%C3%9Fe+120,+10963+Berlin/";

  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <SectionReveal className="mb-10 md:mb-14">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px] tracking-tight">
            Location Details
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.1fr] gap-8 md:gap-10">
          <SectionReveal className="rounded-3xl bg-white ring-1 ring-black/[0.04] shadow-[0_8px_32px_-16px_rgba(16,20,34,0.12)] p-7 md:p-9 lg:p-10 flex flex-col gap-7">
            <div>
              <h3 className="font-display font-extrabold text-ink text-[16px] leading-6">
                Building &amp; Surroundings
              </h3>
              <ul className="mt-4 space-y-2 font-body text-[16px] leading-6 text-ink">
                <li className="flex gap-2">
                  <span aria-hidden className="text-accent">•</span>
                  3 floors, 500sqm each
                </li>
                <li className="flex gap-2">
                  <span aria-hidden className="text-accent">•</span>
                  Historic building constructed in 1905
                </li>
                <li className="flex gap-2">
                  <span aria-hidden className="text-accent">•</span>
                  Renovated in 2022
                </li>
                <li className="flex gap-2">
                  <span aria-hidden className="text-accent">•</span>
                  Located at Gleisdreieck Park
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-extrabold text-ink text-[16px] leading-6">
                Public Transportation
              </h3>
              <ul className="mt-4 space-y-2 font-body text-[16px] leading-6 text-ink">
                <li>
                  <span className="font-bold">U-Bahn:</span> U1, U7 at Möckernbrücke / U2, U3 from Gleisdreieck Park
                </li>
                <li>
                  <span className="font-bold">S-Bahn:</span> S1, S2, S25, S26 at Anhalter Bahnhof
                </li>
              </ul>
            </div>

            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-flex items-center gap-1 text-[14px] font-medium text-[#1A73E8] hover:underline"
              style={{ fontFamily: "Roboto, Arial, sans-serif" }}
            >
              Open in Maps
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M5 3h6v6M11 3L4 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </SectionReveal>

          <SectionReveal className="relative overflow-hidden rounded-3xl ring-1 ring-black/[0.04] shadow-[0_8px_32px_-16px_rgba(16,20,34,0.12)] aspect-[16/12] lg:aspect-auto min-h-[320px]">
            {/* Static map / building image placeholder until an embed is wired */}
            <Image
              src="/images/a7NKBJLRjWtU9cJavEWbiFR4Cc.png"
              alt="w3.hub building at Möckernstraße 120, Berlin"
              fill
              sizes="(min-width: 1200px) 720px, 100vw"
              className="object-cover"
            />
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-4 py-2 text-[14px] font-medium text-ink shadow-md hover:bg-white"
            >
              Berlin, Möckernstraße 120
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M5 3h6v6M11 3L4 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
