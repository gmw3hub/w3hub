import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";

const BOOK_URL = "https://w3hub.cobot.me/book/29341a3ea9eb11778694f3c80983ea8e/resources";

export default function MeetingHero() {
  return (
    <section className="relative w-full overflow-hidden bg-ink-900 text-white">
      <Image
        src="/images/photos/meeting-room-glass-wall.webp"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/65 via-black/25 to-black/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-r from-black/55 via-black/20 to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-[1136px] flex-col justify-end px-5 pb-16 pt-32 md:min-h-[600px] md:px-8 md:pb-20 md:pt-40 lg:pb-24">
        <SectionReveal className="max-w-[760px]">
          <h1 className="font-display font-semibold tracking-tight text-white text-[36px] leading-[1.1] sm:text-[44px] md:text-[52px] lg:text-[60px] lg:leading-[1.05]">
            Meeting Rooms
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            at w3.hub
          </h1>
          <p className="mt-5 max-w-[620px] font-body text-[16px] leading-6 font-medium text-white/85 md:text-[18px] md:leading-7">
            Professional meeting rooms in Berlin Kreuzberg (Möckernstraße 120).
            Bookable for members and guests. Great for AI, robotics, quantum and
            blockchain teams
            who need a pitch room, a board meeting or an investor update in a top
            location.
          </p>
          <div className="mt-8">
            <PillButton href={BOOK_URL} external variant="light">
              Book Meeting Room
            </PillButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
