import SectionReveal from "@/components/ui/SectionReveal";

// Placeholder impact metrics — replace with verified figures before launch.
type Stat = { value: string; label: string };

const STATS: Stat[] = [
  { value: "110+", label: "Members: founders, engineers & researchers" },
  { value: "70+", label: "Events a year" },
  { value: "15k", label: "In the community network" },
  { value: "1", label: "Roof at Gleisdreieck" },
];

export default function TourStats() {
  return (
    <section className="w-full bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mx-auto mb-10 max-w-[680px] text-center">
          <h2 className="font-display font-extrabold text-white text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.12]">
            One tour, the whole ecosystem
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s, i) => (
            <SectionReveal
              key={s.label}
              index={i}
              step={0.08}
              y={20}
              className="flex flex-col items-center text-center"
            >
              <span className="font-display text-[40px] font-extrabold leading-none text-mint md:text-[48px]">
                {s.value}
              </span>
              <span className="mt-3 font-body text-[14px] font-medium leading-5 text-white/70">
                {s.label}
              </span>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
