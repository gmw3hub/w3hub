import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";
import DoodleBackdrop from "@/components/ui/DoodleBackdrop";
import DashedFrame from "@/components/ui/DashedFrame";
import { TOUR_ENQUIRY_URL } from "./tour-data";

export default function EcosystemCta() {
  return (
    <section className="relative w-full overflow-hidden">
      <DoodleBackdrop />

      <div className="relative mx-auto max-w-[1136px] px-4 py-14 sm:px-6 md:py-20">
        <DashedFrame
          className="shadow-[0_28px_70px_-34px_rgba(16,20,34,0.22)]"
          innerClassName="relative overflow-hidden px-6 py-14 text-center md:px-12 md:py-16"
        >
          <SectionReveal className="mx-auto max-w-[680px]">
            <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[44px] leading-[1.08]">
              Plan your tour
            </h2>
            <p className="mt-4 font-body text-[16px] font-medium leading-6 text-muted">
              Tell us your goals, group size and dates — we&apos;ll design the
              right route through Berlin&apos;s Web3 ecosystem and send you a quote.
            </p>
            <div className="mt-8 flex justify-center">
              <PillButton href={TOUR_ENQUIRY_URL} external size="lg">
                Request a Tour
              </PillButton>
            </div>
          </SectionReveal>
        </DashedFrame>
      </div>
    </section>
  );
}
