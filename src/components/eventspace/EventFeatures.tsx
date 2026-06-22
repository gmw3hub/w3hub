import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";
import DoodleBackdrop from "@/components/ui/DoodleBackdrop";
import DashedFrame from "@/components/ui/DashedFrame";
import DottedDivider from "@/components/ui/DottedDivider";

const TYPEFORM_URL = "https://form.typeform.com/to/upEoDN4G";

type Feature = {
  title: string;
  icon: React.ReactNode;
};

function IconArea() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="4" width="24" height="24" rx="2.5" />
      <path d="M4 11h6M22 11h6M11 4v6M11 22v6" />
    </svg>
  );
}
function IconStanding() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <circle cx="11.5" cy="11" r="4.6" />
      <circle cx="23" cy="12.3" r="3.7" />
      <path d="M11.5 17.2c-4.5 0-8.2 3.2-8.2 7.2v2.2h16.4v-2.2c0-4-3.7-7.2-8.2-7.2Z" />
      <path d="M23 17.8c-1 0-2 .2-2.8.6 2.3 1.6 3.8 4.2 3.8 7.2v1.6h6.3v-1.9c0-4.1-3.3-7.5-7.3-7.5Z" />
    </svg>
  );
}
function IconSeated() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <circle cx="16" cy="7.5" r="3.6" />
      <path d="M9 13h14a1.5 1.5 0 0 1 1.5 1.5v6h-3v-4.5h-11V20.5h-3v-6A1.5 1.5 0 0 1 9 13Z" />
      <rect x="6" y="20.5" width="3" height="6.5" rx="1.2" />
      <rect x="23" y="20.5" width="3" height="6.5" rx="1.2" />
    </svg>
  );
}
function IconTeam() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <circle cx="16" cy="9.5" r="4.4" />
      <path d="M16 15.5c-5 0-9 3.4-9 7.7V26h18v-2.8c0-4.3-4-7.7-9-7.7Z" />
    </svg>
  );
}
function IconBar() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <path d="M5 5h22l-9 11v8h4a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 1 0-3h4v-8L5 5Z" />
    </svg>
  );
}
function IconTech() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <rect x="2.4" y="5.3" width="27.2" height="18" rx="3.2" />
      <rect x="13" y="23.3" width="6" height="3.4" />
      <rect x="8.5" y="26" width="15" height="2.6" rx="1.3" />
    </svg>
  );
}

const FEATURES: Feature[] = [
  { title: "500m²", icon: <IconArea /> },
  { title: "250 PAX standing", icon: <IconStanding /> },
  { title: "100 PAX seated", icon: <IconSeated /> },
  { title: "In-House events team", icon: <IconTeam /> },
  { title: "Bar / kitchen included", icon: <IconBar /> },
  { title: "High-end tech setup", icon: <IconTech /> },
];

export default function EventFeatures() {
  return (
    <section className="relative w-full overflow-hidden">
      <DoodleBackdrop />

      <div className="relative mx-auto max-w-[1136px] px-4 py-14 sm:px-6 md:py-20">
        <DashedFrame
          className="shadow-[0_28px_70px_-34px_rgba(16,20,34,0.22)]"
          innerClassName="relative overflow-hidden px-6 py-14 md:px-12 md:py-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "url(/images/features/bg-doodle.webp)",
              backgroundRepeat: "repeat",
              backgroundSize: "500px",
            }}
          />

          <div className="relative">
            <SectionReveal className="mx-auto mb-12 flex max-w-[640px] flex-col items-center text-center">
              <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
                Event Space Features
              </h2>
              <p className="mt-3 font-body text-[16px] font-medium leading-6 text-muted">
                Spacious event location adaptable for various event formats with
                professional support in-house
              </p>
            </SectionReveal>

            <div className="mx-auto grid max-w-[940px] grid-cols-1 gap-5 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3">
              {FEATURES.map((f, i) => (
                <SectionReveal
                  key={f.title}
                  as="article"
                  index={i % 3}
                  step={0.08}
                  y={20}
                  className="flex h-full flex-col gap-4 rounded-2xl bg-white p-5 shadow-[0_14px_40px_-22px_rgba(16,20,34,0.22)] ring-1 ring-black/5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center text-ink">
                    {f.icon}
                  </span>
                  <DottedDivider variant="dark-tight" className="h-[5px] w-full" />
                  <h3 className="font-display text-[18px] font-extrabold leading-6 text-ink">
                    {f.title}
                  </h3>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal index={3} step={0.08} className="mt-12 flex justify-center">
              <PillButton href={TYPEFORM_URL} external size="lg">
                Request Event Space
              </PillButton>
            </SectionReveal>
          </div>
        </DashedFrame>
      </div>
    </section>
  );
}
