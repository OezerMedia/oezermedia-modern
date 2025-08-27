import Link from 'next/link';

/**
 * Services page.
 *
 * Beschreibt die fotografischen und videografischen Leistungen von Özer Media
 * in kurzen Abschnitten. Interne Links führen zu den entsprechenden
 * Portfolio‑Kategorien für vertiefende Einblicke. Strukturiertes HTML und
 * klare Überschriften unterstützen die Lesbarkeit und SEO【995827065118372†L246-L307】.
 */
export default function Services() {
  const services = [
    {
      title: 'Hochzeitsfotografie',
      description:
        'Wir begleiten Paare an ihrem großen Tag und erstellen lebendige Reportagen voller Emotionen. Von der Vorbereitung über die Trauung bis zur Feier halten wir unvergessliche Augenblicke fest.',
      href: '/portfolio/wedding',
      image: '/images/Wedding_Images_18.webp',
      alt:
        'Abstraktes pastellfarbenes Wirbelbild symbolisiert die Freude und Dynamik einer Hochzeit',
    },
    {
      title: 'Familien- & Paarshootings',
      description:
        'Ob im Studio, bei Ihnen zu Hause oder draußen in der Natur – unsere entspannten Shootings fangen echte Momente zwischen Eltern, Kindern und Partnern ein.',
      href: '/portfolio/family',
      image: '/images/Portfolio_Family_Cover.webp',
      alt:
        'Sanfte Farbverläufe symbolisieren die Harmonie und Nähe von Familien und Paaren',
    },
    {
      title: 'Businessfotografie',
      description:
        'Von professionellen Unternehmensporträts über Teamfotos bis zu Produktaufnahmen und Eventbegleitungen: wir setzen Ihr Unternehmen hochwertig in Szene.',
      href: '/portfolio/business',
      image: '/images/Portfolio_Unternehmen.webp',
      alt:
        'Geometrische Formen in Blau symbolisieren Professionalität für Businessfotografie',
    },
    {
      title: 'Porträtfotografie',
      description:
        'Individuelle Porträts, die Persönlichkeit und Charakter unterstreichen – ob für private Zwecke oder als berufliches Profilbild.',
      href: '/portfolio/portrait',
      image: '/images/Portfolio_Potrait_Cover.webp',
      alt:
        'Silhouette in kräftigen Farben steht für ausdrucksstarke Porträts',
    },
    {
      title: 'Videoproduktion',
      description:
        'Neben Fotos erstellen wir auch filmische Inhalte wie Hochzeitsfilme, Imagevideos und Social‑Media‑Clips, die Ihre Botschaft bewegend erzählen.',
      href: null,
      image: '/images/Portfolio_Video_Cover.webp',
      alt:
        'Abstrakte Kamera in warmen Beigetönen symbolisiert die Videoproduktion',
    },
  ];
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1>Leistungen</h1>
      <p style={{ maxWidth: '700px' }}>
        Als Full‑Service‑Studio bieten wir Fotografie und Videografie für
        verschiedenste Anlässe. Unsere Leistungen sind maßgeschneidert und
        richten sich nach Ihren Wünschen. Hier finden Sie einen Überblick über
        unser Angebot.
      </p>
      <div style={{ marginTop: '2rem' }}>
        {services.map((srv) => (
          <section key={srv.title} className="service-section" style={{ marginBottom: '2rem' }}>
            {/* Bild als visueller Akzent neben dem Text */}
            {srv.image && (
              <img
                src={srv.image}
                alt={srv.alt}
                className="service-image"
              />
            )}
            <div style={{ flex: '1 1 0' }}>
              <h2>{srv.title}</h2>
              <p>{srv.description}</p>
              {srv.href && (
                <p>
                  <Link href={srv.href} style={{ textDecoration: 'underline' }}>
                    Beispiele ansehen
                  </Link>
                </p>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Leistungen',
      description:
        'Entdecken Sie das Leistungsangebot von Özer Media: Hochzeitsfotografie, Familien- und Paarshootings, Businessporträts, Videoproduktion und digitale Visitenkarten.',
    },
  };
}