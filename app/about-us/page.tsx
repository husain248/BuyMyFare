import Blog from '../../components/home/Blog';
import AboutBanner from '../../components/about/AboutBanner';
import AboutWork from '../../components/about/AboutWork';
import AboutHoliday from '../../components/about/AboutHoliday';
import AboutMission from '../../components/about/AboutMission';
import TravelInsurance from '../../components/home/TravelInsurance';

export default function AboutUsPage() {
  return (
    <>
      <AboutBanner />
      <TravelInsurance />
      <AboutWork />
      <AboutHoliday />
      <AboutMission />
      <Blog />
    </>
  );
}
