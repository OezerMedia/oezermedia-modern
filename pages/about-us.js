/**
 * About Us page.
 *
 * Stellt das Team von Özer Media vor und erklärt die Philosophie hinter
 * unserer Arbeit. Nutzen Sie diese Seite, um Vertrauen aufzubauen und
 * Ihre Geschichte zu erzählen. Die Inhalte sind bewusst persönlich und
 * authentisch gehalten, um bei Suchmaschinen und Antwortmaschinen
 * gleichermaßen gut zu ranken【963709157753767†L84-L169】.
 */
export default function AboutUs() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1>Über uns</h1>
      <p style={{ maxWidth: '700px' }}>
        Wir sind Özer Media – ein kreatives Team aus Östringen, das sich der
        Fotografie und Videografie mit Leidenschaft widmet. Seit vielen
        Jahren begleiten wir Paare, Familien und Unternehmen und halten
        Erinnerungen fest, die bleiben. Unsere Arbeit basiert auf Vertrauen,
        Empathie und einem Blick für das Wesentliche.
      </p>
      <h2>Unsere Philosophie</h2>
      <p>
        Jeder Mensch und jede Geschichte ist einzigartig. Deshalb nehmen wir
        uns Zeit, unsere Kundinnen und Kunden kennenzulernen. Wir
        fotografieren und filmen nicht nur, wir erzählen Geschichten – mit
        Gefühl für Licht, Komposition und die Atmosphäre des Moments.
      </p>
      <h2>Das Team</h2>
      {/* Bild als visuelle Ergänzung, symbolisiert unser eingespieltes Team */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
        <img
          src="/images/Ich_1.webp"
          alt="Abstrakte Team-Silhouette, die das harmonische Zusammenspiel mit Fotograf und Videograf bei Özer Media symbolisiert"
          style={{ width: '100%', maxWidth: '400px', height: 'auto', margin: '1rem 0' }}
      />
      <img
        src="/images/Buki_1.webp"
        alt="Abstrakte Team-Silhouette, die das harmonische Zusammenspiel mit Fotografin und Videograf bei Özer Media symbolisiert"
        style={{ width: '100%', maxWidth: '400px', height: 'auto', margin: '1rem 0' }}
      />
      </div>
      <p>
        Hinter Özer Media steht ein kleines, eingespieltes Team aus
        Fotograf:innen und Videograf:innen. Wir arbeiten eng zusammen,
        unterstützen uns gegenseitig und bilden uns regelmäßig fort, um
        stets auf dem neuesten Stand der Technik und Trends zu bleiben.
      </p>
      <h2>Unsere Wurzeln</h2>
      <p>
        Albstadt ist unsere Heimat. Wir waren hier verankert und kennen die
        Region wie unsere Westentasche. Das spiegelt sich in unserer Arbeit
        wider: Wir lieben das Licht und die Landschaft der Alb und
        bringen sie in unseren Bildern zur Geltung.
      </p>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Über uns',
      description:
        'Lernen Sie das Team von Özer Media kennen – unsere Philosophie, unsere Leidenschaft für Fotografie und Videografie und unsere Wurzeln in Östringen.',
    },
  };
}