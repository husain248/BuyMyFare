"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  exploreWorldBgImages,
  exploreWorldFeatures,
} from "../../data/home-explore-world";

export default function ExploreWorld() {
  const [activeBg, setActiveBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBg((prev) => (prev + 1) % exploreWorldBgImages.length);
    }, 3500); // 3.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="destination-section lg:py-37.5 sm:py-25 py-18 relative overflow-hidden before:absolute before:inset-0 before:bg-black/50 before:z-1">
      {exploreWorldBgImages.map((img, idx) => (
        <div
          key={img}
          className={`destination-bg bg-${idx + 1}${activeBg === idx ? " is-active" : ""}`}
          style={{
            backgroundImage: `url('${img}')`,
            opacity: activeBg === idx ? 1 : 0,
            transition: "opacity 0.8s cubic-bezier(.4,0,.2,1)",
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        />
      ))}
      <div className="container relative z-1">
        <div className="xl:mb-10 sm:mb-5 mb-2.5">
          <span className="font-main text-[24px] md:text-[32px] text-[#ffffff] capitalize">
            Start Your Adventure Today
          </span>
          <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase text-white">
            Explore the World with Confidence
          </h2>
        </div>
        <div className="row">
          <div className="xl:w-1/3 w-full">
            <div className="mb-10 relative after:absolute after:top-full after:right-[20%] after:w-px xl:after:h-100 after:h-60 after:bg-white/50 max-xl:after:hidden">
              <p className="xl:text-xl sm:text-lg text-sm font-medium text-white lg:mb-10 sm:mb-5 mb-2.5">
                Let us craft your ideal trip with seamless planning, handpicked
                destinations, and complete peace of mind. Your next adventure
                begins here.
              </p>
              <Link href="/" className="btn btn-primary btn-hover light">
                <span>Click Here</span>
              </Link>
            </div>
          </div>
          <div className="xl:w-2/3 w-full">
            <div className="grid grid-cols-12 gap-5">
              {exploreWorldFeatures.map((f, i) => (
                <div key={i} className="md:col-span-6 col-span-12">
                  <div className="relative destination-card">
                    {/* Icon in top right */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-black/55 rounded-full flex items-center justify-center z-20">
                      <img
                        src={f.icon}
                        alt="icon"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-xxl before:absolute before:inset-0 before:bg-linear-to-b before:from-transparent before:to-black/60">
                      <img
                        src={f.img}
                        alt={f.title}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="absolute left-0 bottom-0 sm:p-7.5 p-4.5 flex items-center justify-between w-full">
                      <div className="flex-1">
                        <h3 className="text-2xl font-medium text-white uppercase mb-2.5">
                          {f.title}
                        </h3>
                        <span className="text-sm font-semibold capitalize text-white duration-500">
                          {f.desc}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
