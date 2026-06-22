import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";

const TYPEFORM = "https://form.typeform.com/to/qdGDfsSN";

type Initiative = {
  title: string;
  body: string;
  image: string;
};

const INITIATIVES: Initiative[] = [
  {
    title: "Community Events",
    body: "Come join our fun gatherings where magic connections happen!",
    image: "/images/community/initiatives/community-events.avif",
  },
  {
    title: "Community Runs",
    body: "Lace up and laugh with us as we jog through Gleisdreieckpark together.",
    image: "/images/community/initiatives/community-runs.avif",
  },
  {
    title: "Community Co-working",
    body: "Where great minds play nice and brilliant ideas are born.",
    image: "/images/community/initiatives/community-coworking.avif",
  },
  {
    title: "Wall of Fame",
    body: "Our cool wall where awesome community stars get to shine!",
    image: "/images/community/initiatives/wall-of-fame.avif",
  },
  {
    title: "Community Hangouts",
    body: "Kick back, chat, and find your people during our hangouts.",
    image: "/images/community/initiatives/community-hangouts.avif",
  },
  {
    title: "Knowledge Sessions",
    body: "Brain parties where curious minds get smarter together!",
    image: "/images/community/initiatives/knowledge-sessions.avif",
  },
];

export default function CommunityInitiatives() {
  return (
    <section className="w-full bg-paper py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="flex flex-col items-center text-center">
          <h2 className="font-display font-extrabold text-ink text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.1] tracking-tight">
            Community initiatives
          </h2>
        </SectionReveal>

        <div className="mt-8 grid grid-cols-1 gap-3 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3 md:gap-4 md:mt-10">
          {INITIATIVES.map((it, i) => (
            <SectionReveal key={it.title} index={i} step={0.05} y={16}>
              <article className="group flex h-full flex-col rounded-2xl bg-white p-3 shadow-card ring-1 ring-black/10">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-warm-grey">
                  <Image
                    src={it.image}
                    alt={it.title}
                    fill
                    sizes="(min-width: 800px) 340px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1.5 p-3">
                  <h3 className="font-display font-extrabold text-ink text-[16px] leading-[1.2]">
                    {it.title}
                  </h3>
                  <p className="font-body text-[13px] font-medium leading-[19px] text-ink/70">
                    {it.body}
                  </p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-10 flex justify-center md:mt-12">
          <PillButton href={TYPEFORM} external size="lg">
            Become part of the community
          </PillButton>
        </SectionReveal>
      </div>
    </section>
  );
}
