import type { Metadata } from "next";
import FlightBookingNewPageClient from "./page-client";
import { buildPageMetadata } from "../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Flight Booking",
  description:
    "Find current flight offers and book smarter with BuyMyFare. Compare routes and plan your trip with expert support.",
  path: "/flight-booking",
});

export default function Page() {
  return <FlightBookingNewPageClient />;
}
