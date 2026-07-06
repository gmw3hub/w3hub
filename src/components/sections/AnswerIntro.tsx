import SectionReveal from "@/components/ui/SectionReveal";
import AmenityIcon from "@/components/ui/AmenityIcon";
import { AMENITIES } from "@/data/amenities";

type Props = {
  /** Fact-dense lead paragraph, rendered as visible text under the hero (GEO). */
  text: string;
  /** Optional 4-item amenity highlight row (keys from src/data/amenities.ts). */
  amenities?: string[];
};

export default function AnswerIntro({ text, amenities }: Props) {
  const items = amenities
    ? amenities.map((k) => AMENITIES.find((a) => a.key === k)).filter(Boolean)
    : [];

  return (
    <section className="w-full bg-paper pt-10 pb-4 md:pt-12">
      <div className="mx-auto max-w-[820px] px-5 md:px-8">
        <SectionReveal>
          <p className="text-center font-body text-[17px] leading-7 text-ink md:text-[19px] md:leading-8">
            {text}
          </p>
        </SectionReveal>

        {items.length > 0 && (
          <SectionReveal
            y={16}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {items.map((a) => (
              <span
                key={a!.key}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[14px] font-semibold text-ink shadow-card ring-1 ring-black/10"
              >
                <span className="text-ink/80">
                  <AmenityIcon name={a!.key} className="h-[18px] w-[18px]" />
                </span>
                {a!.title}
              </span>
            ))}
          </SectionReveal>
        )}
      </div>
    </section>
  );
}
