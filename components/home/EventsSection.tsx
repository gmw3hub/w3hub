"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { easeOutSoft } from "@/lib/animations";

type EventItem = {
  date: string;
  day: string;
  time?: string;
  title: string;
  host: string;
  image: string;
  placeholder?: boolean;
};

// From figma-1400 export. Cards 3–6 have only date/day labels in the Figma
// snapshot; titles/hosts marked as placeholders pending real data source.
const EVENTS: EventItem[] = [
  {
    date: "Tomorrow",
    day: "Friday",
    time: "4:00 AM",
    title: "Co-Working Fridays Berlin",
    host: "By Superteam Germany",
    image: "/images/dq9cm3tB7WN0Bwzccv1s2RGGF8.jpg",
  },
  {
    date: "Jun 2",
    day: "Tuesday",
    time: "3:30 AM",
    title: "ACT Berlin #03 (AI Coworking Tuesday)",
    host: "By Quinn | w3.hub",
    image: "/images/wpWGF8xbSZMgswn2MRKXSx5TRTQ.jpg",
  },
  {
    date: "Jun 4",
    day: "Thursday",
    title: "Upcoming event",
    host: "TBD",
    image: "/images/pMLMnOoR2Z1rmW9171YJnqmJU.jpg",
    placeholder: true,
  },
  {
    date: "Jun 5",
    day: "Friday",
    title: "Upcoming event",
    host: "TBD",
    image: "/images/rnEEO3rHHo5G8CliwGuivikKdw.jpg",
    placeholder: true,
  },
  {
    date: "Jun 14",
    day: "Sunday",
    title: "Upcoming event",
    host: "TBD",
    image: "/images/JALlzNO0QwsmOaHL6qWDlv6twbA.jpg",
    placeholder: true,
  },
  {
    date: "Jun 15",
    day: "Monday",
    title: "Upcoming event",
    host: "TBD",
    image: "/images/8Ker8a1FRuhIEqC0rFGyb2MkQl0.jpg",
    placeholder: true,
  },
];

function EventCard({ event, index }: { event: EventItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: easeOutSoft, delay: index * 0.06 }}
      className="group flex flex-col gap-3 snap-start shrink-0 w-[260px] md:w-auto"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-warm-grey">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(min-width: 1200px) 260px, (min-width: 800px) 33vw, 75vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {event.placeholder && (
          <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/85 backdrop-blur px-2.5 py-1 text-[11px] font-medium text-ink/80">
            Placeholder
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-[16px] font-medium text-ink-700">{event.date}</span>
        <span className="text-[16px] text-ink-700/40">{event.day}</span>
        {event.time && (
          <span className="text-[16px] text-ink-700/40">· {event.time}</span>
        )}
      </div>
      <h3 className="text-[16px] leading-6 text-ink-700">{event.title}</h3>
      <p className="text-[14px] leading-[21px] text-ink-700/40">{event.host}</p>
    </motion.article>
  );
}

export default function EventsSection() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <SectionReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-10 mb-8 md:mb-10">
          <div>
            <p className="font-body text-[16px] font-medium text-muted">
              Part of the w3.hub Family
            </p>
            <h2 className="mt-2 font-display font-extrabold text-ink text-[28px] sm:text-[32px] leading-[1.15] md:leading-[40px]">
              All upcoming
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              Events
            </h2>
          </div>
          <Link
            href="/event-calendar"
            className="inline-flex items-center gap-2 text-[16px] font-medium text-ink hover:opacity-70 transition-opacity self-start md:self-auto"
          >
            See all events
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </SectionReveal>

        {/* Horizontal scroll on mobile/tablet; grid on lg+ */}
        <div className="-mx-5 md:-mx-8 lg:mx-0 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none">
          <div className="flex gap-4 md:gap-5 px-5 md:px-8 lg:px-0 lg:grid lg:grid-cols-3 xl:grid-cols-6 lg:gap-5">
            {EVENTS.map((event, i) => (
              <EventCard key={event.date + event.title} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
