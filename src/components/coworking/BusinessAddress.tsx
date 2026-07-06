import SectionReveal from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/badge";
import DottedDivider from "@/components/ui/DottedDivider";

// Virtual office / business address service. Edit copy, includes and CTA here.
const ENQUIRE_URL = "mailto:gm@w3hub.berlin?subject=Business%20Address";

const INCLUDES = [
  "Registered business address for your company registration and Impressum",
  "Mail handling: we receive, notify and forward your post",
  "A professional Kreuzberg address at Möckernstraße 120, next to Gleisdreieck",
  "Add a desk, office or meeting rooms whenever you need them",
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden className="mt-[2px] shrink-0">
      <circle cx="9" cy="9" r="9" fill="#B5F7C4" />
      <path d="M5.25 9.25 8 12l4.75-5" stroke="#101422" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BusinessAddress() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal>
          <div className="grid grid-cols-1 gap-8 rounded-3xl bg-ink px-6 py-10 shadow-card md:grid-cols-2 md:items-center md:gap-12 md:px-12 md:py-14">
            <div className="flex flex-col gap-5">
              <Badge variant="eyebrow-mint" className="w-fit">
                Virtual Office
              </Badge>
              <h2 className="font-display font-extrabold text-white text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1]">
                Register your company at w3.hub
              </h2>
              <p className="font-body text-[16px] leading-7 text-white/75">
                Get a professional Berlin business address for your company
                registration and mail, without renting a desk. Your official
                address sits in a listed factory loft in Kreuzberg, right at
                Gleisdreieck.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[22px] font-extrabold text-mint">
                  On request
                </span>
                <span className="font-body text-[14px] font-medium text-white/60">
                  monthly, no desk required
                </span>
              </div>
              <a
                href={ENQUIRE_URL}
                className="mt-1 inline-flex w-fit items-center justify-center rounded-full bg-mint px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-[#9bf0af]"
              >
                Get your address
              </a>
            </div>

            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="font-display text-[16px] font-extrabold uppercase tracking-[0.06em] text-white/70">
                What&apos;s included
              </h3>
              <DottedDivider variant="dark-tight" className="mt-3 h-[5px] w-full opacity-40" />
              <ul className="mt-4 flex flex-col gap-3.5">
                {INCLUDES.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-body text-[15px] leading-6 text-white/90">
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
