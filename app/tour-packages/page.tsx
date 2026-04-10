"use client";
import Link from "next/link";
import Image from "next/image";
import { tourPackages } from "../../data/tour-packages";

function page() {
  return (
    <>
      <div
        className="2xxl:min-h-100 lg:min-h-100 sm:min-h-100 min-h-75 text-center relative bg-no-repeat bg-center bg-cover before:absolute before:inset-0 before:bg-black/20"
        style={{ backgroundImage: "url('/assets/images/banner/bnr2.png')" }}
      >
        <div className="container relative z-1 table h-full">
          <div className="text-center py-15 table-cell align-middle 2xxl:h-125 lg:h-125 sm:h-100 h-75">
            <span
              className="text-white font-main"
              style={{
                textTransform: "capitalize",
                fontSize: "32px",
                color: "#ffffff",
              }}
            >
              Customized Vacation Deals
            </span>
            <h1 className="2xxl:text-11xxl xl:text-10xl sm:text-8xl text-5xl mb-2.5 text-white">
              Tour Packages
            </h1>
          </div>
        </div>
      </div>
      <section className="lg:pt-25 lg:pb-45 sm:py-25 py-18 overflow-hidden">
        <div className="container-left max-w-[1330px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase lg:mb-4 headline">
              Popular Packages
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-8">
            {tourPackages.map((pkg, index) => (
              <div key={index} className="xl:col-span-6 col-span-12">
                <div className="relative z-1 p-2.5 h-full duration-200 bg-[#F4F4F4] rounded-2xl md:flex group">
                  <div className="rounded-xxl xl:w-73.75 md:w-62.5 w-full xl:min-w-73.75 md:min-w-62.5 min-w-full md:h-full sm:h-62.5 h-50 relative overflow-hidden before:absolute before:inset-0 before:z-1 before:block before:w-1/2 before:h-full before:-left-[75%] before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                    <Image
                      src={pkg.img}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110 relative z-0"
                    />
                    <span className="absolute top-5 left-5 rounded-3xl text-xs font-medium px-2.5 py-1.5 bg-green text-secondary">
                      {pkg.location}
                    </span>
                  </div>
                  <div className="sm:p-7 sm:pe-5 sm:pb-5 p-4 relative flex flex-col w-full">
                    <div className="mb-2.5 flex-1">
                      <h3 className="xl:text-2xl text-xl uppercase mb-2.5">
                        <a
                          href={`/tour-packages/${pkg.slug}`}
                          className="link-hover"
                        >
                          {pkg.title}
                        </a>
                      </h3>
                      <p className="text-sm line-clamp-4 mb-5">
                        {pkg.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-2xxl flex flex-col items-start gap-1.5 font-semibold">
                        <small className="text-sm w-full">Starting from</small>{" "}
                        {pkg.price}
                      </h4>
                      {/* <a href="tour-packages.html" aria-label="View trip Packages" className="size-12.5 flex items-center justify-center rounded-full bg-primary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M12 5L19 12L12 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a> */}
                      <Link href={`/tour-packages/${pkg.slug}`}>
                        <div className="size-12.5 flex items-center justify-center rounded-full bg-primary cursor-pointer">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M12 5L19 12L12 19"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
