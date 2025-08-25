import fs from "fs";
import path from "path";
import Gallery from "../../components/Gallery";

/**
 * Portfolio detail page: Families.
 */
export default function Family({ images = [] }) {
  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <h1>Familien</h1>
      <p style={{ maxWidth: "700px" }}>
        Familienbilder sind Erinnerungen für die Ewigkeit. Ob Sie den
        Zauber eines Neugeborenen festhalten möchten oder ein fröhliches
        Familienshooting im Grünen planen – wir sorgen für eine entspannte
        Atmosphäre und echte Momente.
      </p>
      <Gallery images={images} />
    </div>
  );
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "public/images/familyImages");
  const allowed = /\.(jpg|jpeg|png|webp|gif|avif)$/i;
  let images = [];
  try {
    images = fs
      .readdirSync(dir)
      .filter((f) => allowed.test(f))
      .map((f) => ({
        src: `/images/familyImages/${f}`,
        alt: `Familienfoto ${f}`,
      }));
  } catch {}

  return {
    props: {
      title: "Familien",
      description:
        "Natürliche Familienfotografie in Walldorf – wir halten besondere Momente von Eltern, Kindern und Geschwistern in authentischen Bildern fest.",
      images,
    },
  };
}