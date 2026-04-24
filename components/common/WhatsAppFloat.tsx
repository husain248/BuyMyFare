"use client";

import { X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "17806001550";
const WHATSAPP_MESSAGE =
  "Hi Buy My Fare, I would like help with my travel plans.";

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <div className="fixed right-5 bottom-5 z-1000 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-[min(320px,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-[#d7efe0] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
          <div className="flex items-center justify-between bg-[#25D366] px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold leading-none">WhatsApp Bot</p>
              <p className="mt-1 text-xs text-white/90">
                Usually replies in a few minutes
              </p>
            </div>
            <button
              type="button"
              aria-label="Close WhatsApp chat"
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-lg transition hover:bg-white/25"
            >
              <X />
            </button>
          </div>

          <div className="bg-[#efeae2] px-4 py-4">
            <div className="max-w-60 rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm text-secondary shadow-sm">
              Hi there! Need help with flights, holidays, or travel insurance?
            </div>
          </div>

          <div className="px-4 py-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
            >
              <i className="fab fa-whatsapp text-lg" aria-hidden="true"></i>
              Start Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label="Open WhatsApp chat"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:bg-[#1ebe5d]"
      >
        <i className="fab fa-whatsapp text-[30px]" aria-hidden="true"></i>
      </button>
    </div>
  );
}
