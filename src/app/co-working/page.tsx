import type { Metadata } from "next";
import CoworkingHero from "@/components/coworking/CoworkingHero";
import AnswerIntro from "@/components/sections/AnswerIntro";
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

const TITLE = "Coworking for AI, Robotics, Quantum & Blockchain Teams | w3.hub Berlin";
const DESCRIPTION =
  "Flex desks, dedicated desks and private offices for deep tech startups in Berlin Kreuzberg. High speed internet, meeting rooms, community events. From €30/day.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/co-working" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://w3hub.berlin/co-working",
    siteName: "w3.hub",
    images: ["/images/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og-image.png"],
  },
};

export default function CoWorkingPage() {
  return (
    <main className="flex flex-1 flex-col">
      <CoworkingHero />
      <AnswerIntro
        text="Coworking at w3.hub in Berlin Kreuzberg: Club membership €180/month (Mon to Fri, 9 to 17), Pro €275/month (24/7 access, 15h meeting rooms included), Day Pass €30, and private team offices for 4 to 12 people on request."
        amenities={["clock", "desk", "rooms", "roaming"]}
      />
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
