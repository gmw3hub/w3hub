import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";

const TYPEFORM_URL = "https://form.typeform.com/to/upEoDN4G";

// Venue gallery — 3×3 grid, order taken from the live event-space page.
const PHOTOS: { src: string; alt: string }[] = [
  { src: "/images/venue/venue-1.avif", alt: "Open factory-loft event floor at w3.hub Berlin" },
  { src: "/images/venue/venue-2.avif", alt: "Conference setup with rows of chairs and lounge seating" },
  { src: "/images/venue/venue-3.avif", alt: "Lounge corner with sofas and tall arched windows" },
  { src: "/images/venue/venue-4.avif", alt: "Exposed-brick hall with stage lighting" },
  { src: "/images/venue/venue-5.avif", alt: "Modular lounge seating in the main hall" },
  { src: "/images/venue/venue-6.avif", alt: "Teal bar in the w3.hub event space" },
  { src: "/images/venue/venue-7.avif", alt: "Panel seating with plants and a central column" },
  { src: "/images/venue/venue-8.avif", alt: "w3.hub neon sign over the event floor" },
  { src: "/images/venue/venue-9.avif", alt: "Kitchen and bar area with flowers and a teal table" },
];

export default function TheVenue() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal>
          <h2 className="font-display font-extrabold text-ink text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.05]">
            The Venue
          </h2>
          <p className="mt-4 max-w-[640px] font-body text-[16px] font-medium leading-7 text-muted md:text-[18px]">
            Two 500 sqm factory lofts in Berlin Kreuzberg. The leading event location
            for AI, robotics, quantum and blockchain conferences, hackathons,
            meetups and demo days.
          </p>
          <div className="mt-7 md:mt-8">
            <PillButton href={TYPEFORM_URL} external size="lg">
              Request Event Space
            </PillButton>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-10 rounded-3xl bg-white p-3 shadow-card ring-1 ring-black/10 md:mt-12 md:p-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-3.5">
            {PHOTOS.map((p, i) => (
              <div
                key={p.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-warm-grey"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 800px) 240px, 45vw"
                  className="object-cover"
                  priority={i < 3}
                />
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
