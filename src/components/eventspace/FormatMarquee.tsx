const FORMATS = [
  "Tailored to your needs",
  "Modular Event Space",
  "Conference",
  "Community Events",
  "Dinner",
  "Hackathons",
  "Corporate Events",
  "Production Location",
];

function Row() {
  return (
    <ul className="flex shrink-0 items-center gap-3 pr-3" aria-hidden>
      {FORMATS.map((f) => (
        <li
          key={f}
          className="flex items-center gap-3 whitespace-nowrap font-display text-[16px] font-extrabold uppercase tracking-[0.04em] text-ink md:text-[18px]"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {f}
        </li>
      ))}
    </ul>
  );
}

export default function FormatMarquee() {
  return (
    <section className="w-full overflow-hidden border-y border-warm-grey bg-mint py-4">
      <div
        className="flex w-max"
        style={{ animation: "marquee-x 38s linear infinite" }}
      >
        <Row />
        <Row />
      </div>
      <span className="sr-only">
        Event formats: {FORMATS.join(", ")}
      </span>
    </section>
  );
}
