import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";

export default function HostSection() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-28">
      <div className="mx-auto flex max-w-[800px] flex-col items-center px-5 md:px-8">
        {/* Header: mint badge + heading, centered */}
        <SectionReveal className="flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center rounded-full bg-mint px-3 py-1 font-body text-[14px] font-bold uppercase leading-6 tracking-[0.7px] text-black/80">
            part of w3.group
          </span>
          <h2 className="font-display font-extrabold text-ink text-[32px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[48px]">
            About the host
          </h2>
        </SectionReveal>

        {/* Card: image left, text right */}
        <SectionReveal className="mt-10 w-full" delay={0.05}>
          <div className="relative flex flex-col gap-4 rounded-3xl border border-black/10 bg-white p-2 shadow-[0_3px_0_#DDD8D4] md:flex-row md:items-center">
            <div className="relative aspect-[468/323] w-full shrink-0 overflow-hidden rounded-2xl md:aspect-auto md:h-[323px] md:w-[468px]">
              <Image
                src="/images/JALlzNO0QwsmOaHL6qWDlv6twbA.jpg"
                alt="The w3.group team in Berlin"
                fill
                sizes="(min-width: 768px) 468px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex w-full shrink-0 flex-col justify-center gap-3 px-3 py-6 md:w-[300px] md:py-10">
              <h3 className="font-display font-extrabold text-ink text-[24px] leading-8">
                Fueling Web3
                <br />
                from Berlin
              </h3>

              {/* dotted divider — Figma: 4px dots, black/30, ~12px spacing */}
              <div
                aria-hidden
                className="h-[5px] w-full bg-[radial-gradient(circle,_rgba(0,0,0,0.30)_2px,_transparent_2.2px)] bg-repeat-x [background-size:11.87px_5px]"
              />

              <p className="font-body text-[16px] leading-6 text-ink">
                w3.group is the leading Web3 ecosystem in Germany and is comprised
                of an investment arm, an infrastructure provider as well as a media
                house with strong network effects.
              </p>

              <div className="mt-1">
                <PillButton href="https://w3.group" variant="dark">
                  Learn about w3.group
                </PillButton>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
