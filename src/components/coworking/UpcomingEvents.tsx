import SectionReveal from "@/components/ui/SectionReveal";
import DoodleBackdrop from "@/components/ui/DoodleBackdrop";
import DashedFrame from "@/components/ui/DashedFrame";
import Chevron from "@/components/ui/Chevron";
import { Badge } from "@/components/ui/badge";

const LUMA_SRC =
  "https://lu.ma/embed/calendar/cal-K1JcFGP2bDDKmmj/events?compact=true&lt=light";

export default function UpcomingEvents() {
  return (
    <section className="relative w-full overflow-hidden">
      <DoodleBackdrop />

      <div className="relative mx-auto max-w-[1136px] px-5 py-14 md:px-8 md:py-20">
        <SectionReveal>
          <DashedFrame
            className="shadow-card"
            innerClassName="relative flex flex-col overflow-hidden bg-white md:flex-row"
          >
            <div className="flex shrink-0 flex-col gap-6 p-6 md:w-[320px] md:p-8">
              <div>
                <Badge variant="eyebrow-dot">Events</Badge>
                <h2 className="mt-2.5 font-display text-[28px] font-extrabold leading-[1.15] text-ink sm:text-[32px] md:leading-[40px]">
                  All upcoming
                  <br />
                  Events
                </h2>
              </div>

              <a
                href="https://lu.ma/w3hub"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3.5 self-start rounded-full bg-mint py-[3px] pl-5 pr-[3px] text-[16px] font-medium leading-5 text-ink transition-colors hover:bg-[#9bf0af]"
              >
                <span>See all events</span>
                <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-ink-800 text-white">
                  <Chevron />
                </span>
              </a>
            </div>

            <div className="flex-1 border-t border-warm-grey bg-[#F7F8F9] md:border-l md:border-t-0">
              <iframe
                src={LUMA_SRC}
                title="Upcoming w3.hub events"
                className="block h-[320px] w-full border-0 md:h-[340px]"
                loading="lazy"
                allowFullScreen
                tabIndex={0}
              />
            </div>
          </DashedFrame>
        </SectionReveal>
      </div>
    </section>
  );
}
