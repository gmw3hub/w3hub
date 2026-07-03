import SectionReveal from "@/components/ui/SectionReveal";
import DottedDivider from "@/components/ui/DottedDivider";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const TOUR_URL = "https://my.matterport.com/show/?m=nG6h8QK87C2&ss=3&sr=-.15,-.01";

export default function VirtualTour() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mb-8 flex flex-col items-center gap-4 text-center">
          <Badge variant="eyebrow-mint">Take a virtual tour</Badge>
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
            The Premiere Builder Space
          </h2>
        </SectionReveal>

        <SectionReveal>
          <Card surface="ring-warm" className="overflow-hidden p-2">
            <div className="relative aspect-16/9 w-full overflow-hidden rounded-2xl bg-warm-grey">
              <iframe
                title="w3.hub virtual tour – Matterport"
                src={TOUR_URL}
                allow="fullscreen; xr-spatial-tracking"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>

            <div className="px-4 pb-5 pt-6 md:px-6">
              <h3 className="font-display text-[26px] font-extrabold leading-[1.12] text-ink sm:text-[30px]">
                Virtual w3.hub Tour
              </h3>
              <DottedDivider variant="dark-wide" className="mt-4 h-[5px] w-full" />
              <p className="mt-4 max-w-[640px] font-body text-[16px] leading-6 text-muted">
                Take a comprehensive virtual tour of Berlin&apos;s premiere builder
                workspace and experience w3.hub before your visit.
              </p>
            </div>
          </Card>
        </SectionReveal>
      </div>
    </section>
  );
}
