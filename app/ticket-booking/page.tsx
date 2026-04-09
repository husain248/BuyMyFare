"use client";

import React from "react";
import PageBanner from "../../components/layout/PageBanner";
import TicketCard from "../../components/ticket/TicketCard";
import PricingTerms from "../../components/ticket/PricingTerms";
import ContactForm from "../../components/common/ContactForm";

const ticketData = [
  {
    type: "Round Trip",
    destination: "Calgary to Delhi",
    price: "$1549",
    image: "/assets/images/tour-3.png",
  },
  {
    type: "Round Trip",
    destination: "Toronto to Amritsar",
    price: "$1510",
    image: "/assets/images/tour-1.png",
  },
  {
    type: "Round Trip",
    destination: "Toronto to Delhi",
    price: "$1259",
    image: "/assets/images/tour-3.png",
  },
  {
    type: "One-Way Trip",
    destination: "Calgary to Ahmedabad",
    price: "$1080",
    image: "/assets/images/tour-4.png",
  },
  {
    type: "Round Trip",
    destination: "Calgary to Amritsar",
    price: "$1995",
    image: "/assets/images/tour-1.png",
  },
  {
    type: "Round Trip",
    destination: "Toronto to London",
    price: "$1750",
    image: "/assets/images/tour-1.png",
  },
];

function Page() {
  return (
    <>
      <PageBanner
        title="Ticket Booking"
        subtitle="Hassle-Free Reservations"
        bgImage="/assets/images/banner/bnr2.png"
      />
      
      <section className="bg-[#ffffff] py-20 overflow-hidden">
        <div className="container relative z-1 max-w-7xl">
          <div className="row">
            <div className="lg:w-[65%] w-full">
              <div className="grid grid-cols-12 gap-5">
                {ticketData.map((ticket, index) => (
                  <div key={index} className="lg:col-span-6 sm:col-span-6 col-span-12">
                    <TicketCard {...ticket} />
                  </div>
                ))}
              </div>
              <PricingTerms />
            </div>
            
            <div className="lg:w-[35%] w-full mt-10 lg:mt-0">
              <div className="p-7.5 bg-[#F4F4F4] rounded-xxl sticky top-24">
                <div className="text-center flex flex-col gap-2.5 items-center justify-center mb-7.5">
                  <span className="font-main capitalize text-[28px] text-[#222222]">
                    Reach Us
                  </span>
                  <h2 className="2xxl:text-3xxl xl:text-3xl sm:text-3xl text-3xl text-black">
                    Get in Touch
                  </h2>
                </div>
                <ContactForm inputBgColor="bg-[#ffffff]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;

