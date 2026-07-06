import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";

type Audience = { title: string; body: string; image: string };

const AUDIENCES: Audience[] = [
  {
    title: "Corporates & innovation teams",
    body: "Bring your team face to face with the builders redefining finance, ownership and AI, and leave with a concrete onchain agenda.",
    image: "/images/photos/event-networking.webp",
  },
  {
    title: "Investors & funds",
    body: "Meet vetted founders and protocols in one visit, and get a grounded read on where Europe's Web3 momentum is heading.",
    image: "/images/photos/community-networking.webp",
  },
  {
    title: "Universities & delegations",
    body: "Give students and visiting cohorts a hands-on look at a working Web3 ecosystem, hosted by the people running it.",
    image: "/images/photos/event-space-charitea.webp",
  },
];

function AudienceCard({ a }: { a: Audience }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_14px_40px_-22px_rgba(16,20,34,0.22)] ring-1 ring-black/5">
      <div className="relative aspect-[16/10] w-full bg-warm-grey">
        <Image
          src={a.image}
          alt=""
          fill
          sizes="(min-width: 800px) 360px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <h3 className="font-display text-[20px] font-extrabold leading-6 text-ink">
          {a.title}
        </h3>
        <p className="font-body text-[15px] leading-6 text-muted">{a.body}</p>
      </div>
    </article>
  );
}

export default function TourAudiences() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mx-auto mb-12 max-w-[760px] text-center">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
            Who comes on tour
          </h2>
          <p className="mt-4 font-body text-[16px] font-medium leading-6 text-muted">
            From boardrooms to lecture halls, we tailor the day to what your
            group needs to take home.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {AUDIENCES.map((a, i) => (
            <SectionReveal key={a.title} index={i} step={0.08} y={20} className="h-full">
              <AudienceCard a={a} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
