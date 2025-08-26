import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Home page.
 *
 * Presents a hero section with a compelling introduction, followed by
 * highlights of the core services. Animations courtesy of Framer Motion
 * provide a subtle “wow” effect without sacrificing performance. Each
 * featured link directs the user to a dedicated page for further
 * exploration. Alt text for images follows accessibility best practices
 * recommended by Level Access【102629046544748†L242-L268】.
 */
export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Willkommen bei Özer Media</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Treten Sie ein in eine Welt, in der jedes Foto und jedes Video eine Geschichte erzählt.
            Ob Porträts, Hochzeiten, Familienbilder oder Unternehmensaufnahmen – wir halten Ihre
            besonderen Momente fest.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/portfolio">
              <button>Portfolio entdecken</button>
            </Link>
            <Link href="/contact" style={{ marginLeft: '1rem' }}>
              <button>Kontakt aufnehmen</button>
            </Link>
          </div>
        </motion.div>
  <div className="hero-image"></div>


      </section>

      {/* Feature cards */}
      <section className="container" style={{ marginBottom: '3rem' }}>
        <h2>Unsere Kernbereiche</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {[
            { href: '/portfolio/wedding', title: 'Hochzeiten', description: 'Emotionale Reportagen für den schönsten Tag' },
            { href: '/portfolio/family', title: 'Familien', description: 'Natürliche Bilder, die die Liebe festhalten' },
            { href: '/portfolio/business', title: 'Unternehmen', description: 'Professionelle Aufnahmen für Ihre Marke' },
            { href: '/portfolio/portrait', title: 'Porträts', description: 'Ausdrucksstarke Bilder von Individuen' },
          ].map((item) => (
            <Link href={item.href} key={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
              <article style={{ border: '1px solid var(--color-muted)', borderRadius: '8px', padding: '1rem', transition: 'box-shadow 0.2s ease' }}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

// Provide default metadata for the home page
export async function getStaticProps() {
  return {
    props: {
      title: 'Home',
      description:
        'Professionelle Foto‑ und Videografie in Walldorf – entdecken Sie Hochzeitsreportagen, Familien‑ und Business‑Shootings sowie emotionale Porträts.',
    },
  };
}