import Link from 'next/link';

/**
 * Footer component containing secondary navigation, contact details and
 * copyright notice. NAP (Oemer Selcuk Oezer, Steinacker II 22, 76684 Oestringen, +49 7253 9680725) information is included to
 * support local SEO and geo‑targeting (consistent with external sources). If
 * you change the business details, make sure they match across Google
 * Business, directories and schema markup.
 */
export default function Footer() {
  return (
    <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--color-muted)', marginTop: '2rem' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
        <div>
          <h4>Özer Media</h4>
          <p>Professionelle Foto‑ und Videografie.</p>
          <address style={{ fontStyle: 'normal' }}>
            Steinacker II 22<br />
            76684 Östringen, Deutschland<br />
            <br />
            Telefon: <a href="tel:+4972539680725">+49 7253 9680725</a><br />
            E‑Mail: <a href="mailto:info@oezermedia.com">info@oezermedia.com</a>
          </address>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/services">Leistungen</Link></li>
            <li><Link href="/about-us">Über uns</Link></li>
            <li><Link href="/digital-business-card">Digitale Visitenkarte</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Kontakt</Link></li>
            <li><Link href="/privacy-policy">Datenschutzerklärung</Link></li>
            <li><Link href="/imprint">Impressum</Link></li>
          </ul>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--color-muted)' }}>
        <small>&copy; {new Date().getFullYear()} Özer Media – Alle Rechte vorbehalten.</small>
      </div>
    </footer>
  );
}