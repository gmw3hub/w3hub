import Hero from "@/components/sections/Hero";
import StatsBand from "@/components/sections/StatsBand";
import FourFrontiers from "@/components/sections/FourFrontiers";
import Events from "@/components/sections/Events";
import Benefits from "@/components/sections/Benefits";
import TheSpace from "@/components/sections/TheSpace";
import Solutions from "@/components/sections/Solutions";
import VibesMarquee from "@/components/sections/VibesMarquee";
import HousePartners from "@/components/sections/HousePartners";
import Newsletter from "@/components/sections/Newsletter";
import Location from "@/components/sections/Location";
import AboutHost from "@/components/sections/AboutHost";
import Faq from "@/components/sections/Faq";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <StatsBand />
      <FourFrontiers />
      <Events />
      <Benefits />
      <TheSpace />
      <Solutions />
      <VibesMarquee />
      <HousePartners />
      <Newsletter />
      <Location />
      <AboutHost />
      <Faq />
    </main>
  );
}
