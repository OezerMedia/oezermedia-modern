import Gallery from '../../components/Gallery';

/**
 * Portfolio detail page: Weddings.
 *
 * Hier beschreiben wir unseren Ansatz für Hochzeitsfotografie. Als
 * Storyteller halten wir nicht nur die großen Momente fest, sondern auch
 * die kleinen Details, die Ihre Geschichte einzigartig machen. Die Galerie
 * nutzt Platzhalterbilder – ersetzen Sie die Dateien in `public/images`
 * durch Ihre eigenen Hochzeitsbilder, um echte Beispiele zu präsentieren.
 */
export default function Wedding() {
  const images = Array.from({ length: 6 }).map((_, i) => ({
    src: '/images/Wedding_Images_18.webp',
    alt: 'Abstraktes pastellfarbenes Muster als Platzhalter für ein Hochzeitsfoto',
  }));
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1>Hochzeiten</h1>
      <p style={{ maxWidth: '700px' }}>
        Jede Hochzeit erzählt ihre eigene Geschichte. Wir begleiten Sie vom
        Getting Ready bis zum letzten Tanz und fangen Emotionen ein, die ein
        Leben lang berühren. Unsere Reportagen sind zeitlos, authentisch und
        liebevoll gestaltet.
      </p>
      <Gallery images={images} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Hochzeiten',
      description:
        'Romantische Hochzeitsfotografie in Walldorf – wir begleiten Ihren besonderen Tag mit einfühlsamen Reportagen und halten große und kleine Momente fest.',
    },
  };
}