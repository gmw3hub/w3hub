import type { Metadata } from "next";
import CalendarSection from "@/components/eventcalendar/CalendarSection";
import Newsletter from "@/components/sections/Newsletter";
import Faq from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Event Calendar | w3.hub",
  description:
    "Browse all upcoming events at w3.hub Berlin — meetups, demo days, hackathons and community dinners for Web3, AI and frontier tech, all in one calendar.",
  openGraph: {
    title: "Event Calendar | w3.hub",
    description:
      "Browse all upcoming events at w3.hub Berlin — meetups, demo days, hackathons and community dinners for Web3, AI and frontier tech.",
    images: ["/images/og-image.png"],
    type: "website",
  },
};

export default function EventCalendarPage() {
  return (
    <main className="flex flex-1 flex-col">
      <CalendarSection />
      <Newsletter />
      <Faq />
    </main>
  );
}
