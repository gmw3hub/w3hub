import SectionReveal from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/badge";
import SolutionCard, { type Solution } from "./SolutionCard";

const SOLUTIONS: Solution[] = [
  {
    title: "Become a member",
    body: "Become part of Berlin's most vibrant Web3 community. Choose from flexible desks to dedicated workspaces that fit your style. Access cutting-edge facilities and community events where enthusiasts, startups, and creatives meet.",
    href: "/co-working",
    images: [
      "/images/solutions/member-1.webp",
      "/images/solutions/member-2.webp",
      "/images/solutions/member-3.webp",
    ],
  },
  {
    title: "Office Space",
    body: "Private, professional environments for your team to thrive. Our office spaces combine privacy with community access, giving you a dedicated space to scale comfortably with flexible terms tailored to growing companies.",
    href: "/co-working",
    images: [
      "/images/solutions/office-1.webp",
      "/images/solutions/office-2.webp",
      "/images/solutions/office-3.webp",
    ],
  },
  {
    title: "Event Space",
    body: "Host impactful events in our Berlin-style venue. From intimate meetups or dinners to larger conferences, our configurable space adapts to your vision. Full tech setup and community promotion included, you just need to bring your ideas and audience.",
    href: "/event-space",
    images: [
      "/images/solutions/event-1.webp",
      "/images/solutions/event-2.webp",
      "/images/solutions/event-3.webp",
    ],
  },
  {
    title: "Meeting Rooms",
    body: "Professional spaces available for members and non-members that can book by the day for client meetings, team sessions, or collaborative work. Fully equipped with presentation tools and comfortable seating – your temporary base in Berlin's Web3 hub.",
    href: "/meeting-rooms",
    images: [
      "/images/solutions/meeting-1.webp",
      "/images/solutions/meeting-2.webp",
      "/images/solutions/meeting-3.webp",
    ],
  },
  {
    title: "Ecosystem Tours",
    body: "Bring your corporate, investor or university group inside Berlin's Web3 ecosystem. Curated, insider-led tours connect you to the founders, funds and builders shaping the onchain economy – from a two-hour sneak peek to a multi-day tailor-made programme.",
    href: "/ecosystem-tours",
    images: [
      "/images/photos/event-networking.webp",
      "/images/photos/community-networking.webp",
      "/images/photos/event-space-charitea.webp",
    ],
  },
];

export default function Solutions() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[800px] px-5">
        <SectionReveal className="flex flex-col items-start gap-4">
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[48px]">
            Our Custom Solutions
          </h2>
          <Badge variant="eyebrow-mint">Tailored to your needs</Badge>
        </SectionReveal>

        <div className="mt-10 flex flex-col gap-10">
          {SOLUTIONS.map((s, i) => (
            <SolutionCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
