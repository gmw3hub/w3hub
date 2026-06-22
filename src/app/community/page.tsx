import type { Metadata } from "next";
import CommunityHero from "@/components/community/CommunityHero";
import CommunityInitiatives from "@/components/community/CommunityInitiatives";
import TwitterWall from "@/components/community/TwitterWall";
import CommunitySpace from "@/components/community/CommunitySpace";
import VibesMarquee from "@/components/sections/VibesMarquee";
import Events from "@/components/sections/Events";

export const metadata: Metadata = {
  title: "Community | w3.hub — Berlin's Home of Web3",
  description:
    "w3.hub is a cornerstone of Berlin's Web3 community — coworking, meetups, runs, hackathons and demo days. See what the community says and become part of it.",
  openGraph: {
    title: "Community | w3.hub — Berlin's Home of Web3",
    description:
      "A cornerstone of the Web3 community, fostering collaboration and thriving. Read the best tweets about w3.hub and join the community in Berlin.",
    images: ["/images/og-image.png"],
    type: "website",
  },
};

export default function CommunityPage() {
  return (
    <main className="flex flex-1 flex-col">
      <CommunityHero />
      <CommunityInitiatives />
      <TwitterWall />
      <CommunitySpace />
      <VibesMarquee />
      <Events />
    </main>
  );
}
