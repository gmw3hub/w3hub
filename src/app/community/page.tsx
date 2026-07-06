import type { Metadata } from "next";
import CommunityHero from "@/components/community/CommunityHero";
import CommunityInitiatives from "@/components/community/CommunityInitiatives";
import MemberHighlights from "@/components/community/MemberHighlights";
import TwitterWall from "@/components/community/TwitterWall";
import CommunitySpace from "@/components/coworking/CommunitySpace";
import VibesMarquee from "@/components/sections/VibesMarquee";
import UpcomingEvents from "@/components/coworking/UpcomingEvents";

export const metadata: Metadata = {
  title: "Community | w3.hub — Berlin's Builder Community",
  description:
    "w3.hub is a cornerstone of Berlin's startup community — coworking, meetups, runs, hackathons and demo days. See what the community says and become part of it.",
  alternates: { canonical: "/community" },
  openGraph: {
    title: "Community | w3.hub — Berlin's Builder Community",
    description:
      "A cornerstone of Berlin's startup community, fostering collaboration and growth. Read the best posts about w3.hub and join the community in Berlin.",
    images: ["/images/og-image.png"],
    type: "website",
  },
};

export default function CommunityPage() {
  return (
    <main className="flex flex-1 flex-col">
      <CommunityHero />
      <CommunityInitiatives />
      <MemberHighlights />
      <TwitterWall />
      <CommunitySpace />
      <VibesMarquee />
      <UpcomingEvents />
    </main>
  );
}
