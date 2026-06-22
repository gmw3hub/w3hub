import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";

type Member = { name: string; role: string; photo: string };

const TEAM: Member[] = [
  {
    name: "Quinn Wilhelm",
    role: "Community & Shitposting",
    photo: "/images/team/quinn-wilhelm.webp",
  },
  {
    name: "Kushal Singh",
    role: "Operations Manager",
    photo: "/images/team/kushal-singh.webp",
  },
  {
    name: "Vicktoria Klich",
    role: "Co-Founder",
    photo: "/images/team/vicktoria-klich.webp",
  },
  {
    name: "Jonathan Kuhl",
    role: "Co-Founder",
    photo: "/images/team/jonathan-kuhl.webp",
  },
  {
    name: "Henrik Bredenbals",
    role: "Co-Founder",
    photo: "/images/team/henrik-bredenbals.webp",
  },
];

function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <SectionReveal as="article" index={index} step={0.07} y={18} className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-[18px] bg-white shadow-card ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-mint/70 via-mint/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div className="relative z-10 flex h-full flex-col p-2.5">
          <div className="overflow-hidden rounded-xl bg-[#eceef1]">
            <Image
              src={member.photo}
              alt={member.name}
              width={603}
              height={690}
              className="aspect-4/5 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>

          <div className="px-1.5 pb-1 pt-3">
            <h3 className="font-display text-[15px] font-extrabold leading-5 text-ink">
              {member.name}
            </h3>
            <p className="mt-0.5 font-body text-[13px] font-medium leading-[18px] text-muted">
              {member.role}
            </p>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

export default function Team() {
  return (
    <section className="w-full pb-16 md:pb-20 lg:pb-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <div className="mx-auto grid max-w-[1000px] grid-cols-2 gap-4 sm:gap-5 min-[900px]:grid-cols-4">
          {TEAM.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
