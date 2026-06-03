import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | w3.hub",
  description: "Imprint / Impressum of w3.hub GmbH & Co. KG, Berlin.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-display text-[18px] font-semibold leading-tight text-ink">{title}</h2>
      <div className="text-[15px] leading-7 text-slate-violet-700">{children}</div>
    </section>
  );
}

export default function ImprintPage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-[760px] px-6 pb-24 pt-32 md:pt-40">
        <h1 className="font-display text-[32px] font-bold leading-tight text-ink md:text-[40px]">
          Imprint
        </h1>

        <div className="mt-10 flex flex-col gap-8">
          <Section title="Angaben gemäß § 5 TMG">
            <p>
              w3.hub GmbH &amp; Co. KG
              <br />
              Möckernstraße 120, 10963, Berlin
              <br />
              Registergericht: Amtsgericht Berlin (Charlottenburg)
              <br />
              HRA 61930 B
            </p>
          </Section>

          <Section title="Kontakt">
            <p>
              <a href="mailto:gm@w3hub.berlin" className="text-accent hover:underline">
                gm@w3hub.berlin
              </a>
            </p>
          </Section>

          <Section title="Geschäftsführung">
            <p>Henrik Bredenbals</p>
          </Section>

          <Section title="Streitschlichtung">
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
              (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit
              oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </Section>

          <Section title="Haftung für Inhalte">
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
              diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
              TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
              Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
              Inhalte umgehend entfernen.
            </p>
          </Section>

          <Section title="Haftung für Links">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
              wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
              keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
              jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
              Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
              erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
              entfernen.
            </p>
          </Section>

          <Section title="Urheberrecht">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
              bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
              nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite
              nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
              Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}
