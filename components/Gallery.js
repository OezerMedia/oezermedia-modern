import { useState } from 'react';
import Image from 'next/image';

/**
 * Simple responsive gallery with lightbox functionality.
 *
 * Accepts an array of image objects with `src` and `alt` properties. The
 * component renders a grid of thumbnails. When a thumbnail is clicked the
 * corresponding image opens in a full‑screen overlay. Clicking anywhere on
 * the overlay closes it. Alt text should follow the accessibility
 * recommendations from Level Access【102629046544748†L242-L268】 and be
 * concise yet descriptive.
 *
 * @param {{ images: { src: string, alt: string }[] }} props
 */
export default function Gallery({ images }) {
  const [selected, setSelected] = useState(null);

  const open = (img) => {
    setSelected(img);
  };

  const close = () => {
    setSelected(null);
  };

  return (
    <>
      <div
        className="gallery-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
        }}
      >
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => open(img)}
            style={{
              border: 'none',
              padding: 0,
              background: 'none',
              cursor: 'pointer',
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              style={{ borderRadius: '4px' }}
            />
          </button>
        ))}
      </div>
      {selected && (
        <div
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Vergrößertes Bild anzeigen"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <Image
            src={selected.src}
            alt={selected.alt}
            width={900}
            height={600}
            style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '4px' }}
          />
        </div>
      )}
    </>
  );
}