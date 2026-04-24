import Image from "next/image";
import type { Metadata } from "next";
import blogsData from "../../../data/blogs.json";
import { notFound } from "next/navigation";
import BlogDetailsContent from "../../../components/blogs/BlogDetailsContent";
import BlogBanner from "../../../components/blogs/BlogBanner";
import AboutWorkSidebar from "../../../components/blogs/AboutWorkSidebar";
import ContactFormSidebar from "../../../components/blogs/ContactFormSidebar";
import RecentBlogsSlider from "../../../components/blogs/RecentBlogsSlider";
import StickySidebar from "../../../components/common/StickySidebar";

interface Blog {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
  slug: string;
  content: string;
  tags: string[];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = (blogsData as Blog[]).find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog article could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: blog.title,
    description: blog.content,
    keywords: blog.tags,
    alternates: {
      canonical: `/blogs/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.content,
      type: "article",
      url: `/blogs/${blog.slug}`,
      images: [
        {
          url: blog.image,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.content,
      images: [blog.image],
    },
  };
}

export function generateStaticParams() {
  return (blogsData as Blog[]).map((blog) => ({ slug: blog.slug }));
}

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = (blogsData as Blog[]).find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <div className="page-content">
        <BlogBanner
          title={blog.title}
          subtitle={`${blog.date} / By ${blog.author}`}
          bgImage={blog.image}
          compactTitle
        />

        <section className="xl:py-25 py-15 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              {/* Main Content Area */}
              <div className="xl:w-3/4 w-full px-4 mb-10 xl:mb-0">
                <div className="container mx-auto px-4">
                  <div className="relative w-full h-100 overflow-hidden rounded-2xl">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <BlogDetailsContent blog={blog} />
              </div>

              {/* Sidebar */}
              <div className="xl:w-1/4 w-full px-4">
                <StickySidebar>
                  <aside>
                    <ContactFormSidebar />
                    <AboutWorkSidebar />
                  </aside>
                </StickySidebar>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Slider Section */}
        <RecentBlogsSlider currentSlug={slug} />
      </div>
    </>
  );
}

export default Page;
