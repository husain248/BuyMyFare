import type { Metadata } from "next";
import FlightBookingPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Flight Booking",
  description:
    "Book domestic and international flights with BuyMyFare and get support for better routes, fares, and travel planning.",
  alternates: {
    canonical: "/flight-booking",
  },
};

export default function FlightBookingBackupPage() {
  return <FlightBookingPageClient />;
}
