import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import { Card } from "@/components/ui/card";
import DottedDivider from "@/components/ui/DottedDivider";

type Highlight = {
  title: string;
  image: string;
  logo?: { src: string; alt: string; w: number; h: number };
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "SOLANA 24h hackathon",
    image: "/images/eventspace/highlight-solana-hackathon.webp",
    logo: { src: "/images/partners/solana.webp", alt: "Solana", w: 1749, h: 261 },
  },
  {
    title: "Celestia x w3.fund Community Event",
    image: "/images/eventspace/highlight-celestia-community.webp",
    logo: { src: "/images/partners/celestia.webp", alt: "Celestia", w: 789, h: 215 },
  },
  {
    title: "Cardano Hackathon",
    image: "/images/eventspace/highlight-cardano-hackathon.webp",
    logo: { src: "/images/partners/cardano.webp", alt: "Cardano", w: 2000, h: 2000 },
  },
];

export default function EventHighlights() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mb-10 text-center md:mb-12">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
            Event Highlights at w3.hub
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <SectionReveal key={h.title} as="article" index={i} step={0.08} y={20}>
              <Card className="flex h-full flex-col overflow-hidden p-2">
                <div className="relative aspect-16/11 w-full overflow-hidden rounded-2xl bg-warm-grey">
                  <Image
                    src={h.image}
                    alt={h.title}
                    fill
                    sizes="(min-width: 1200px) 360px, (min-width: 800px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                  {h.logo && (
                    <span className="absolute left-3 top-3 inline-flex h-10 items-center rounded-full bg-white/95 px-3 shadow-card ring-1 ring-black/10">
                      <Image
                        src={h.logo.src}
                        alt={h.logo.alt}
                        width={h.logo.w}
                        height={h.logo.h}
                        className="h-4 w-auto object-contain"
                      />
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2.5 px-4 pb-4 pt-4">
                  <h3 className="font-display text-[18px] font-extrabold leading-[1.2] text-ink">
                    {h.title}
                  </h3>
                  <DottedDivider variant="light" />
                </div>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
