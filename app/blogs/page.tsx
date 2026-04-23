import BlogBanner from "../../components/blogs/BlogBanner";
import BlogGrid from "../../components/blogs/BlogGrid";
import blogsData from "../../data/blogs.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Blogs",
  description:
    "Read BuyMyFare travel blogs for flight booking tips, destination ideas, and practical advice for international trips.",
  alternates: {
    canonical: "/blogs",
  },
};

function Page() {
  return (
    <>
      <BlogBanner title="Blogs" />
      <BlogGrid blogs={blogsData} />
    </>
  );
}

export default Page;
