import type { Metadata } from "next";
import FlightBookingNewPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Flight Booking",
  description:
    "Find current flight offers and book smarter with BuyMyFare. Compare routes and plan your trip with expert support.",
  alternates: {
    canonical: "/flight-booking-new",
  },
};

export default function Page() {
  return <FlightBookingNewPageClient />;
}
