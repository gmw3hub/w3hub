"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { easeOutSoft } from "@/lib/animations";
import ArrowCircle from "@/components/ui/ArrowCircle";

type Solution = {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  image: string;
};

const SOLUTIONS: Solution[] = [
  {
    eyebrow: "Coworking",
    title: "Become a member",
    body: "Become part of Berlin's most vibrant Web3 community. Choose from flexible desks to dedicated workspaces that fit your style. Access cutting-edge facilities and community events where enthusiasts, startups, and creatives meet.",
    href: "/co-working",
    image: "/images/7sVgB1rf4bm2W5Bh27fn51JMY.png",
  },
  {
    eyebrow: "Private offices",
    title: "Office Space",
    body: "Private, professional environments for your team to thrive. Our office spaces combine privacy with community access, giving you a dedicated space to scale comfortably with flexible terms tailored to growing companies.",
    href: "/co-working",
    image: "/images/JKd6LZFnRvkrUZQODPErdQjqhY.png",
  },
  {
    eyebrow: "Host events",
    title: "Event Space",
    body: "Host impactful events in our Berlin-style venue. From intimate meetups or dinners to larger conferences, our configurable space adapts to your vision. Full tech setup and community promotion included, you just need to bring your ideas and audience.",
    href: "/event-space",
    image: "/images/hi0G09lb9Y4YJ0O9Qla3dmJs8.png",
  },
  {
    eyebrow: "On demand",
    title: "Meeting Rooms",
    body: "Professional spaces available for members and non-members that can book by the day for client meetings, team sessions, or collaborative work. Fully equipped with presentation tools and comfortable seating — your temporary base in Berlin's Web3 hub.",
    href: "/meeting-rooms",
    image: "/images/PuI3rd38V8wpvaZMkehyRDg3o.png",
  },
];

function SolutionCard({ s, index }: { s: Solution; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: easeOutSoft, delay: (index % 2) * 0.08 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_8px_32px_-16px_rgba(16,20,34,0.18)] ring-1 ring-black/[0.04] flex flex-col"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-warm-grey">
        <Image
          src={s.image}
          alt={s.title}
          fill
          sizes="(min-width: 1200px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-8 lg:p-10">
        <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-muted">
          {s.eyebrow}
        </p>
        <h3 className="font-display font-extrabold text-ink text-[26px] md:text-[28px] lg:text-[32px] leading-[1.15] md:leading-[40px]">
          {s.title}
        </h3>
        <p className="font-body text-[16px] leading-6 text-ink/90 max-w-[58ch]">
          {s.body}
        </p>
        <Link
          href={s.href}
          className="mt-2 inline-flex items-center gap-3 self-start rounded-full bg-ink text-white text-[16px] font-medium leading-5 pl-5 pr-1.5 py-1.5 hover:bg-ink-800 transition-colors"
        >
          <span>Learn more</span>
          <ArrowCircle invert={false} size={28} />
        </Link>
      </div>
    </motion.article>
  );
}

export default function SolutionsCards() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <SectionReveal className="mb-10 md:mb-14">
          <p className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.08em] text-ink/80">
            Tailored to your needs
          </p>
          <h2 className="mt-3 font-display font-extrabold text-ink text-[32px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[48px] tracking-tight max-w-[820px]">
            Our Custom Solutions
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {SOLUTIONS.map((s, i) => (
            <SolutionCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
