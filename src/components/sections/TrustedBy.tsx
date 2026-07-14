import SectionReveal from "@/components/ui/SectionReveal";
import { TRUSTED_BRANDS } from "@/data/brands";

type Props = {
  /** Heading eyebrow above the wall. */
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

  return (
    <section className={`w-full ${className} py-14 md:py-16`}>
      <div className="mx-auto max-w-[1000px] px-5 md:px-8">
        <SectionReveal className="flex flex-col items-center gap-8 text-center">
          <p className="font-body text-[13px] font-bold uppercase tracking-[0.12em] text-muted">
            {label}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:gap-x-14">
            {brands.map((b) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={b.name}
                src={b.logo}
                alt={b.name}
                loading="lazy"
                className={`w-auto object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 ${
                  b.compact ? "h-10 max-w-[110px] md:h-12" : "h-7 max-w-[150px] md:h-8"
                }`}
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
