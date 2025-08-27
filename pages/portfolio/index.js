import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * Portfolio overview page.
 *
 * This page introduces visitors to the different fotografischen Bereiche
 * (Hochzeiten, Familien, Business, Porträts) mit kurzen Beschreibungen und
 * ansprechenden Vorschaubildern. Jede Kachel führt zu einer
 * spezialisierteren Unterseite. Semantische HTML‑Elemente und aussagekräftige
 * Alt‑Texte unterstützen die SEO und Barrierefreiheit【122324693967878†L457-L493】.
 */
export default function Portfolio() {
  const categories = [
    {
      slug: 'wedding',
      title: 'Hochzeiten',
      description: 'Emotionale Reportagen für den schönsten Tag im Leben',
      image: '/images/Wedding_Images_18.webp',
      alt: 'Umarmung für Hochzeiten',
    },
    {
      slug: 'family',
      title: 'Familien',
      description: 'Lebendige und natürliche Familienmomente',
      image: '/images/Portfolio_Family_Cover.webp',
      alt: 'Warme, fröhliche Formen für Familienaufnahmen',
    },
    {
      slug: 'business',
      title: 'Business',
      description: 'Professionelle Aufnahmen für Ihr Unternehmen',
      image: '/images/Portfolio_Unternehmen.webp',
      alt: 'Geometrisches Muster in Blau‑ und Grautönen für Business',
    },
    {
      slug: 'portrait',
      title: 'Porträts',
      description: 'Ausdrucksstarke Einzelporträts',
      image: '/images/Portfolio_Potrait_Cover.webp',
      alt: 'Dynamische Farbschlieren für Porträtfotografie',
    },
  ];
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1>Portfolio</h1>
      <p style={{ maxWidth: '600px' }}>
        Entdecken Sie unsere vielseitigen Arbeiten aus unterschiedlichen
        fotografischen Disziplinen. Ob romantische Hochzeiten, fröhliche
        Familienbilder, professionelle Unternehmensshootings oder
        charakterstarke Porträts – hier finden Sie einen Einblick in unser
        Schaffen.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem',
        }}
      >
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/portfolio/${cat.slug}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                border: '1px solid var(--color-muted)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              }}
            >
              <Image
                src={cat.image}
                alt={cat.alt}
                width={500}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
              <div style={{ padding: '1rem' }}>
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Portfolio',
      description:
        'Erkunden Sie Hochzeitsreportagen, Familienaufnahmen, Businessportraits und Porträts in unserem Portfolio – authentisch und inspirierend.',
    },
  };
}