import Link from "next/link";

// Black, terminal-styled Impressum shown while the site is in stealth mode.
// Kept on-brand (no site chrome) so § 5 TMG stays satisfied without breaking
// stealth. Data mirrors the regular /imprint page.

const IMPRINT = {
  company: "w3.hub GmbH & Co. KG",
  address: ["Möckernstraße 120", "10963 Berlin"],
  court: "Amtsgericht Berlin (Charlottenburg)",
  register: "HRA 61930 B",
  management: "Isabell Kruse",
  email: "gm@w3hub.berlin",
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#46f89a]/40">
        {label}
      </span>
      <div className="font-mono text-[14px] leading-6 text-[#46f89a]/85">
        {children}
      </div>
    </div>
  );
}

export default function StealthImprint() {
  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black">
      {/* scanlines — match the countdown screen */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 3px)",
        }}
      />

      <div className="relative mx-auto flex min-h-full w-full max-w-[520px] flex-col px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 self-start font-mono text-[12px] tracking-wide text-[#46f89a]/50 transition-colors hover:text-[#46f89a]"
        >
          <span aria-hidden className="transition-transform group-hover:-translate-x-0.5">
            &larr;
          </span>
          back
        </Link>

        <h1 className="mt-10 font-mono text-[13px] font-bold uppercase tracking-[0.4em] text-[#ff2e2e] [text-shadow:0_0_10px_rgba(255,46,46,0.5)]">
          <span className="text-[#46f89a] opacity-55">&gt; </span>Impressum
        </h1>
        <p className="mt-3 font-mono text-[11px] leading-5 text-[#46f89a]/40">
          Angaben gemäß § 5 TMG
        </p>

        <div className="mt-10 flex flex-col gap-7">
          <Row label="Anbieter">
            {IMPRINT.company}
            <br />
            {IMPRINT.address[0]}
            <br />
            {IMPRINT.address[1]}
          </Row>

          <Row label="Registergericht">
            {IMPRINT.court}
            <br />
            {IMPRINT.register}
          </Row>

          <Row label="Vertretungsberechtigt">{IMPRINT.management}</Row>

          <Row label="Kontakt">
            <a
              href={`mailto:${IMPRINT.email}`}
              className="underline decoration-[#46f89a]/30 underline-offset-4 transition-colors hover:decoration-[#46f89a]"
            >
              {IMPRINT.email}
            </a>
          </Row>
        </div>
      </div>
    </div>
  );
}
