"use client";
import Link from "next/link";
import React from "react";

function page() {
  const packages = [
    {
      slug: "dubai",
      img: "/assets/images/dubai-trip.png",
      location: "Dubai",
      title: "Dubai",
      description:
        "Discover the dazzling city of Dubai with our exclusive tour package! From the iconic Burj Khalifa to the luxurious Palm Jumeirah, immerse yourself in a blend of modern marvels and rich Arabian heritage. Enjoy world-class shopping, explore traditional markets like the Gold Souk, and unwind on pristine beaches. Take a thrilling desert safari, experience breathtaking views from the tallest building in the world, and indulge in Dubai’s vibrant nightlife. Whether you're seeking adventure, luxury, or cultural exploration, this package offers an unforgettable Dubai experience.",
      price: "$1200",
    },
    {
      slug: "dominican-republic",
      img: "/assets/images/Dominican-Republic.png",
      location: "Dominican Republic",
      title: "Dominican Republic",
      description:
        "The Dominican Republic, one of the Caribbean’s most popular beach destinations, is the ideal spot for your next tropical escape. Whether you’re seeking a family-friendly vacation or a romantic retreat, you’ll find a variety of all-inclusive resorts across the island to suit every travel style.\n\nRelax on the stunning white-sand beaches of Punta Cana, home to famous spots like Bavaro Beach and Saona Island. If you’re into water sports, Cabarete is a top destination for kitesurfing and kiteboarding. For golf lovers, La Romana boasts renowned courses, including the celebrity-favorite Pete Dye courses at Casa de Campo. For a dose of adventure, enjoy an ATV or ziplining excursion, or dive into the island’s rich history with a visit to Santo Domingo or the 19th-century architecture of Puerto Plata.",
      price: "$1035",
    },
    {
      slug: "mexico",
      img: "/assets/images/mexico-trip.png",
      location: "Mexico",
      title: "Mexico",
      description:
        "Mexico, nestled between the United States and Central America, offers a stunning variety of landscapes, from the rugged Pacific coastline to the pristine beaches of the Caribbean Sea. Whether you’re looking for a relaxing beach escape or an action-packed adventure, there are all-inclusive resorts in Mexico to suit every type of traveler.\n\nFor a traditional beach vacation, the Yucatan Peninsula on the Caribbean side is a perfect choice. Enjoy the sunny shores of the Riviera Maya, relax by the luxurious pools in Cancun’s Hotel Zone, or find tranquility on the secluded beaches of Isla Holbox, just off Cancun’s coast. While in the area, don’t miss the incredible Mayan ruins of Chichén Itzá and Tulum, where you can dive into the rich history and culture of the region.",
      price: "$965",
    },
    {
      slug: "costa-rica",
      img: "/assets/images/Costa-Rica-trip.png",
      location: "Costa Rica",
      title: "Costa Rica",
      description:
        "Costa Rica, a stunning gem in the heart of Central America, lies between the Pacific Ocean and the Caribbean Sea. Whether you’re after a peaceful retreat or an adventure-filled vacation, this vibrant destination offers diverse landscapes and a variety of all-inclusive resorts to suit all types of travelers.",
      price: "$1345",
    },
    {
      slug: "jamaica",
      img: "/assets/images/Jamaica-trip.png",
      location: "Jamaica",
      title: "Jamaica",
      description:
        "Nestled between lush mountains and stunning beaches, Jamaica boasts a vibrant island culture and some of the Caribbean’s most scenic coastlines. Whether you’re seeking an all-inclusive resort or an adults-only retreat, there’s a wide variety of accommodations to suit all types of travelers.",
      price: "$1175",
    },
    {
      slug: "cuba",
      img: "/assets/images/cuba-trip.png",
      location: "Cuba",
      title: "Cuba",
      description:
        "With an average of 330 sunny days per year and over 400 kilometers of unspoiled coastline, Cuba is an ideal destination for a peaceful beach escape. Relax on the famous white sands of Varadero Beach, dive into the crystal-clear waters of Playa Pilar’s coral reefs, or take a stroll along the tranquil shores of Playa Paraiso.",
      price: "$625",
    },
    {
      slug: "miami",
      img: "/assets/images/miami-trip.png",
      location: "Miami",
      title: "Miami",
      description:
        "Miami is one of the top vacation spots in the world. This dynamic city offers a perfect blend of adventure and relaxation, catering to all types of travelers.\n\nImmerse yourself in the city’s Cuban culture in the vibrant Little Havana neighborhood, where you can wander down the lively Calle Ocho, savoring fresh coffee and mouthwatering Cubano sandwiches. Explore the iconic Art Deco District to admire its colorful, historic architecture and take a drive along Ocean Drive, where the legendary Gianni Versace once lived.\n\nThe chic South Beach area is a hotspot for celebrities, featuring top-notch restaurants by celebrity chefs, lively nightlife, and much more. With a variety of world-class accommodations to choose from, ranging from peaceful beachfront resorts to trendy city hotels, there’s something for every style. And of course, you’ll find plenty of spots to relax on the sand and bask in the sun.",
      price: "$2499",
    },
    {
      slug: "singapore-malaysia",
      img: "/assets/images/singapore-trip.png",
      location: "Singapore & Malaysia",
      title: "Singapore & Malaysia",
      description:
        "Start your adventure right at the world-renowned Jewel Changi Airport, often hailed as the best airport on the planet! With its vast 10-story complex, you’ll find everything from luxury shops to an IMAX theater, a thrilling indoor theme park, and the awe-inspiring tallest indoor waterfall in the world.\n\nSet off on an exciting journey through the colorful landscapes of Malaysia and Singapore, where modern wonders and rich cultural heritage come together effortlessly! Start by exploring the lively streets of Kuala Lumpur, with its iconic landmarks, before heading to the historic city of Malacca, steeped in fascinating stories from the past. Then, cross over to Singapore, a stunning city-state where cutting-edge skyscrapers rise alongside tranquil green spaces, offering the perfect fusion of futuristic style and natural beauty.",
      price: "$2399",
    },
  ];

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
            {packages.map((pkg, index) => (
              <div key={index} className="xl:col-span-6 col-span-12">
                <div className="relative z-1 p-2.5 h-full duration-200 bg-[#F4F4F4] rounded-2xl md:flex group">
                  <div className="rounded-xxl xl:w-73.75 md:w-62.5 w-full xl:min-w-73.75 md:min-w-62.5 min-w-full md:h-full sm:h-62.5 h-50 relative overflow-hidden before:absolute before:top-0 before:-left-[75%] before:z-0 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                    <img
                      src={pkg.img}
                      alt=""
                      className="size-full object-cover"
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
