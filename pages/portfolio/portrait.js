import fs from "fs";
import path from "path";
import Gallery from "../../components/Gallery";

/**
 * Portfolio detail page: Portraits.
 */
export default function Portrait({ images = [] }) {
  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <h1>Porträts</h1>
      <p style={{ maxWidth: "700px" }}>
        Ein gutes Porträt zeigt mehr als ein Gesicht – es erzählt eine
        Geschichte. Wir nehmen uns Zeit, Sie kennenzulernen und erschaffen
        Bilder, die Ihre Persönlichkeit widerspiegeln. Ob klassisch,
        künstlerisch oder experimentell – wir setzen Ihre Vision um.
      </p>
      <Gallery images={images} />
    </div>
  );
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "public/images/portraitImages");
  const allowed = /\.(jpg|jpeg|png|webp|gif|avif)$/i;
  let images = [];
  try {
    images = fs
      .readdirSync(dir)
      .filter((f) => allowed.test(f))
      .map((f) => ({
        src: `/images/portraitImages/${f}`,
        alt: `Porträt ${f}`,
      }));
  } catch {}

  return {
    props: {
      title: "Porträts",
      description:
        "Individuelle Porträtfotografie in Walldorf – zeigen Sie Ihre Persönlichkeit in ausdrucksstarken Bildern, die Ihre Geschichte erzählen.",
      images,
    },
  };
}