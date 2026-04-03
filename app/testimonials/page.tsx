"use client";
import React from 'react'
import Link from "next/link";

function page() {
  return (
    <>
    <div className="2xxl:min-h-100 lg:min-h-100 sm:min-h-100 min-h-75 text-center relative bg-no-repeat bg-center bg-cover before:absolute before:inset-0 before:bg-black/20" style={{ backgroundImage: "url('/assets/images/banner/bnr2.png')" }}>
        <div className="container relative z-1 table h-full">
            <div className="text-center py-15 table-cell align-middle 2xxl:h-125 lg:h-125 sm:h-100 h-75">
                <span className="text-white font-main"style={{textTransform: "capitalize",
              fontSize: "32px",color: "#ffffff",}}>Hassle-Free Reservations</span>
                <h1 className="2xxl:text-11xxl xl:text-10xl sm:text-8xl text-5xl mb-2.5 text-white">Ticket Booking</h1>
            </div>
        </div>  
    </div>
     <section className="2xl:py-40 lg:py-30 sm:py-25 py-18 bg-light relative z-1 after:absolute after:bottom-0 lg:after:-right-55 after:right-0 after:size-full after:bg-no-repeat after:bg-bottom-right after:bg-[url(/assets/images/background/bg2.png)] after:-z-1 max-xl:after:bg-contain overflow-hidden">
      <div className="container max-w-[1330px] relative z-1">
        <div
          className="row"
          id="masonry"
          data-masonry='{"percentPosition": true}'
        >
          <div className="grid-sizer w-1/12"></div>
          

          
            <div className="card-container xl:w-1/2 w-full mb-5">
              <div className="relative z-1 p-2.5 h-full duration-200 bg-white rounded-2xl md:flex group flex-col">
                <div className="rounded-xxl xl:w-73.75 md:w-62.5 w-full xl:min-w-73.75 md:min-w-62.5 min-w-full md:h-full sm:h-62.5 h-50 relative overflow-hidden before:absolute before:top-0 before:-left-[75%] before:z-0 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                  <img
                    src='/assets/images/tour/style2/img1.png'
                    alt={'Vancouver to Mumbai'}
                    className="size-full object-cover"
                  />
                  <span className="absolute top-5 left-5 rounded-3xl text-xs font-medium px-2.5 py-1.5 bg-green text-secondary">
                    Hot Deal
                  </span>
                </div>
                <div className="sm:p-7 sm:pe-5 sm:pb-5 p-4 relative flex flex-col w-full">
                  <div className="mb-2.5 flex-1">
                    <ul className="flex flex-wrap items-center gap-1.25 mb-1.5">
                      <li className="font-semibold text-xs uppercase">
                       dfdf
                      </li>
                    </ul>
                    <h3 className="xl:text-2xl text-xl uppercase mb-2.5">
                      <Link href="/tour-packages" className="link-hover">
                        dfdf
                      </Link>
                    </h3>
                    <p className="text-sm">
                      Exceptional Service from Mona at Buy My Fare – Highly Recommend! I just wanted to take a moment to express my gratitude for Mona at Buy My Fare, who made our recent trip to Tulum absolutely unforgettable. From the very beginning, Mona went above and beyond to ensure that every detail of our 7-day all-inclusive stay at Dream Tulum Resort was perfectly arranged. She took the time to understand our preferences and tailored the experience to meet all our needs. Her recommendations were spot-on, and she made the booking process seamless and stress-free. The resort itself was nothing short of incredible—beautiful, luxurious, and exactly what we were looking for. Mona even helped us with specific requests, ensuring we had a stress-free and relaxing vacation. Her professionalism, attention to detail, and genuine care for her clients are truly remarkable. If you’re planning a trip, I would absolutely recommend reaching out to Mona at Buy My Fare. We will definitely be booking future trips with her and couldn’t be happier with the experience! Thank you again, Mona, for making our vacation a dream come true!{" "}
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
                      href="/"
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


          <div className="card-container xl:w-1/2 w-full mb-5">
            <Link
              href="/"
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
    </>
  )
}

export default page
