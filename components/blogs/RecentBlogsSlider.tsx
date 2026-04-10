"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import blogsData from "../../data/blogs.json";

const RecentBlogsSlider: React.FC<{ currentSlug: string }> = ({
  currentSlug,
}) => {
  const swiperRef = useRef<HTMLDivElement>(null);

  // Filter out the current blog and take the latest ones
  const recentBlogs = blogsData.filter((b) => b.slug !== currentSlug).slice(0, 6);

  useEffect(() => {
    let swiperInstance: any = null;
    let intervalId: any = null;

    const initSwiper = () => {
      if (
        typeof window !== "undefined" &&
        (window as any).Swiper &&
        swiperRef.current &&
        !swiperInstance
      ) {
        swiperInstance = new (window as any).Swiper(swiperRef.current, {
          speed: 1500,
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 3000,
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        });

        if (intervalId) {
          clearInterval(intervalId);
        }
      }
    };

    // Try immediately
    initSwiper();

    // If not ready, poll for Swiper
    if (!(window as any).Swiper) {
      intervalId = setInterval(initSwiper, 100);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (swiperInstance && typeof swiperInstance.destroy === "function") {
        swiperInstance.destroy(true, true);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold uppercase headline mb-2">
            Related Posts
          </h2>
          <p className="text-secondary/60">
            Discover more adventures from our blog
          </p>
        </div>

        <div className="swiper recent-blog-swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            {recentBlogs.map((blog) => (
              <div className="swiper-slide" key={blog.id}>
                <div className="group blog-card-small bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={450}
                      height={300}
                      className="w-full h-full object-cover duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-secondary text-xs font-bold px-3 py-1 rounded-full z-1">
                      {blog.date}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3 line-clamp-2 hover:text-primary transition-colors">
                      <Link href={`/blogs/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h4>
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="text-primary font-medium text-sm flex items-center group/link"
                    >
                      Read More
                      <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
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
};

export default RecentBlogsSlider;
