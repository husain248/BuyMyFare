import React from "react";
import Link from "next/link";

const AboutWorkSidebar: React.FC = () => {
  return (
    <div className="sm:mb-11.25 my-5 bg-[#FAFAFA] p-8 rounded-2xl relative overflow-hidden group">
      <div className="relative z-1">
        <h4 className="text-xl uppercase mb-4 font-semibold text-secondary">
          Why We Do What We Do
        </h4>
        <p className="text-secondary/70 text-sm leading-relaxed mb-6">
          Buy My Fare isn’t just a business—it’s a passion project built on the
          belief that travel should be accessible, responsible, and deeply
          personal.
        </p>
        <Link
          href="/about-us"
          className="btn btn-primary btn-hover py-3 px-6 text-sm"
        >
          <span>Learn More</span>
        </Link>
      </div>
      <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default AboutWorkSidebar;
