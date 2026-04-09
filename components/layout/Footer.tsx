"use client";

import Link from "next/link";
import { businessHours, footerLinks, socialLinks } from "../../data/footer";

export default function Footer() {
  return (
    <footer className="overflow-hidden">
      {/* ── Footer Main Body ── */}
      <div className="bg-secondary text-white">
        <div className="container">
          <div className="py-16 md:py-20">
            <div className="row gap-y-10">
              {/* Brand column */}
              <div className="xl:w-4/12 lg:w-1/2 w-full">
                <Link
                  href="/"
                  aria-label="Go to homepage"
                  className="inline-block mb-10"
                >
                  <img
                    src="/assets/images/Buy-My-Fare-Logo-L-1024x355.png"
                    alt="BuyMyFare"
                    className="h-20 w-auto object-contain"
                  />
                </Link>
                <p className="text-white/80 text-base leading-relaxed mb-7 max-w-lg">
                  Bringing the world closer to you with personalized travel
                  packages, seamless journeys, and unforgettable experiences
                  designed for your dreams.
                </p>
              </div>

              {/* Quick Links column */}
              <div className="xl:w-2/12 lg:w-1/4 sm:w-1/2 w-full">
                <h4 className="text-white font-bold text-lg mb-8">
                  Quick Links
                </h4>
                <ul className="space-y-4">
                  {footerLinks.quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/80 text-base hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info column */}
              <div className="xl:w-3/12 lg:w-1/4 sm:w-1/2 w-full">
                <h4 className="text-white font-bold text-lg mb-8">
                  Contact Info
                </h4>
                <ul className="space-y-4 text-base mb-8">
                  <li className="flex items-start gap-3 text-white/80">
                    <i
                      className="fa-solid fa-paper-plane text-primary mt-1.5 w-4"
                      aria-hidden="true"
                    ></i>
                    <span>10431 Cityscape Drive NE, Calgary AB - T3N 1N5</span>
                  </li>
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
                      href="mailto:travel@buymyfare.ca"
                      className="hover:text-primary transition-colors"
                    >
                      travel@buymyfare.ca
                    </a>
                  </li>
                </ul>
                <div className="mt-8">
                  <img
                    src="/assets/images/IATA-TIDS.png"
                    alt="TIDS IATA"
                    className="h-25 w-auto"
                  />
                </div>
              </div>

              {/* Business Hour column */}
              <div className="xl:w-3/12 lg:w-1/2 w-full">
                <h4 className="text-white font-bold text-lg mb-8">
                  Business Hour
                </h4>
                <ul className="space-y-4">
                  {businessHours.map((item, idx) => (
                    <li
                      key={idx}
                      className={`flex justify-between items-center pb-4 ${idx !== businessHours.length - 1 ? "border-b border-dotted border-white/20" : ""}`}
                    >
                      <span className="text-white/80">{item.day}</span>
                      <span className="text-white/80">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer Bottom Bar ── */}
        <div className="border-t border-white/10">
          <div className="container">
            <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-y-4">
              <p className="text-white/60 text-base mb-0">© 2025 Buy My Fare</p>

              <ul className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <li key={s.icon}>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={s.label}
                      href={s.href}
                      className="size-10 flex items-center justify-center border border-white/20 text-white/80 hover:bg-primary hover:border-primary hover:text-secondary transition-all"
                    >
                      <i
                        className={`fa-brands ${s.icon} text-base`}
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
    </footer>
  );
}
