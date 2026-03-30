"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Feedback() {
  const thumbSwiperRef = useRef<HTMLDivElement>(null);
  const mainSwiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      (window as any).Swiper &&
      thumbSwiperRef.current &&
      mainSwiperRef.current
    ) {
      const swiperThumb = new (window as any).Swiper(thumbSwiperRef.current, {
        loop: true,
        spaceBetween: 4.5,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "horizontal",
        autoplay: {
          delay: 3000,
        },
        breakpoints: {
          360: { slidesPerView: 3.9, direction: "horizontal" },
          567: { slidesPerView: 4.9, direction: "horizontal" },
          1199: { slidesPerView: 4.7, direction: "vertical" },
        },
      });

      new (window as any).Swiper(mainSwiperRef.current, {
        loop: true,
        spaceBetween: 10,
        autoplay: {
          delay: 3000,
        },
        thumbs: {
          swiper: swiperThumb,
        },
      });
    }
  }, []);

  return (
    <section className="2xl:py-40 2xl:pb-10 lg:py-30 sm:py-25 py-18 bg-white relative max-sm:px-4">
      <div className="container relative z-1 max-w-[1330px]">
        <div className="mb-10 max-lg:text-center">
          <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase headline">
            Client Feedback
          </h2>
        </div>
        <div className="row">
          <div
            className="swiper testimonial-swiper xl:w-[93%] w-full !px-0 mb-10"
            ref={mainSwiperRef}
          >
            <div className="swiper-wrapper">
              {[1, 2, 3].map((num, idx) => (
                <div className="swiper-slide" key={idx}>
                  <div className="flex items-center justify-between max-lg:flex-col max-lg:gap-5">
                    <div className="relative overflow-hidden rounded-full md:border-10 border-4 border-white md:min-w-78.75 md:size-78.75 sm:min-w-60 sm:size-60 min-w-40 size-40">
                      <img
                        src={`/assets/images/testimonial/large/img${num}.png`}
                        alt=""
                      />
                    </div>
                    <div className="2xl:ps-16.5 2xl:ms-16.5 lg:ps-10 lg:ms-10 lg:pe-20 max-lg:px-5 max-lg:text-center relative before:absolute before:inset-y-0 before:left-0 before:w-px before:h-full before:bg-black/30 lg:before:block before:hidden">
                      <div className="sm:mb-7.5 mb-4 max-lg:text-center">
                        <svg
                          className="inline-block"
                          width="66"
                          height="50"
                          viewBox="0 0 66 50"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.93259 45.9559C2.22472 41.9118 1.5891e-06 37.5 1.5891e-06 30.1471C1.5891e-06 17.2794 9.26966 5.88235 22.2472 -1.85125e-07L25.5843 4.77941C13.3483 11.3971 10.7528 19.8529 10.0112 25.3676C11.8652 24.2647 14.4607 23.8971 17.0562 24.2647C23.7303 25 28.9213 30.1471 28.9213 37.1324C28.9213 40.4412 27.4382 43.75 25.2135 46.3235C22.618 48.8971 19.6517 50 15.9438 50C11.8652 50 8.15731 48.1618 5.93259 45.9559ZM43.0112 45.9559C39.3034 41.9118 37.0787 37.5 37.0787 30.1471C37.0787 17.2794 46.3483 5.88235 59.3258 -1.85125e-07L62.6629 4.77941C50.427 11.3971 47.8315 19.8529 47.0899 25.3676C48.9438 24.2647 51.5393 23.8971 54.1348 24.2647C60.809 25 66 30.5147 66 37.1324C66 40.4412 64.5169 43.75 62.2921 46.3235C59.6966 48.8971 56.7303 50 53.0225 50C48.9438 50 45.236 48.1618 43.0112 45.9559Z"
                            fill="#ACE601"
                          />
                        </svg>
                      </div>
                      <p className="2xl:text-2xl md:text-xl sm:text-lg text-base leading-normal font-light text-black/80 mb-5">
                        Buy My Fare planned our Punta Cana trip effortless. The
                        package deal was affordable, and the booking process was
                        straightforward. We had to adjust our dates, and it was
                        done without any hassle. I’ll definitely use their
                        services again.
                      </p>
                      <div className="">
                        <h3 className="text-xl font-bold mb-2.5 uppercase">
                          Satbir Jaswal
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="swiper testimonial-thumbs xl:w-[7%] w-full bg-white rounded-xxl 2xl:px-4.5! px-2.5! xl:py-6! py-4! xl:h-85.5 max-xl:max-w-125!"
            ref={thumbSwiperRef}
          >
            <div className="swiper-wrapper">
              {[1, 2, 3, 1, 2, 3].map((num, idx) => (
                <div className="swiper-slide" key={idx}>
                  <div className="relative overflow-hidden rounded-full size-15.25 min-w-15.25 border-[3px] border-transparent [.swiper-slide.swiper-slide-thumb-active_&]:border-[#E6E6E6]">
                    <img
                      src={`/assets/images/testimonial/img${num}.png`}
                      className="size-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
