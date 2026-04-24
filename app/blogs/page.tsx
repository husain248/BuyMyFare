import BlogBanner from "../../components/blogs/BlogBanner";
import BlogGrid from "../../components/blogs/BlogGrid";
import blogsData from "../../data/blogs.json";
import type { Metadata } from "next";
import { buildPageMetadata } from "../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Travel Blogs",
  description:
    "Read BuyMyFare travel blogs for flight booking tips, destination ideas, and practical advice for international trips.",
  path: "/blogs",
  image: "/assets/images/banner/blog-banner.jpg",
});

function Page() {
  return (
    <>
      <BlogBanner title="Blogs" />
      <BlogGrid blogs={blogsData} />
    </>
  );
}

export default Page;
