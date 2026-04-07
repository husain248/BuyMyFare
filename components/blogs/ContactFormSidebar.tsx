import React from "react";

const ContactFormSidebar: React.FC = () => {
  return (
    <div className="sm:mb-11.25 mb-5 bg-white border border-secondary/10 p-8 rounded-2xl">
      <h4 className="text-xl uppercase mb-6 font-semibold text-secondary border-b border-secondary/10 pb-4">
        Contact Us
      </h4>
      <form className="space-y-4">
        <div>
          <label htmlFor="side-name" className="block text-sm font-medium mb-1.5 text-secondary">
            Full Name
          </label>
          <input
            type="text"
            id="side-name"
            placeholder="Your Name"
            className="w-full py-2.5 px-4 bg-transparent border border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors text-sm"
          />
        </div>
        <div>
          <label htmlFor="side-email" className="block text-sm font-medium mb-1.5 text-secondary">
            Email Address
          </label>
          <input
            type="email"
            id="side-email"
            placeholder="info@example.com"
            className="w-full py-2.5 px-4 bg-transparent border border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors text-sm"
          />
        </div>
        <div>
          <label htmlFor="side-message" className="block text-sm font-medium mb-1.5 text-secondary">
            Message
          </label>
          <textarea
            id="side-message"
            rows={4}
            placeholder="How can we help?"
            className="w-full py-2.5 px-4 bg-transparent border border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors text-sm resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full btn btn-primary btn-hover py-3 rounded-lg"
        >
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactFormSidebar;
