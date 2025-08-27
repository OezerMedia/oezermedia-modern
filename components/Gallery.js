import { useState, useEffect } from 'react';
import Image from 'next/image';

/**
 * Responsive Gallery mit Masonry-Layout (keine Lücken trotz Hoch-/Querformat)
 * und Lightbox ohne Verzerrung/Zuschnitt/Balken.
 *
 * Erwartet: images = [{ src, alt }, ...]
 */
export default function Gallery({ images }) {
  const [selected, setSelected] = useState(null);

  // ESC zum Schließen der Lightbox
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setSelected(null);
    if (selected) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  return (
    <>
      {/* Masonry-Container: packt Bilder ohne Lücken */}
      <div className="masonry">
        {images.map((img, idx) => (
          <figure className="masonry-item" key={`${img.src}-${idx}`}>
            <button
              onClick={() => setSelected(img)}
              style={{ all: 'unset', cursor: 'zoom-in', display: 'block' }}
              aria-label="Bild vergrößern"
            >
              {/* WICHTIG: keine feste Höhe -> nie verzerren; Browser behält Seitenverhältnis */}
              <Image
                src={img.src}
                alt={img.alt}
                width={0}
                height={0}
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }}
                priority={idx < 6}
              />
            </button>
          </figure>
        ))}
      </div>

      {/* Lightbox: skaliert Bild nur bis 95% des Viewports -> kein Zuschnitt, kein Balken */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Vergrößertes Bild anzeigen"
          className="lb-backdrop"
        >
          <div className="lb-media" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selected.src}
              alt={selected.alt}
              width={0}
              height={0}
              sizes="100vw"
              // keine feste Box; Bild skaliert intrinsisch -> immer korrektes Seitenverhältnis
              style={{ width: 'auto', height: 'auto', maxWidth: '95vw', maxHeight: '95vh', display: 'block', borderRadius: '4px' }}
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
