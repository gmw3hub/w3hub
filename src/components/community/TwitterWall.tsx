import { Tweet } from "react-tweet";
import SectionReveal from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/badge";

// Real community tweets about w3.hub (IDs taken from the x.com status URLs).
const TWEET_IDS = [
  "1838997181665046841", // @zCase_
  "1935658446482821627", // @design_thyme
  "1839716207718482403", // @jerallaire
  "1794450448511832468", // @braveryandglory
  "1932706700944929054", // @YouKnowEno
  "1900207451556741253", // @alex_scharrer
];

// Three top-aligned columns (masonry-style), matching the live wall layout.
const COLUMNS = [
  [TWEET_IDS[0], TWEET_IDS[3]],
  [TWEET_IDS[1], TWEET_IDS[4]],
  [TWEET_IDS[2], TWEET_IDS[5]],
];

export default function TwitterWall() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="flex flex-col items-center gap-5 text-center">
          <h2 className="font-display font-extrabold text-ink text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight">
            Let the community speak…
          </h2>
        </SectionReveal>

        <SectionReveal className="mt-10 rounded-3xl bg-white p-5 shadow-card ring-1 ring-black/10 md:mt-12 md:p-8 lg:p-10">
          <Badge variant="eyebrow-mint">The best tweets about w3.hub</Badge>

          <div className="tweet-wall mt-6 grid grid-cols-1 items-start gap-5 md:mt-8 md:grid-cols-2 lg:grid-cols-3">
            {COLUMNS.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-5">
                {col.map((id) => (
                  <Tweet key={id} id={id} />
                ))}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
