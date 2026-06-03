import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";
import { Card } from "@/components/ui/card";

const TOUR_URL = "https://my.matterport.com/show/?m=nG6h8QK87C2&ss=3&sr=-.15,-.01";

export default function VirtualTour() {
  return (
    <section className="w-full bg-paper pb-16 md:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mb-8 flex flex-col items-center gap-3 text-center">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
            Virtual w3.hub Tour
          </h2>
          <p className="max-w-[700px] font-body text-[16px] font-medium leading-6 text-muted">
            Take a comprehensive virtual tour of Berlin&apos;s premier Web3
            workspace and experience w3.hub before your visit.
          </p>
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
          </Card>
        </SectionReveal>

        <SectionReveal className="mt-8 flex justify-center">
          <PillButton href={TOUR_URL} external size="lg">
            Open virtual tour
          </PillButton>
        </SectionReveal>
      </div>
    </section>
  );
}
