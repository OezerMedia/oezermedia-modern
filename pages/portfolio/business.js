import Gallery from '../../components/Gallery';

/**
 * Portfolio detail page: Business.
 *
 * Unternehmen benötigen starke visuelle Botschaften. Auf dieser Seite
 * stellen wir vor, wie professionelle Fotos und Videos dabei helfen,
 * Marken aufzubauen, Vertrauen zu schaffen und Produkte sowie Teams ins
 * rechte Licht zu rücken. Die Platzhalterbilder können Sie durch Ihre
 * eigenen Businessfotos ersetzen.
 */
export default function Business() {
  const images = Array.from({ length: 6 }).map(() => ({
    src: '/images/business.png',
    alt: 'Geometrisches blaues Muster als Platzhalter für Businessfotos',
  }));
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1>Business</h1>
      <p style={{ maxWidth: '700px' }}>
        Ob Corporate Portraits, moderne Teamfotos oder Produktaufnahmen –
        professionelle Businessfotografie stärkt Ihre Marke und schafft
        Vertrauen bei Kunden und Partnern. Gemeinsam realisieren wir die
        visuellen Inhalte, die Ihr Unternehmen nach vorne bringen.
      </p>
      <Gallery images={images} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Business',
      description:
        'Professionelle Businessfotografie und -videografie aus Walldorf – erstellen Sie aussagekräftige Unternehmensportraits, Teamfotos und Produktbilder.',
    },
  };
}