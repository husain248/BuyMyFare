// "use client";

// import { useState } from "react";

// export default function ThailandTour() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const images = [
//     "/images/thailand1.jpg",
//     "/images/thailand2.jpg",
//     "/images/thailand3.jpg",
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       {/* Title */}
//       <h1 className="text-2xl font-semibold mb-4">
//         Go Thailand! All-in-One Value Pack Thailand
//       </h1>

//       {/* Image Slider */}
//       <div className="relative rounded-xl overflow-hidden">
//         <img
//           src={images[currentSlide]}
//           alt="Thailand"
//           className="w-full h-[400px] object-cover"
//         />

//         {/* Left Button */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
//         >
//           ‹
//         </button>

//         {/* Right Button */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
//         >
//           ›
//         </button>
//       </div>

//       {/* Overview Section */}
//       <div className="mt-6">
//         <h2 className="text-lg font-semibold mb-4">Overview</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
//           <div className="flex items-center gap-2">
//             ⏱ Duration: 10 days
//           </div>

//           <div className="flex items-center gap-2">
//             👥 Group size: 10 people
//           </div>

//           <div className="flex items-center gap-2">
//             📦 Tour Type: Group tour
//           </div>

//           <div className="flex items-center gap-2">
//             🌐 Live guide: English, Francais
//           </div>

//           <div className="flex items-center gap-2">
//             🎯 Age range: 18 to 45
//           </div>

//           <div className="flex items-center gap-2">
//             📱 Mobile ticket: Yes
//           </div>
//         </div>

//         {/* Description */}
//         <p className="text-sm text-gray-600 mt-4 leading-relaxed">
//           Leave your guidebooks at home and dive into the local cultures that make each destination so special.
//           We’ll connect you with our exclusive experiences. Each trip is carefully crafted to let enjoy your vacation.
//         </p>

//         <p className="text-sm text-gray-600 mt-3 leading-relaxed">
//           A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
//           I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
//           <span className="text-black font-medium cursor-pointer"> Read more</span>
//         </p>
//       </div>

//       {/* Divider */}
//       <div className="border-t my-6"></div>

//       {/* Highlights */}
//       <div>
//         <h2 className="text-lg font-semibold mb-4">Highlights</h2>

//         <ul className="space-y-3 text-sm text-gray-700">
//           <li className="flex items-start gap-2">
//             <span className="text-orange-500">✔</span>
//             Relax at the beach and cycle through local villages.
//           </li>

//           <li className="flex items-start gap-2">
//             <span className="text-orange-500">✔</span>
//             Search for the wildlife in Udawalawe National Park.
//           </li>

//           <li className="flex items-start gap-2">
//             <span className="text-orange-500">✔</span>
//             Dip in the pool in Sigiriya and climb the Sigiriya Rock.
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tourPackages } from "../../../data/tour-packages";

const packages = tourPackages;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = packages.find((pkg) => pkg.slug === slug);

  if (!tour) {
    return {
      title: "Tour Package Not Found",
      description: "The requested tour package could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${tour.title} Tour Package`,
    description: tour.description,
    alternates: {
      canonical: `/tour-packages/${tour.slug}`,
    },
    openGraph: {
      title: `${tour.title} Tour Package`,
      description: tour.description,
      type: "website",
      url: `/tour-packages/${tour.slug}`,
      images: [
        {
          url: tour.images[0] || "/assets/images/banner/bnr2.png",
          alt: tour.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tour.title} Tour Package`,
      description: tour.description,
      images: [tour.images[0] || "/assets/images/banner/bnr2.png"],
    },
  };
}

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export default async function TourDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const tour = packages.find((p) => p.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <>
      <div className="2xxl:min-h-100 lg:min-h-100 sm:min-h-100 min-h-75 text-center relative overflow-hidden before:absolute before:inset-0 before:bg-black/20 before:z-1">
        <Image
          src="/assets/images/banner/bnr2.png"
          alt="Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="container relative z-10 table h-full">
          <div className="text-center py-15 table-cell align-middle 2xxl:h-125 lg:h-125 sm:h-100 h-75">
            <span
              className="text-white font-main"
              style={{
                textTransform: "capitalize",
                fontSize: "32px",
                color: "#ffffff",
              }}
            >
              Hassle-Free Reservations
            </span>
            <h1 className="2xxl:text-11xxl xl:text-10xl sm:text-8xl text-5xl mb-2.5 text-white">
              Tour Details
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-screen py-20">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Title */}
          <h1 className="text-4xl font-semibold mb-4 uppercase">{tour.title}</h1>

          {/* Single Image */}
          <div className="rounded-xl overflow-hidden relative aspect-video md:aspect-[21/9]">
            <div className="absolute z-10 bg-[#06a8f9] text-white py-4 px-4 bottom-4 left-4 rounded-lg text-2xl font-bold">
              <h1 className="text-white">Starting from {tour.price}</h1>
            </div>
            <Image
              src={tour.images[0]}
              alt={tour.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Overview Section */}
          <div className="mt-6">
            <p className="xl:text-lg sm:text-lg text-sm font-normal lg:mb-5 sm:mb-5 mb-2.5">
              {tour.description}
            </p>
            <p className="xl:text-lg sm:text-lg text-sm font-normal lg:mb-5 sm:mb-5 mb-2.5">
              {tour.description2}
            </p>
            <p className="xl:text-lg sm:text-lg text-sm font-normal lg:mb-5 sm:mb-5 mb-2.5">
              {tour.description3}
            </p>
            <h2 className="text-2xl font-semibold mb-10 uppercase">Inclusions </h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full">
              {tour.inclusions.map((inclusion, index) => (
                <div
                  key={index}
                  className="xl:text-xl text-sm font-medium flex items-center gap-5 mb-10"
                >
                  <span className="w-[50px] h-[50px] flex items-center rounded-full bg-[#06a8f9] justify-center shrink-0">
                    <Image
                      src={inclusion.icon}
                      alt={inclusion.title}
                      width={24}
                      height={24}
                    />
                  </span>
                  <div>
                    <h4 className="mb-2 uppercase font-bold text-lg">{inclusion.title}</h4>
                    <p className="text-sm text-gray-600">{inclusion.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
