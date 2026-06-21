import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import { Card } from "@/components/ui/card";
import DottedDivider from "@/components/ui/DottedDivider";

type Format = { title: string; body: string; image: string };

const FORMATS: Format[] = [
  {
    title: "Conference",
    body: "Knowledge-sharing forums featuring industry thought leaders.",
    image: "/images/eventspace/format-conference.webp",
  },
  {
    title: "Community Events",
    body: "Engaging meetups that strengthen our Web3 ecosystem.",
    image: "/images/eventspace/format-community.webp",
  },
  {
    title: "Dinner",
    body: "Elegant dining experiences for networking and celebrations.",
    image: "/images/eventspace/format-dinner.webp",
  },
  {
    title: "Hackathons",
    body: "Collaborative coding marathons to build innovative solutions.",
    image: "/images/eventspace/format-hackathons.webp",
  },
  {
    title: "Corporate Events",
    body: "Tailored business gatherings for teams and stakeholders.",
    image: "/images/eventspace/format-corporate.webp",
  },
  {
    title: "Production Location",
    body: "Professional setting for video shoots and content creation.",
    image: "/images/eventspace/format-production.webp",
  },
];

export default function ModularEventSpace() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mb-10 text-center md:mb-12">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
            Modular Event Space
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FORMATS.map((f, i) => (
            <SectionReveal key={f.title} as="article" index={i % 3} step={0.08} y={20}>
              <Card className="flex h-full flex-col overflow-hidden p-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-warm-grey">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    sizes="(min-width: 1200px) 360px, (min-width: 800px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2.5 px-4 pb-4 pt-4">
                  <h3 className="font-display text-[18px] font-extrabold leading-[1.2] text-ink">
                    {f.title}
                  </h3>
                  <DottedDivider variant="light" />
                  <p className="font-body text-[15px] leading-6 text-muted">{f.body}</p>
                </div>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
