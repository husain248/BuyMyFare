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

"use client";

import { useParams } from "next/navigation";

const packages = [
  {
    slug: "dubai",
    title: "Dubai",
    price: "$1200",
    description:
      " Discover the dazzling city of Dubai with our exclusive tour package! From the iconic Burj Khalifa to the luxurious Palm Jumeirah, immerse yourself in a blend of modern marvels and rich Arabian heritage. Enjoy world-class shopping, explore traditional markets like the Gold Souk, and unwind on pristine beaches. Take a thrilling desert safari, experience breathtaking views from the tallest building in the world, and indulge in Dubai’s vibrant nightlife. Whether you're seeking adventure, luxury, or cultural exploration, this package offers an unforgettable Dubai experience. ",
    images: ["/assets/images/dubai-trip.png"],

    inclusions: [
      {
        icon: "/assets/images/inclusions/accommodation-icon.svg",
        title: "4 Nights Accommodation",
        description: "in a 4-star hotel (with breakfast)",
      },
      {
        icon: "/assets/images/inclusions/ticket-icon.svg",
        title: " Burj Khalifa Ticket ",
        description: "  (At the Top, 124th & 125th Floors)  ",
      },
      {
        icon: "/assets/images/inclusions/desert-icon.svg",
        title: "Desert Safari",
        description: " with dune bashing, camel ride, and BBQ dinnerevents. ",
      },
      {
        icon: "/assets/images/inclusions/city-icon.svg",
        title: "Dubai City Tour",
        description:
          " including visits to Burj Al Arab, Palm Jumeirah, Dubai Marina, and Dubai Creek ",
      },
      {
        icon: "/assets/images/inclusions/mall-icon.svg",
        title: " Dubai Mall & Fountain Show ",
        description:
          " Shop, dine, and enjoy the dazzling fountain show by the Burj Khalifa. ",
      },
      {
        icon: "/assets/images/inclusions/cruise-icon.svg",
        title: "Dhow Cruise",
        description: " on Dubai Creek with dinner ",
      },
      {
        icon: "/assets/images/inclusions/transfers-icon.svg",
        title: " Airport Transfers ",
        description: "  (arrival and departure) ",
      },
    ],
  },

  {
    slug: "dominican-republic",
    title: "Dominican Republic",
    price: "$1035",
    description:
      "The Dominican Republic, one of the Caribbean’s most popular beach destinations, is the ideal spot for your next tropical escape. Whether you’re seeking a family-friendly vacation or a romantic retreat, you’ll find a variety of all-inclusive resorts across the island to suit every travel style.",
    description2:
      "Relax on the stunning white-sand beaches of Punta Cana, home to famous spots like Bavaro Beach and Saona Island. If you’re into water sports, Cabarete is a top destination for kitesurfing and kiteboarding. For golf lovers, La Romana boasts renowned courses, including the celebrity-favorite Pete Dye courses at Casa de Campo. For a dose of adventure, enjoy an ATV or ziplining excursion, or dive into the island’s rich history with a visit to Santo Domingo or the 19th-century architecture of Puerto Plata.",
    images: ["/assets/images/Dominican-Republic.png"],

    inclusions: [
      {
        icon: "/assets/images/inclusions/flight-icon.svg",
        title: "Flights",
        description:
          " Round-trip airfare from your departure city to your destination. ",
      },
      {
        icon: "/assets/images/inclusions/accommodation-icon.svg",
        title: "Accommodation",
        description:
          " Stay at a selected all-inclusive resort for your chosen duration. ",
      },
      {
        icon: "/assets/images/inclusions/snacks-icon.svg",
        title: " Meals and Snacks ",
        description:
          "  All meals (buffet-style or à la carte dining), snacks, and sometimes beverages, including local alcoholic drinks. ",
      },
      {
        icon: "/assets/images/inclusions/entertainment-icon.svg",
        title: "Entertainment",
        description:
          " Access to on-site entertainment, including live shows, music, and themed events.",
      },
      {
        icon: "/assets/images/inclusions/activities-icon.svg",
        title: "Activities",
        description:
          " Participation in various activities like water sports, fitness classes, and recreational activities offered by the resort. ",
      },
      {
        icon: "/assets/images/inclusions/transfers-icon.svg",
        title: "Airport Transfers",
        description: " Airport transfers to and from the resort. ",
      },
      {
        icon: "/assets/images/inclusions/gratuities-icon.svg",
        title: "Gratuities",
        description: " Tips for staff are generally included in the price. ",
      },
      {
        icon: "/assets/images/inclusions/amenities-icon.svg",
        title: " Access to Resort Amenities ",
        description: " Tips for staff are generally included in the price. ",
      },
    ],
  },
  {
    slug: "mexico",
    title: "Mexico",
    price: "$965",
    description:
      "Mexico, nestled between the United States and Central America, offers a stunning variety of landscapes, from the rugged Pacific coastline to the pristine beaches of the Caribbean Sea. Whether you’re looking for a relaxing beach escape or an action-packed adventure, there are all-inclusive resorts in Mexico to suit every type of traveler.",
    description2:
      "For a traditional beach vacation, the Yucatan Peninsula on the Caribbean side is a perfect choice. Enjoy the sunny shores of the Riviera Maya, relax by the luxurious pools in Cancun’s Hotel Zone, or find tranquility on the secluded beaches of Isla Holbox, just off Cancun’s coast. While in the area, don’t miss the incredible Mayan ruins of Chichén Itzá and Tulum, where you can dive into the rich history and culture of the region.",
    description3:
      "On Mexico’s Pacific Coast, the adventure opportunities are endless. Ride an ATV through the dramatic desert landscapes of Los Cabos, explore the lush terrain of the Sierra Madre Mountains near Puerto Vallarta, or embark on a whale-watching excursion in Mazatlán. No matter what kind of vacation you’re seeking, Mexico offers something for every type of traveler",
    images: ["/assets/images/mexico-trip.png"],

    inclusions: [
      {
        icon: "/assets/images/inclusions/flight-icon.svg",
        title: "Flights",
        description:
          " Round-trip airfare from your departure city to your destination. ",
      },
      {
        icon: "/assets/images/inclusions/accommodation-icon.svg",
        title: "Accommodation",
        description:
          "  Stay at a selected all-inclusive resort for your chosen duration. ",
      },
      {
        icon: "/assets/images/inclusions/snacks-icon.svg",
        title: " Meals and Snacks ",
        description:
          "  All meals (buffet-style or à la carte dining), snacks, and sometimes beverages, including local alcoholic drinks. ",
      },
      {
        icon: "/assets/images/inclusions/entertainment-icon.svg",
        title: "Entertainment",
        description:
          " Access to on-site entertainment, including live shows, music, and themed events.",
      },
      {
        icon: "/assets/images/inclusions/activities-icon.svg",
        title: "Activities",
        description:
          " Participation in various activities like water sports, fitness classes, and recreational activities offered by the resort. ",
      },
      {
        icon: "/assets/images/inclusions/transfers-icon.svg",
        title: "Airport ",
        description: " Airport transfers to and from the resort. ",
      },
      {
        icon: "/assets/images/inclusions/gratuities-icon.svg",
        title: "Gratuities",
        description: " Tips for staff are generally included in the price. ",
      },
      {
        icon: "/assets/images/inclusions/amenities-icon.svg",
        title: " Access to Resort Amenities ",
        description: " Tips for staff are generally included in the price. ",
      },
    ],
  },
  {
    slug: "costa-rica",
    title: "costa rica",
    price: "$1345",
    description:
      "Costa Rica, a stunning gem in the heart of Central America, lies between the Pacific Ocean and the Caribbean Sea. Whether you’re after a peaceful retreat or an adventure-filled vacation, this vibrant destination offers diverse landscapes and a variety of all-inclusive resorts to suit all types of travelers.",
    description2:
      "Boasting an impressive 5% of the world’s biodiversity, Costa Rica is a paradise for nature lovers. Almost a quarter of the country is protected rainforest, and with 29 national parks, 19 wildlife sanctuaries, and eight biological reserves, there’s no shortage of ways to immerse yourself in the country’s lush beauty. From hiking around a volcanic crater to exploring misty cloud forests or soaring through the treetops on a zipline, there’s something for every eco-adventurer.",
    description3:
      "If you prefer a more laid-back experience, you can unwind on the pristine beaches that stretch along both coasts. Bask in the sun on the soft sands of Tamarindo, take a snorkeling trip in the crystal-clear waters of Conchal Beach, or enjoy the unique pink sands of Flamingo Beach. Costa Rica is the perfect mix of relaxation and adventure!",
    images: ["/assets/images/costa-rica-trip.png"],

    inclusions: [
      {
        icon: "/assets/images/inclusions/flight-icon.svg",
        title: "Flights",
        description:
          " Round-trip airfare from your departure city to your destination. ",
      },
      {
        icon: "/assets/images/inclusions/accommodation-icon.svg",
        title: "Accommodation",
        description:
          "  Stay at a selected all-inclusive resort for your chosen duration. ",
      },
      {
        icon: "/assets/images/inclusions/snacks-icon.svg",
        title: " Meals and Snacks ",
        description:
          "  All meals (buffet-style or à la carte dining), snacks, and sometimes beverages, including local alcoholic drinks. ",
      },
      {
        icon: "/assets/images/inclusions/entertainment-icon.svg",
        title: "Entertainment",
        description:
          " Access to on-site entertainment, including live shows, music, and themed events.",
      },
      {
        icon: "/assets/images/inclusions/activities-icon.svg",
        title: "Activities",
        description:
          " Participation in various activities like water sports, fitness classes, and recreational activities offered by the resort. ",
      },
      {
        icon: "/assets/images/inclusions/transfers-icon.svg",
        title: "Airport ",
        description: " Airport transfers to and from the resort. ",
      },
      {
        icon: "/assets/images/inclusions/gratuities-icon.svg",
        title: "Gratuities",
        description: " Tips for staff are generally included in the price. ",
      },
      {
        icon: "/assets/images/inclusions/amenities-icon.svg",
        title: " Access to Resort Amenities ",
        description: " Tips for staff are generally included in the price. ",
      },
    ],
  },
  {
    slug: "jamaica",
    title: "Jamaica",
    price: "$1175",
    description:
      "Nestled between lush mountains and stunning beaches, Jamaica boasts a vibrant island culture and some of the Caribbean’s most scenic coastlines. Whether you’re seeking an all-inclusive resort or an adults-only retreat, there’s a wide variety of accommodations to suit all types of travelers.",
    description2:
      "Delve into the island’s natural beauty and rich heritage through exciting adventures. Take a thrilling Jeep safari through the mountains, swim in the iconic Dunn’s River Falls, or immerse yourself in the local culture with a visit to Bob Marley’s birthplace. Relax on pristine beaches along the Caribbean Sea, or enjoy a catamaran ride, stopping to snorkel in the sparkling clear waters.",
    images: ["/assets/images/Jamaica-trip.png"],

    inclusions: [
      {
        icon: "/assets/images/inclusions/flight-icon.svg",
        title: "Flights",
        description:
          " Round-trip airfare from your departure city to your destination. ",
      },
      {
        icon: "/assets/images/inclusions/accommodation-icon.svg",
        title: "Accommodation",
        description:
          "  Stay at a selected all-inclusive resort for your chosen duration. ",
      },
      {
        icon: "/assets/images/inclusions/snacks-icon.svg",
        title: " Meals and Snacks ",
        description:
          "  All meals (buffet-style or à la carte dining), snacks, and sometimes beverages, including local alcoholic drinks. ",
      },
    ],
  },
  {
    slug: "cuba",
    title: "Cuba",
    price: "$625",
    description:
      "With an average of 330 sunny days per year and over 400 kilometers of unspoiled coastline, Cuba is an ideal destination for a peaceful beach escape. Relax on the famous white sands of Varadero Beach, dive into the crystal-clear waters of Playa Pilar’s coral reefs, or take a stroll along the tranquil shores of Playa Paraiso.",
    description2:
      "Cuba is also home to more UNESCO World Heritage Sites than any other Caribbean nation, making it a perfect spot for those wanting to dive deeper into the island’s vibrant culture and rich history. Wander through the charming cobblestone streets of Old Havana, where vintage American cars fill the roads, visit the historic El Morro fortress in Santiago de Cuba, and explore the colonial-era squares in the picturesque town of Trinidad.",
    images: ["/assets/images/cuba-trip.png"],

    inclusions: [
      {
        icon: "/assets/images/inclusions/flight-icon.svg",
        title: "Flights",
        description:
          " Round-trip airfare from your departure city to your destination. ",
      },
      {
        icon: "/assets/images/inclusions/accommodation-icon.svg",
        title: "Accommodation",
        description:
          "  Stay at a selected all-inclusive resort for your chosen duration. ",
      },
      {
        icon: "/assets/images/inclusions/snacks-icon.svg",
        title: " Meals and Snacks ",
        description:
          "  All meals (buffet-style or à la carte dining), snacks, and sometimes beverages, including local alcoholic drinks. ",
      },
    ],
  },
  {
    slug: "miami",
    title: "Miami",
    price: "$2499",
    description:
      "Miami is one of the top vacation spots in the world. This dynamic city offers a perfect blend of adventure and relaxation, catering to all types of travelers.",
    description2:
      "Immerse yourself in the city’s Cuban culture in the vibrant Little Havana neighborhood, where you can wander down the lively Calle Ocho, savoring fresh coffee and mouthwatering Cubano sandwiches. Explore the iconic Art Deco District to admire its colorful, historic architecture and take a drive along Ocean Drive, where the legendary Gianni Versace once lived.",
    description3:
      "The chic South Beach area is a hotspot for celebrities, featuring top-notch restaurants by celebrity chefs, lively nightlife, and much more. With a variety of world-class accommodations to choose from, ranging from peaceful beachfront resorts to trendy city hotels, there’s something for every style. And of course, you’ll find plenty of spots to relax on the sand and bask in the sun.",
    images: ["/assets/images/miami-trip.png"],

    inclusions: [
      {
        icon: "/assets/images/inclusions/flight-icon.svg",
        title: "Flights",
        description:
          " Round-trip airfare from your departure city to your destination. ",
      },
      {
        icon: "/assets/images/inclusions/accommodation-icon.svg",
        title: "Accommodation",
        description:
          "  Stay at a selected all-inclusive resort for your chosen duration. ",
      },
      {
        icon: "/assets/images/inclusions/snacks-icon.svg",
        title: " Meals and Snacks ",
        description:
          "  All meals (buffet-style or à la carte dining), snacks, and sometimes beverages, including local alcoholic drinks. ",
      },
    ],
  },
  {
    slug: "singapore-malaysia",
    title: "Singapore & Malaysia",
    price: "$2399",
    description:
      "Start your adventure right at the world-renowned Jewel Changi Airport, often hailed as the best airport on the planet! With its vast 10-story complex, you’ll find everything from luxury shops to an IMAX theater, a thrilling indoor theme park, and the awe-inspiring tallest indoor waterfall in the world.",
    description2:
      "Set off on an exciting journey through the colorful landscapes of Malaysia and Singapore, where modern wonders and rich cultural heritage come together effortlessly! Start by exploring the lively streets of Kuala Lumpur, with its iconic landmarks, before heading to the historic city of Malacca, steeped in fascinating stories from the past. Then, cross over to Singapore, a stunning city-state where cutting-edge skyscrapers rise alongside tranquil green spaces, offering the perfect fusion of futuristic style and natural beauty.",

    images: ["/assets/images/miami-trip.png"],

    inclusions: [
      {
        icon: "/assets/images/inclusions/flight-icon.svg",
        title: "Flights",
        description:
          " Round-trip airfare from your departure city to your destination. ",
      },
      {
        icon: "/assets/images/inclusions/accommodation-icon.svg",
        title: "Accommodation",
        description:
          "  Stay at a selected all-inclusive resort for your chosen duration. ",
      },
      {
        icon: "/assets/images/inclusions/snacks-icon.svg",
        title: " Meals and Snacks ",
        description:
          "  All meals (buffet-style or à la carte dining), snacks, and sometimes beverages, including local alcoholic drinks. ",
      },
    ],
  },
];

export default function TourDetails() {
  const params = useParams();
  const slug = params.slug;

  const tour = packages.find((p) => p.slug === slug);

  if (!tour) return <div>Tour not found</div>;

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
              Hassle-Free Reservations
            </span>
            <h1 className="2xxl:text-11xxl xl:text-10xl sm:text-8xl text-5xl mb-2.5 text-white">
              Tour Details
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-screen py-20">
        <div className="container max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl font-semibold mb-4">{tour.title}</h1>

          {/* Single Image */}
          <div className="rounded-xl overflow-hidden relative">
            <div className="absolute z-1 bg-[#06a8f9] text-white py-4 px-4 bottom-4 left-4 rounded-lg text-2xl font-bold">
              <h1 className="text-white">Starting from {tour.price}</h1>
            </div>
            <img
              src={tour.images[0]}
              alt={tour.title}
              className="w-full h-[400px] object-cover"
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
            <h2 className="text-2xl font-semibold mb-10">Inclusions </h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full">
              {tour.inclusions.map((inclusion, index) => (
                <div
                  key={index}
                  className="xl:text-xl text-sm font-medium flex items-center gap-5 mb-10"
                >
                  <span className="w-[50px] h-[50px] flex items-center rounded-full bg-[#06a8f9] justify-center">
                    <img
                      src={inclusion.icon}
                      alt={inclusion.title}
                      className="w-6 h-6 min-w-[50px]"
                    />
                  </span>
                  <div>
                    <h4 className="mb-2">{inclusion.title}</h4>
                    <p className="text-sm">{inclusion.description}</p>
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
