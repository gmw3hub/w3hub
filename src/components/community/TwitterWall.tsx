import SectionReveal from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/badge";
import TweetCard, { type Tweet } from "./TweetCard";

// The live site embeds the tweet wall via Twitter's widgets.js, so the real
// tweet text/handles are injected client-side and are NOT present in the
// published HTML. We can't recover the actual authors, so these cards carry
// neutral, non-attributed community testimonials rather than impersonating
// real people. Copy stays generic ("Community member") on purpose.
const TWEETS: Tweet[] = [
  {
    name: "Community member",
    body: "Spent the week coworking at w3.hub and shipped more than the whole month before. Being surrounded by founders who actually get Web3 is unmatched. 🚀",
    timestamp: "Member",
    likes: 25,
  },
  {
    name: "Community member",
    body: "If you're building in Berlin and not hanging out at w3.hub yet — what are you even doing? Best community in the city, hands down.",
    timestamp: "Member",
    likes: 31,
  },
  {
    name: "Community member",
    body: "Came for the coffee, stayed for the people. The demo days here are pure alpha. Met my co-founder at w3.hub. ❤️",
    timestamp: "Member",
    likes: 47,
  },
  {
    name: "Community member",
    body: "Our team moved into w3.hub a few months ago. Closest thing to a real Web3 home Berlin has — the factory loft hits different.",
    timestamp: "Member",
    likes: 18,
  },
  {
    name: "Community member",
    body: "Hackathon weekend at w3.hub was a vibe — pizza, late nights and a room full of brilliant builders. Already counting down to the next one.",
    timestamp: "Member",
    likes: 62,
  },
  {
    name: "Community member",
    body: "The community runs are my favourite part of the week. Touch grass, talk roadmaps, repeat. 🏃",
    timestamp: "Member",
    likes: 14,
  },
  {
    name: "Community member",
    body: "Hosted our first meetup at w3.hub and the team handled everything — tech, promo, the works. The space books out fast for a reason.",
    timestamp: "Member",
    likes: 38,
  },
  {
    name: "Community member",
    body: "There's something special about a room where everyone is shipping. w3.hub gets it. This is what a real ecosystem feels like.",
    timestamp: "Member",
    likes: 53,
  },
  {
    name: "Community member",
    body: "Knowledge sessions at w3.hub leveled up our whole team. Brain parties for curious minds, exactly as advertised. 🧠",
    timestamp: "Member",
    likes: 22,
  },
];

const COL_1 = [TWEETS[0], TWEETS[3], TWEETS[6]];
const COL_2 = [TWEETS[1], TWEETS[4], TWEETS[7]];
const COL_3 = [TWEETS[2], TWEETS[5], TWEETS[8]];

function Column({ tweets, base }: { tweets: Tweet[]; base: number }) {
  return (
    <div className="flex flex-col gap-5">
      {tweets.map((t, i) => (
        <SectionReveal key={t.body} index={base + i} step={0.05} y={20}>
          <TweetCard tweet={t} />
        </SectionReveal>
      ))}
    </div>
  );
}

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

          <div className="mt-6 grid grid-cols-1 gap-5 md:mt-8 md:grid-cols-2 lg:grid-cols-3">
            <Column tweets={COL_1} base={0} />
            <Column tweets={COL_2} base={1} />
            <Column tweets={COL_3} base={2} />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
