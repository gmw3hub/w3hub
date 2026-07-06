import SectionReveal from "@/components/ui/SectionReveal";

const TYPEFORM_EVENT = "https://form.typeform.com/to/upEoDN4G";
const CALL_URL = "https://cal.com/quinn-w3/15min";

type Pkg = {
  name: string;
  meta: string;
  tagline: string;
  includes: string[];
  featured?: boolean;
};

const PACKAGES: Pkg[] = [
  {
    name: "Meetup Evening",
    meta: "up to 100 guests · 5 hours",
    tagline: "An evening meetup, panel or launch with drinks and networking.",
    includes: ["One event loft", "Full AV setup", "In-house events team", "Bar & catering optional"],
  },
  {
    name: "Full-Day Conference",
    meta: "up to 250 guests · full day",
    tagline: "A full-day conference or summit across the venue.",
    includes: ["Both event lofts", "Full AV + streaming setup", "In-house events team", "Bar, catering & breakout rooms optional"],
    featured: true,
  },
  {
    name: "Hackathon Weekend",
    meta: "24 – 48 hours",
    tagline: "A multi-day hackathon with 24/7 access for your builders.",
    includes: ["Venue for 24 – 48h", "Full AV setup", "In-house events team", "Catering & overnight logistics optional"],
  },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="mt-[3px] shrink-0 text-ink">
      <path d="M3 8.25 6.25 11.5 13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PackageCard({ p }: { p: Pkg }) {
  return (
    <article
      className={`flex h-full flex-col gap-5 rounded-3xl bg-white p-6 ring-1 transition-transform duration-300 hover:-translate-y-1 ${
        p.featured
          ? "ring-2 ring-mint shadow-[0_18px_50px_-18px_rgba(16,20,34,0.28)]"
          : "ring-black/5 shadow-[0_14px_40px_-18px_rgba(16,20,34,0.18)]"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-display text-[20px] font-extrabold leading-6 text-ink">{p.name}</h3>
        {p.featured && (
          <span className="inline-flex items-center rounded-full bg-mint px-3 py-1 font-body text-[12px] font-semibold text-ink">
            Most booked
          </span>
        )}
      </div>
      <p className="-mt-2 font-body text-[14px] font-medium text-muted">{p.meta}</p>
      <p className="font-display text-[24px] font-extrabold leading-none text-ink">On request</p>
      <p className="font-body text-[15px] leading-6 text-muted">{p.tagline}</p>
      <h4 className="font-display text-[18px] font-extrabold leading-6 text-ink">Includes</h4>
      <ul className="flex flex-col gap-3">
        {p.includes.map((f) => (
          <li key={f} className="flex items-start gap-2.5 font-body text-[15px] leading-6 text-ink">
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={TYPEFORM_EVENT}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-mint px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-[#9bf0af]"
      >
        Get a quote
      </a>
    </article>
  );
}

export default function EventPackages() {
  return (
    <section id="packages" className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mx-auto mb-4 max-w-[760px] text-center">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
            Event Packages
          </h2>
          <p className="mt-4 font-body text-[16px] font-medium leading-6 text-muted">
            Every event is scoped to your format and headcount, so we share
            pricing on request. Tell us what you have in mind and we&apos;ll send
            an exact quote.
          </p>
        </SectionReveal>

        <SectionReveal className="mx-auto mb-12 max-w-[640px]">
          <p className="rounded-2xl bg-white px-5 py-3 text-center font-body text-[14px] font-medium leading-6 text-ink shadow-card ring-1 ring-black/5">
            Popular dates during Berlin Blockchain Week and Q4 book out 2 to 3
            months ahead.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <SectionReveal key={p.name} index={i} step={0.08} y={20} className="h-full">
              <PackageCard p={p} />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={TYPEFORM_EVENT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-ink-800 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-ink"
          >
            Request event space
          </a>
          <a
            href={CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-ink shadow-card ring-1 ring-black/10 transition-colors hover:bg-paper"
          >
            Book a 15-min call
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
