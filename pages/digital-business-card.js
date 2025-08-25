import Image from 'next/image';

/**
 * Digital business card page.
 *
 * Beschreibt die Vorteile einer digitalen Visitenkarte und stellt eine
 * herunterladbare vCard bereit. Ein generisches QR‑Code‑Platzhalterbild
 * illustriert, wo Sie Ihren echten QR‑Code platzieren können. Durch
 * Speichern des vCard‑Textes können Besucher Ihre Kontaktdaten direkt in
 * ihr Adressbuch importieren.
 */
export default function DigitalBusinessCard() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Özer Media',
    'ORG:Özer Media',
    'TEL:+4972539680725',
    'EMAIL:info@oezermedia.com',
    'URL:https://oezermedia.com',
    'ADR:;;Steinacker II 22;Östringen;;76684;Deutschland',
    'END:VCARD',
  ].join('\n');
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1>Digitale Visitenkarte</h1>
      {/* Digitale Visitenkarte als stilvolles Card‑Layout */}
      <div className="business-card">
        <div className="logo-container">
          <Image
            src="/images/Ich_3.webp"
            alt="Özer Media Logo"
            width={120}
            height={120}
            className="logo"
          />
        </div>
        <div className="contact-info">
          <h2>Özer Media</h2>
          <p>Foto‑ &amp; Videografie</p>
          {/* Adresse */}
          <div className="contact-item">
            {/* Map pin icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span>Östringen, Deutschland</span>
          </div>
          {/* Telefon */}
          <div className="contact-item">
            {/* Phone icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <a href="tel:+4972539680725">+49 7253 9680725</a>
          </div>
          {/* E‑Mail */}
          <div className="contact-item">
            {/* Envelope icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <a href="mailto:info@oezermedia.com">info@oezermedia.com</a>
          </div>
        </div>
        <div className="social-icons">
          <a
            href="https://instagram.com/oezermedia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/oezermedia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://youtube.com/@oezermedia"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a
            href="https://tiktok.com/@oezermedia"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
        </div>
      </div>
      {/* QR‑Code und vCard nebeneinander mit flexibler Anordnung */}
      <div
        style={{
          marginTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          alignItems: 'flex-start',
        }}
      >
        <div>
          <h2>Instagram via QR-Code</h2>
          <Image
            src="/images/QR-Code_Insta-optimized.webp"
            alt="Platzhalter für einen QR‑Code der digitalen Visitenkarte"
            width={200}
            height={200}
          />
        </div>
<div style={{ flex: 1 }}>
  <h2>vCard</h2>
  <pre
    style={{
      background: 'var(--color-muted)',
      padding: '1rem',
      borderRadius: '4px',
      overflowX: 'auto',
    }}
  >
{vcard}
  </pre>
  <p style={{ marginTop: '0.5rem' }}>
    Sie können diesen Datensatz als <code>.vcf</code>-Datei
    herunterladen oder einen QR‑Code aus den vCard‑Daten erstellen,
    um Ihre Kontaktdaten einfach zu teilen.
  </p>
  <a
    href={`data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`}
    download="ozer-media.vcf"
    style={{
      display: 'inline-block',
      marginTop: '0.5rem',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      background: 'var(--color-primary)',
      color: '#fff',
      textDecoration: 'none',
    }}
  >
    vCard herunterladen
  </a>
</div>

      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Digitale Visitenkarte',
      description:
        'Erstellen Sie Ihre digitale Visitenkarte mit Özer Media: Kontaktdaten als vCard und QR‑Code, ideal für moderne Vernetzung.',
    },
  };
}