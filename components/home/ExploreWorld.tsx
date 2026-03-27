"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ExploreWorld() {
  const [activeBg, setActiveBg] = useState(0);
  const bgImages = [
    "/assets/images/destinations/large/img1.png",
    "/assets/images/destinations/large/img2.png",
  ];

  const features = [
    {
      img: "/assets/images/destinations/img1.png",
      icon: "/assets/images/icons/world-icon-1.svg",
      title: "Tailored Itineraries",
      desc: "We design journeys that reflect your interests, preferences, and pace.",
    },
    {
      img: "/assets/images/destinations/img2.png",
      icon: "/assets/images/icons/world-icon-2.svg",
      title: "Exclusive Deals",
      desc: "Our partnerships with top airlines, hotels, and tour operators mean you get the best value without compromising quality.",
    },
    {
      img: "/assets/images/destinations/img3.png",
      icon: "/assets/images/icons/world-icon-3.svg",
      title: "Round-the-Clock Support",
      desc: "Your peace of mind is our priority—before, during, and after your trip.",
    },
    {
      img: "/assets/images/destinations/img4.png",
      icon: "/assets/images/icons/world-icon-4.svg",
      title: "Hassle-Free Service",
      desc: "From planning your itinerary to ensuring a smooth journey, we handle the details so you can focus on enjoying your trip.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBg((prev) => (prev + 1) % bgImages.length);
    }, 3500); // 3.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="destination-section lg:py-37.5 sm:py-25 py-18 relative overflow-hidden before:absolute before:inset-0 before:bg-black/50 before:z-1">
      {bgImages.map((img, idx) => (
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
          <span
            className="text-white font-main"
            style={{
              textTransform: "capitalize",
              fontSize: "32px",
              color: "#ffffff",
            }}
          >
            Start Your Adventure Today
          </span>
          <h2
            className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase text-white"
            style={{ fontSize: "82px" }}
          >
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
              <Link
                href="/tour-packages"
                className="btn btn-primary btn-hover light"
              >
                <span>Click Here</span>
              </Link>
            </div>
          </div>
          <div className="xl:w-2/3 w-full">
            <div className="grid grid-cols-12 gap-5">
              {features.map((f, i) => (
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
