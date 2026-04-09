"use client";

import ContactForm from "../common/ContactForm";

export default function ContactSection() {
  return (
    <section className="2xl:py-40 2xl:pb-0 lg:py-30 lg:pb-0 sm:py-25 sm:pb-0 py-18 pb-0 relative z-1 overflow-hidden">
      <div className="container relative z-1">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <span
              className="block font-main text-primary mb-4"
              style={{ fontSize: "28px", textTransform: "none" }}
            >
              Discover Your Next Adventure
            </span>
            <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xl uppercase mb-5">
              Get In Touch With Us
            </h2>
            <p className="max-w-2xl mx-auto opacity-80">
              Have questions about a trip, need a quote, or want to book? Reach
              out to our travel experts and we&apos;ll get back to you within 24
              hours.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="py-5 md:p-12 text-left relative overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat bg-bottom-right pointer-events-none z-0 opacity-50"
            style={{
              backgroundImage: "url(/assets/images/background/bg4.png)",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="container">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 relative z-1 shadow-2xl shadow-black/5">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-8 text-center sm:text-left">
                Contact Us Today
              </h3>
              <ContactForm 
                inputBgColor="bg-[#f2f2f2]" 
                layoutClasses="md:grid-cols-3" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

