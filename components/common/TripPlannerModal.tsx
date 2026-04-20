"use client";

import Image from "next/image";
import { useEffect } from "react";
import ContactForm from "./ContactForm";

interface TripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TripPlannerModal({
  isOpen,
  onClose,
}: TripPlannerModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-10000 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Close trip planner form"
        className="absolute inset-0 bg-black/65 backdrop-blur-[1.5px]"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[calc(100dvh-2rem)] w-full max-w-4xl flex-col overflow-y-auto rounded-[26px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.28)] md:flex-row">
        <div className="relative min-h-[190px] w-full md:min-h-[460px] md:w-[46%]">
          <Image
            src="/assets/images/banner/contact-bg-2.jpg"
            alt="Travel inspiration"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-br from-primary/80 to-black/60" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/90">
              Let&apos;s Plan Together
            </p>
            <h3 className="mt-2 text-2xl leading-tight font-semibold text-white">
              Tell us your dream destination and we&apos;ll design it
              beautifully.
            </h3>
          </div>
        </div>

        <div className="w-full p-6 sm:p-8 md:w-[54%]">
          <button
            type="button"
            aria-label="Close form"
            className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full border border-black/10 text-base text-secondary transition hover:scale-105 hover:border-primary hover:text-primary"
            onClick={onClose}
          >
            <i className="fa-solid fa-xmark" />
          </button>

          <h4 className="text-2xl font-semibold text-secondary">
            Plan Your Dream Trip
          </h4>
          <p className="mt-2 text-sm text-bodycolor">
            Share quick details and our travel experts will contact you soon.
          </p>

          <div className="mt-6">
            <ContactForm layoutClasses="grid-cols-1 gap-2" size="compact" />
          </div>
        </div>
      </div>
    </div>
  );
}
