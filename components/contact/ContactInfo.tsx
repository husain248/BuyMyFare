import React from "react";

const ContactInfo = () => {
  return (
    <div className="row">
      <div className="lg:w-[44%] sm:w-1/3 w-full max-md:mb-2.5">
        <div className="">
          <h3 className="md:text-2xl text-xl font-semibold md:mb-5 mb-1.25"> Send a message </h3>
          <a
            className="lg:text-lg text-base lg:text-black/60 hover:text-black block hover:underline"
            href="mailto:travel@buymyfare.ca"
          >
            travel@buymyfare.ca
          </a>
        </div>
      </div>
      <div className="lg:w-[56%] sm:w-1/3 w-full max-md:mb-2.5">
        <div className="">
          <h3 className="md:text-2xl text-xl font-semibold md:mb-5 mb-1.25"> Call us </h3>
          <a
            className="lg:text-lg text-base lg:text-black/60 hover:text-black block hover:underline"
            href="tel:12345678910"
          >
            +1 780 600 1550{" "}
          </a>
        </div>
      </div>
      <div className="lg:w-[40%] sm:w-1/3 w-full lg:mt-14.5! max-md:mb-2.5">
        <div className="">
          <h2 className="md:text-2xl text-xl font-semibold md:mb-5 mb-1.25"> Visit Us </h2>
          <a
            className="lg:text-lg text-base lg:text-black/60 hover:text-black block hover:underline"
            href="javascript:void(0);"
          >
            10431 Cityscape Drive NE, Calgary AB - T3N 1N5{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
