/**
 * Imprint page (Impressum).
 *
 * Rechtliche Angaben gemäß § 5 TMG und § 55 RStV. Diese Seite liefert die
 * verpflichtenden Informationen zur Anbieterkennzeichnung für den
 * deutschsprachigen Raum. Alle Angaben sind Beispieltexte und sollten an
 * die tatsächlichen Unternehmensdaten angepasst werden.
 */
export default function Imprint() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1>Impressum</h1>
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Özer Media<br />
        Steinacker II 22<br />
        76684 Östringen<br />
        Deutschland
      </p>
      <h2>Kontakt</h2>
      <p>
        Telefon: <a href="tel:+4972539680725">+49 7253 9680725</a><br />
        E‑Mail: <a href="mailto:info@oezermedia.com">info@oezermedia.com</a>
      </p>
      <h2>Vertreten durch</h2>
      <p>Inhaber: Ömer Selcuk Özer</p>
      <h2>Redaktionell verantwortlich</h2>
      <p>Ömer Selcuk Özer<br />Steinacker II 22<br />76684 Östringen</p>
      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE355355808</p>
      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.
      </p>
      <p>
        Unsere E‑Mail-Adresse finden Sie oben im Impressum. Wir sind nicht
        bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
        auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
        §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen oder nach Umständen zu forschen, die auf eine
        rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
        oder Sperrung der Nutzung von Informationen nach den allgemeinen
        Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
        jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
        Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>
      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
        fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
        verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
        Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
        Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
        permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
        ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
        Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
        umgehend entfernen.
      </p>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Impressum',
      description:
        'Impressum von Özer Media mit Kontaktinformationen, Verantwortlichem, Umsatzsteuer-ID und Haftungshinweisen gemäß deutschem Recht.',
    },
  };
}