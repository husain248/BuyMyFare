import type { MetadataRoute } from "next";
import blogsData from "../data/blogs.json";
import { tourPackages } from "../data/tour-packages";

const siteUrl = "https://buy-my-fare.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about-us",
    "/contact",
    "/blogs",
    "/tour-packages",
    "/flight-booking",
    "/flight-booking-new",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
    lastModified: new Date(),
  }));

  const blogEntries: MetadataRoute.Sitemap = (blogsData as { slug: string }[]).map(
    (blog) => ({
      url: `${siteUrl}/blogs/${blog.slug}`,
      changeFrequency: "weekly",
      priority: 0.7,
      lastModified: new Date(),
    }),
  );

  const packageEntries: MetadataRoute.Sitemap = tourPackages.map((tour) => ({
    url: `${siteUrl}/tour-packages/${tour.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...blogEntries, ...packageEntries];
}
