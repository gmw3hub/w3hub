import Image from "next/image";

type Slide = { src: string; label: string };

// Order + label→image mapping taken 1:1 from the live site (w3hub.berlin) DOM.
const SLIDES: Slide[] = [
  { label: "Vibesssssssssssssss", src: "/images/marquee/vibes.jpg" },
  { label: "Pizza", src: "/images/marquee/pizza.jpg" },
  { label: "Hackathons", src: "/images/marquee/hackathons.png" },
  { label: "Community Space", src: "/images/marquee/community-space.png" },
  { label: "Flowers", src: "/images/marquee/flowers.jpg" },
  { label: "Meetups", src: "/images/marquee/meetups.png" },
  { label: "Hairy Friends", src: "/images/marquee/hairy-friends.jpg" },
  { label: "Demo Days", src: "/images/marquee/demo-days.jpg" },
  { label: "More Pizza", src: "/images/marquee/more-pizza.jpg" },
  { label: "Winners", src: "/images/marquee/winners.jpg" },
];

// Second row uses the same photos but rotated, so the two tracks never line up
// column-for-column — that's the "versetzt" (offset) look from the live site.
const ROW_1 = SLIDES;
const ROW_2 = [...SLIDES.slice(5), ...SLIDES.slice(0, 5)];

function Card({ slide }: { slide: Slide }) {
  return (
    <div className="shrink-0 w-[300px] md:w-[350px] rounded-3xl bg-white p-2 shadow-[0_3px_0_#DDD8D4]">
      <div className="relative h-[214px] md:h-[250px] w-full overflow-hidden rounded-[20px]">
        <Image
          src={slide.src}
          alt={slide.label}
          fill
          sizes="350px"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-b from-transparent to-black/60 p-4">
          <span className="text-right font-body text-[14px] leading-[18px] text-white">
            {slide.label}
          </span>
        </div>
      </div>
    </div>
  );
}

function Row({
  slides,
  reverse = false,
  duration,
}: {
  slides: Slide[];
  reverse?: boolean;
  duration: number;
}) {
  // Duplicate once for a seamless -50% loop.
  const items = [...slides, ...slides];

  return (
    <div className="overflow-visible">
      <div
        className="flex w-max gap-4"
        style={{
          animation: `${reverse ? "marquee-x-reverse" : "marquee-x"} ${duration}s linear infinite`,
        }}
      >
        {items.map((s, i) => (
          <Card key={s.label + i} slide={s} />
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      className="w-full overflow-hidden py-10 md:py-14"
      style={{
        backgroundColor: "#AEEFBD",
        backgroundImage: "url(/images/features/bg-doodle.webp)",
        backgroundRepeat: "repeat",
        backgroundSize: "500px",
      }}
    >
      <div className="flex flex-col gap-4">
        <Row slides={ROW_1} duration={80} />
        <Row slides={ROW_2} duration={92} reverse />
      </div>
    </section>
  );
}
