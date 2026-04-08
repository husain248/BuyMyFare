import React from "react";

const ContactFormSidebar: React.FC = () => {
  return (
    <div className="p-5 bg-[#F4F4F4] rounded-xxl">
      <div className="text-center flex flex-col gap-2.5 items-center justify-center">
        <span className="font-main capitalize text-[28px] text-[#222222]">
          Reach Us{" "}
        </span>
        <h1 className="2xxl:text-3xxl xl:text-3xl sm:text-3xl text-3xl mb-5 text-black">
          Get in Touch{" "}
        </h1>
      </div>
      <form className="space-y-5">
        <div className="grid md:grid-cols-1 gap-5">
          <div>
            <label className="block text-sm font-semibold text-secondary/50 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              defaultValue=""
              placeholder="John Doe"
              className="w-full border-none rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors bg-[#ffffff]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-secondary/50 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              defaultValue=""
              placeholder="your@email.com"
              className="w-full border-none rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors bg-[#ffffff]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-secondary/50 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              defaultValue=""
              placeholder="+1 (780) 000-0000"
              className="w-full border-none rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors bg-[#ffffff]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-secondary/50 mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            required
            rows={4}
            defaultValue=""
            placeholder="Tell us about your trip..."
            className="w-full border-none rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors bg-[#ffffff]"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-hover w-full justify-center"
        >
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default ContactFormSidebar;
