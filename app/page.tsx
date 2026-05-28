import Hero from "@/components/home/Hero";
import EventsSection from "@/components/home/EventsSection";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <EventsSection />
      {/* Subsequent sections will be added section-by-section per CLAUDE.md */}
    </main>
  );
}
