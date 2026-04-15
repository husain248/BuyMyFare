import Link from "next/link";
import Image from "next/image";

export default function AboutExplore() {
  return (
    <section
      id="nextSection"
      className="relative md:py-20 py-15 before:absolute before:top-0 before:right-[21%] before:bg-[#EEEEEE] before:w-[22.35%] before:h-full before:-z-1 max-lg:before:hidden after:absolute after:-bottom-47.5 lg:after:-left-72.5 after:left-0 after:size-full after:bg-no-repeat after:bg-bottom-left after:bg-[url('/assets/images/background/bg1.png')] after:-z-1"
    >
      <div className="container">
        <div className="row">
          <div className="lg:w-1/2 w-full">
            <div className="lg:pt-20 relative mb-10">
              <div className="sm:mb-10 mb-5">
                <span className="block lg:text-3xl sm:text-2xl text-xl leading-none font-semibold font-title text-primary uppercase mb-2.5">
                  Time To Travel{" "}
                </span>
                <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase max-w-100">
                  explore with us
                </h2>
              </div>
              <div className="sm:mb-10 mb-7.5">
                <span className="xl:text-xl sm:text-lg text-sm font-semibold font-title text-black/20 uppercase block mb-2.5">
                  All packages Include
                </span>
                <ul className="flex flex-wrap text-secondary grid-2 font-medium mb-7.5">
                  <li className="w-1/2 relative p-1.25 ps-9.5 xl:text-xl text-sm font-normal before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1">
                    Travel Insurance
                  </li>
                  <li className="w-1/2 relative p-1.25 ps-9.5 xl:text-xl text-sm font-normal before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1">
                    Hotel Booking
                  </li>
                  <li className="w-1/2 relative p-1.25 ps-9.5 xl:text-xl text-sm font-normal before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1">
                    Return Flight
                  </li>
                  <li className="w-1/2 relative p-1.25 ps-9.5 xl:text-xl text-sm font-normal before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1">
                    Air Tickets
                  </li>
                  <li className="w-1/2 relative p-1.25 ps-9.5 xl:text-xl text-sm font-normal before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1">
                    Accommodation
                  </li>
                  <li className="w-1/2 relative p-1.25 ps-9.5 xl:text-xl text-sm font-normal before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1">
                    Visa Services
                  </li>
                  <li className="w-1/2 relative p-1.25 ps-9.5 xl:text-xl text-sm font-normal before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1">
                    Vehicle Rentals
                  </li>
                  <li className="w-1/2 relative p-1.25 ps-9.5 xl:text-xl text-sm font-normal before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1">
                    Vehicle Rentals
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-7.5">
                <Link href="/contact" className="btn btn-primary btn-hover">
                  <span>Book Now</span>
                </Link>
                <div className="inline-flex items-center gap-3.75">
                  <div className="widget-media text-primary">
                    <svg
                      className="animate-dzRing"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2517_6201)">
                        <path
                          d="M1.09214 16.968C0.385482 15.0592 -0.126239 13.1098 0.0280892 11.0386C0.12556 9.76331 0.60479 8.67489 1.53888 7.78141C2.5542 6.82295 3.51266 5.81575 4.51174 4.84104C5.81135 3.55768 7.44398 3.5658 8.74359 4.84104C9.54772 5.62893 10.3437 6.43306 11.1397 7.2372C11.9114 8.00884 12.6911 8.78048 13.4628 9.56025C14.8193 10.933 14.8274 12.5331 13.4709 13.8977C12.4962 14.8724 11.5296 15.8552 10.5387 16.8137C10.2788 17.0655 10.2544 17.2767 10.3925 17.5935C11.0423 19.153 11.9845 20.5419 13.0404 21.8415C15.1685 24.457 17.5728 26.7801 20.4401 28.5751C21.0574 28.9569 21.7316 29.2412 22.3732 29.5905C22.7063 29.7692 22.9256 29.7123 23.1936 29.4361C24.1602 28.4371 25.1511 27.4542 26.1421 26.4714C27.4417 25.188 29.0662 25.1799 30.3658 26.4714C31.9578 28.0472 33.5417 29.6311 35.1175 31.2231C36.4415 32.5552 36.4334 34.1878 35.1013 35.528C34.1997 36.4378 33.2493 37.2988 32.4046 38.2491C31.17 39.6299 29.6104 40.0848 27.8397 39.9873C25.2567 39.8492 22.8768 38.9883 20.5781 37.8755C15.4772 35.3981 11.1235 31.9622 7.47647 27.6248C4.77978 24.4083 2.5542 20.9156 1.09214 16.968ZM39.9992 19.8759C39.9992 8.91856 31.0806 0 20.1233 0V3.78511C28.9931 3.78511 36.2141 11.0061 36.2141 19.8759H39.9992ZM29.115 19.8759H32.9001C32.9001 12.8336 27.1655 7.09911 20.1233 7.09911V10.8842C22.5276 10.8842 24.7856 11.8183 26.4832 13.5159C28.1809 15.2135 29.115 17.4716 29.115 19.8759Z"
                          fill="#C8F31D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2517_6201">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="widget-content">
                    <a
                      href="tel:+11234567890"
                      className="sm:text-2xl text-base font-title font-semibold text-secondary"
                    >
                      410-123-4597
                    </a>
                    <span className="text-sm font-semibold uppercase block">
                      Call Now
                    </span>
                  </div>
                </div>
              </div>
              <span className="absolute lg:top-40 top-0 right-5 flex flex-col items-center justify-center xl:size-49 size-40 z-1 -rotate-20 max-sm:hidden">
                <span className="text-secondary font-title font-medium xl:text-2sm text-sm">
                  Get Up to
                </span>
                <span className="text-secondary font-title font-semibold xl:text-3xxl text-2xxl">
                  50% Off
                </span>
                <span className="text-secondary font-title font-semibold xl:text-xl text-base">
                  DISCOUNT{" "}
                </span>
                <Image
                  src="/assets/images/star.png"
                  alt="Discount Background"
                  width={200}
                  height={200}
                  className="absolute -z-1 animate-rotate xl:size-49 size-40"
                />
              </span>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative max-2xl:flex max-2xl:flex-col max-2xl:gap-5">
              <div
                className="flex items-center justify-start wow fadeInDown"
                data-wow-delay="1s"
              >
                <div className="-rotate-6 bg-white p-2.5 shadow-1">
                  <Image
                    src="/assets/images/about/img1.png"
                    alt="Explore Image 1"
                    width={400}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div
                className="flex items-center justify-end -mt-12.5 wow fadeInRight"
                data-wow-delay="1s"
              >
                <div className="rotate-2 bg-white p-2.5 shadow-1">
                  <Image
                    src="/assets/images/about/img2.png"
                    alt="Explore Image 2"
                    width={400}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="flex items-center justify-start -mt-12.5 relative">
                <div className="rotate-6 bg-white p-2.5 shadow-1">
                  <Image
                    src="/assets/images/about/img3.png"
                    alt="Explore Image 3"
                    width={400}
                    height={500}
                    className="w-full h-auto wow fadeInUp"
                    data-wow-delay="1s"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
