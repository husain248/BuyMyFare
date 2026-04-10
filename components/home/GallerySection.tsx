"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { galleryImgNums, galleryTickerImages } from "../../data/home-gallery";

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  return (
    <section className="relative z-1 bg-[#F2EFEA] overflow-hidden 2xl:py-40 2xl:pb-10 lg:py-30 sm:py-25 py-18">
      {/* Section heading */}
      <div className="container mb-10 md:mb-14 text-center">
        <span
          className="block font-main text-primary mb-3"
          style={{ fontSize: "28px", textTransform: "none" }}
        >
          The Gallery Hub
        </span>
        <h2 className="2xxl:text-8xl lg:text-6xl md:text-5xxl sm:text-4xl text-3xxl uppercase headline">
          Captured Moments, Lasting Impressions
        </h2>
      </div>

      {/* Infinite horizontal ticker strip */}
      <div className="overflow-hidden w-full pb-3">
        <div className="flex items-center gap-2.5 px-5 animate-ticker hover:[animation-play-state:paused]">
          {galleryTickerImages.map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2lg lg:min-w-65 sm:min-w-50 min-w-35 cursor-pointer group shrink-0"
              style={{ aspectRatio: "4/3" }}
              onClick={() => setLightboxIndex(idx % galleryImgNums.length)}
            >
              <Image
                src={img.src}
                alt={`Gallery ${img.num}`}
                fill
                sizes="(max-width: 768px) 140px, 260px"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center z-10">
                <i
                  className="fa-solid fa-expand text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                ></i>
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
        slides={galleryImgNums.map((n) => ({
          src: `/assets/images/gallery/img${n}.png`,
        }))}
        plugins={[Counter, Zoom]}
        styles={{ container: { backgroundColor: "rgba(0,0,0,.85)" } }}
      />
    </section>
  );
}
