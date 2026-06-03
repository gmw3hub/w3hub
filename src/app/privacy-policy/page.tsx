import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | w3.hub",
  description:
    "How w3.hub collects, uses, and safeguards your personal information when you visit w3hub.berlin.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-display text-[18px] font-semibold leading-tight text-ink">{title}</h2>
      <div className="flex flex-col gap-3 text-[15px] leading-7 text-slate-violet-700">
        {children}
      </div>
    </section>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="ml-5 list-disc flex flex-col gap-1.5 marker:text-slate-violet-400">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}

const mail = (
  <a href="mailto:gm@w3hub.berlin" className="underline">
    gm@w3hub.berlin
  </a>
);

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-[760px] px-6 pb-24 pt-32 md:pt-40">
        <h1 className="font-display text-[32px] font-bold leading-tight text-ink md:text-[40px]">
          Privacy Policy
        </h1>

        <p className="mt-6 text-[15px] leading-7 text-slate-violet-700">
          Your privacy is important to us, and we are committed to protecting your personal
          information. This Privacy Policy outlines how we collect, use, and safeguard your
          data when you visit our website at{" "}
          <a
            href="https://w3hub.berlin"
            className="underline"
          >
            https://w3hub.berlin
          </a>
          .
        </p>

        <div className="mt-10 flex flex-col gap-8">
          <Section title="Information we collect">
            <p>We may collect the following types of information when you interact with our website:</p>
            <p className="font-medium text-ink">Personal Information:</p>
            <Bullets
              items={[
                "Name",
                "Email address",
                "Phone number",
                "Any information you voluntarily provide via contact forms, registration, or subscription.",
              ]}
            />
            <p className="font-medium text-ink">Non-Personal Information:</p>
            <Bullets
              items={[
                "IP address",
                "Browser type",
                "Device information",
                "Pages visited and time spent on our website",
                "Cookies and similar tracking technologies",
              ]}
            />
          </Section>

          <Section title="How We Use Your Information">
            <p>We use the information collected for the following purposes:</p>
            <Bullets
              items={[
                "To provide and improve our services.",
                "To respond to inquiries or requests.",
                "To send updates, newsletters, or promotional materials (only if you have opted in).",
                "To analyze website performance and user behavior.",
                "To comply with legal obligations.",
              ]}
            />
          </Section>

          <Section title="Cookies and Tracking Technologies">
            <p>
              We use cookies to enhance your experience on our website. Cookies are small
              text files stored on your device that help us:
            </p>
            <Bullets
              items={[
                "Remember your preferences.",
                "Analyze website traffic and user behavior.",
                "Deliver relevant advertisements.",
              ]}
            />
            <p>
              You can manage or disable cookies through your browser settings. However, some
              features of the website may not function properly without cookies.
            </p>
          </Section>

          <Section title="Third-Party Services">
            <p>We may use third-party services to support our website operations, such as:</p>
            <Bullets
              items={[
                "Analytics tools (e.g., Google Analytics)",
                "Payment processors",
                "Social media plugins",
              ]}
            />
            <p>
              These services may collect information about you in accordance with their own
              privacy policies. We encourage you to review their policies for more details.
            </p>
          </Section>

          <Section title="Data Sharing and Disclosure">
            <p>
              We do not sell, trade, or rent your personal information to third parties.
              However, we may share your information in the following circumstances:
            </p>
            <Bullets
              items={[
                "With service providers assisting us in operating the website.",
                "To comply with legal obligations or respond to lawful requests.",
                "To protect the rights, property, or safety of W3Hub Berlin, our users, or others.",
              ]}
            />
          </Section>

          <Section title="Data Security">
            <p>
              We implement appropriate technical and organizational measures to protect your
              data from unauthorized access, alteration, disclosure, or destruction. However,
              no method of transmission over the internet is entirely secure, and we cannot
              guarantee absolute security.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>
              If you are located in the European Economic Area (EEA), you have the following
              rights under the General Data Protection Regulation (GDPR):
            </p>
            <Bullets
              items={[
                "Access your personal data.",
                "Rectify inaccurate or incomplete data.",
                "Request the deletion of your data.",
                "Restrict or object to the processing of your data.",
                "Data portability.",
                "Withdraw consent at any time (if processing is based on consent).",
              ]}
            />
            <p>To exercise these rights, please contact us at {mail}.</p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              Our website is not intended for children under the age of 13, and we do not
              knowingly collect personal information from children. If we become aware that
              we have collected data from a child, we will take steps to delete it.
            </p>
          </Section>

          <Section title="Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted
              on this page with an updated effective date. We encourage you to review this
              policy periodically.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have any questions or concerns about this Privacy Policy or your personal
              data, please contact us at: {mail}.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}
