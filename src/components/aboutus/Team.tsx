import SectionReveal from "@/components/ui/SectionReveal";
import { Card } from "@/components/ui/card";
import DottedDivider from "@/components/ui/DottedDivider";

type Member = { name: string; role: string };

const TEAM: Member[] = [
  { name: "Vicktoria Klich", role: "Co-Founder" },
  { name: "Jonathan Kuhl", role: "Co-Founder" },
  { name: "Henrik Bredenbals", role: "Co-Founder" },
  { name: "Kushal Singh", role: "Operations Manager" },
  { name: "Quinn Wilhelm", role: "Community & Shitposting" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <SectionReveal
      as="article"
      index={index}
      step={0.07}
      y={18}
      className="h-full"
    >
      <Card className="group flex h-full flex-col items-center gap-4 p-6 text-center transition-shadow duration-200 hover:shadow-[0px_5px_0px_var(--color-warm-grey)]">
        <span
          aria-hidden
          className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-mint font-display text-[24px] font-extrabold text-ink transition-transform duration-200 group-hover:scale-105"
        >
          {initials(member.name)}
        </span>

        <DottedDivider variant="dark-tight" className="h-[5px] w-full" />

        <div className="flex flex-col gap-1">
          <h3 className="font-display text-[18px] font-extrabold leading-6 text-ink">
            {member.name}
          </h3>
          <p className="font-body text-[15px] font-medium leading-5 text-muted">
            {member.role}
          </p>
        </div>
      </Card>
    </SectionReveal>
  );
}

export default function Team() {
  return (
    <section className="w-full bg-paper pb-16 md:pb-20 lg:pb-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
