import SmartLink from "@/components/ui/SmartLink";

type Contact = { label: string; href: string; icon: React.ReactNode };

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="2.5" y="4" width="15" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 5.5 10 10.5l6.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M10 2.7a7.3 7.3 0 0 0-6.2 11.1L2.7 17.3l3.6-1.1A7.3 7.3 0 1 0 10 2.7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7.5 7c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .5.4l.5 1.2c0 .2 0 .3-.1.4l-.4.5c-.1.1-.2.2 0 .5.3.5.7.9 1.2 1.2.3.2.4.1.5 0l.5-.5c.1-.2.3-.1.4-.1l1.2.6c.2.1.3.2.3.3 0 .5-.4 1.2-.8 1.3-.4.2-1 .3-2.6-.4-1.9-.8-3-2.7-3.1-2.8-.1-.1-.7-1-.7-1.9 0-.9.5-1.3.6-1.4Z" fill="currentColor" />
    </svg>
  );
}
function CalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="2.5" y="4" width="15" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 8h15M6.5 2.5v3M13.5 2.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const CONTACTS: Contact[] = [
  { label: "gm@w3hub.berlin", href: "mailto:gm@w3hub.berlin", icon: <MailIcon /> },
  { label: "WhatsApp", href: "https://wa.me/4915214912040", icon: <WhatsAppIcon /> },
  { label: "Book a 15-min call", href: "https://cal.com/quinn-w3/15min", icon: <CalIcon /> },
];

export default function ContactStrip() {
  return (
    <section className="w-full border-t border-black/6 bg-paper">
      <div className="mx-auto flex max-w-[1136px] flex-col items-center gap-6 px-5 py-12 text-center md:flex-row md:justify-between md:gap-8 md:text-left md:px-8">
        <div>
          <h2 className="font-display text-[22px] font-extrabold leading-tight text-ink sm:text-[26px]">
            Questions? We reply within 24 hours.
          </h2>
          <p className="mt-2 font-body text-[15px] leading-6 text-muted">
            Reach us by email, WhatsApp or grab a quick call.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          {CONTACTS.map((c) => (
            <SmartLink
              key={c.label}
              href={c.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-[15px] font-semibold text-ink shadow-card ring-1 ring-black/10 transition-colors hover:bg-paper"
            >
              <span className="text-ink/80">{c.icon}</span>
              {c.label}
            </SmartLink>
          ))}
        </div>
      </div>
    </section>
  );
}
