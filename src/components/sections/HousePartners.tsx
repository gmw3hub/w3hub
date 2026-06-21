import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";
import DoodleBackdrop from "@/components/ui/DoodleBackdrop";
import DottedDivider from "@/components/ui/DottedDivider";

type Partner = { src: string; alt: string; w: number; h: number };

const PARTNERS: Partner[] = [
  { src: "/images/partners/ledger.webp", alt: "Ledger", w: 171, h: 59 },
  { src: "/images/partners/jagermeister.webp", alt: "Jägermeister", w: 214, h: 81 },
  { src: "/images/partners/w3-labs.webp", alt: "w3.labs", w: 155, h: 56 },
];

type DecoSpec = { src: string; w: number; h: number; className: string };

const DECO: DecoSpec[] = [
  {
    src: "/images/features/building.webp",
    w: 160,
    h: 164,
    className: "hidden lg:block bottom-0 left-[-33px] z-0 w-[160px]",
  },
  {
    src: "/images/features/cactus-slim.webp",
    w: 188,
    h: 282,
    className: "hidden lg:block right-[-6px] bottom-0 z-0 w-[188px]",
  },
  {
    src: "/images/features/flower-agave.webp",
    w: 175,
    h: 175,
    className: "hidden lg:block right-[64px] bottom-0 z-0 w-[175px]",
  },
];

function PartnerCard({ p }: { p: Partner }) {
  return (
    <div className="relative flex h-[163px] w-[280px] flex-col items-center gap-3 overflow-hidden rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/10">
      <div className="flex h-20 w-full items-center justify-center px-2.5">
        <Image
          src={p.src}
          alt={p.alt}
          width={p.w}
          height={p.h}
          className="h-auto max-h-[68px] w-auto object-contain"
        />
      </div>
      <DottedDivider variant="dark-tight" className="h-[5px] w-[216px]" />
    </div>
  );
}

export default function HousePartners() {
  return (
    <section className="relative w-full overflow-hidden bg-paper">
      <DoodleBackdrop />
      <div className="relative mx-auto max-w-[1136px] px-4 pt-14 sm:px-6 md:pt-20">
        <div className="relative rounded-t-[56px] bg-paper p-1.5">
          <div className="relative rounded-t-[50px] border-2 border-b-0 border-dashed border-[#96908D]/50 px-6 pb-20 pt-16 md:pt-20">
            {DECO.map((d) => (
              <Image
                key={d.src}
                src={d.src}
                alt=""
                aria-hidden
                width={d.w}
                height={d.h}
                className={`pointer-events-none absolute select-none ${d.className}`}
              />
            ))}

            <SectionReveal className="relative z-10 flex flex-col items-center gap-3 text-center">
              <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
                Our House Partners
              </h2>
              <p className="max-w-[800px] font-body text-[16px] font-medium leading-6 text-muted">
                Meet our house partners who, together with our community, form the
                backbone of the w3.hub, bringing expertise and opportunities to the
                ecosystem.
              </p>
            </SectionReveal>

            <SectionReveal className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-8">
              {PARTNERS.map((p) => (
                <PartnerCard key={p.alt} p={p} />
              ))}
            </SectionReveal>

            <SectionReveal className="relative z-10 mt-10 flex justify-center">
              <PillButton href="/about-us" size="lg">
                Become a house partner
              </PillButton>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
