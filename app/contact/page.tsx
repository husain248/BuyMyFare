"use client";
import { Form } from "lucide-react";
import React from "react";

function page() {
  return (
    <>
      <div
        className="2xxl:min-h-100 lg:min-h-100 sm:min-h-100 min-h-75 text-center relative bg-no-repeat bg-center bg-cover before:absolute before:inset-0 before:bg-black/20"
        style={{ backgroundImage: "url('/assets/images/banner/bnr4.png')" }}
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
              Reach Out to Us
            </span>
            <h1 className="2xxl:text-11xxl xl:text-10xl sm:text-8xl text-5xl mb-2.5 text-white">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
      <section className="main-banner overflow-hidden lg:pt-36.25 pt-27.25 lg:pb-23.75 sm:pb-12.5 z-0  before:content-[''] before:absolute before:top-0 before:left-0 before:bg-light before:h-full before:w-[44%] before:-z-1 lg:before:block before:hidden">
        <div className="container">
          <div className="grid grid-cols-12 lg:gap-5">
            <div className="lg:col-span-6 col-span-12 mb-10">
              <div
                className="lg:w-[50vw] w-full lg:float-right relative lg:mb-25 mb-7.5 lg:pe-12.5 wow clip-right-animation"
                data-wow-delay="1s"
              >
                <img
                  src="assets/images/about/img13.png"
                  alt="img"
                  className="w-full"
                />
              </div>
              <div className="row">
                <div className="lg:w-[44%] sm:w-1/3 w-full max-md:mb-2.5">
                  <div className="">
                    <h3 className="md:text-2xl text-xl font-semibold md:mb-5 mb-1.25">
                      {" "}
                      Send a message{" "}
                    </h3>
                    <a
                      className="lg:text-lg text-base lg:text-black/60 hover:text-black block hover:underline"
                      href="mailto:travel@buymyfare.ca"
                    >
                      {" "}
                      travel@buymyfare.ca
                    </a>
                  </div>
                </div>
                <div className="lg:w-[56%] sm:w-1/3 w-full max-md:mb-2.5">
                  <div className="">
                    <h3 className="md:text-2xl text-xl font-semibold md:mb-5 mb-1.25">
                      {" "}
                      Call us{" "}
                    </h3>
                    <a
                      className="lg:text-lg text-base lg:text-black/60 hover:text-black block hover:underline"
                      href="tel:12345678910"
                    >
                      +1 780 600 1550{" "}
                    </a>
                  </div>
                </div>
                <div className="lg:w-[40%] sm:w-1/3 w-full lg:mt-14.5! max-md:mb-2.5">
                  <div className="">
                    <h2 className="md:text-2xl text-xl font-semibold md:mb-5 mb-1.25">
                      {" "}
                      Visit Us{" "}
                    </h2>
                    <a
                      className="lg:text-lg text-base lg:text-black/60 hover:text-black block hover:underline"
                      href="javasript:void(0);"
                    >
                      10431 Cityscape Drive NE, Calgary AB - T3N 1N5{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className="xl:pt-12.5 2xl:ps-5">
                <div className="xl:mb-12.5 mb-5">
                  <h2 className="2xl:text-7xl xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-medium lg:mb-7.5 mb-4 headline">
                    <span className="lg:block">Get In Touch</span> & Fill Up The
                    Form
                  </h2>
                  <p className="lg:text-xl text-xl font-light">
                    Have questions or need assistance planning your perfect
                    getaway? Reach out to us today, and let our travel experts
                    create unforgettable experiences tailored just for you!
                  </p>
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
                        value={""}
                        placeholder="John Doe"
                        className="w-full border-none rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors bg-[#f2efea]"
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
                        value={""}
                        placeholder="your@email.com"
                        className="w-full border-none rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors bg-[#f2efea]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-secondary/50 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={""}
                        placeholder="+1 (780) 000-0000"
                        className="w-full border-none rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors bg-[#f2efea]"
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
                      value={""}
                      placeholder="Tell us about your trip..."
                      className="w-full border-none rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors bg-[#f2efea]"
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
