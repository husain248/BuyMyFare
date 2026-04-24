"use client";

import Image from "next/image";
import Link from "next/link";
import { homeDestinations } from "../../data/home-destinations";

export default function Destinations() {
  return (
    <section className="bg-[#ffffff] py-20 overflow-hidden">
      <div className="container relative z-1 max-w-7xl">
        <div className="text-center mb-12">
          <span className="text-[#072032] font-main text-[24px] md:text-[32px] capitalize">
            The Unforgettable
          </span>
          <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase mb-4 headline">
            DESTINATION
          </h2>
          <p>
            Explore breathtaking destinations that promise adventure,
            relaxation, and memories to last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {homeDestinations.map((d) => (
            <Link
              key={d.title}
              href="/contact"
              className="group relative overflow-hidden rounded-xxl"
              aria-label={`View destination ${d.title}`}
            >
              <div className="relative aspect-3/4">
                <Image
                  src={d.img}
                  alt={d.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 z-1" />
                <div className="absolute bottom-0 left-0 right-0 py-4 px-5 bg-black/35 backdrop-blur-sm z-2">
                  <h3 className="text-white uppercase font-semibold text-2xl sm:text-3xl text-center">
                    {d.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
