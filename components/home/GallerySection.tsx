'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';

const galleryImgNums = [1, 2, 3, 4, 5, 6, 7];
// Triple the array so the infinite ticker has enough items
const tickerImages = [
  ...galleryImgNums,
  ...galleryImgNums,
  ...galleryImgNums,
].map((num) => ({ src: `/assets/images/gallery/img${num}.png`, num }));

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  return (
    <section className="relative z-1 bg-[#F2EFEA] overflow-hidden 2xl:py-40 lg:py-30 sm:py-25 py-18">
      {/* Section heading */}
      <div className="container mb-10 md:mb-14 text-center">
        <span className="block font-main text-primary mb-3" style={{ fontSize: '28px', textTransform: 'none' }}>
          The Gallery Hub
        </span>
        <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase headline">
          Captured Moments, Lasting Impressions
        </h2>
      </div>

      {/* Infinite horizontal ticker strip */}
      <div className="overflow-hidden w-full pb-3">
        <div className="flex items-center gap-2.5 px-5 animate-ticker hover:[animation-play-state:paused]">
          {tickerImages.map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2lg lg:min-w-65 sm:min-w-50 min-w-35 cursor-pointer group shrink-0"
              style={{ aspectRatio: '4/3' }}
              onClick={() => setLightboxIndex(idx % galleryImgNums.length)}
            >
              <img
                src={img.src}
                alt={`Gallery ${img.num}`}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <i className="fa-solid fa-expand text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={galleryImgNums.map((n) => ({ src: `/assets/images/gallery/img${n}.png` }))}
        plugins={[Counter, Zoom]}
        styles={{ container: { backgroundColor: 'rgba(0,0,0,.85)' } }}
      />
    </section>
  );
}
