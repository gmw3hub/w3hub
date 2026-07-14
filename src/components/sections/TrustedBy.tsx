import { TRUSTED_BRANDS } from "@/data/brands";

type Props = {
  /** Heading eyebrow above the marquee. */
  label?: string;
  className?: string;
};

export default function TrustedBy({
  label = "Trusted by teams from",
  className = "bg-paper",
}: Props) {
  // Only brands with a real logo file are shown (no text wordmarks).
  const brands = TRUSTED_BRANDS.filter((b) => b.logo);
  if (brands.length === 0) return null;

  // Duplicated once so translateX(-50%) loops seamlessly.
  const loop = [...brands, ...brands];

  return (
    <section className={`relative w-full overflow-hidden ${className} py-14 md:py-16`}>
      <p className="mb-9 text-center font-body text-[13px] font-bold uppercase tracking-[0.12em] text-muted md:mb-11">
        {label}
      </p>

      <div
        className="flex w-max items-center gap-14 md:gap-20 hover:[animation-play-state:paused]"
        style={{ animation: "marquee-x-reverse 48s linear infinite" }}
      >
        {loop.map((b, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={b.name + i}
            src={b.logo}
            alt={b.name}
            loading="lazy"
            aria-hidden={i >= brands.length}
            className={`w-auto shrink-0 object-contain ${
              b.compact ? "h-14 md:h-[72px]" : "h-11 md:h-14"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
