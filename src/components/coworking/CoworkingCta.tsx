import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";

const APPLY_URL = "https://form.typeform.com/to/qdGDfsSN";

export default function CoworkingCta() {
  return (
    <section className="relative w-full h-[480px] md:h-[600px] lg:h-[702px] overflow-hidden text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/og-image.png"
        aria-hidden
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-black/10"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end gap-6 px-5 pb-8 md:px-8 md:pb-10 lg:px-12">
        <SectionReveal as="div" y={16}>
          <Image
            src="/images/logo-wordmark.svg"
            alt="w3.hub"
            width={121}
            height={32}
            className="h-8 w-auto md:h-10"
          />
        </SectionReveal>

        <SectionReveal as="div" index={1} y={16}>
          <PillButton href={APPLY_URL} external variant="light">
            Apply for membership
          </PillButton>
        </SectionReveal>
      </div>
    </section>
  );
}
