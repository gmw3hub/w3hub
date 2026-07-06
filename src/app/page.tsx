import Hero from "@/components/sections/Hero";
import AnswerIntro from "@/components/sections/AnswerIntro";
import StatsBand from "@/components/sections/StatsBand";
import FourFrontiers from "@/components/sections/FourFrontiers";
import Events from "@/components/sections/Events";
import Benefits from "@/components/sections/Benefits";
import TheSpace from "@/components/sections/TheSpace";
import Solutions from "@/components/sections/Solutions";
import Testimonials from "@/components/sections/Testimonials";
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
      <AnswerIntro text="w3.hub is Berlin's innovation and startup hub for AI, robotics, quantum and blockchain: 2,500 sqm of coworking, private offices and event space in a listed factory loft at Möckernstraße 120, Berlin Kreuzberg. Coworking starts at €180/month, day passes are €30, and two 500 sqm event lofts host up to 250 guests." />
      <StatsBand />
      <FourFrontiers />
      <Events />
      <Benefits />
      <TheSpace />
      <Solutions />
      <Testimonials />
      <VibesMarquee />
      <HousePartners />
      <Newsletter />
      <Location />
      <AboutHost />
      <Faq />
    </main>
  );
}
