import '../styles/globals.css';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import TrackingBanner from '../components/TrackingBanner';

/**
 * Custom App component.
 *
 * All pages are wrapped in the {@link Layout} component to provide a
 * consistent header, footer and to inject meta tags. Each page can set
 * `title` and `description` via `pageProps` which are forwarded to the
 * layout.
 */
export default function MyApp({ Component, pageProps }) {
  const { title, description } = pageProps;
  const router = useRouter();
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  // Redirect legacy hash‑based links to modern routes (e.g. from QR‑Codes)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#/digital-business-card') {
        router.replace('/digital-business-card');
      }
      // Prüfen, ob Analytics bereits erlaubt wurde
      const consent = localStorage.getItem('analyticsConsent');
      if (consent === 'true') {
        setAnalyticsAllowed(true);
      }
    }
  }, [router]);

  // Callback, der ausgeführt wird, wenn der Benutzer Tracking akzeptiert
  const handleAnalyticsConsent = () => {
    setAnalyticsAllowed(true);
  };
  return (
    <Layout title={title} description={description}>
      {/* Google Analytics nur laden, wenn Zustimmung erteilt wurde */}
      {analyticsAllowed && (
        <>
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-RXFS03VSQX"
          />
          <Script strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RXFS03VSQX', { page_path: window.location.pathname });
            `}
          </Script>
        </>
      )}
      {/* TrackingBanner fragt den Nutzer, ob Analytics geladen werden darf */}
      {!analyticsAllowed && (
        <TrackingBanner onConsent={handleAnalyticsConsent} />
      )}
      <Component {...pageProps} />
    </Layout>
  );
}