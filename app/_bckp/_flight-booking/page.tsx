import type { Metadata } from "next";
import FlightBookingPageClient from "./page-client";
import { buildPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Flight Booking",
    description:
      "Book domestic and international flights with BuyMyFare and get support for better routes, fares, and travel planning.",
    path: "/flight-booking",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function FlightBookingBackupPage() {
  return <FlightBookingPageClient />;
}
