import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import PillButton from "@/components/ui/PillButton";

// Same w3.hub Lu.ma calendar as the home Events section, embedded full-size
// here since the calendar is this page's centerpiece.
const LUMA_SRC =
  "https://lu.ma/embed/calendar/cal-K1JcFGP2bDDKmmj/events?lt=light";

export default function CalendarEmbed() {
  return (
    <Card surface="bordered-warm" className="overflow-hidden">
      <div className="flex flex-col gap-5 p-6 md:flex-row md:items-end md:justify-between md:p-8">
        <div className="flex flex-col gap-2.5">
          <Badge variant="eyebrow-dot">Calendar</Badge>
          <h2 className="font-display text-[28px] font-extrabold leading-[1.15] text-ink sm:text-[32px] md:leading-[40px]">
            All upcoming Events
          </h2>
        </div>

        <PillButton
          href="https://lu.ma/w3hub"
          external
          size="lg"
          className="self-start md:self-auto"
        >
          See all events
        </PillButton>
      </div>

      <div className="border-t border-warm-grey bg-[#F7F8F9]">
        <iframe
          src={LUMA_SRC}
          title="Upcoming w3.hub events calendar"
          className="block h-[560px] w-full border-0 md:h-[640px] lg:h-[720px]"
          loading="lazy"
          allowFullScreen
          tabIndex={0}
        />
      </div>
    </Card>
  );
}
