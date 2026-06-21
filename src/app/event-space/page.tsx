import type { Metadata } from "next";
import EventHero from "@/components/eventspace/EventHero";
import VenueMarquee from "@/components/eventspace/VenueMarquee";
import EventHighlights from "@/components/eventspace/EventHighlights";
import VirtualWalkthrough from "@/components/eventspace/VirtualWalkthrough";
import ModularEventSpace from "@/components/eventspace/ModularEventSpace";
import EventFeatures from "@/components/eventspace/EventFeatures";
import Location from "@/components/sections/Location";
import Events from "@/components/sections/Events";
import Faq from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Event Space | w3.hub",
  description:
    "500 sqm factory loft in Berlin Kreuzberg — the leading event location for Web3, crypto, blockchain and AI conferences, hackathons, meetups and panel events.",
  openGraph: {
    title: "Event Space | w3.hub",
    description:
      "500 sqm factory loft in Berlin Kreuzberg — the leading event location for Web3, crypto, blockchain and AI conferences, hackathons, meetups and panel events.",
  },
};

export default function EventSpacePage() {
  return (
    <main className="flex flex-1 flex-col">
      <EventHero />
      <VenueMarquee />
      <EventHighlights />
      <VirtualWalkthrough />
      <ModularEventSpace />
      <EventFeatures />
      <Location />
      <Events />
      <Faq />
    </main>
  );
}
