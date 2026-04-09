export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Ticket Booking", href: "/ticket-booking" },
    { label: "Tours Packages", href: "/tour-packages" },
    { label: "Travel Insurance", href: "/travel-insurance" },
  ],
} as const;

export type BusinessHour = { day: string; hours: string };

export const businessHours: BusinessHour[] = [
  { day: "Monday-Friday:", hours: "09:00 AM – 09:00 PM" },
  { day: "Saturday:", hours: "09:00 AM – 09:00 PM" },
  { day: "Sunday:", hours: "09:00 AM – 09:00 PM" },
];

export type SocialLink = { icon: string; label: string; href: string };

export const socialLinks: SocialLink[] = [
  { icon: "fa-facebook-f", label: "Facebook", href: "https://www.facebook.com/buymyfare" },
  { icon: "fa-instagram", label: "Instagram", href: "https://www.instagram.com/buymyfare/" },
];

