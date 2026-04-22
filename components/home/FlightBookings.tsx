"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { homeFlightBookings } from "../../data/home-ticket-bookings";

// Extend the Window interface to include Masonry
declare global {
  interface Window {
    Masonry?: any;
  }
}

export default function FlightBookings() {
  useEffect(() => {
    let msnry: any = null;
    let interval: NodeJS.Timeout;

    const initMasonry = () => {
      if (typeof window !== "undefined" && window.Masonry) {
        const elem = document.getElementById("masonry");
        if (elem) {
          msnry = new window.Masonry(elem, {
            percentPosition: true,
            // Add a small delay for images to load if imagesLoaded is not used
            transitionDuration: "0.2s",
          });
          return true;
        }
      }
      return false;
    };

    if (!initMasonry()) {
      interval = setInterval(() => {
        if (initMasonry()) {
          clearInterval(interval);
        }
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (msnry && typeof msnry.destroy === "function") {
        msnry.destroy();
      }
    };
  }, []);

  return (
    <section className="2xl:py-40 lg:py-30 sm:py-25 py-18 bg-light relative z-1 after:absolute after:bottom-0 lg:after:-right-55 after:right-0 after:size-full after:bg-no-repeat after:bg-bottom-right after-bg2 after:-z-1 max-xl:after:bg-contain overflow-hidden">
      <div className="container max-w-[1330px] relative z-1">
        <div
          className="row"
          id="masonry"
          suppressHydrationWarning
          data-masonry='{"percentPosition": true}'
        >
          <div className="grid-sizer w-1/12"></div>
          <div className="card-container xl:w-1/2 w-full mb-5">
            <span
              className="text-white font-main"
              style={{
                textTransform: "capitalize",
                fontSize: "32px",
                color: "#072032",
              }}
            >
              Seamless Flight Bookings
            </span>
            <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase lg:mb-7.5 headline">
              Your Journey Starts Here{" "}
            </h2>
            <p>
              Book international flights with ease and confidence. Whether for
              business or leisure, enjoy hassle-free bookings and competitive
              fares tailored to your needs.
            </p>
          </div>

          {homeFlightBookings.map((flight, idx) => (
            <div className="card-container xl:w-1/2 w-full mb-5" key={idx}>
              <div className="relative z-1 p-2.5 h-full duration-200 bg-white rounded-2xl md:flex group">
                <div className="rounded-xxl xl:w-73.75 md:w-62.5 w-full xl:min-w-73.75 md:min-w-62.5 min-w-full md:h-62.5 sm:h-62.5 h-50 relative overflow-hidden before:absolute before:top-0 before:-left-[75%] before:z-10 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                  <Image
                    src={`/assets/images/tour/style2/${flight.img}`}
                    alt={flight.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="size-full object-cover relative z-1 transition-transform duration-500 group-hover:scale-110"
                    priority={idx < 2}
                  />
                  <span className="absolute top-5 left-5 rounded-3xl text-xs font-medium px-2.5 py-1.5 bg-green text-secondary z-20">
                    Hot Deal
                  </span>
                </div>
                <div className="sm:p-7 sm:pe-5 sm:pb-5 p-4 relative flex flex-col w-full">
                  <div className="mb-2.5 flex-1">
                    <ul className="flex flex-wrap items-center gap-1.25 mb-1.5">
                      <li className="font-semibold text-xs uppercase">
                        {flight.tag}
                      </li>
                    </ul>
                    <h3 className="xl:text-2xl text-xl uppercase mb-2.5">
                      <Link href="/tour-packages" className="link-hover">
                        {flight.title}
                      </Link>
                    </h3>
                    <p className="text-sm">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s,{" "}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xxl">
                      $1299
                      <del className="text-base text-black/30 font-normal ml-2">
                        $1500
                      </del>
                    </h4>
                    <Link
                      href="/contact"
                      aria-label="View trip Packages"
                      className="size-12.5 flex items-center justify-center rounded-full bg-primary"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 5L19 12L12 19"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="card-container xl:w-1/2 w-full mb-5">
            <Link
              href="/flight-booking"
              className="bg-white rounded-xxl flex items-center justify-center p-10 size-full sm:min-h-47.5 min-h-25"
            >
              <h4 className="sm:text-4xxl text-2xxl text-center">
                View All Packages
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
