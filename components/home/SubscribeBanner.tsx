"use client";

import Link from "next/link";

export default function SubscribeBanner() {
  return (
    <div className="bg-[#F2EFEA]">
      <div className="container">
        <div className="lg:pt-30 md:pt-25 pt-20 md:pb-17.5 pb-12.5 text-center max-w-225 mx-auto">
          <h2 className="2xl:text-7xxl lg:text-6xxl md:text-5xxl sm:text-4xxl text-3xxl uppercase font-medium mb-7.5">
            Subscribe now for unbeatable travel offers!
          </h2>
          <form className="dzSubscribe style-1" action="#" method="post">
            <div className="dzSubscribeMsg"></div>
            <div className="relative flex flex-wrap items-stretch w-full mb-5 max-w-150 mx-auto">
              <input
                name="dzEmail"
                required
                type="email"
                className="relative flex-1 w-[1%] md:h-17.5 h-15 rounded-10xl text-bodycolor bg-white text-base md:pr-46.25 md:pl-7.5 py-3.75 pr-20 pl-5 z-0 placeholder:text-bodycolor"
                placeholder="Enter Your Email Address"
              />
              <div className="absolute md:right-2.5 right-1.5 top-1/2 -translate-y-1/2 z-1">
                <button
                  name="submit"
                  value="Submit"
                  type="submit"
                  aria-label="Subscribe Now"
                  className="btn btn-primary btn-hover max-md:px-5!"
                >
                  <span className="md:block hidden">Subscribe</span>
                  <span className="md:hidden">
                    <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </div>
          </form>
          <p className="text-sm text-secondary">
            We are committed to protecting your{" "}
            <Link href="/contact" className="font-medium underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
