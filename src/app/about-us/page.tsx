import type { Metadata } from "next";
import AboutHero from "@/components/aboutus/AboutHero";
import Team from "@/components/aboutus/Team";
import EcosystemStrip from "@/components/aboutus/EcosystemStrip";

export const metadata: Metadata = {
  title: "About Us | w3.hub — The Faces Behind Berlin's Web3 Home",
  description:
    "Meet the team behind w3.hub. Founded in 2022 as part of w3.group, w3.hub is Berlin's central meeting point for the Web3, blockchain, crypto and AI community.",
  openGraph: {
    title: "About Us | w3.hub — The Faces Behind Berlin's Web3 Home",
    description:
      "Meet the team behind w3.hub. Founded in 2022 as part of w3.group, w3.hub is Berlin's central meeting point for the Web3, blockchain, crypto and AI community.",
    images: ["/images/og-image.png"],
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <main className="relative flex flex-1 flex-col bg-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url(/images/features/bg-doodle.webp)",
          backgroundRepeat: "repeat",
          backgroundSize: "500px",
        }}
      />

      <div className="relative">
        <section className="w-full pt-28 pb-14 md:pt-36 md:pb-16 lg:pt-40">
          <div className="mx-auto max-w-[1136px] px-5 md:px-8">
            <AboutHero />
          </div>
        </section>

        <Team />
        <EcosystemStrip />
      </div>
    </main>
  );
}
