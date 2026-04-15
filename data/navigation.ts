export type NavRoute = {
  label: string;
  path: string;
};

export const navRoutes: NavRoute[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about-us" },
  { label: "Tour Packages", path: "/tour-packages" },
  { label: "Flight Booking", path: "/flight-booking" },
  // { label: "Testimonials", path: "/testimonials" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" },
];

