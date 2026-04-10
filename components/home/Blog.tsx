"use client";

import Image from "next/image";
import Link from "next/link";
import blogsData from "../../data/blogs.json";
import { Calendar, MessageCircle } from "lucide-react";

export default function Blog() {
  const blogs = blogsData.slice(0, 3);

  return (
    <section className="2xl:py-40 lg:py-30 sm:py-25 py-18 relative z-1 bg-light">
      <div className="container relative z-1 max-w-7xl">
        <div className="lg:mb-10 sm:mb-5 mb-2.5">
          <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase headline">
            From Our Blog
          </h2>
        </div>
        <div className="row">
          <div className="lg:w-1/3 w-full">
            <div className="mb-10 relative after:absolute after:top-full after:right-[20%] after:w-px xl:after:h-100 after:h-60 after:bg-black/50 max-lg:after:hidden">
              <p className="xl:text-xl sm:text-lg text-sm font-normal lg:mb-10 sm:mb-5 mb-2.5">
                Explore insightful articles, expert tips, and the latest trends
                to help you grow your business and stay ahead in your industry.
              </p>
              <span className="absolute lg:top-40 top-0 left-5 flex flex-col items-center justify-center xl:size-49 size-40 z-1 -rotate-20 max-sm:hidden">
                <span className="text-secondary font-title font-medium xl:text-2sm text-sm">
                  Save Big
                </span>
                <span className="text-secondary font-title font-semibold xl:text-xl text-base">
                  Upto{" "}
                </span>
                <span className="text-secondary font-title font-semibold xl:text-3xxl text-2xxl">
                  70% Off
                </span>
                <Image
                  src="/assets/images/star.png"
                  alt="star"
                  width={200}
                  height={200}
                  className="absolute -z-1 animate-rotate xl:size-49 size-40"
                  style={{ width: "auto", height: "auto" }}
                />
              </span>
            </div>
          </div>
          <div className="lg:w-2/3 w-full">
            {blogs.map((blog) => (
              <div
                className="relative z-1 duration-200 md:flex group mb-5 bg-white rounded-xxl overflow-hidden"
                key={blog.id}
              >
                <div className="rounded-xxl xl:w-73.75 md:w-62.5 w-full xl:min-w-73.75 md:min-w-62.5 min-w-full md:h-auto sm:h-62.5 h-50 relative overflow-hidden before:absolute before:top-0 before:-left-[75%] before:z-1 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="size-full object-cover"
                  />
                </div>
                <div className="md:ps-7.5 p-2.5 py-5 relative flex flex-col w-full">
                  <div className="mb-2.5 flex-1">
                    <span className="rounded-2lg text-sm font-normal px-2.5 py-1.25 bg-[#EBEBEB] text-secondary inline-block mb-3">
                      {blog.tags[0] || "Travel"}
                    </span>
                    <h3 className="xl:text-3xl text-xl font-medium mb-2.5 uppercase hover:text-primary transition-colors">
                      <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2.5">

                      <ul className="flex flex-wrap items-center gap-x-2.5">
                        <li className="text-sm md:text-base text-black/40 flex items-center gap-1">
                          <MessageCircle size={20} />
                          {blog.comments}
                        </li>
                        <li className="text-sm md:text-base text-black/40 hidden sm:flex items-center gap-1">
                          |
                          <Calendar size={20} />
                          {blog.date}
                        </li>
                      </ul>
                    </div>
                    <Link
                      href={`/blogs/${blog.slug}`}
                      aria-label="Read blog post"
                      className="size-12.5 flex items-center justify-center rounded-full bg-primary hover:bg-secondary transition-colors group/btn"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                      >
                        <path
                          d="M7 17L17 7"
                          className="group-hover/btn:stroke-white stroke-black transition-colors"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          className="group-hover/btn:stroke-white stroke-black transition-colors"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

