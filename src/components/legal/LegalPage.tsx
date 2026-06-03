import type { ReactNode } from "react";

type Props = {
  title: string;
  intro?: ReactNode;
  children: ReactNode;
};

export default function LegalPage({ title, intro, children }: Props) {
  return (
    <main className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-[760px] px-6 pb-24 pt-32 md:pt-40">
        <h1 className="font-display text-[32px] font-bold leading-tight text-ink md:text-[40px]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 text-[15px] leading-7 text-slate-violet-700">{intro}</p>
        )}
        <div className="mt-10 flex flex-col gap-8">{children}</div>
      </div>
    </main>
  );
}

export function LegalSection({
  title,
  stacked,
  children,
}: {
  title: string;
  stacked?: boolean;
  children: ReactNode;
}) {
  const body = stacked
    ? "flex flex-col gap-3 text-[15px] leading-7 text-slate-violet-700"
    : "text-[15px] leading-7 text-slate-violet-700";
  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-display text-[18px] font-semibold leading-tight text-ink">
        {title}
      </h2>
      <div className={body}>{children}</div>
    </section>
  );
}

export function LegalBullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="ml-5 list-disc flex flex-col gap-1.5 marker:text-slate-violet-400">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}
