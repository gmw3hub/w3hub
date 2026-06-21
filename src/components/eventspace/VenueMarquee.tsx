import Image from "next/image";

const PHOTOS = [
  "/images/eventspace/venue-1.webp",
  "/images/eventspace/venue-2.webp",
  "/images/eventspace/venue-3.webp",
  "/images/eventspace/venue-4.webp",
  "/images/eventspace/venue-5.webp",
  "/images/eventspace/venue-6.webp",
  "/images/eventspace/venue-7.webp",
  "/images/eventspace/venue-8.webp",
  "/images/eventspace/venue-9.webp",
];

export default function VenueMarquee() {
  // Duplicated once for a seamless -50% loop (marquee-x keyframe in globals.css).
  const items = [...PHOTOS, ...PHOTOS];
  return (
    <section className="w-full overflow-hidden bg-paper py-10 md:py-14">
      <div
        className="flex w-max gap-4"
        style={{ animation: "marquee-x 70s linear infinite" }}
      >
        {items.map((src, i) => (
          <div
            key={src + i}
            className="relative h-[220px] w-[300px] shrink-0 overflow-hidden rounded-3xl bg-warm-grey md:h-[260px] md:w-[340px]"
          >
            <Image
              src={src}
              alt=""
              aria-hidden
              fill
              sizes="340px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <span className="sr-only">Photos of the w3.hub event space in Berlin</span>
    </section>
  );
}
