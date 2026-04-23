"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { homeTourPackages } from "../../data/home-tour-packages";

export default function TourPackages() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let swiperInstance: any = null;
    let intervalId: any = null;

    const initSwiper = () => {
      if (
        typeof window !== "undefined" &&
        (window as any).Swiper &&
        swiperRef.current &&
        !swiperInstance
      ) {
        swiperInstance = new (window as any).Swiper(swiperRef.current, {
          modules: [(window as any).SwiperModules?.Autoplay].filter(Boolean),
          speed: 1500,
          parallax: true,
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 3000,
          },
          breakpoints: {
            700: {
              slidesPerView: 2,
            },
            1150: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 2.7,
              spaceBetween: 50,
            },
          },
        });

        // Initialize the view-detail hover animation for all cards (including Swiper clones)
        const cards = swiperRef.current.querySelectorAll(".tour-card");
        cards.forEach((card: any) => {
          const badge = card.querySelector(".view-detail");
          if (!badge) return;

          let x = 0;
          let y = 0;
          let targetX = 0;
          let targetY = 0;
          let rafId: any = null;

          const ease = 0.15;

          const animate = () => {
            x += (targetX - x) * ease;
            y += (targetY - y) * ease;

            badge.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
            rafId = requestAnimationFrame(animate);
          };

          const updateTarget = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            targetX = e.clientX - rect.left;
            targetY = e.clientY - rect.top;
          };

          const onMouseEnter = (e: MouseEvent) => {
            updateTarget(e);
            badge.classList.add("is-active");

            if (!rafId) {
              rafId = requestAnimationFrame(animate);
            }
          };

          const onMouseMove = (e: MouseEvent) => updateTarget(e);

          const onMouseLeave = () => {
            badge.classList.remove("is-active");

            if (rafId) {
              cancelAnimationFrame(rafId);
              rafId = null;
            }

            x = 0;
            y = 0;
            badge.style.transform = "";
          };

          card.addEventListener("mouseenter", onMouseEnter);
          card.addEventListener("mousemove", onMouseMove);
          card.addEventListener("mouseleave", onMouseLeave);
        });

        if (intervalId) {
          clearInterval(intervalId);
        }
      }
    };

    // Try immediately
    initSwiper();

    // If not ready, poll for Swiper
    if (!(window as any).Swiper) {
      intervalId = setInterval(initSwiper, 100);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (swiperInstance && typeof swiperInstance.destroy === "function") {
        swiperInstance.destroy(true, true);
      }
    };
  }, []);

  return (
    <section className="lg:pt-25 lg:pb-45 sm:py-25 py-18 overflow-hidden">
      <div className="container-left relative z-1 max-w-332.5">
        <div className="lg:mb-10 sm:mb-5 mb-2.5">
          <span className="font-main text-[24px] md:text-[32px] text-[#072032] capitalize">
            Discover Your Next Adventure
          </span>
          <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase font-medium headline">
            Perfect Holiday
          </h2>
        </div>
        <div className="row">
          <div className="lg:w-[27%] w-full">
            <div className="mb-10 relative after:absolute after:top-full after:right-[20%] after:w-px xl:after:h-100 after:h-60 after:bg-black/50 max-lg:after:hidden">
              <p className="xl:text-xl sm:text-lg text-sm font-normal lg:mb-10 sm:mb-5 mb-2.5">
                Exciting Explore our curated travel packages for every kind of
                traveler. Whether it’s a relaxing escape or an action-packed
                journey, we make it unforgettable.{" "}
              </p>
              <Link href="/tour-packages" className="btn btn-primary btn-hover">
                <span>View All</span>
              </Link>
            </div>
          </div>
          <div className="lg:w-[73%] w-full">
            <div className="swiper tour-swiper" ref={swiperRef}>
              <div className="swiper-wrapper">
                {homeTourPackages.map((tour, idx) => (
                  <div className="swiper-slide" key={idx}>
                    <div className="relative tour-card group">
                      <div className="relative overflow-hidden rounded-xxl before:absolute before:inset-0 before:z-1 before:block before:w-1/2 before:h-full before:-left-[75%] before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:to-black/60 after:z-2">
                        <Image
                          src={`/assets/images/tour/style1/${tour.img}`}
                          alt={tour.title}
                          width={450}
                          height={560}
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 relative z-0"
                          style={{ height: "auto" }}
                        />
                      </div>
                      <div className="absolute left-0 bottom-0 sm:p-7.5 p-4.5 flex items-center justify-between w-full z-10">
                        <div className="flex-1">
                          <h3 className="text-2xxl font-medium text-white max-w-50 uppercase mb-2.5">
                            {tour.title}
                          </h3>
                          <small className="text-white">All Inclusive</small>
                        </div>
                        <div className="text-right">
                          <span className="block font-title text-2sm text-white uppercase mb-1">
                            From
                          </span>
                          <span className="block font-title text-2xxl text-primary font-semibold">
                            {tour.amt}
                          </span>
                        </div>
                      </div>
                      <Link href="/contact" className="view-detail">
                        {" "}
                        View
                        <br />
                        Details{" "}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/bmg-in-1024x346.png"
            alt="greetings"
            width={1024}
            height={346}
            className="max-h-30 w-auto mx-auto mt-16 object-contain"
            style={{ height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
