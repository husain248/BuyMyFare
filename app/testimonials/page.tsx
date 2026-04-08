"use client";

import Image from "next/image";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <>
      <div
        className="2xxl:min-h-100 lg:min-h-100 sm:min-h-100 min-h-75 text-center relative bg-no-repeat bg-center bg-cover before:absolute before:inset-0 before:bg-black/20"
        style={{
          backgroundImage:
            "url('/assets/images/testimonial/BMF-Testimonials-scaled.webp')",
        }}
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
              What they say
            </span>
            <h1 className="2xxl:text-11xxl xl:text-10xl sm:text-8xl text-5xl mb-2.5 text-white">
              Testimonials
            </h1>
          </div>
        </div>
      </div>
      <section className="bg-[#F5F2EB] py-20">
        <div className="max-w-7xl mx-auto px-5">
          {/* Masonry Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
              >
                {/* Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {item.text}
                </p>

                {/* User */}
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold mb-2">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
