"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutWork() {
  return (
    <section>
      <div className="hidden">
        <h2 className="xl:text-6xl md:text-5xl text-4xl">Our Work</h2>
      </div>
      <div className="container-full">
        <div className="relative overflow-hidden md:min-h-125 min-h-100 flex items-center justify-center">
          <div className="container relative z-10 text-center mx-auto w-full px-4">
            <h1 className="2xxl:text-10xxl xl:text-10xl sm:text-8xl text-5xl mb-2.5 text-[#ffffff] font-bold headline">
              Why We Do What We Do
            </h1>
            <p className="text-white max-w-4xl mx-auto text-lg/relaxed">
              Buy My Fare isn’t just a business—it’s a passion project built on
              the belief that travel should be accessible, responsible, and
              deeply personal. We understand the thrill of exploring new
              horizons and the challenges that come with it. That’s why we’ve
              made it our mission to create seamless travel experiences that
              leave a lasting, positive impact.”
            </p>
            <Link
              href="/contact"
              className="btn btn-primary btn-hover light mt-5"
            >
              <span>Let's Connect</span>
            </Link>
          </div>
          <Image
            src="/assets/images/about/large/img1.png"
            alt="Why We Do What We Do"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            data-speed="0.7"
          />
        </div>
      </div>
    </section>
  );
}
