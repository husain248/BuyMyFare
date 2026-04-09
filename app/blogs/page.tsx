import BlogBanner from "../../components/blogs/BlogBanner";
import BlogGrid from "../../components/blogs/BlogGrid";
import blogsData from "../../data/blogs.json";

function Page() {
  return (
    <>
      <BlogBanner title="Blogs" />
      <BlogGrid blogs={blogsData} />
    </>
  );
}

export default Page;
