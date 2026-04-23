"use client";

import PageBanner from "../../components/layout/PageBanner";
import TicketCard from "../../components/ticket/TicketCard";
import PricingTerms from "../../components/ticket/PricingTerms";
import { ticketData } from "../../data/ticket-booking";
import { useTripPlannerModal } from "../../context/TripPlannerModalContext";

function FlightBookingBackupPage() {
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

            {/* <div className="lg:w-[35%] w-full mt-10 lg:mt-0">
              <StickySidebar>
                <aside>
                  <div className="p-7.5 md:p-4 bg-[#F4F4F4] rounded-xxl">
                    <div className="text-center flex flex-col gap-2.5 items-center justify-center mb-7.5">
                      <h2 className="2xxl:text-3xxl xl:text-3xl sm:text-3xl text-3xl text-black">
                        Get in Touch
                      </h2>
                    </div>
                    <ContactForm
                      inputBgColor="bg-[#ffffff]"
                      layoutClasses="grid-cols-1 gap-3"
                      size="compact"
                    />
                  </div>
                </aside>
              </StickySidebar>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default FlightBookingBackupPage;
