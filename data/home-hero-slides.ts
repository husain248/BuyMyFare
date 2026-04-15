export type HeroSlide = {
  image: string;
  alt: string;
  smallHeading: string;
  mainHeading: string;
  description: string;
  buttonLabel: string;
};

export const heroSlides: HeroSlide[] = [
  {
    image: "/assets/images/hero-banner/banner-1.webp",
    alt: "Travel Packages",
    smallHeading: "your journey, perfectly planned",
    mainHeading: "Travel Packages",
    description:
      "Experience stress-free travel with all-inclusive packages covering flights, hotels, transfers, and more. Every detail tailored for your dream getaway.",
    buttonLabel: "Plan Your Dream Trip",
  },
  {
    image: "/assets/images/hero-banner/banner-2.png",
    alt: "effortless flight booking",
    smallHeading: "effortless flight booking",
    mainHeading: "International Flights",
    description:
      "Fly to your favorite destinations with our reliable international flight booking service, offering competitive prices and flexible options..",
    buttonLabel: "Book Your Flight Now ",
  },
  {
    image: "/assets/images/hero-banner/banner-3.png",
    alt: "peace of mind",
    smallHeading: "peace of mind",
    mainHeading: "Travel Insurance",
    description:
      "Protect your trips with comprehensive travel insurance. From unexpected delays to medical emergencies, we’ve got you covered.",
    buttonLabel: "Get Insured Today ",
  },
];

