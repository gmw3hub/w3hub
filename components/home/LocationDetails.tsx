"use client";

import SectionReveal from "@/components/ui/SectionReveal";

// Click target for "Open in Maps" (the real w3.hub place on Google Maps).
const MAPS_URL =
  "https://www.google.com/maps?ll=52.497989,13.380294&z=15&t=m&hl=en&gl=DE&mapclient=embed&cid=1832120701558086668";

// Embedded map centered on the w3.hub coordinates with a labelled pin.
const MAP_EMBED =
  "https://maps.google.com/maps?q=52.497989,13.380294(w3.hub)&z=15&hl=en&output=embed";

function BuildingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <rect x="4" y="3" width="11" height="18" rx="1.5" />
      <rect x="14" y="8" width="6" height="13" rx="1.5" />
      <g fill="#fff">
        <rect x="6.4" y="6" width="2" height="2" rx="0.3" />
        <rect x="10.4" y="6" width="2" height="2" rx="0.3" />
        <rect x="6.4" y="10" width="2" height="2" rx="0.3" />
        <rect x="10.4" y="10" width="2" height="2" rx="0.3" />
        <rect x="6.4" y="14" width="2" height="2" rx="0.3" />
        <rect x="10.4" y="14" width="2" height="2" rx="0.3" />
        <rect x="16.2" y="11" width="1.8" height="1.8" rx="0.3" />
        <rect x="16.2" y="14.6" width="1.8" height="1.8" rx="0.3" />
      </g>
    </svg>
  );
}

function TramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M5 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3l1.4 2.3a1 1 0 1 1-1.7 1L14 17h-4l-1.1 3.6a1 1 0 1 1-1.7-1L8 17a3 3 0 0 1-3-3V5Z" />
      <path d="M8 6h8a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" fill="#B5F7C4" />
      <circle cx="9" cy="14" r="1.2" fill="#B5F7C4" />
      <circle cx="15" cy="14" r="1.2" fill="#B5F7C4" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M5 3h6v6M11 3 4.5 9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LocationDetails() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1120px] px-5">
        <SectionReveal className="mb-10 text-center">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[48px]">
            Location Details
          </h2>
        </SectionReveal>

        <SectionReveal className="grid grid-cols-1 gap-2 rounded-[28px] bg-white p-2 shadow-[0px_3px_0px_#DDD8D4] ring-1 ring-black/10 lg:grid-cols-2">
          {/* Left: building info + transport */}
          <div className="flex flex-col gap-4 p-5 md:p-6">
            <div>
              <div className="flex items-center gap-2 text-ink">
                <BuildingIcon />
                <h3 className="font-display text-[18px] font-extrabold leading-6 text-ink">
                  Building &amp; Surroundings
                </h3>
              </div>
              <ul className="mt-4 flex flex-col gap-2.5 font-body text-[16px] leading-6 text-ink">
                {[
                  "3 floors, 500sqm each",
                  "Historic building constructed in 1905",
                  "Renovated in 2022",
                  "Located at Gleisdreieck Park",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#B2B2B2]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto rounded-2xl bg-mint p-5 md:p-6">
              <div className="flex items-center gap-2 text-ink">
                <TramIcon />
                <h3 className="font-display text-[18px] font-extrabold leading-6 text-ink">
                  Public Transportation
                </h3>
              </div>
              <div className="mt-4 flex flex-col gap-3 font-body text-[16px] leading-6 text-ink">
                <p>
                  <span className="font-bold">U-Bahn:</span> U1, U7 at Möckernbrücke /
                  U2, U3 from Gleisdreieck Park
                </p>
                <p>
                  <span className="font-bold">S-Bahn:</span> S1, S2, S25, S26 at
                  Anhalter Bahnhof
                </p>
              </div>
            </div>
          </div>

          {/* Right: live Google map */}
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-warm-grey">
            <iframe
              title="w3.hub location – Möckernstraße 120, Berlin"
              src={MAP_EMBED}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-[14px] font-medium text-[#1A73E8] shadow-[0_1px_4px_rgba(0,0,0,0.3)] hover:bg-white"
              style={{ fontFamily: "Roboto, Arial, sans-serif" }}
            >
              Open in Maps
              <ExternalIcon />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
