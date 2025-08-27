import fs from "fs";
import path from "path";
import Gallery from "../../components/Gallery";

/**
 * Portfolio detail page: Weddings.
 */
export default function Wedding({ images = [] }) {
  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <h1>Hochzeiten</h1>
      <p style={{ maxWidth: "700px" }}>
        Jede Hochzeit erzählt ihre eigene Geschichte. Wir begleiten Sie vom
        Getting Ready bis zum letzten Tanz und fangen Emotionen ein, die ein
        Leben lang berühren. Unsere Reportagen sind zeitlos, authentisch und
        liebevoll gestaltet.
      </p>
      <Gallery images={images} />
    </div>
  );
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "public/images/weddingImages");
  const allowed = /\.(jpg|jpeg|png|webp|gif|avif)$/i;
  let images = [];
  try {
    images = fs
      .readdirSync(dir)
      .filter((f) => allowed.test(f))
      .map((f) => ({
        src: `/images/weddingImages/${f}`,
        alt: `Hochzeitsfoto ${f}`,
      }));
  } catch {}

  return {
    props: {
      title: "Hochzeiten",
      description:
        "Romantische Hochzeitsfotografie in Walldorf – wir begleiten Ihren besonderen Tag mit einfühlsamen Reportagen und halten große und kleine Momente fest.",
      images,
    },
  };
}