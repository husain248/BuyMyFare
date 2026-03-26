import HeroBanner from "../components/home/HeroBanner";
import TravelInsurance from "../components/home/TravelInsurance";
import ExploreWorld from "../components/home/ExploreWorld";
import Destinations from "../components/home/Destinations";
import OurServices from "../components/home/OurServices";
import TourPackages from "../components/home/TourPackages";
import TicketBookings from "../components/home/TicketBookings";
// import EnjoyHoliday from "../components/home/EnjoyHoliday";
import Feedback from "../components/home/Feedback";
import Blog from "../components/home/Blog";
import ContactSection from "../components/home/ContactSection";
import GallerySection from "../components/home/GallerySection";

export default function Home() {
  return (
    <>
      <div id="loading-area" className="pxl-loader style-3 hidden">
        <div className="loading-dot-spinner">
          <div className="loading-dot"></div>
        </div>
      </div>

      <HeroBanner />
      <TourPackages />
      {/* <EnjoyHoliday /> */}
      <ExploreWorld />
      <OurServices />
      <TravelInsurance />
      <TicketBookings />
      <Destinations />
      <Blog />
      <Feedback />
      <ContactSection />
      <GallerySection />
    </>
  );
}
