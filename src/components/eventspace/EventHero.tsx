import Image from "next/image";
import EventHeroOverlay from "./EventHeroOverlay";

export default function EventHero() {
  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden text-white">
      <Image
        src="/images/photos/event-space-chairs.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/20"
      />
      <EventHeroOverlay />
    </section>
  );
}
