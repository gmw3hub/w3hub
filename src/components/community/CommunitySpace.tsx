import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/badge";

type SpaceCard = { src: string; label: string };

const CARDS: SpaceCard[] = [
  { src: "/images/community/break-the-highscore.webp", label: "Break the highscore" },
  { src: "/images/community/chill-in-the-sun.webp", label: "Chill in the sun" },
  { src: "/images/community/enjoy-a-chill-coffee.webp", label: "Enjoy a chill coffee" },
];

export default function CommunitySpace() {
  return (
    <section className="w-full bg-paper pb-4 md:pb-8">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="flex flex-col items-center gap-4 text-center">
          <Badge variant="eyebrow-dot">community space</Badge>
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
            Hang out in our community Space
          </h2>
          <p className="max-w-[680px] font-body text-[16px] font-medium leading-6 text-muted md:text-[17px]">
            We are a cornerstone of the Web3 community, fostering collaboration
            and thriving.
          </p>
        </SectionReveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {CARDS.map((c, i) => (
            <SectionReveal key={c.label} index={i} step={0.08} y={20}>
              <figure className="group relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-card ring-1 ring-black/10">
                <Image
                  src={c.src}
                  alt={c.label}
                  fill
                  sizes="(min-width: 1200px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/65" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <span className="font-display text-[20px] font-bold leading-tight text-white">
                    {c.label}
                  </span>
                </figcaption>
              </figure>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
