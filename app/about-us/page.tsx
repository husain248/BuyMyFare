"use client";
// import AboutBanner from "../../components/about/AboutBanner";
import AboutWork from "../../components/about/AboutWork";
import AboutHoliday from "../../components/about/AboutHoliday";
import AboutMission from "../../components/about/AboutMission";
import AboutusContent from "../../components/about/AboutusContent";
import WhatweOffer from "../../components/about/WhatweOffer";
import Journey from "../../components/about/Journey";
import AboutCta from "../../components/about/AboutCta";

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
