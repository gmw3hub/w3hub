import SectionReveal from "@/components/ui/SectionReveal";

const STEPS = [
  { n: "1", title: "Pick a room & time", desc: "Choose your room and slot online, by the hour or day." },
  { n: "2", title: "Instant confirmation", desc: "Book and pay online. Your slot is confirmed on the spot." },
  { n: "3", title: "Doors & WiFi by email", desc: "Access details and WiFi land in your inbox before you arrive." },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-paper pb-16 md:pb-20">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mb-8 max-w-[760px]">
          <h2 className="font-display font-extrabold text-ink text-[24px] sm:text-[28px] leading-[1.15]">
            How it works
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <SectionReveal
              key={s.n}
              index={i}
              step={0.08}
              y={16}
              className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-800 font-display text-[15px] font-extrabold text-white">
                {s.n}
              </span>
              <h3 className="font-display text-[17px] font-extrabold leading-6 text-ink">
                {s.title}
              </h3>
              <p className="font-body text-[15px] leading-6 text-muted">{s.desc}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
