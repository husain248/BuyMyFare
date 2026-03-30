'use client';

import Link from 'next/link';

export default function HeroBanner() {
  return (
    <div className="relative z-1 overflow-hidden 2xxl:h-250 xl:h-230 lg:h-162.5 sm:h-150 h-130 after:absolute after:inset-0 md:after:bg-gradient-to-b after:bg-gradient-to-t after:from-black/70 after:to-transparent">
        <div className="relative z-1 h-full">
            <div className="h-full xl:pt-0 lg:pt-7.5 sm:pt-37.75 pt-40">
                <div className="row items-end h-full">
                    <div className="md:w-2/3 w-full">
                        <div className="relative z-1 xl:p-20 lg:p-15 md:py-12.5 py-6 md:px-5 px-5 sm:pe-20 bottom-[50px] md:bottom-[250px] ">
                            <div className="mb-5">
                                <h1 className="flex items-center gap-3.5 cursor-pointer relative z-1">
                                    <span className="text-white font-main" style={{ textTransform: 'capitalize', fontSize: '32px' }}>your journey, perfectly planned</span>
                                </h1>
                            </div>
                            <h1 className="3xl:text-15xl 2xxl:text-10xl xl:text-10xl md:text-8xl sm:text-6xl text-4xxl font-bold mb-2.5 text-white leading-none! uppercase wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Travel Packages</h1>
                            <p className="text-white">Experience stress-free travel with all-inclusive packages covering flights, hotels, transfers, and more. Every detail tailored for your dream getaway.</p>
                            <Link href="/" className="btn btn-primary btn-hover light mt-5" data-hover-init="true">
                                <span>Plan Your Dream Trip</span>
                                <span className="gsap-clone" style={{ '--clone-left': '35px', '--clone-top': '14px' } as React.CSSProperties}>Plan Your Dream Trip</span>
                            </Link>
                        </div>
                        <div className="clipped"></div>
                        <svg width="0" height="0" aria-hidden="true" focusable="false">
                            <defs>
                                <clipPath id="svgTextPath" clipPathUnits="userSpaceOnUse">
                                <text
                                    className="text-[23vw]"
                                    x="0"
                                    y="320"
                                    fontFamily="Roboto Condensed, sans-serif"
                                    fontWeight="900"
                                >
                                </text>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <img src="https://max-themes.net/demos/altair/upload/1600x1200-1.jpg" alt="Hero Banner" width="1920" height="1000" className="absolute inset-0 w-full h-full object-cover max-sm:object-[70%]" fetchPriority="high" decoding="async" />
        <img src="/assets/images/hero-banner/banner-01.webp" alt="Hero Banner" width="1920" height="1000" className="absolute top-0 right-0 size-full z-1 pointer-events-none object-cover object-center max-md:hidden" fetchPriority="high" decoding="async" />
        <div className="absolute right-7.5 bottom-20 flex flex-col gap-2.5 items-center z-1 max-sm:hidden">
            <span className="block text-white text-2sm font-medium uppercase [writing-mode:tb]">Scroll Down</span>
            <button type="button" aria-label="Scroll to next section" className="scroll-down-arrow size-12 flex items-center justify-center rounded-full bg-white text-black cursor-pointer" data-scroll-target="#nextSection">
                <svg width="14" height="23" viewBox="0 0 14 23" fill="none">
                    <path d="M6.83 0.75V21.32" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M12.67 15.49L6.83 21.33L1 15.49" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
        </div>
    </div>
  );
}
