import React from "react";

const PricingTerms = () => {
  return (
    <div className="p-10 bg-[#07a7f6] rounded-xxl mt-5 text-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <h2 className="2xxl:text-3xl lg:text-3xl md:text-3xxl sm:text-3xl text-3xxl uppercase font-medium headline text-white relative z-1">
        Air Ticket Pricing and Availability{" "}
      </h2>
      <p className="text-white/90 mt-3 relative z-1 max-w-2xl mx-auto">
        Please be advised that the prices shown on our website are indicative
        and subject to change based on availability and market conditions.
        <span className="block mt-6 bg-white p-3 rounded-lg text-base text-black/80 font-semibold">
          Final pricing will be confirmed at the time of booking. For the most
          accurate and up-to-date information, we encourage you to contact our
          team directly.{" "}
        </span>
      </p>
    </div>
  );
};

export default PricingTerms;
