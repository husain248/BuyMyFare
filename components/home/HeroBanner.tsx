"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "../../data/home-hero-slides";
import { useTripPlannerModal } from "../../context/TripPlannerModalContext";

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = heroSlides.length;
  const { openModal } = useTripPlannerModal();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [totalSlides]);

  const slide = heroSlides[currentSlide];
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

  return (
    <div className="group relative z-1 overflow-hidden 2xxl:h-250 xl:h-230 lg:h-162.5 sm:h-150 h-140 after:absolute after:inset-0 md:after:bg-gradient-to-b after:bg-gradient-to-t after:from-black/70 after:to-transparent">
      <div className="absolute inset-0">
        {heroSlides.map((item, index) => (
          <Image
            key={item.alt}
            src={item.image}
            alt={item.alt}
            fill
            sizes="100vw"
            priority={index === 0}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      <div className="relative z-1 h-full">
        <div className="h-full xl:pt-0 lg:pt-7.5 sm:pt-37.75 pt-40">
          <div className="row items-end h-full">
            <div className="w-full">
              <div className="relative z-1 xl:p-20 lg:p-15 md:py-12.5 py-6 md:px-5 px-5 sm:pe-20 bottom-[50px] md:bottom-[250px]">
                <div className="mb-5">
                  <h1 className="flex items-center gap-3.5 cursor-pointer relative z-1">
                    <span className="text-white font-main capitalize text-[24px] md:text-[32px]">
                      {slide.smallHeading}
                    </span>
                  </h1>
                </div>
                <h1
                  className="3xl:text-15xl 2xxl:text-10xl xl:text-10xl md:text-8xl sm:text-6xl text-4xxl font-bold mb-2.5 text-white leading-none! uppercase wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="0.8s"
                >
                  {slide.mainHeading}
                </h1>
                <p className="text-white">{slide.description}</p>
                <button
                  type="button"
                  className="btn btn-primary btn-hover light mt-5"
                  data-hover-init="true"
                  onClick={openModal}
                >
                  <span>{slide.buttonLabel}</span>
                  <span
                    className="gsap-clone"
                    style={
                      { "--clone-left": "35px", "--clone-top": "14px" } as any
                    }
                  >
                    {slide.buttonLabel}
                  </span>
                </button>
              </div>
              <div className="clipped"></div>
              <svg width="0" height="0" aria-hidden="true" focusable="false">
                <defs>
                  <clipPath id="svgTextPath" clipPathUnits="userSpaceOnUse">
                    <text
                      className="text-[23vw]"
                      x="0"
                      y="320"
                      fontFamily="Roboto Condensed, sans-serif"
                      fontWeight="900"
                    ></text>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-7.5 bottom-20 flex flex-col gap-2.5 items-center z-1 max-sm:hidden">
        <span className="block text-white text-2sm font-medium uppercase [writing-mode:tb]">
          Scroll Down
        </span>
        <button
          type="button"
          aria-label="Scroll to next section"
          className="scroll-down-arrow size-12 flex items-center justify-center rounded-full bg-white text-black cursor-pointer"
          data-scroll-target="#nextSection"
        >
          <svg width="14" height="23" viewBox="0 0 14 23" fill="none">
            <path
              d="M6.83 0.75V21.32"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12.67 15.49L6.83 21.33L1 15.49"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-0 left-0 z-1 flex items-center px-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-sm:hidden">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prevSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white hover:text-black"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 4L6 9L11 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 z-1 flex items-center px-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-sm:hidden">
        <button
          type="button"
          aria-label="Next slide"
          onClick={nextSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white hover:text-black"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 4L12 9L7 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="absolute left-5 bottom-10 sm:bottom-20 flex gap-2.5 z-1">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
