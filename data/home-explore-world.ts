export const exploreWorldBgImages = [
  "/assets/images/destinations/large/img1.png",
  "/assets/images/destinations/large/img2.png",
] as const;

export type ExploreWorldFeature = {
  img: string;
  icon: string;
  title: string;
  desc: string;
};

export const exploreWorldFeatures: ExploreWorldFeature[] = [
  {
    img: "/assets/images/destinations/img1.png",
    icon: "/assets/images/icons/world-icon-1.svg",
    title: "Tailored Itineraries",
    desc: "We design journeys that reflect your interests, preferences, and pace.",
  },
  {
    img: "/assets/images/destinations/img2.png",
    icon: "/assets/images/icons/world-icon-2.svg",
    title: "Exclusive Deals",
    desc: "Our partnerships with top airlines, hotels, and tour operators mean you get the best value without compromising quality.",
  },
  {
    img: "/assets/images/destinations/img3.png",
    icon: "/assets/images/icons/world-icon-3.svg",
    title: "Round-the-Clock Support",
    desc: "Your peace of mind is our priority—before, during, and after your trip.",
  },
  {
    img: "/assets/images/destinations/img4.png",
    icon: "/assets/images/icons/world-icon-4.svg",
    title: "Hassle-Free Service",
    desc: "From planning your itinerary to ensuring a smooth journey, we handle the details so you can focus on enjoying your trip.",
  },
];

