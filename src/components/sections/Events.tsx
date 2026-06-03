import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";
import Eyebrow from "@/components/ui/Eyebrow";

const LUMA_SRC =
  "https://lu.ma/embed/calendar/cal-K1JcFGP2bDDKmmj/events?compact=true&lt=light";

export default function Events() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal>
          <p className="text-center font-body text-[16px] font-medium text-muted mb-8 md:mb-10">
            Part of the w3.hub Family
          </p>

          <div className="relative flex flex-col md:flex-row overflow-hidden rounded-3xl bg-white border border-warm-grey shadow-card">
            <div className="shrink-0 md:w-[320px] p-6 md:p-8 flex flex-col gap-6">
              <div>
                <Eyebrow variant="dot">Events</Eyebrow>
                <h2 className="mt-2.5 font-display text-[28px] sm:text-[32px] font-extrabold leading-[1.15] md:leading-[40px] text-ink">
                  All upcoming
                  <br />
                  Events
                </h2>
              </div>

              <PillButton href="https://lu.ma/w3hub" external size="lg" className="self-start">
                See all events
              </PillButton>
            </div>

            <div className="flex-1 border-t md:border-t-0 md:border-l border-warm-grey bg-[#F7F8F9]">
              <iframe
                src={LUMA_SRC}
                title="Upcoming w3.hub events"
                className="block w-full h-[300px] md:h-[320px] border-0"
                loading="lazy"
                allowFullScreen
                tabIndex={0}
              />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
