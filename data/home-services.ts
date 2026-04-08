export type HomeService = {
  title: string;
  tag: string;
  image: string;
  desc: string;
  btnText: string;
  link: string;
};

export const homeServices: HomeService[] = [
  {
    title: "TOUR PACKAGES",
    tag: "Packages",
    image: "/assets/images/tour-packages.png",
    desc: "Wildlife thrives in the silence and stillness of Namibia's surreal desert landscape.",
    btnText: "See All Packages",
    link: "/",
  },
  {
    title: "TICKET BOOKING",
    tag: "Booking",
    image: "/assets/images/ticket-booking.png",
    desc: "Wildlife thrives in the silence and stillness of Namibia's surreal desert landscape.",
    btnText: "Book Now",
    link: "/",
  },
  {
    title: "TRAVEL INSURANCE",
    tag: "Insurance",
    image: "/assets/images/travel-insurence.png",
    desc: "Wildlife thrives in the silence and stillness of Namibia's surreal desert landscape.",
    btnText: "Get Insurance",
    link: "/",
  },
];

