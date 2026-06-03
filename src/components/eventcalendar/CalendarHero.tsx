import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";
import { Badge } from "@/components/ui/badge";
import DottedDivider from "@/components/ui/DottedDivider";

export default function CalendarHero() {
  return (
    <section className="w-full bg-paper pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-36">
      <div className="mx-auto flex max-w-[1136px] flex-col items-center px-5 text-center md:px-8">
        <SectionReveal className="flex flex-col items-center gap-5">
          <Badge variant="eyebrow-mint">Events</Badge>

          <h1 className="font-display font-extrabold tracking-tight text-ink text-[36px] leading-[1.1] sm:text-[44px] md:text-[52px] lg:text-[60px] lg:leading-[1.05]">
            Event Calendar
          </h1>

          <p className="max-w-[720px] font-body text-[16px] font-medium leading-7 text-muted md:text-[18px]">
            From meetups and demo days to hackathons and community dinners —
            discover everything happening at Berlin&apos;s home of Web3, AI and
            frontier tech. Browse the full calendar below and reserve your spot.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-7 md:mt-8">
          <PillButton href="https://lu.ma/w3hub" external size="lg">
            Subscribe to the calendar
          </PillButton>
        </SectionReveal>

        <SectionReveal delay={0.2} className="mt-12 w-full max-w-[1080px] md:mt-16">
          <DottedDivider variant="dark-wide" className="h-[5px] w-full" />
        </SectionReveal>
      </div>
    </section>
  );
}
