import type { Metadata } from "next";
import EventHero from "@/components/eventspace/EventHero";
import EventHighlights from "@/components/eventspace/EventHighlights";
import FormatMarquee from "@/components/eventspace/FormatMarquee";
import EventFeatures from "@/components/eventspace/EventFeatures";
import Events from "@/components/sections/Events";
import Location from "@/components/sections/Location";
import Newsletter from "@/components/sections/Newsletter";
import AboutHost from "@/components/sections/AboutHost";
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
      <EventHighlights />
      <FormatMarquee />
      <EventFeatures />
      <Events />
      <Location />
      <Newsletter />
      <AboutHost />
      <Faq />
    </main>
  );
}
