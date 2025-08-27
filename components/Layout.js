import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout component providing common page chrome and SEO metadata.
 *
 * This component centralises metadata creation for each page and injects
 * structured data (JSON‑LD) describing the local business. It uses the
 * Next.js router to build the canonical URL dynamically. Pass `title` and
 * `description` strings via the page’s `getStaticProps` or as `pageProps` in
 * `_app.js` to customise the `<title>` and meta description. Default values
 * fall back to the business name and tagline.
 */
export default function Layout({ children, title, description }) {
  const router = useRouter();
  const baseUrl = 'https://oezermedia.com';
  const canonical = `${baseUrl}${router.asPath === '/' ? '' : router.asPath}`;

  // Default metadata
  const metaTitle = title ? `${title} | Özer Media` : 'Özer Media – Foto & Video aus Östringen';
  const metaDesc = description ||
    'Özer Media bietet professionelle Foto‑ und Videografie für Hochzeiten, Familien, Unternehmen und mehr in Östringen, Baden‑Württemberg. Wir halten Ihre besonderen Momente fest.';

  // LocalBusiness schema as defined by Schema.org to support GEO and AEO.
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#localbusiness`,
    'name': 'Özer Media',
    'image': `${baseUrl}/images/Ich_1.webp`,
    'url': baseUrl,
    'telephone': '+4972539680725',
    'priceRange': '€€',
    'description': 'Professionelle Fotografie und Videografie aus Östringen, Baden‑Württemberg.',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Steinacker II 22',
      'addressLocality': 'Östringen',
      'addressRegion': 'BW',
      'postalCode': '76684',
      'addressCountry': 'DE'
    },
    'areaServed': {
      '@type': 'Place',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Östringen',
        'addressRegion': 'BW',
        'addressCountry': 'DE'
      }
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 49.2200416,
      'longitude': 8.7124508
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday','Tuesday','Wednesday','Thursday','Friday'
        ],
        'opens': '09:00',
        'closes': '18:00'
      }
    ],
    'sameAs': [
      'https://www.instagram.com/oezermedia',
      'https://www.facebook.com/oezermedia'
    ]
  };

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href={canonical} />
        {/* Open Graph tags for improved social sharing */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="Özer Media" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${baseUrl}/images/Ich_1.webp`} />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={`${baseUrl}/images/Ich_1.webp`} />
        {/* LocalBusiness structured data for GEO/AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}