"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="2xl:py-40 2xl:pb-0 lg:py-30 lg:pb-0 sm:py-25 sm:pb-0 py-18 pb-0 relative z-1 overflow-hidden">
      {/* Decorative background circles */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/10 translate-x-1/2 translate-y-1/2 pointer-events-none"></div> */}

      <div className="container relative z-1">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <span
              className="block font-main text-primary mb-4"
              style={{ fontSize: "28px", textTransform: "none" }}
            >
              Discover Your Next Adventure
            </span>
            <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase mb-5">
              Get In Touch With Us
            </h2>
            <p className="">
              Have questions about a trip, need a quote, or want to book? Reach
              out to our travel experts and we&apos;ll get back to you within 24
              hours.
            </p>
          </div>

        </div>
      </div>
      <div className="relative">
        <div className="py-5 md:p-12 text-left relative overflow-hidden">
          {/* Background image in form */}
          <div
            className="absolute inset-0 bg-no-repeat bg-right-bottom pointer-events-none -z-0"
            style={{ backgroundImage: "url(/assets/images/background/bg4.png)", backgroundSize: "cover" }}
          ></div>
          <div className="container">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 relative z-1">
              <div className="">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="size-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                      <i className="fa-solid fa-check text-secondary text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary uppercase mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                      Contact Us Today
                    </h3>
                    <div className="grid md:grid-cols-3 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-secondary/50 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full border-none rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors bg-[#f2f2f2]"
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
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full border-none rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors bg-[#f2f2f2]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-secondary/50 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (780) 000-0000"
                          className="w-full border-none rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors bg-[#f2f2f2]"
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
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your trip..."
                        className="w-full border-none rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors bg-[#f2f2f2]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-hover w-full justify-center"
                    >
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
