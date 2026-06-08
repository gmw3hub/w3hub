import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";

type Tile = {
  src: string;
  alt: string;
  label: string;
  className: string;
};

const TILES: Tile[] = [
  {
    src: "/images/coworking/tile-highscore.webp",
    alt: "Arcade machine and lounge seating at w3.hub Berlin",
    label: "Break the highscore",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/coworking/tile-sun.webp",
    alt: "Sun-filled lounge with sofas and tall windows",
    label: "Chill in the sun",
    className: "",
  },
  {
    src: "/images/coworking/tile-coffee.webp",
    alt: "Cosy community lounge with plants and modular sofas",
    label: "Enjoy a chill coffee",
    className: "",
  },
  {
    src: "/images/photos/coworking-desk-monitors.webp",
    alt: "Workstations with monitors at w3.hub",
    label: "Take a virtual tour",
    className: "md:col-span-2",
  },
];

function Tile({ tile, priority }: { tile: Tile; priority?: boolean }) {
  return (
    <div
      className={`group relative min-h-[200px] overflow-hidden rounded-3xl ring-1 ring-warm-grey ${tile.className}`}
    >
      <Image
        src={tile.src}
        alt={tile.alt}
        fill
        priority={priority}
        sizes="(min-width: 800px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/55 via-black/5 to-transparent"
      />
      <span className="absolute bottom-4 left-4 z-10 rounded-full bg-white/90 px-3.5 py-1.5 font-body text-[14px] font-bold text-ink backdrop-blur-sm">
        {tile.label}
      </span>
    </div>
  );
}

export default function CommunitySpace() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mb-10 max-w-[760px]">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
            Hang out in our community Space
          </h2>
          <p className="mt-4 font-body text-[16px] font-medium leading-6 text-muted">
            We are a cornerstone of the Web3 community, fostering collaboration
            and thriving.
          </p>
        </SectionReveal>

        <SectionReveal className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[200px]">
          {TILES.map((tile, i) => (
            <Tile key={tile.label} tile={tile} priority={i === 0} />
          ))}
        </SectionReveal>

        <SectionReveal className="mt-10 flex justify-center md:justify-start">
          <PillButton href="/event-calendar" size="lg">
            See all events
          </PillButton>
        </SectionReveal>
      </div>
    </section>
  );
}
