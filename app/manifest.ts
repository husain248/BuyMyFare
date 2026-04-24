import type { MetadataRoute } from "next";
import { siteName, siteUrl } from "../lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: siteName,
    description:
      "BuyMyFare offers flight booking support, tour packages, and practical travel planning help.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: `${siteUrl}/assets/images/favicon.png`,
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
