"use client";

import Link from "next/link";

export default function AboutWork() {
  return (
    <section>
      <div className="hidden">
        <h2 className="xl:text-6xl md:text-5xl text-4xl">Our Work</h2>
      </div>
      <div className="container-full">
        <div className="relative overflow-hidden">
          <div className="absolute max-w-6xl top-1/2 -translate-y-1/2 text-center z-1 mx-auto w-full left-0 right-0">
            <h1 className="2xxl:text-10xxl xl:text-10xl sm:text-8xl text-5xl mb-2.5 text-[#ffffff] font-bold headline">
              Why We Do What We Do
            </h1>
            <p className="text-white">
              Buy My Fare isn’t just a business—it’s a passion project built on
              the belief that travel should be accessible, responsible, and
              deeply personal. We understand the thrill of exploring new
              horizons and the challenges that come with it. That’s why we’ve
              made it our mission to create seamless travel experiences that
              leave a lasting, positive impact.”
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
            src="/assets/images/about/large/img1.png"
            alt=""
            className="size-full min-h-75 object-cover"
            data-speed="0.7"
          />
        </div>
      </div>
    </section>
  );
}
