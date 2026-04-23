// import AboutBanner from "../../components/about/AboutBanner";
import type { Metadata } from "next";
import AboutWork from "../../components/about/AboutWork";
import AboutHoliday from "../../components/about/AboutHoliday";
import AboutMission from "../../components/about/AboutMission";
import AboutusContent from "../../components/about/AboutusContent";
import WhatweOffer from "../../components/about/WhatweOffer";
import Journey from "../../components/about/Journey";
import AboutCta from "../../components/about/AboutCta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BuyMyFare, our travel experts, and how we help travelers book flights and tour packages with confidence.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <>
      {/* <AboutBanner /> */}
      <Journey />
      <AboutusContent />
      <AboutWork />
      <AboutHoliday />
      <AboutMission />
      <WhatweOffer />
      <AboutCta />
    </>
  );
}
