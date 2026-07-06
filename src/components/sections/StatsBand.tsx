import SectionReveal from "@/components/ui/SectionReveal";
import { HOME_STATS } from "@/data/stats";

// Semantic dl/dt/dd so crawlers and AI read the numbers as text.
export default function StatsBand() {
  return (
    <section className="w-full bg-ink py-12 md:py-14">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {HOME_STATS.map((s, i) => (
            <SectionReveal
              key={s.value}
              index={i}
              step={0.08}
              y={16}
              className="flex flex-col items-center text-center"
            >
              <dd className="order-1 font-display text-[36px] font-extrabold leading-none text-mint md:text-[44px]">
                {s.value}
              </dd>
              <dt className="order-2 mt-3 max-w-[200px] font-body text-[14px] font-medium leading-5 text-white/70">
                {s.label}
              </dt>
            </SectionReveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
