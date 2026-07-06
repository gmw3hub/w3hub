import SectionReveal from "@/components/ui/SectionReveal";

const CLIENTS = ["OpenAI", "Intercom", "Anthropic"];

export default function EventClients() {
  return (
    <section className="w-full bg-paper pb-6 pt-2">
      <div className="mx-auto max-w-[900px] px-5 md:px-8">
        <SectionReveal className="flex flex-col items-center gap-4 text-center">
          <p className="font-body text-[13px] font-bold uppercase tracking-[0.12em] text-muted">
            Trusted for events by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {CLIENTS.map((c) => (
              <span
                key={c}
                className="font-display text-[22px] font-extrabold text-ink/80 sm:text-[26px]"
              >
                {c}
              </span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
