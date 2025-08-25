import fs from 'fs'
import path from 'path'
import Gallery from '../../components/Gallery'

/**
 * Portfolio detail page: Business.
 *
 * Alle Bilder aus public/images/businessImages werden automatisch
 * eingelesen und an die Gallery-Komponente übergeben.
 */
export default function Business({ images }) {
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
  )
}

export async function getStaticProps() {
  // Pfad zum Ordner mit den Bildern
  const dir = path.join(process.cwd(), 'public/images/businessImages')

  // Alle Dateien im Ordner auslesen
  const files = fs.readdirSync(dir)

  // Nur Bilddateien nehmen (jpg, jpeg, png, webp)
  const allowed = /\.(jpg|jpeg|png|webp|gif)$/i
  const images = files
    .filter(file => allowed.test(file))
    .map(file => ({
      src: `/images/businessImages/${file}`,
      alt: `Businessfoto ${file}`,
    }))

  return {
    props: {
      title: 'Business',
      description:
        'Professionelle Businessfotografie und -videografie aus Walldorf – erstellen Sie aussagekräftige Unternehmensportraits, Teamfotos und Produktbilder.',
      images,
    },
  }
}