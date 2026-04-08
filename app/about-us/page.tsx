"use client";
import AboutBanner from "../../components/about/AboutBanner";
import AboutWork from "../../components/about/AboutWork";
import AboutHoliday from "../../components/about/AboutHoliday";
import AboutMission from "../../components/about/AboutMission";
import AboutusContent from "../../components/about/AboutusContent";
import WhatweOffer from "../../components/about/WhatweOffer";
import LetsConnect from "../../components/about/LetsConnect";

export default function AboutUsPage() {
  return (
    <>
      <AboutBanner />
      <AboutusContent />
      <AboutWork />
      <AboutHoliday />
      <AboutMission />
      <WhatweOffer />
      <LetsConnect />
    </>
  );
}
