import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import DoodleBackdrop from "@/components/ui/DoodleBackdrop";

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
    <section className="relative w-full overflow-hidden py-16 md:py-20 lg:py-24">
      <DoodleBackdrop />

      <div className="relative mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mb-10 text-center md:mb-12">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[44px] leading-[1.1] lg:leading-[48px] tracking-tight">
            Modular Event Space
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-4 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3 md:gap-5">
          {FORMATS.map((f, i) => (
            <SectionReveal key={f.title} as="article" index={i % 3} step={0.08} y={20}>
              <div className="group flex h-full flex-col rounded-2xl bg-white p-3 shadow-card ring-1 ring-black/10">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-warm-grey">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    sizes="(min-width: 1200px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1.5 p-3">
                  <h3 className="font-display text-[18px] font-extrabold leading-[1.2] text-ink">
                    {f.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[20px] text-ink/75">
                    {f.body}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
