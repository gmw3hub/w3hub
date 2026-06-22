import type { Metadata } from "next";
import EcosystemHero from "@/components/ecosystemtours/EcosystemHero";
import PartnerMarquee from "@/components/coworking/PartnerMarquee";
import WhyTours from "@/components/ecosystemtours/WhyTours";
import TourTiers from "@/components/ecosystemtours/TourTiers";
import TourStats from "@/components/ecosystemtours/TourStats";
import TourAudiences from "@/components/ecosystemtours/TourAudiences";
import EcosystemFaq from "@/components/ecosystemtours/EcosystemFaq";
import EcosystemCta from "@/components/ecosystemtours/EcosystemCta";

export const metadata: Metadata = {
  title: "Ecosystem Tours | w3.hub Berlin",
  description:
    "Curated, insider-led tours of Berlin's Web3, crypto and AI ecosystem. Bring your corporate, investor or university group inside w3.hub at Gleisdreieck Park and meet the founders, funds and builders shaping the onchain economy.",
};

export default function EcosystemToursPage() {
  return (
    <main className="flex flex-1 flex-col">
      <EcosystemHero />
      <PartnerMarquee />
      <WhyTours />
      <TourTiers />
      <TourStats />
      <TourAudiences />
      <EcosystemFaq />
      <EcosystemCta />
    </main>
  );
}
