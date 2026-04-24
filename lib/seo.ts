import type { Metadata } from "next";

export const siteName = "BuyMyFare";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://buy-my-fare.vercel.app";
export const defaultOgImage = "/assets/images/banner/bnr1.png";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function truncateDescription(
  value: string | undefined,
  maxLength = 160,
) {
  const normalized = (value || "").replace(/\s+/g, " ").trim();

  if (!normalized) {
    return "";
  }

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength - 1).trimEnd()}…`;
}

export function absoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  keywords,
  type = "website",
}: MetadataInput): Metadata {
  const safeDescription = truncateDescription(description);

  return {
    title,
    description: safeDescription,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url: path,
      siteName,
      title,
      description: safeDescription,
      images: [
        {
          url: image,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: safeDescription,
      images: [image],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: siteName,
  url: siteUrl,
  logo: absoluteUrl("/assets/images/Buy-My-Fare-Logo-L-1024x355.png"),
  image: absoluteUrl(defaultOgImage),
  email: "travel@buymyfare.ca",
  telephone: "+1-780-600-1550",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10431 Cityscape Drive NE",
    addressLocality: "Calgary",
    addressRegion: "AB",
    postalCode: "T3N 1N5",
    addressCountry: "CA",
  },
  sameAs: [
    "https://www.facebook.com/buymyfare",
    "https://www.instagram.com/buymyfare/",
  ],
};
