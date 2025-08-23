import Gallery from '../../components/Gallery';

/**
 * Portfolio detail page: Families.
 *
 * Diese Seite widmet sich der Familienfotografie. Wir möchten die
 * besondere Bindung zwischen Eltern, Kindern und Geschwistern sichtbar
 * machen. Die Galerie verwendet abstrakte Platzhalterbilder – ersetzen
 * Sie diese durch echte Familienfotos in Ihrem `public/images`‑Verzeichnis.
 */
export default function Family() {
  const images = Array.from({ length: 6 }).map(() => ({
    src: '/images/family.png',
    alt: 'Warme, organische Formen als Platzhalter für ein Familienfoto',
  }));
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1>Familien</h1>
      <p style={{ maxWidth: '700px' }}>
        Familienbilder sind Erinnerungen für die Ewigkeit. Ob Sie den
        Zauber eines Neugeborenenfesthalten möchten oder ein fröhliches
        Familienshooting im Grünen planen – wir sorgen für eine entspannte
        Atmosphäre und echte Momente.
      </p>
      <Gallery images={images} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Familien',
      description:
        'Natürliche Familienfotografie in Walldorf – wir halten besondere Momente von Eltern, Kindern und Geschwistern in authentischen Bildern fest.',
    },
  };
}