import SectionReveal from "@/components/ui/SectionReveal";
import AmenityIcon from "@/components/ui/AmenityIcon";
import { AMENITIES } from "@/data/amenities";

export default function TheSpace() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mx-auto mb-12 max-w-[760px] text-center">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
            The Space
          </h2>
          <p className="mt-4 font-body text-[16px] font-medium leading-6 text-muted">
            A listed factory loft in Berlin Kreuzberg, built for builders.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((a, i) => (
            <SectionReveal
              key={a.key}
              index={i % 3}
              step={0.07}
              y={16}
              as="article"
              className="flex h-full items-start gap-3.5 rounded-2xl bg-white p-5 shadow-card ring-1 ring-black/5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-800 text-white">
                <AmenityIcon name={a.key} />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-[16px] font-extrabold leading-5 text-ink">
                  {a.title}
                </h3>
                <p className="font-body text-[14px] leading-5 text-muted">{a.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
