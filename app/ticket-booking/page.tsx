"use client";
import React from "react";
import Link from "next/link";

function page() {
  return (
    <>
      <div
        className="2xxl:min-h-100 lg:min-h-100 sm:min-h-100 min-h-75 text-center relative bg-no-repeat bg-center bg-cover before:absolute before:inset-0 before:bg-black/20"
        style={{ backgroundImage: "url('/assets/images/banner/bnr2.png')" }}
      >
        <div className="container relative z-1 table h-full">
          <div className="text-center py-15 table-cell align-middle 2xxl:h-125 lg:h-125 sm:h-100 h-75">
            <span
              className="text-white font-main"
              style={{
                textTransform: "capitalize",
                fontSize: "32px",
                color: "#ffffff",
              }}
            >
              Hassle-Free Reservations
            </span>
            <h1 className="2xxl:text-11xxl xl:text-10xl sm:text-8xl text-5xl mb-2.5 text-white">
              Ticket Booking
            </h1>
          </div>
        </div>
      </div>
      <section className="bg-[#ffffff] py-20 overflow-hidden">
        <div className="container relative z-1 max-w-7xl">
          <div className="row">
            <div className="lg:w-[65%] w-full">
              <div className="grid grid-cols-12 gap-5">
                <div className="lg:col-span-6 sm:col-span-6 col-span-12">
                  <div className="relative tour-card">
                    <div className="relative overflow-hidden rounded-xxl before:absolute before:inset-0 before:bg-linear-to-b before:from-transparent before:to-black/60">
                      <img
                        src="assets/images/tour-3.png"
                        alt=""
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="absolute left-0 bottom-0 sm:p-7.5 p-4.5 flex items-center justify-between w-full">
                      <div className="flex-1">
                        <span className="block font-title text-2sm text-white uppercase mb-1">
                          Round Trip
                        </span>
                        <h3 className="text-2xl font-medium text-white uppercase max-w-80 mb-2.5">
                          Calgary to Delhi
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="block font-title text-2sm text-white uppercase mb-1">
                          From
                        </span>
                        <span className="block font-title text-2xxl text-primary font-semibold">
                          $1549
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 sm:col-span-6 col-span-12">
                  <div className="relative tour-card">
                    <div className="relative overflow-hidden rounded-xxl before:absolute before:inset-0 before:bg-linear-to-b before:from-transparent before:to-black/60">
                      <img
                        src="assets/images/tour-1.png"
                        alt=""
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="absolute left-0 bottom-0 sm:p-7.5 p-4.5 flex items-center justify-between w-full">
                      <div className="flex-1">
                        <span className="block font-title text-2sm text-white uppercase mb-1">
                          Round Trip
                        </span>
                        <h3 className="text-2xl font-medium text-white uppercase max-w-80 mb-2.5">
                          Toronto to Amritsar
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="block font-title text-2sm text-white uppercase mb-1">
                          From
                        </span>
                        <span className="block font-title text-2xxl text-primary font-semibold">
                          $1510
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 sm:col-span-6 col-span-12">
                  <div className="relative tour-card">
                    <div className="relative overflow-hidden rounded-xxl before:absolute before:inset-0 before:bg-linear-to-b before:from-transparent before:to-black/60">
                      <img
                        src="assets/images/tour-3.png"
                        alt=""
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="absolute left-0 bottom-0 sm:p-7.5 p-4.5 flex items-center justify-between w-full">
                      <div className="flex-1">
                        <span className="block font-title text-2sm text-white uppercase mb-1">
                          Round Trip
                        </span>
                        <h3 className="text-2xl font-medium text-white uppercase max-w-80 mb-2.5">
                          Toronto to Delhi
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="block font-title text-2sm text-white uppercase mb-1">
                          From
                        </span>
                        <span className="block font-title text-2xxl text-primary font-semibold">
                          $1259
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 sm:col-span-6 col-span-12">
                  <div className="relative tour-card">
                    <div className="relative overflow-hidden rounded-xxl before:absolute before:inset-0 before:bg-linear-to-b before:from-transparent before:to-black/60">
                      <img
                        src="assets/images/tour-4.png"
                        alt=""
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="absolute left-0 bottom-0 sm:p-7.5 p-4.5 flex items-center justify-between w-full">
                      <div className="flex-1">
                        <span className="block font-title text-2sm text-white uppercase mb-1">
                          One-Way Trip
                        </span>
                        <h3 className="text-2xl font-medium text-white uppercase max-w-80 mb-2.5">
                          Calgary to Ahmedabad
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="block font-title text-2sm text-white uppercase mb-1">
                          From
                        </span>
                        <span className="block font-title text-2xxl text-primary font-semibold">
                          $1080
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 sm:col-span-6 col-span-12">
                  <div className="relative tour-card">
                    <div className="relative overflow-hidden rounded-xxl before:absolute before:inset-0 before:bg-linear-to-b before:from-transparent before:to-black/60">
                      <img
                        src="assets/images/tour-1.png"
                        alt=""
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="absolute left-0 bottom-0 sm:p-7.5 p-4.5 flex items-center justify-between w-full">
                      <div className="flex-1">
                        <span className="block font-title text-2sm text-white uppercase mb-1">
                          Round Trip
                        </span>
                        <h3 className="text-2xl font-medium text-white uppercase max-w-80 mb-2.5">
                          Calgary to Amritsar
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="block font-title text-2sm text-white uppercase mb-1">
                          From
                        </span>
                        <span className="block font-title text-2xxl text-primary font-semibold">
                          $1995
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 sm:col-span-6 col-span-12">
                  <div className="relative tour-card">
                    <div className="relative overflow-hidden rounded-xxl before:absolute before:inset-0 before:bg-linear-to-b before:from-transparent before:to-black/60">
                      <img
                        src="assets/images/tour-1.png"
                        alt=""
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="absolute left-0 bottom-0 sm:p-7.5 p-4.5 flex items-center justify-between w-full">
                      <div className="flex-1">
                        <span className="block font-title text-2sm text-white uppercase mb-1">
                          Round Trip
                        </span>
                        <h3 className="text-2xl font-medium text-white uppercase max-w-80 mb-2.5">
                          Calgary to Amritsar
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="block font-title text-2sm text-white uppercase mb-1">
                          From
                        </span>
                        <span className="block font-title text-2xxl text-primary font-semibold">
                          $1995
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10 bg-[#07a7f6] rounded-xxl mt-5 text-center">
                <h2 className="2xxl:text-3xl lg:text-3xl md:text-3xxl sm:text-3xl text-3xxl uppercase font-medium headline text-white">
                  Air Ticket Pricing and Availability{" "}
                </h2>
                <p className="text-white mt-3">
                  Please be advised that the prices shown on our website are
                  indicative and subject to change based on availability and
                  market conditions. Final pricing will be confirmed at the time
                  of booking. For the most accurate and up-to-date information,
                  we encourage you to contact our team directly.
                </p>
              </div>
            </div>
            <div className="lg:w-[35%] w-full">
              <div className="p-5 bg-[#F4F4F4] rounded-xxl">
                <div className="text-center flex flex-col gap-2.5 items-center justify-center">
                  <span className="font-main capitalize text-[28px] text-[#222222]">
                    Reach Us{" "}
                  </span>
                  <h1 className="2xxl:text-3xxl xl:text-3xl sm:text-3xl text-3xl mb-5 text-black">
                    Get in Touch{" "}
                  </h1>
                </div>
                <form className="space-y-5">
                  <div className="grid md:grid-cols-1 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-secondary/50 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        defaultValue=""
                        placeholder="John Doe"
                        className="w-full border-none rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors bg-[#ffffff]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-secondary/50 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        defaultValue=""
                        placeholder="your@email.com"
                        className="w-full border-none rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors bg-[#ffffff]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-secondary/50 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        defaultValue=""
                        placeholder="+1 (780) 000-0000"
                        className="w-full border-none rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors bg-[#ffffff]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-secondary/50 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      defaultValue=""
                      placeholder="Tell us about your trip..."
                      className="w-full border-none rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors bg-[#ffffff]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-hover w-full justify-center"
                  >
                    <span>Submit</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
