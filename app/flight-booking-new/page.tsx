"use client";

import Image from "next/image";
import PageBanner from "../../components/layout/PageBanner";
import PricingTerms from "../../components/ticket/PricingTerms";
import { ticketData } from "../../data/ticket-booking";
import { useTripPlannerModal } from "../../context/TripPlannerModalContext";

function Page() {
  const { openModal } = useTripPlannerModal();

  return (
    <>
      <PageBanner
        title="Flight Booking"
        subtitle="Hassle-Free Reservations"
        bgImage="/assets/images/banner/bnr1.png"
      />

      <section className="2xl:py-32 lg:py-24 sm:py-20 py-16 bg-light relative z-1 overflow-hidden">
        <div className="container max-w-7xl relative z-1">
          {/* <div className="max-w-3xl mb-10 lg:mb-14">
            <span
              className="font-main"
              style={{
                textTransform: "capitalize",
                fontSize: "32px",
                color: "#072032",
              }}
            >
              Flight Deals You Can Trust
            </span>
            <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase lg:mb-7.5 mb-4 headline">
              Book Your Next Route Faster
            </h2>
            <p className="text-secondary/70 text-base sm:text-lg">
              Explore our latest one-way and round-trip fares. Tap any deal and
              we&apos;ll open the trip planner so we can help you lock in the
              best option for your journey.
            </p>
          </div> */}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {ticketData.map((ticket, idx) => (
              <div key={ticket.id} className="w-full">
                <div className="relative z-1 p-2.5 h-full duration-200 bg-white rounded-2xl md:flex group shadow-[0_12px_40px_rgba(7,32,50,0.08)]">
                  <div className="rounded-xxl xl:w-73.75 md:w-62.5 w-full xl:min-w-73.75 md:min-w-62.5 min-w-full md:h-62.5 sm:h-62.5 h-50 relative overflow-hidden before:absolute before:top-0 before:-left-[75%] before:z-10 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                    <Image
                      src={ticket.image}
                      alt={ticket.destination}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="size-full object-cover relative z-1 transition-transform duration-500 group-hover:scale-110"
                      priority={idx < 4}
                    />
                    <span className="absolute top-5 left-5 rounded-3xl text-xs font-medium px-2.5 py-1.5 bg-green text-secondary z-20">
                      {ticket.type}
                    </span>
                  </div>

                  <div className="sm:p-7 sm:pe-5 sm:pb-5 p-4 relative flex flex-col w-full">
                    <div className="mb-2.5 flex-1">
                      <h3 className="xl:text-2xl text-xl uppercase mb-2.5 text-secondary">
                        {ticket.destination}
                      </h3>
                      <p className="text-sm text-secondary/70">{ticket.description}</p>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex flex-col gap-1.25">
                        <span className="font-semibold text-xs uppercase text-secondary/60">
                          Starting From
                        </span>
                        <h4 className="text-2xxl text-secondary">
                          {ticket.price}
                        </h4>
                      </div>
                      <button
                        type="button"
                        aria-label={`Plan trip for ${ticket.destination}`}
                        className="size-12.5 flex items-center justify-center rounded-full bg-primary transition-transform duration-200 group-hover:scale-105"
                        onClick={openModal}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 5L19 12L12 19"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 lg:mt-14">
            <PricingTerms />
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
