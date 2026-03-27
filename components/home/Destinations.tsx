"use client";

import Link from "next/link";

export default function Destinations() {
  return (
    <section className="bg-[#ffffff] py-20 overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <span
            className="text-white font-main"
            style={{
              textTransform: "capitalize",
              fontSize: "32px",
              color: "#072032",
            }}
          >
            The Unforgettable
          </span>
          <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase lg:mb-4 headline">
            DESTINATION
          </h2>
          <p>
            Explore breathtaking destinations that promise adventure,
            relaxation, and memories to last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "UAE", img: "/assets/images/destinations/large/img1.png" },
            { title: "USA", img: "/assets/images/destinations/large/img2.png" },
            {
              title: "Italy",
              img: "/assets/images/destinations/large/img3.png",
            },
          ].map((d) => (
            <Link
              key={d.title}
              href="/tour-packages"
              className="group relative overflow-hidden rounded-xxl"
              aria-label={`View destination ${d.title}`}
            >
              <div className="relative aspect-3/4">
                <img
                  src={d.img}
                  alt={d.title}
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 py-4 px-5 bg-black/35 backdrop-blur-sm">
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
