import SectionReveal from "@/components/ui/SectionReveal";
import DoodleBackdrop from "@/components/ui/DoodleBackdrop";
import DashedFrame from "@/components/ui/DashedFrame";

// w3.hub's official Lu.ma calendar (same as the home Events section).
const LUMA_SRC =
  "https://lu.ma/embed/calendar/cal-K1JcFGP2bDDKmmj/events?lt=light";

export default function CalendarSection() {
  return (
    <section className="relative w-full overflow-hidden bg-paper pt-28 pb-16 md:pt-32 md:pb-20 lg:pb-24">
      <DoodleBackdrop className="absolute inset-0" />

      <div className="relative mx-auto max-w-[1136px] px-4 sm:px-6">
        <SectionReveal>
          <DashedFrame innerClassName="overflow-hidden">
            <div className="px-6 pt-12 pb-6 text-center md:pt-16">
              <h2 className="font-display font-extrabold tracking-tight text-ink text-[34px] leading-[1.05] sm:text-[44px] lg:text-[52px]">
                All Events at w3.hub
              </h2>
              <p className="mx-auto mt-3 max-w-[560px] font-body text-[16px] font-medium leading-7 text-muted md:text-[18px]">
                Sign-up for all our events via our official lu.ma calendar
              </p>
            </div>

            <div className="px-2 pb-2 sm:px-3 sm:pb-3">
              <iframe
                src={LUMA_SRC}
                title="All upcoming w3.hub events"
                className="block h-[700px] w-full rounded-[26px] border-0 bg-white md:h-[780px] lg:h-[840px]"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </DashedFrame>
        </SectionReveal>
      </div>
    </section>
  );
}
