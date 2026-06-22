import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";

type Initiative = {
  title: string;
  body: string;
  image: string;
};

const INITIATIVES: Initiative[] = [
  {
    title: "Community Events",
    body: "Come join our fun gatherings where magic connections happen!",
    image: "/images/community/initiatives/community-events.jpeg",
  },
  {
    title: "Community Runs",
    body: "Lace up and laugh with us as we jog through Gleisdreieckpark together.",
    image: "/images/community/initiatives/community-runs.jpeg",
  },
  {
    title: "Community Co-working",
    body: "Where great minds play nice and brilliant ideas are born.",
    image: "/images/community/initiatives/community-coworking.jpeg",
  },
  {
    title: "Wall of Fame",
    body: "Our cool wall where awesome community stars get to shine!",
    image: "/images/community/initiatives/wall-of-fame.jpeg",
  },
  {
    title: "Community Hangouts",
    body: "Kick back, chat, and find your people during our hangouts.",
    image: "/images/community/initiatives/community-hangouts.jpeg",
  },
  {
    title: "Knowledge Sessions",
    body: "Brain parties where curious minds get smarter together!",
    image: "/images/community/initiatives/knowledge-sessions.jpeg",
  },
];

export default function CommunityInitiatives() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="flex flex-col items-center text-center">
          <h2 className="font-display font-extrabold text-ink text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.05] tracking-tight">
            Community initiatives
          </h2>
        </SectionReveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 md:mt-12">
          {INITIATIVES.map((it, i) => (
            <SectionReveal key={it.title} index={i} step={0.06} y={20}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-black/10">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-warm-grey">
                  <Image
                    src={it.image}
                    alt={it.title}
                    fill
                    sizes="(min-width: 1200px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2.5 p-5 md:p-6">
                  <h3 className="font-display font-extrabold text-ink text-[18px] md:text-[20px] leading-[1.2]">
                    {it.title}
                  </h3>
                  <p className="font-body text-[14px] font-medium leading-[22px] text-ink/75 md:text-[15px]">
                    {it.body}
                  </p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
