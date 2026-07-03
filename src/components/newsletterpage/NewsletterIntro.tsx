import SectionReveal from "@/components/ui/SectionReveal";
import DottedDivider from "@/components/ui/DottedDivider";

export default function NewsletterIntro() {
  return (
    <section className="w-full bg-paper pt-28 md:pt-32 lg:pt-36">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mx-auto max-w-[760px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-mint px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink">
            Newsletter
          </span>

          <h1 className="mt-5 font-display text-[34px] font-extrabold leading-[1.05] tracking-tight text-ink md:text-[46px] lg:text-[54px]">
            The Premiere Builder Club
          </h1>

          <div className="mx-auto mt-6 max-w-[280px]">
            <DottedDivider variant="light" />
          </div>

          <p className="mx-auto mt-6 max-w-[600px] font-body text-[16px] font-medium leading-7 text-muted md:text-[17px]">
            Stay close to the community. Every week we send carefully curated
            updates, event alerts and behind-the-scenes insights straight from
            Berlin&apos;s builder community.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
