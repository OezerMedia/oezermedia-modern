import Gallery from '../../components/Gallery';

/**
 * Portfolio detail page: Portraits.
 *
 * Ausdrucksstarke Porträts zeigen Persönlichkeit und Charakter. Diese
 * Seite erläutert unseren Ansatz für individuelle Porträtfotografie. Die
 * gezeigten Bilder sind abstrakte Platzhalter – fügen Sie Ihre eigenen
 * Porträtaufnahmen in das Verzeichnis `public/images` ein, um reale
 * Beispiele zu präsentieren.
 */
export default function Portrait() {
  const images = Array.from({ length: 6 }).map(() => ({
    src: '/images/portrait.png',
    alt: 'Lebhafte Farbschlieren als Platzhalter für Porträtbilder',
  }));
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1>Porträts</h1>
      <p style={{ maxWidth: '700px' }}>
        Ein gutes Porträt zeigt mehr als ein Gesicht – es erzählt eine
        Geschichte. Wir nehmen uns Zeit, Sie kennenzulernen und erschaffen
        Bilder, die Ihre Persönlichkeit widerspiegeln. Ob klassisch,
        künstlerisch oder experimentell – wir setzen Ihre Vision um.
      </p>
      <Gallery images={images} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Porträts',
      description:
        'Individuelle Porträtfotografie in Walldorf – zeigen Sie Ihre Persönlichkeit in ausdrucksstarken Bildern, die Ihre Geschichte erzählen.',
    },
  };
}