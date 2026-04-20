import React from "react";
import ContactForm from "../common/ContactForm";

const ContactFormSidebar: React.FC = () => {
  return (
    <div className="p-5 bg-[#F4F4F4] rounded-xxl">
      <div className="text-center flex flex-col gap-2.5 items-center justify-center mb-7.5">
        <span className="font-main capitalize text-[28px] text-[#222222]">
          Reach Us
        </span>
        <h2 className="2xxl:text-3xxl xl:text-3xl sm:text-3xl text-3xl text-black">
          Get in Touch
        </h2>
      </div>
      <ContactForm
        inputBgColor="bg-[#ffffff]"
        layoutClasses="grid-cols-1 gap-5"
      />
    </div>
  );
};

export default ContactFormSidebar;
