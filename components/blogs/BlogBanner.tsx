import Image from "next/image";
import React from "react";

interface BlogBannerProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

const BlogBanner: React.FC<BlogBannerProps> = ({
  title,
  subtitle = "Latest News & Articles",
  bgImage = "/assets/images/banner/blog-banner.jpg",
}) => {
  return (
    <div className="2xxl:min-h-100 lg:min-h-100 sm:min-h-100 min-h-75 text-center relative overflow-hidden before:absolute before:inset-0 before:bg-black/40 before:z-1">
      <Image
        src={bgImage}
        alt="Banner"
        fill
        priority
        className="object-cover"
      />
      <div className="container relative z-10 table h-full mx-auto">
        <div className="text-center py-15 table-cell align-middle 2xxl:h-125 lg:h-125 sm:h-100 h-75">
          <span
            className="text-white font-main"
            style={{
              textTransform: "capitalize",
              fontSize: "32px",
              color: "#ffffff",
            }}
          >
            {subtitle}
          </span>
          <h1 className="xl:text-7xl sm:text-5xl text-2xl mb-2.5 text-white">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
