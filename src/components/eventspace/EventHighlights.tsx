import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/badge";

type EventGroup = { label: string; photos: string[] };

const DIR = "/images/eventspace/highlights";

// Each event = one framed card with a mint badge + a 3-photo row.
// Photos + order taken from the live event-space page.
const EVENTS: EventGroup[] = [
  {
    label: "Solana 24h Hackathon",
    photos: [`${DIR}/solana-1.png`, `${DIR}/solana-2.png`, `${DIR}/solana-3.png`],
  },
  {
    label: "Celestia x w3.fund Community Event",
    photos: [`${DIR}/celestia-1.png`, `${DIR}/celestia-2.png`, `${DIR}/celestia-3.png`],
  },
  {
    label: "Cardano Hackathon",
    photos: [`${DIR}/cardano-1.png`, `${DIR}/cardano-2.png`, `${DIR}/cardano-3.png`],
  },
];

export default function EventHighlights() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mb-10 text-center md:mb-14">
          <h2 className="font-display font-extrabold text-ink text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.05]">
            Event Highlights at w3.hub
          </h2>
        </SectionReveal>

        <div className="flex flex-col gap-8 md:gap-10">
          {EVENTS.map((ev, i) => (
            <SectionReveal key={ev.label} index={i} step={0.08} y={20}>
              <div className="rounded-3xl bg-white p-3 shadow-card ring-1 ring-black/10 md:p-4">
                <div className="px-1 pt-1">
                  <Badge variant="eyebrow-mint">{ev.label}</Badge>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-4 md:gap-4">
                  {ev.photos.map((src, j) => (
                    <div
                      key={src}
                      className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-warm-grey"
                    >
                      <Image
                        src={src}
                        alt={`${ev.label}, photo ${j + 1}`}
                        fill
                        sizes="(min-width: 800px) 360px, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
