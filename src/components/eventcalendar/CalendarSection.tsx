import SectionReveal from "@/components/ui/SectionReveal";
import CalendarEmbed from "./CalendarEmbed";

export default function CalendarSection() {
  return (
    <section className="w-full bg-paper pb-16 md:pb-20 lg:pb-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal>
          <CalendarEmbed />
        </SectionReveal>
      </div>
    </section>
  );
}
