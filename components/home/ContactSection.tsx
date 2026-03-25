'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="2xl:py-40 lg:py-30 sm:py-25 py-18 relative z-1 bg-secondary overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/10 translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container relative z-1">
        <div className="row items-center gap-y-10">
          {/* Left column */}
          <div className="lg:w-5/12 w-full">
            <span className="block font-main text-primary mb-4" style={{ fontSize: '28px', textTransform: 'none' }}>
              We&apos;re Here to Help
            </span>
            <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase text-white mb-5">
              Get In Touch With Us
            </h2>
            <p className="text-white/70 mb-8 xl:text-lg text-base">
              Have questions about a trip, need a quote, or want to book? Reach out to our travel experts and we&apos;ll get back to you within 24 hours.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                  <i className="fa-solid fa-phone text-secondary text-base"></i>
                </div>
                <div>
                  <span className="block text-white/50 text-sm uppercase font-semibold mb-1">Call Us</span>
                  <a href="tel:+17806001550" className="text-white text-xl font-semibold hover:text-primary transition-colors">
                    +1 780 600 1550
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                  <i className="fa-solid fa-envelope text-secondary text-base"></i>
                </div>
                <div>
                  <span className="block text-white/50 text-sm uppercase font-semibold mb-1">Email Us</span>
                  <a href="mailto:info@buymyfare.com" className="text-white text-xl font-semibold hover:text-primary transition-colors">
                    info@buymyfare.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                  <i className="fa-solid fa-location-dot text-secondary text-base"></i>
                </div>
                <div>
                  <span className="block text-white/50 text-sm uppercase font-semibold mb-1">Visit Us</span>
                  <span className="text-white text-lg">
                    Edmonton, Alberta, Canada
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right column - form */}
          <div className="lg:w-7/12 w-full lg:pl-16">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="size-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                    <i className="fa-solid fa-check text-secondary text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary uppercase mb-3">Message Sent!</h3>
                  <p className="text-gray-600">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-bold text-secondary uppercase mb-6">Send a Message</h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2 uppercase">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2 uppercase">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (780) 000-0000"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2 uppercase">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2 uppercase">Your Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your trip..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-hover w-full justify-center">
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
