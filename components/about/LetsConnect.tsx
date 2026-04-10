"use client";

import Link from "next/link";
import Image from "next/image";

export default function LetsConnect() {
  return (
    <section>
      <div className="container-full">
        <div className="relative overflow-hidden md:min-h-125 min-h-100 flex items-center justify-center">
          <div className="container relative z-10 text-center mx-auto w-full px-4">
            <h1 className="2xxl:text-10xxl xl:text-10xl sm:text-8xl text-5xl mb-2.5 text-[#ffffff] font-bold headline">
              Your Journey Begins Here
            </h1>
            <p className="text-white max-w-4xl mx-auto text-lg/relaxed">
              Travel isn’t just about where you go; it’s about what you take
              back with you. At Buy My Fare, we’re here to help you start that
              journey—with a promise to make it extraordinary, responsible, and
              stress-free. So, pack your bags, and let the memories begin.”
            </p>
            <Link
              href="/"
              className="btn btn-primary btn-hover light mt-5"
            >
              <span>Let's Connect</span>
            </Link>
          </div>
          <Image
            src="/assets/images/about/large/img4.png"
            alt="Your Journey Begins Here"
            fill
            sizes="100vw"
            className="object-cover"
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
          >
            <span>Get Started Today!</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
