/**
 * FAQ page.
 *
 * Beantwortet häufig gestellte Fragen rund um unsere Dienstleistungen. Für
 * Answer‑Engine‑Optimierung (AEO) wird strukturiertes DatenmarkUp (JSON‑LD)
 * vom Typ "FAQPage" eingebunden, damit Suchmaschinen die Fragen und
 * Antworten direkt auslesen können【963709157753767†L84-L169】.
 */
export default function FAQ() {
  const faqEntries = [
    {
      question: 'Wie lange dauert ein Fotoshooting?',
      answer:
        'Die Dauer hängt von der Art des Shootings ab. Für ein Paar‑ oder Familienshooting sollten Sie etwa 1–2 Stunden einplanen. Hochzeitsreportagen begleiten wir meist den ganzen Tag.',
    },
    {
      question: 'Wie viele Bilder bekommen wir?',
      answer:
        'Sie erhalten alle gelungenen Aufnahmen in hoher Auflösung, professionell bearbeitet. Die genaue Anzahl variiert je nach Umfang des Shootings.',
    },
    {
      question: 'Können wir auch unbearbeitete (RAW) Dateien bekommen?',
      answer:
        'Wir liefern ausschließlich fertig bearbeitete Bilder. Die Bearbeitung ist Teil unseres kreativen Prozesses und sorgt für den typischen Look unserer Fotos.',
    },
    {
      question: 'Wie läuft die Buchung ab?',
      answer:
        'Kontaktieren Sie uns über das Formular, per E‑Mail oder telefonisch. Wir besprechen Ihre Wünsche und erstellen Ihnen ein individuelles Angebot.',
    },
  ];
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqEntries.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1>FAQ</h1>
      <p>Hier beantworten wir häufig gestellte Fragen rund um unsere Leistungen.</p>
      <div style={{ marginTop: '1.5rem' }}>
        {faqEntries.map(({ question, answer }) => (
          <details key={question} style={{ marginBottom: '1rem' }}>
            <summary style={{ fontWeight: 600, cursor: 'pointer' }}>{question}</summary>
            <p style={{ marginTop: '0.5rem' }}>{answer}</p>
          </details>
        ))}
      </div>
      {/* Structured data for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'FAQ',
      description:
        'Häufig gestellte Fragen zu den Dienstleistungen von Özer Media – Antworten zu Shooting‑Dauer, Anzahl der Bilder, RAW‑Dateien und Buchung.',
    },
  };
}