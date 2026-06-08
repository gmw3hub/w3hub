import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import PillButton from "@/components/ui/PillButton";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import DottedDivider from "@/components/ui/DottedDivider";

const BOOK_URL = "https://w3hub.cobot.me/book/29341a3ea9eb11778694f3c80983ea8e/resources";

type Room = {
  title: string;
  image: string;
  description: string;
  pax: string;
  features: string[];
};

const FEATURES = [
  "For business and private meeting",
  "Shared amenities and catering possible on request",
  "30 days flexible cancellation",
];

const ROOMS: Room[] = [
  {
    title: "Small Meeting Room",
    image: "/images/meetingrooms/small-room.webp",
    description:
      "Host intimate meetings in our professional space designed for 2-4 people.",
    pax: "2-4 PAX",
    features: FEATURES,
  },
  {
    title: "Big Meeting Room",
    image: "/images/meetingrooms/big-room.webp",
    description:
      "Conduct team gatherings in our spacious venue accommodating 8-10 people.",
    pax: "8-10 PAX",
    features: FEATURES,
  },
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden className="mt-[3px] shrink-0">
      <circle cx="9" cy="9" r="9" fill="#B5F7C4" />
      <path
        d="M5.25 9.25 8 12l4.75-5"
        stroke="#101422"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RoomCard({ room, index }: { room: Room; index: number }) {
  return (
    <SectionReveal as="article" index={index} step={0.08} y={24} className="h-full">
      <Card className="flex h-full flex-col overflow-hidden p-2">
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-warm-grey">
          <Image
            src={room.image}
            alt={`${room.title} at w3.hub`}
            fill
            sizes="(min-width: 1200px) 560px, (min-width: 800px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col gap-4 px-4 py-5 md:px-5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display font-extrabold text-ink text-[22px] leading-[1.15] sm:text-[24px]">
              {room.title}
            </h3>
            <Badge variant="eyebrow-mint" className="shrink-0">
              {room.pax}
            </Badge>
          </div>

          <DottedDivider variant="light" />

          <p className="font-body text-[16px] leading-6 text-ink">
            {room.description}
          </p>

          <div className="flex items-baseline gap-2">
            <span className="font-display text-[20px] font-extrabold text-ink">
              On Request
            </span>
            <span className="font-body text-[14px] font-medium text-muted">
              · Daily Rates
            </span>
          </div>

          <ul className="flex flex-col gap-2.5 font-body text-[15px] leading-6 text-ink">
            {room.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <PillButton href={BOOK_URL} external size="lg" className="mt-auto self-start">
            Book Now
          </PillButton>
        </div>
      </Card>
    </SectionReveal>
  );
}

export default function MeetingRooms() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="flex flex-col items-start gap-4">
          <Badge variant="eyebrow-mint">Tailored to your needs</Badge>
          <h2 className="font-display font-extrabold text-ink text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] lg:leading-[48px]">
            Daily Rates
          </h2>
        </SectionReveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {ROOMS.map((room, i) => (
            <RoomCard key={room.title} room={room} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
