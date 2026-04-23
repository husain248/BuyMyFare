"use client";

import PageBanner from "../../components/layout/PageBanner";
import TicketCard from "../../components/ticket/TicketCard";
import PricingTerms from "../../components/ticket/PricingTerms";
import { ticketData } from "../../data/ticket-booking";
import { useTripPlannerModal } from "../../context/TripPlannerModalContext";

export default function FlightBookingPageClient() {
  const { openModal } = useTripPlannerModal();

  return (
    <>
      <PageBanner
        title="Flight Booking"
        subtitle="Hassle-Free Reservations"
        bgImage="/assets/images/banner/bnr1.png"
      />

      <section className="bg-[#ffffff] py-20">
        <div className="container relative z-1 max-w-7xl">
          <div className="row">
            <div className="w-full">
              <div className="grid grid-cols-12 gap-5">
                {ticketData.map((ticket, index) => (
                  <div
                    key={index}
                    className="lg:col-span-4 sm:col-span-4 col-span-12"
                  >
                    <TicketCard {...ticket} onAction={openModal} />
                  </div>
                ))}
              </div>
              <PricingTerms />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
