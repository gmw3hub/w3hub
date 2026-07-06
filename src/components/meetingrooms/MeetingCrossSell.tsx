import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";

export default function MeetingCrossSell() {
  return (
    <section className="w-full bg-paper pb-16 md:pb-20">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal>
          <div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-white px-6 py-6 text-center shadow-card ring-1 ring-black/5 sm:flex-row sm:text-left">
            <p className="font-body text-[16px] font-medium leading-6 text-ink">
              Hosting 100+? See our event space.
            </p>
            <Link
              href="/event-space"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-ink-800 px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-ink"
            >
              View event space
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
