import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";
import { Badge } from "@/components/ui/badge";
import TweetCard, { type Tweet } from "./TweetCard";

const TYPEFORM =
  "https://form.typeform.com/to/qdGDfsSN?utm_source=website&utm_medium=community&utm_campaign=join";

const TWEETS: Tweet[] = [
  {
    name: "Lena Brandt",
    handle: "@lenabuilds",
    body: "Spent the week coworking at w3.hub and shipped more than the last month. The energy of being surrounded by founders who actually get Web3 is unmatched. 🚀",
  },
  {
    name: "Marco Eth",
    handle: "@marco_eth",
    body: "If you're building in Berlin and not hanging out at @w3hub yet — what are you even doing? Best community in the city, hands down.",
  },
  {
    name: "Priya Nair",
    handle: "@priya_onchain",
    body: "Came for the free coffee, stayed for the people. The demo days at w3.hub are pure alpha. Met my co-founder here. ❤️",
  },
  {
    name: "Daniel König",
    handle: "@dk_web3",
    body: "Our team moved into w3.hub three months ago. Closest thing to a real Web3 home Berlin has. The Gleisdreieck loft hits different.",
  },
  {
    name: "Sofia Almeida",
    handle: "@sofia_defi",
    body: "Hackathon weekend at w3.hub was a vibe — pizza, late nights, and a wall full of brilliant builders. Already counting down to the next one.",
  },
  {
    name: "Tom Reyes",
    handle: "@tomreyes",
    body: "The community runs through Gleisdreieckpark might be my favourite part of the week. Touch grass, talk roadmaps, repeat. 🏃",
  },
  {
    name: "Aisha Khan",
    handle: "@aisha_zk",
    body: "Hosted our first meetup at w3.hub and the team handled everything — tech, promo, the works. 80 builders showed up. Couldn't recommend the space more.",
  },
  {
    name: "Felix Wagner",
    handle: "@felixwagner",
    body: "There's something special about a room where everyone is shipping. w3.hub gets it. This is what a real ecosystem feels like.",
  },
  {
    name: "Nadia Costa",
    handle: "@nadiacosta",
    body: "Knowledge sessions at w3.hub leveled up our whole team. Brain parties for curious minds, exactly as advertised. 🧠",
  },
];

const COL_1 = [TWEETS[0], TWEETS[3], TWEETS[6]];
const COL_2 = [TWEETS[1], TWEETS[4], TWEETS[7]];
const COL_3 = [TWEETS[2], TWEETS[5], TWEETS[8]];

function Column({ tweets, base }: { tweets: Tweet[]; base: number }) {
  return (
    <div className="flex flex-col gap-5">
      {tweets.map((t, i) => (
        <SectionReveal key={t.handle} index={base + i} step={0.05} y={20}>
          <TweetCard tweet={t} />
        </SectionReveal>
      ))}
    </div>
  );
}

export default function CommunityHero() {
  return (
    <section className="w-full bg-paper pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="flex flex-col items-center gap-5 text-center">
          <Badge variant="eyebrow-mint">community</Badge>
          <h1 className="font-display font-extrabold text-ink text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight">
            Let the community speak…
          </h1>
          <p className="font-body text-[18px] font-medium leading-7 text-muted md:text-[20px]">
            the best tweets about w3.hub
          </p>
          <PillButton href={TYPEFORM} external size="lg" className="mt-1">
            Become part of the community
          </PillButton>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          <Column tweets={COL_1} base={0} />
          <Column tweets={COL_2} base={1} />
          <Column tweets={COL_3} base={2} />
        </div>
      </div>
    </section>
  );
}
