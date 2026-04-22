"use client";

import Link from "next/link";
import Image from "next/image";
import { getOptimizedBackgroundImage } from "../../lib/optimizedBackgroundImage";

export default function Journey() {
  return (
    <section
      className="2xxl:min-h-100 lg:min-h-100 sm:min-h-100 min-h-75 text-center relative bg-no-repeat bg-center bg-cover before:absolute before:inset-0 before:bg-black/40"
      style={{
        backgroundImage: getOptimizedBackgroundImage(
          "/assets/images/about/large/img4.png"
        ),
      }}
    >
      <div className="container-full relative z-1">
        <div className="relative overflow-hidden md:min-h-135 min-h-100 flex items-center justify-center py-[100px] sm:py-4">
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
              href="/contact"
              className="btn btn-primary btn-hover light mt-5"
            >
              <span>Let's Connect</span>
            </Link>
          </div>
          {/* <Image
            src="/assets/images/about/large/img4.png"
            alt="Your Journey Begins Here"
            fill
            sizes="100vw"
            className="object-cover"
            data-speed="0.7"
          /> */}
        </div>
      </div>
    </section>
  );
}
