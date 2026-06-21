import type { Metadata } from "next";
import CoworkingHero from "@/components/coworking/CoworkingHero";
import PartnerMarquee from "@/components/coworking/PartnerMarquee";
import MembershipPlans from "@/components/coworking/MembershipPlans";
import VibesMarquee from "@/components/sections/VibesMarquee";
import CommunitySpace from "@/components/coworking/CommunitySpace";
import MemberBenefits from "@/components/coworking/MemberBenefits";
import Location from "@/components/sections/Location";
import AboutHost from "@/components/sections/AboutHost";
import Faq from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Co-Working | w3.hub Berlin",
  description:
    "Flex desks, dedicated desks and private offices for Web3, AI and tech teams in Berlin Kreuzberg. High-speed internet, meeting rooms, community events and access to one of the most active Web3 and AI networks in Europe.",
};

export default function CoWorkingPage() {
  return (
    <main className="flex flex-1 flex-col">
      <CoworkingHero />
      <PartnerMarquee />
      <MembershipPlans />
      <VibesMarquee />
      <CommunitySpace />
      <MemberBenefits />
      <Location />
      <AboutHost />
      <Faq />
    </main>
  );
}
