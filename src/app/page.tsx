import Hero from "@/components/home/Hero";
import EventsSection from "@/components/home/EventsSection";
import FeatureGrid from "@/components/home/FeatureGrid";
import SolutionsCards from "@/components/home/SolutionsCards";
import Marquee from "@/components/home/Marquee";
import PartnersSection from "@/components/home/PartnersSection";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import LocationDetails from "@/components/home/LocationDetails";
import HostSection from "@/components/home/HostSection";
import FaqAccordion from "@/components/home/FaqAccordion";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <EventsSection />
      <FeatureGrid />
      <SolutionsCards />
      <Marquee />
      <PartnersSection />
      <NewsletterSignup />
      <LocationDetails />
      <HostSection />
      <FaqAccordion />
    </main>
  );
}
