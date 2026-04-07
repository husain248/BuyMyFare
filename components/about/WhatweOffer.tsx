"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function ProcessSection() {
  return (
    <section
      id="Process"
      className="border-b border-black/20 dark:border-white/20 py-10 lg:py-20 xl:py-28"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* LEFT CONTENT */}
          <div className="col-span-12 lg:col-span-12">
            <div className="mb-6 sm:mb-10 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
                What We Offer
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-5 rounded-2lg bg-[#F2EFEA] flex flex-col gap-4">
                <div className="relative overflow-hidden rounded-2lg">
                  <img
                    src="/assets/images/Handpicked-Destinations.png"
                    alt=""
                    className="size-full object-cover w-full"
                  />
                </div>
                <div className="">
                  <h3 className="text-2xl font-medium mb-2.5  font-main">
                    Handpicked Destinations
                  </h3>
                  <p className="text-base">
                    From hidden gems to world-famous landmarks, we curate
                    destinations that excite and inspire.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2lg bg-[#F2EFEA] flex flex-col gap-4">
                <div className="relative overflow-hidden rounded-2lg">
                  <img
                    src="/assets/images/Custom-Travel-Plans.png"
                    alt=""
                    className="size-full object-cover w-full"
                  />
                </div>
                <div className="">
                  <h3 className="text-2xl font-medium mb-2.5  font-main">
                    Custom Travel Plans
                  </h3>
                  <p className="text-base">
                    Every trip is as unique as you are—whether it’s a family
                    vacation, a solo retreat, or an eco-friendly escape.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2lg bg-[#F2EFEA] flex flex-col gap-4">
                <div className="relative overflow-hidden rounded-2lg">
                  <img
                    src="/assets/images/Hassle-Free-Services.png"
                    alt=""
                    className="size-full object-cover w-full"
                  />
                </div>
                <div className="">
                  <h3 className="text-2xl font-medium mb-2.5  font-main">
                    Hassle-Free Services
                  </h3>
                  <p className="text-base">
                    Leave the logistics to us—flights, hotels, visas, and
                    more—so you can focus on enjoying your trip.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2lg bg-[#F2EFEA] flex flex-col gap-4">
                <div className="relative overflow-hidden rounded-2lg">
                  <img
                    src="/assets/images/Travel-with-Purpose.png"
                    alt=""
                    className="size-full object-cover w-full"
                  />
                </div>
                <div className="">
                  <h3 className="text-2xl font-medium mb-2.5  font-main">
                    Travel with Purpose
                  </h3>
                  <p className="text-base">
                    We design itineraries that support local economies, reduce
                    environmental impact, and celebrate cultural heritage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
