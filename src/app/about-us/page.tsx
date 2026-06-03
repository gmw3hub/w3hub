import type { Metadata } from "next";
import DoodleBackdrop from "@/components/ui/DoodleBackdrop";
import AboutHost from "@/components/sections/AboutHost";
import AboutHero from "@/components/aboutus/AboutHero";
import Team from "@/components/aboutus/Team";

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
    <main className="flex flex-1 flex-col">
      <section className="relative w-full overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
        <DoodleBackdrop />
        <div className="relative mx-auto max-w-[1136px] px-5 md:px-8">
          <AboutHero />
        </div>
      </section>

      <Team />
      <AboutHost />
    </main>
  );
}
