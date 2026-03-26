"use client";

import Link from "next/link";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

const galleryImgNums = [1, 2, 3, 4, 5, 6, 7];

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Tour Packages", href: "/tour-packages" },
    { label: "Ticket Booking", href: "/ticket-booking" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Flight Booking", href: "/ticket-booking" },
    { label: "Travel Insurance", href: "/about-us" },
    { label: "Tour Packages", href: "/tour-packages" },
    { label: "Super Visa Insurance", href: "/about-us" },
    { label: "Hotel Booking", href: "/tour-packages" },
    { label: "Car Rentals", href: "/tour-packages" },
  ],
};

const socialLinks = [
  { icon: "fa-facebook-f", label: "Facebook", href: "#" },
  { icon: "fa-x-twitter", label: "Twitter", href: "#" },
  { icon: "fa-instagram", label: "Instagram", href: "#" },
  { icon: "fa-linkedin-in", label: "LinkedIn", href: "#" },
  { icon: "fa-youtube", label: "YouTube", href: "#" },
];

export default function Footer() {
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  return (
    <footer className="overflow-hidden">
      {/* ── Subscribe Banner ── */}
      <div className="bg-[#F2EFEA]">
        <div className="container">
          <div className="lg:pt-30 md:pt-25 pt-20 md:pb-17.5 pb-12.5 text-center max-w-225 mx-auto">
            <h2 className="2xl:text-7xxl lg:text-6xxl md:text-5xxl sm:text-4xxl text-3xxl uppercase font-medium mb-7.5">
              Subscribe now for unbeatable travel offers!
            </h2>
            <form className="dzSubscribe style-1" action="#" method="post">
              <div className="dzSubscribeMsg"></div>
              <div className="relative flex flex-wrap items-stretch w-full mb-5 max-w-150 mx-auto">
                <input
                  name="dzEmail"
                  required
                  type="email"
                  className="relative flex-1 w-[1%] md:h-17.5 h-15 rounded-10xl text-bodycolor bg-white text-base md:pr-46.25 md:pl-7.5 py-3.75 pr-20 pl-5 z-0 placeholder:text-bodycolor"
                  placeholder="Enter Your Email Address"
                />
                <div className="absolute md:right-2.5 right-1.5 top-1/2 -translate-y-1/2 z-1">
                  <button
                    name="submit"
                    value="Submit"
                    type="submit"
                    aria-label="Subscribe Now"
                    className="btn btn-primary btn-hover max-md:px-5!"
                  >
                    <span className="md:block hidden">Subscribe</span>
                    <span className="md:hidden">
                      <i
                        className="fa-solid fa-paper-plane"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
            </form>
            <p className="text-sm text-secondary">
              We are committed to protecting your{" "}
              <Link href="/contact" className="font-medium underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* ── Footer Main Body ── */}
      <div className="bg-secondary text-white">
        <div className="container">
          <div className="py-16 md:py-20">
            <div className="row gap-y-10">
              {/* Brand column */}
              <div className="xl:w-1/3 lg:w-1/2 w-full">
                <Link
                  href="/"
                  aria-label="Go to homepage"
                  className="inline-block mb-7"
                >
                  <img
                    src="/assets/images/Buy-My-Fare-Logo-L-1024x355.png"
                    alt="BuyMyFare"
                    className="h-14 w-auto object-contain"
                  />
                </Link>
                <p className="text-white/70 text-sm leading-relaxed mb-7 max-w-72">
                  Your trusted travel partner — offering affordable flights,
                  curated tour packages, and comprehensive travel insurance
                  across Canada and beyond.
                </p>

                {/* Contact details */}
                <ul className="space-y-3 text-sm mb-7">
                  <li className="flex items-center gap-3 text-white/80">
                    <i
                      className="fa-solid fa-phone text-primary w-4"
                      aria-hidden="true"
                    ></i>
                    <a
                      href="tel:+17806001550"
                      className="hover:text-primary transition-colors"
                    >
                      +1 780 600 1550
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <i
                      className="fa-solid fa-envelope text-primary w-4"
                      aria-hidden="true"
                    ></i>
                    <a
                      href="mailto:info@buymyfare.com"
                      className="hover:text-primary transition-colors"
                    >
                      info@buymyfare.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <i
                      className="fa-solid fa-location-dot text-primary w-4 mt-0.5"
                      aria-hidden="true"
                    ></i>
                    <span>Edmonton, Alberta, Canada</span>
                  </li>
                </ul>

                {/* Social icons */}
                <ul className="flex items-center gap-2">
                  {socialLinks.map((s) => (
                    <li key={s.icon}>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={s.label}
                        href={s.href}
                        className="size-9 rounded-full flex items-center justify-center border border-white/20 text-white/60 hover:bg-primary hover:border-primary hover:text-secondary transition-all"
                      >
                        <i
                          className={`fa-brands ${s.icon} text-sm`}
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links column */}
              <div className="xl:w-1/6 lg:w-1/4 sm:w-1/2 w-full">
                <h4 className="text-white font-semibold uppercase text-sm tracking-widest mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {footerLinks.quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/70 text-sm hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <i
                          className="fa-solid fa-chevron-right text-primary text-xs"
                          aria-hidden="true"
                        ></i>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services column */}
              <div className="xl:w-1/6 lg:w-1/4 sm:w-1/2 w-full">
                <h4 className="text-white font-semibold uppercase text-sm tracking-widest mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
                  Our Services
                </h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/70 text-sm hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <i
                          className="fa-solid fa-chevron-right text-primary text-xs"
                          aria-hidden="true"
                        ></i>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gallery grid column */}
              <div className="xl:w-1/3 lg:w-full w-full">
                <h4 className="text-white font-semibold uppercase text-sm tracking-widest mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
                  Captured Moments
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  {galleryImgNums.slice(0, 8).map((num, idx) => (
                    <div
                      key={num}
                      className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
                      onClick={() => setLightboxIndex(idx)}
                    >
                      <img
                        src={`/assets/images/gallery/img${num}.png`}
                        alt={`Gallery photo ${num}`}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                        <i
                          className="fa-solid fa-plus text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer Bottom Bar ── */}
        <div className="border-t border-white/10">
          <div className="container">
            <div className="py-5">
              <div className="row items-center">
                <div className="xl:w-1/3 w-full max-xl:mb-2.5">
                  <p className="2xl:text-base text-2sm mb-0 max-xl:text-center text-white/60">
                    © Copyright <span>{new Date().getFullYear()}</span> By{" "}
                    <a
                      href="https://buymyfare.com"
                      className="text-white hover:text-primary transition-colors"
                    >
                      BuyMyFare
                    </a>
                    . All Rights Reserved.
                  </p>
                </div>
                <div className="xl:w-1/3 w-full max-xl:mb-2.5 max-sm:hidden">
                  <ul className="flex items-center justify-center gap-1">
                    {footerLinks.quickLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="2xl:px-5 px-2 py-1 text-2sm font-medium text-white/60 hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="xl:w-1/3 w-full">
                  <ul className="flex items-center xl:justify-end justify-center gap-2">
                    {socialLinks.map((s) => (
                      <li key={s.icon}>
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label={s.label}
                          href={s.href}
                          className="size-8 rounded-full flex items-center justify-center text-white/60 hover:bg-primary hover:text-secondary transition-all"
                        >
                          <i
                            className={`fa-brands ${s.icon} text-sm`}
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Dialog Modal */}
      <div
        id="videoDialog"
        className="dialog hidden fixed z-9999 left-0 top-0 size-full overflow-auto bg-black/80 items-center justify-center h-screen"
      >
        <div className="dialog-content m-auto md:p-12.5 rounded-lg md:w-[80%] max-w-300 relative max-md:h-100 overflow-hidden">
          <span
            id="closeBtn"
            className="close absolute top-0 right-0 text-white/80 text-2xxl font-bold cursor-pointer size-10 flex items-center justify-center"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </span>
          <div id="videoContainer"></div>
        </div>
      </div>

      {/* Gallery Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={galleryImgNums.map((n) => ({
          src: `/assets/images/gallery/img${n}.png`,
        }))}
        plugins={[Counter, Zoom]}
        styles={{ container: { backgroundColor: "rgba(0,0,0,.85)" } }}
      />
    </footer>
  );
}
