import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import DottedDivider from "@/components/ui/DottedDivider";

type Logo = { src: string; alt: string };

const LOGOS: Logo[] = [
  { src: "/images/logos/w3-fund.webp", alt: "w3.fund" },
  { src: "/images/logos/w3-vision.webp", alt: "w3.vision" },
  { src: "/images/partners/w3-labs.webp", alt: "w3.labs" },
  { src: "/images/logos/w3-group.webp", alt: "w3.group" },
];

export default function EcosystemStrip() {
  return (
    <section className="w-full pb-20 md:pb-28">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <DottedDivider variant="dark-tight" className="h-[5px] w-full opacity-40" />

        <SectionReveal className="mt-12 text-center">
          <p className="font-body text-[15px] font-semibold text-slate-violet-700">
            Part of w3.group Ecosystem
          </p>

          <div className="mt-10 grid grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-4">
            {LOGOS.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={48}
                className="mx-auto h-6 w-auto object-contain opacity-45 grayscale transition-opacity duration-200 hover:opacity-80 md:h-7"
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
