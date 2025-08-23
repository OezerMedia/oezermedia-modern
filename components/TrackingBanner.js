import { useState, useEffect } from 'react';

/**
 * Banner für die Einwilligung in Google‑Analytics‑Tracking.
 *
 * Zeigt einen Hinweis an, wenn noch keine Zustimmung erteilt wurde. Bei
 * Zustimmung wird in localStorage ein Flag gesetzt und der Callback
 * aufgerufen, damit das Analytics‑Script geladen werden kann. Ablehnen
 * speichert die Ablehnung und blendet das Banner aus.
 */
export default function TrackingBanner({ onConsent }) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Prüfen, ob bereits eine Entscheidung getroffen wurde
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('analyticsConsent');
      if (consent !== 'true' && consent !== 'false') {
        setShowBanner(true);
      }
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('analyticsConsent', 'true');
    }
    setShowBanner(false);
    if (onConsent) {
      onConsent();
    }
  };

  const handleDecline = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('analyticsConsent', 'false');
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="tracking-banner"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'var(--color-surface)',
        borderTop: `1px solid var(--color-secondary)`,
        padding: '1rem',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.05)',
      }}
    >
      <p style={{ margin: 0, marginBottom: '0.75rem', textAlign: 'center' }}>
        Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern.{' '}
        {/* Link to privacy policy */}
        Weitere Informationen finden Sie in unserer{' '}
        <a
          href="/privacy-policy"
          style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}
        >
          Datenschutzerklärung
        </a>.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={handleAccept}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-background)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Alle akzeptieren
        </button>
        <button
          onClick={handleDecline}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'var(--color-muted)',
            color: 'var(--color-background)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Ablehnen
        </button>
      </div>
    </div>
  );
}