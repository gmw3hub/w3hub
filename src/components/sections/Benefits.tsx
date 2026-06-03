import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import DoodleBackdrop from "@/components/ui/DoodleBackdrop";
import DottedDivider from "@/components/ui/DottedDivider";

type Benefit = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

function IconBlocks() {
  return (
    <svg width="30" height="30" viewBox="0 0 33 33" fill="currentColor" aria-hidden>
      <rect x="3.25" y="3.4" width="20.5" height="20.3" rx="6.5" />
      <rect x="12.3" y="12.2" width="17.4" height="17.4" rx="5.5" />
    </svg>
  );
}
function IconCash() {
  return (
    <svg width="30" height="29" viewBox="0 0 33 32" fill="none" aria-hidden>
      <rect x="2.2" y="7.8" width="28.6" height="16.4" rx="3.2" fill="currentColor" />
      <circle cx="16.5" cy="16" r="3.9" fill="#fff" />
      <circle cx="6.6" cy="11.4" r="1.4" fill="#fff" />
      <circle cx="26.4" cy="20.6" r="1.4" fill="#fff" />
    </svg>
  );
}
function IconPeople() {
  return (
    <svg width="30" height="29" viewBox="0 0 33 32" fill="currentColor" aria-hidden>
      <circle cx="11.5" cy="11" r="4.6" />
      <circle cx="23" cy="12.3" r="3.7" />
      <path d="M11.5 17.2c-4.5 0-8.2 3.2-8.2 7.2v2.2h16.4v-2.2c0-4-3.7-7.2-8.2-7.2Z" />
      <path d="M23 17.8c-1 0-2 .2-2.8.6 2.3 1.6 3.8 4.2 3.8 7.2v1.6h6.3v-1.9c0-4.1-3.3-7.5-7.3-7.5Z" />
    </svg>
  );
}
function IconMonitor() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <rect x="2.4" y="5.3" width="27.2" height="18" rx="3.2" />
      <rect x="13" y="23.3" width="6" height="3.4" />
      <rect x="8.5" y="26" width="15" height="2.6" rx="1.3" />
    </svg>
  );
}

const BENEFITS: Benefit[] = [
  {
    title: "Web3 Native Space",
    body: "Be exclusively surrounded by Web3 professionals and events. Work alongside peers who speak your language.",
    icon: <IconBlocks />,
  },
  {
    title: "Bang For Your Buck",
    body: "w3.hub is more than a space to work: Become part of a thriving ecosystem of web3 innovators and resources.",
    icon: <IconCash />,
  },
  {
    title: "Community First",
    body: "Our members shape our priorities and culture. We've built an environment where your growth is supported by the community.",
    icon: <IconPeople />,
  },
  {
    title: "Prime Location & Setup",
    body: "Be productive with our ergonomic work-setup. Events are hosted in our Berlin-style space, perfect for celebrating Web3.",
    icon: <IconMonitor />,
  },
];

// Positions (in px) measured against the centered 800px content block at
// Figma 1440; they overflow into side margins and clip below 1440.
type Sticker = { src: string; w: number; h: number; left: number; top: number };
const STICKERS: Sticker[] = [
  { src: "rat-brush", w: 93, h: 93, left: -61, top: 100 },
  { src: "cat", w: 120, h: 120, left: 834, top: 28 },
  { src: "cactus-tall", w: 347, h: 516, left: -253, top: 144 },
  { src: "flower-agave", w: 175, h: 176, left: -101, top: 463.5 },
  { src: "cactus-ball", w: 139, h: 140, left: 709, top: 514.5 },
  { src: "monkey", w: 329, h: 462, left: 719, top: 246.81 },
];

export default function Benefits() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 lg:py-24">
      <DoodleBackdrop />
      <div className="relative mx-auto w-full max-w-[800px] px-5 lg:min-h-[740px]">
        <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block" aria-hidden>
          {STICKERS.map((s) => (
            <SectionReveal
              key={s.src}
              className="absolute"
              style={{ left: s.left, top: s.top, width: s.w, height: s.h }}
              y={0}
            >
              <Image
                src={`/images/features/${s.src}.webp`}
                alt=""
                width={s.w}
                height={s.h}
                className="h-full w-full select-none object-contain"
                draggable={false}
              />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="relative z-10 flex flex-col items-center text-center">
          <h2 className="font-display font-extrabold text-ink text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.1] lg:leading-[44px]">
            Berlin&apos;s Premier Coworking &amp; Event
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            Ecosystem for Web3
          </h2>
          <p className="mt-3 font-body text-[16px] leading-6 font-medium text-muted">
            The w3.hub is your gateway to Berlin&apos;s Web3 ecosystem
          </p>
        </SectionReveal>

        <div className="relative z-10 mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {BENEFITS.map((f, i) => (
            <SectionReveal
              key={f.title}
              as="article"
              index={i}
              step={0.07}
              y={18}
              className="relative flex flex-col gap-2 rounded-3xl bg-white p-5 shadow-card"
            >
              {i === 3 && (
                <Image
                  src="/images/features/paperclip.webp"
                  alt=""
                  aria-hidden
                  width={50}
                  height={90}
                  className="pointer-events-none absolute -top-2.5 right-[42px] h-[45px] w-[25px] select-none object-contain"
                  draggable={false}
                />
              )}
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center text-ink">
                  {f.icon}
                </span>
                <h3 className="font-display font-extrabold text-ink text-[16px] leading-6">
                  {f.title}
                </h3>
              </div>
              <DottedDivider variant="light" />
              <p className="font-body text-[16px] leading-6 text-ink">{f.body}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
