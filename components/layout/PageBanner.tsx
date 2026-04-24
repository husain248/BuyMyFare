import React from "react";
import { getOptimizedBackgroundImage } from "../../lib/optimizedBackgroundImage";

interface PageBannerProps {
  title: string;
  subtitle: string;
  bgImage: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  bgImage,
}) => {
  return (
    <div
      className="2xxl:min-h-100 lg:min-h-100 sm:min-h-100 min-h-75 text-center relative bg-no-repeat bg-center bg-cover before:absolute before:inset-0 before:bg-black/20"
      style={{ backgroundImage: getOptimizedBackgroundImage(bgImage) }}
    >
      <div className="container relative z-1 table h-full">
        <div className="text-center py-15 table-cell align-middle 2xxl:h-125 lg:h-125 sm:h-100 h-75">
          <span className="text-white font-main capitalize text-[24px] md:text-[32px]">
            {subtitle}
          </span>
          <h1 className="2xxl:text-11xxl xl:text-10xl sm:text-8xl text-5xl mb-2.5 text-white">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
