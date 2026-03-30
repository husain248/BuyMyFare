"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function TourPackages() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if Swiper is loaded globally from the layout script
    if (
      typeof window !== "undefined" &&
      (window as any).Swiper &&
      swiperRef.current
    ) {
      new (window as any).Swiper(swiperRef.current, {
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

        card.addEventListener("mouseenter", (e: MouseEvent) => {
          updateTarget(e);
          badge.classList.add("is-active");

          if (!rafId) {
            rafId = requestAnimationFrame(animate);
          }
        });

        card.addEventListener("mousemove", updateTarget);

        card.addEventListener("mouseleave", () => {
          badge.classList.remove("is-active");

          if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }

          x = 0;
          y = 0;
          badge.style.transform = "";
        });
      });
    }
  }, []);

  return (
    <section className="lg:pt-25 lg:pb-45 sm:py-25 py-18 overflow-hidden">
      <div className="container-left relative z-1 max-w-[1330px]">
        <div className="lg:mb-10 sm:mb-5 mb-2.5">
          <span
            className="text-white font-main"
            style={{
              textTransform: "capitalize",
              fontSize: "32px",
              color: "#072032",
            }}
          >
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
              <Link
                href="/"
                className="btn btn-primary btn-hover"
              >
                <span>View All</span>
              </Link>
            </div>
          </div>
          <div className="lg:w-[73%] w-full">
            <div className="swiper tour-swiper" ref={swiperRef}>
              <div className="swiper-wrapper">
                {[
                  { img: "img1.png", title: "Bengal Wild Escape" },
                  { img: "img2.png", title: "Bengal Wild Escape" },
                  { img: "img3.png", title: "Bengal Wild Escape" },
                  { img: "img4.png", title: "Verdant Reach" },
                  { img: "img5.png", title: "Thar Desert" },
                  { img: "img6.png", title: "French Polynesia" },
                ].map((tour, idx) => (
                  <div className="swiper-slide" key={idx}>
                    <div className="relative tour-card">
                      <div className="relative overflow-hidden rounded-xxl before:absolute before:inset-0 before:bg-linear-to-b before:from-transparent before:to-black/60">
                        <img
                          src={`/assets/images/tour/style1/${tour.img}`}
                          alt={tour.title}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="absolute left-0 bottom-0 sm:p-7.5 p-4.5 flex items-center justify-between w-full">
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
                            $199
                          </span>
                        </div>
                      </div>
                      <Link href="/" className="view-detail">
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
          <img
            src="/assets/images/bmg-in-1024x346.png"
            alt="greetings"
            className="max-h-30 mx-auto mt-16"
          />
        </div>
      </div>
    </section>
  );
}
