import HeroOverlay from "./HeroOverlay";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/og-image.png"
        aria-hidden
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-black/10"
      />
      <HeroOverlay />
    </section>
  );
}
