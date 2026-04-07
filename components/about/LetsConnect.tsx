"use client";

import Link from "next/link";

export default function LetsConnect() {
  return (
    <section>
      <div className="container-full">
        <div className="relative overflow-hidden">
          <div className="absolute max-w-6xl top-1/2 -translate-y-1/2 text-center z-1 mx-auto w-full left-0 right-0">
            <h1 className="2xxl:text-10xxl xl:text-10xl sm:text-8xl text-5xl mb-2.5 text-[#ffffff] font-bold headline">
              Your Journey Begins Here
            </h1>
            <p className="text-white">
              Travel isn’t just about where you go; it’s about what you take
              back with you. At Buy My Fare, we’re here to help you start that
              journey—with a promise to make it extraordinary, responsible, and
              stress-free. So, pack your bags, and let the memories begin.”
            </p>
            <Link
              href="/"
              className="btn btn-primary btn-hover light mt-5"
              data-hover-init="true"
            >
              <span>Let's Connect</span>
              <span
                className="gsap-clone"
                style={
                  {
                    "--clone-left": "35px",
                    "--clone-top": "14px",
                  } as React.CSSProperties
                }
              >
                Plan Your Dream Trip
              </span>
            </Link>
          </div>
          <img
            src="/assets/images/about/large/img4.png"
            alt=""
            className="size-full min-h-75 object-cover"
            data-speed="0.7"
          />
        </div>
        <div className="flex justify-between items-center gap-5 flex-wrap bg-[#f2efe9] p-5 w-full">
          <h1 className=" text-2xl font-main">
            Your Gateway to Incredible Journeys
          </h1>
          <Link
            href="/"
            className="btn btn-primary btn-hover light"
            data-hover-init="true"
          >
            <span>Get Started Today!</span>
            <span
              className="gsap-clone"
              style={
                {
                  "--clone-left": "35px",
                  "--clone-top": "14px",
                } as React.CSSProperties
              }
            >
              Get Started Today!
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
