import type { Metadata } from "next";
import CoworkingHero from "@/components/coworking/CoworkingHero";
import PartnerMarquee from "@/components/coworking/PartnerMarquee";
import MembershipPlans from "@/components/coworking/MembershipPlans";
import VibesMarquee from "@/components/sections/VibesMarquee";
import AdditionalSolutions from "@/components/coworking/AdditionalSolutions";
import CoworkingCta from "@/components/coworking/CoworkingCta";
import CommunitySpace from "@/components/coworking/CommunitySpace";
import VirtualTour from "@/components/coworking/VirtualTour";
import UpcomingEvents from "@/components/coworking/UpcomingEvents";
import MemberBenefits from "@/components/coworking/MemberBenefits";
import Location from "@/components/sections/Location";
import Faq from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Co-Working | w3.hub Berlin",
  description:
    "Flex desks, dedicated desks and private offices for AI, robotics, quantum and blockchain teams in Berlin Kreuzberg. High-speed internet, meeting rooms, community events and access to one of the most active frontier tech networks in Europe.",
};

export default function CoWorkingPage() {
  return (
    <main className="flex flex-1 flex-col">
      <CoworkingHero />
      <PartnerMarquee />
      <MembershipPlans />
      <VibesMarquee />
      <AdditionalSolutions />
      <CoworkingCta />
      <CommunitySpace />
      <VirtualTour />
      <UpcomingEvents />
      <MemberBenefits />
      <Location />
      <Faq />
    </main>
  );
}
