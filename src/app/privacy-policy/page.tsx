import type { Metadata } from "next";
import LegalPage, {
  LegalBullets,
  LegalSection,
} from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | w3.hub",
  description:
    "How w3.hub collects, uses, and safeguards your personal information when you visit w3hub.berlin.",
};

const mail = (
  <a href="mailto:gm@w3hub.berlin" className="underline">
    gm@w3hub.berlin
  </a>
);

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={
        <>
          Your privacy is important to us, and we are committed to protecting your
          personal information. This Privacy Policy outlines how we collect, use, and
          safeguard your data when you visit our website at{" "}
          <a href="https://w3hub.berlin" className="underline">
            https://w3hub.berlin
          </a>
          .
        </>
      }
    >
      <LegalSection title="Information we collect" stacked>
        <p>We may collect the following types of information when you interact with our website:</p>
        <p className="font-medium text-ink">Personal Information:</p>
        <LegalBullets
          items={[
            "Name",
            "Email address",
            "Phone number",
            "Any information you voluntarily provide via contact forms, registration, or subscription.",
          ]}
        />
        <p className="font-medium text-ink">Non-Personal Information:</p>
        <LegalBullets
          items={[
            "IP address",
            "Browser type",
            "Device information",
            "Pages visited and time spent on our website",
            "Cookies and similar tracking technologies",
          ]}
        />
      </LegalSection>

      <LegalSection title="How We Use Your Information" stacked>
        <p>We use the information collected for the following purposes:</p>
        <LegalBullets
          items={[
            "To provide and improve our services.",
            "To respond to inquiries or requests.",
            "To send updates, newsletters, or promotional materials (only if you have opted in).",
            "To analyze website performance and user behavior.",
            "To comply with legal obligations.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Cookies and Tracking Technologies" stacked>
        <p>
          We use cookies to enhance your experience on our website. Cookies are small
          text files stored on your device that help us:
        </p>
        <LegalBullets
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
      </LegalSection>

      <LegalSection title="Third-Party Services" stacked>
        <p>We may use third-party services to support our website operations, such as:</p>
        <LegalBullets
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
      </LegalSection>

      <LegalSection title="Data Sharing and Disclosure" stacked>
        <p>
          We do not sell, trade, or rent your personal information to third parties.
          However, we may share your information in the following circumstances:
        </p>
        <LegalBullets
          items={[
            "With service providers assisting us in operating the website.",
            "To comply with legal obligations or respond to lawful requests.",
            "To protect the rights, property, or safety of W3Hub Berlin, our users, or others.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Data Security">
        <p>
          We implement appropriate technical and organizational measures to protect your
          data from unauthorized access, alteration, disclosure, or destruction. However,
          no method of transmission over the internet is entirely secure, and we cannot
          guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="Your Rights" stacked>
        <p>
          If you are located in the European Economic Area (EEA), you have the following
          rights under the General Data Protection Regulation (GDPR):
        </p>
        <LegalBullets
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
      </LegalSection>

      <LegalSection title="Children's Privacy">
        <p>
          Our website is not intended for children under the age of 13, and we do not
          knowingly collect personal information from children. If we become aware that
          we have collected data from a child, we will take steps to delete it.
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted
          on this page with an updated effective date. We encourage you to review this
          policy periodically.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          If you have any questions or concerns about this Privacy Policy or your personal
          data, please contact us at: {mail}.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
