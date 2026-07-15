// Inline SVG glyphs keyed to amenity keys in src/data/amenities.ts.
// One shared map so the homepage grid and per-page rows stay consistent.
const PATHS: Record<string, React.ReactNode> = {
  wifi: (
    <>
      <path d="M4 9.5a12 12 0 0 1 16 0M6.7 12.6a8 8 0 0 1 10.6 0M9.4 15.7a4 4 0 0 1 5.2 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="12" cy="18.5" r="1.3" fill="currentColor" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  av: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 20h8M12 17v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M16 7.5a3 3 0 0 1 0 6M17 14c2.3.4 4 2.3 4 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </>
  ),
  rooms: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 20V10h6v10M9 10V4" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </>
  ),
  desk: (
    <>
      <path d="M3 9h18M4 9l1 10M20 9l-1 10M8 9V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  coffee: (
    <>
      <path d="M5 8h12v5a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M17 9h2a2 2 0 0 1 0 4h-2M9 3.5v1.5M13 3.5v1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </>
  ),
  booth: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 8h6M9 11.5h6M9 15h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </>
  ),
  bike: (
    <>
      <circle cx="6" cy="16" r="3.3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="16" r="3.3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 16l4-6h5l3 6M9 10h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  access: (
    <>
      <circle cx="12" cy="4.5" r="1.8" fill="currentColor" />
      <path d="M12 8v5h4M12 10l-4 1M12 13l3 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export default function AmenityIcon({ name, className }: { name: string; className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      {PATHS[name] ?? null}
    </svg>
  );
}
