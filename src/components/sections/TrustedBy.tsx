import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import { TRUSTED_BRANDS } from "@/data/brands";

type Props = {
  /** Heading eyebrow above the wall. */
  label?: string;
  /** Darker background variant (for use on light sections that need contrast). */
  className?: string;
};

export default function TrustedBy({
  label = "Trusted by teams from",
  className = "bg-paper",
}: Props) {
  return (
    <section className={`w-full ${className} py-14 md:py-16`}>
      <div className="mx-auto max-w-[1000px] px-5 md:px-8">
        <SectionReveal className="flex flex-col items-center gap-8 text-center">
          <p className="font-body text-[13px] font-bold uppercase tracking-[0.12em] text-muted">
            {label}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-10">
            {TRUSTED_BRANDS.map((b) =>
              b.logo ? (
                <Image
                  key={b.name}
                  src={b.logo}
                  alt={b.name}
                  width={160}
                  height={40}
                  className="h-6 w-auto object-contain opacity-70 md:h-7"
                />
              ) : (
                <span
                  key={b.name}
                  className="font-display text-[18px] font-extrabold leading-none text-ink/60 sm:text-[20px]"
                >
                  {b.name}
                </span>
              ),
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
