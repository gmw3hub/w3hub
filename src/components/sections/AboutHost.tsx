import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import DottedDivider from "@/components/ui/DottedDivider";

export default function AboutHost() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto flex max-w-[1136px] flex-col items-center px-5 md:px-8">
        <SectionReveal className="flex flex-col items-center gap-5 text-center">
          <Badge variant="eyebrow-mint">part of w3.group</Badge>
          <h2 className="font-display font-extrabold text-ink text-[32px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[48px]">
            About the host
          </h2>
        </SectionReveal>

        <SectionReveal className="mt-10 w-full">
          <Card className="flex flex-col overflow-hidden p-2 md:flex-row md:items-stretch">
            <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl md:aspect-auto md:w-[472px] md:shrink-0">
              <Image
                src="/images/host-w3group.webp"
                alt="The w3.group team in Berlin"
                fill
                sizes="(min-width: 768px) 472px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-4 px-4 py-6 md:px-6 md:py-8">
              <h3 className="font-display font-extrabold text-ink text-[26px] sm:text-[30px] leading-[1.12]">
                Fueling frontier tech
                <br />
                from Berlin
              </h3>

              <DottedDivider variant="dark-wide" className="h-[5px] w-full" />

              <p className="font-body text-[16px] leading-6 text-ink">
                w3.hub is a collaboration between Betahaus, Bauwerk and w3.group.
                w3.group is a leading frontier tech ecosystem in Germany, comprised
                of an investment arm, an infrastructure provider as well as a media
                house with strong network effects.
              </p>

              <PillButton href="https://w3.group" external size="lg" className="mt-1 self-start">
                Learn about w3.group
              </PillButton>
            </div>
          </Card>
        </SectionReveal>
      </div>
    </section>
  );
}
