"use client";

import Link from "next/link";

const services = [
  {
    title: "TOUR PACKAGES",
    tag: "Packages",
    image: "/assets/images/tour-packages.png", // Placeholder if specific one not found, though img1 looks like a beach
    desc: "Wildlife thrives in the silence and stillness of Namibia's surreal desert landscape.",
    btnText: "See All Packages",
    link: "/",
  },
  {
    title: "TICKET BOOKING",
    tag: "Booking",
    image: "/assets/images/ticket-booking.png",
    desc: "Wildlife thrives in the silence and stillness of Namibia's surreal desert landscape.",
    btnText: "Book Now",
    link: "/",
  },
  {
    title: "TRAVEL INSURANCE",
    tag: "Insurance",
    image: "/assets/images/travel-insurence.png", // Desert-ish image
    desc: "Wildlife thrives in the silence and stillness of Namibia's surreal desert landscape.",
    btnText: "Get Insurance",
    link: "/",
  },
];

export default function OurServices() {
  return (
    <section className="py-20 bg-[#F5F2EB]">
      <div className="container px-4 mx-auto relative z-1 max-w-[1330px]">
        <div className="text-center mb-12">
          <span
            className="font-main text-[24px] md:text-[32px] capitalize text-[#072032]"
>
            Service We Offer Is Specifically Designed To Meet Your Needs.
          </span>
          <h2 className="text-[#072032] font-bold lg:text-8xl md:text-6xl text-4xl uppercase tracking-tighter">
            OUR SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f4f4f4] rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-4/3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-green text-black px-4 py-1.5 rounded-full text-sm font-medium">
                  {service.tag}
                </span>
              </div>

              <div className="px-2 pb-2">
                <h3 className="text-2xl font-bold text-[#072032] mb-3 uppercase">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <Link
                  href={service.link}
                  className="btn btn-primary btn-hover w-full justify-center"
                >
                  <span>{service.btnText}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
