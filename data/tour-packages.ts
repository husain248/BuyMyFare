export type TourInclusion = {
  icon: string;
  title: string;
  description: string;
};

export type TourPackage = {
  slug: string;
  img?: string;
  location?: string;
  title: string;
  description: string;
  description2?: string;
  description3?: string;
  price: string;
  images: string[];
  inclusions: TourInclusion[];
};

export const tourPackages: TourPackage[] = [
  {
    slug: "dubai",
    img: "/assets/images/dubai-trip.png",
    location: "Dubai",
    title: "Dubai",
    description:
      "Discover the dazzling city of Dubai with our exclusive tour package! From the iconic Burj Khalifa to the luxurious Palm Jumeirah, immerse yourself in a blend of modern marvels and rich Arabian heritage. Enjoy world-class shopping, explore traditional markets like the Gold Souk, and unwind on pristine beaches. Take a thrilling desert safari, experience breathtaking views from the tallest building in the world, and indulge in Dubai’s vibrant nightlife. Whether you're seeking adventure, luxury, or cultural exploration, this package offers an unforgettable Dubai experience.",
    price: "$1200",
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
    img: "/assets/images/Dominican-Republic.png",
    location: "Dominican Republic",
    title: "Dominican Republic",
    description:
      "The Dominican Republic, one of the Caribbean’s most popular beach destinations, is the ideal spot for your next tropical escape. Whether you’re seeking a family-friendly vacation or a romantic retreat, you’ll find a variety of all-inclusive resorts across the island to suit every travel style.",
    description2:
      "Relax on the stunning white-sand beaches of Punta Cana, home to famous spots like Bavaro Beach and Saona Island. If you’re into water sports, Cabarete is a top destination for kitesurfing and kiteboarding. For golf lovers, La Romana boasts renowned courses, including the celebrity-favorite Pete Dye courses at Casa de Campo. For a dose of adventure, enjoy an ATV or ziplining excursion, or dive into the island’s rich history with a visit to Santo Domingo or the 19th-century architecture of Puerto Plata.",
    price: "$1035",
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
    img: "/assets/images/mexico-trip.png",
    location: "Mexico",
    title: "Mexico",
    description:
      "Mexico, nestled between the United States and Central America, offers a stunning variety of landscapes, from the rugged Pacific coastline to the pristine beaches of the Caribbean Sea. Whether you’re looking for a relaxing beach escape or an action-packed adventure, there are all-inclusive resorts in Mexico to suit every type of traveler.",
    description2:
      "For a traditional beach vacation, the Yucatan Peninsula on the Caribbean side is a perfect choice. Enjoy the sunny shores of the Riviera Maya, relax by the luxurious pools in Cancun’s Hotel Zone, or find tranquility on the secluded beaches of Isla Holbox, just off Cancun’s coast. While in the area, don’t miss the incredible Mayan ruins of Chichén Itzá and Tulum, where you can dive into the rich history and culture of the region.",
    description3:
      "On Mexico’s Pacific Coast, the adventure opportunities are endless. Ride an ATV through the dramatic desert landscapes of Los Cabos, explore the lush terrain of the Sierra Madre Mountains near Puerto Vallarta, or embark on a whale-watching excursion in Mazatlán. No matter what kind of vacation you’re seeking, Mexico offers something for every type of traveler",
    price: "$965",
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
    img: "/assets/images/Costa-Rica-trip.png",
    location: "Costa Rica",
    title: "costa rica",
    description:
      "Costa Rica, a stunning gem in the heart of Central America, lies between the Pacific Ocean and the Caribbean Sea. Whether you’re after a peaceful retreat or an adventure-filled vacation, this vibrant destination offers diverse landscapes and a variety of all-inclusive resorts to suit all types of travelers.",
    description2:
      "Boasting an impressive 5% of the world’s biodiversity, Costa Rica is a paradise for nature lovers. Almost a quarter of the country is protected rainforest, and with 29 national parks, 19 wildlife sanctuaries, and eight biological reserves, there’s no shortage of ways to immerse yourself in the country’s lush beauty. From hiking around a volcanic crater to exploring misty cloud forests or soaring through the treetops on a zipline, there’s something for every eco-adventurer.",
    description3:
      "If you prefer a more laid-back experience, you can unwind on the pristine beaches that stretch along both coasts. Bask in the sun on the soft sands of Tamarindo, take a snorkeling trip in the crystal-clear waters of Conchal Beach, or enjoy the unique pink sands of Flamingo Beach. Costa Rica is the perfect mix of relaxation and adventure!",
    price: "$1345",
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
    img: "/assets/images/Jamaica-trip.png",
    location: "Jamaica",
    title: "Jamaica",
    description:
      "Nestled between lush mountains and stunning beaches, Jamaica boasts a vibrant island culture and some of the Caribbean’s most scenic coastlines. Whether you’re seeking an all-inclusive resort or an adults-only retreat, there’s a wide variety of accommodations to suit all types of travelers.",
    description2:
      "Delve into the island’s natural beauty and rich heritage through exciting adventures. Take a thrilling Jeep safari through the mountains, swim in the iconic Dunn’s River Falls, or immerse yourself in the local culture with a visit to Bob Marley’s birthplace. Relax on pristine beaches along the Caribbean Sea, or enjoy a catamaran ride, stopping to snorkel in the sparkling clear waters.",
    price: "$1175",
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
    img: "/assets/images/cuba-trip.png",
    location: "Cuba",
    title: "Cuba",
    description:
      "With an average of 330 sunny days per year and over 400 kilometers of unspoiled coastline, Cuba is an ideal destination for a peaceful beach escape. Relax on the famous white sands of Varadero Beach, dive into the crystal-clear waters of Playa Pilar’s coral reefs, or take a stroll along the tranquil shores of Playa Paraiso.",
    description2:
      "Cuba is also home to more UNESCO World Heritage Sites than any other Caribbean nation, making it a perfect spot for those wanting to dive deeper into the island’s vibrant culture and rich history. Wander through the charming cobblestone streets of Old Havana, where vintage American cars fill the roads, visit the historic El Morro fortress in Santiago de Cuba, and explore the colonial-era squares in the picturesque town of Trinidad.",
    price: "$625",
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
    img: "/assets/images/miami-trip.png",
    location: "Miami",
    title: "Miami",
    description:
      "Miami is one of the top vacation spots in the world. This dynamic city offers a perfect blend of adventure and relaxation, catering to all types of travelers.",
    description2:
      "Immerse yourself in the city’s Cuban culture in the vibrant Little Havana neighborhood, where you can wander down the lively Calle Ocho, savoring fresh coffee and mouthwatering Cubano sandwiches. Explore the iconic Art Deco District to admire its colorful, historic architecture and take a drive along Ocean Drive, where the legendary Gianni Versace once lived.",
    description3:
      "The chic South Beach area is a hotspot for celebrities, featuring top-notch restaurants by celebrity chefs, lively nightlife, and much more. With a variety of world-class accommodations to choose from, ranging from peaceful beachfront resorts to trendy city hotels, there’s something for every style. And of course, you’ll find plenty of spots to relax on the sand and bask in the sun.",
    price: "$2499",
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
    img: "/assets/images/singapore-trip.png",
    location: "Singapore & Malaysia",
    title: "Singapore & Malaysia",
    description:
      "Start your adventure right at the world-renowned Jewel Changi Airport, often hailed as the best airport on the planet! With its vast 10-story complex, you’ll find everything from luxury shops to an IMAX theater, a thrilling indoor theme park, and the awe-inspiring tallest indoor waterfall in the world.",
    description2:
      "Set off on an exciting journey through the colorful landscapes of Malaysia and Singapore, where modern wonders and rich cultural heritage come together effortlessly! Start by exploring the lively streets of Kuala Lumpur, with its iconic landmarks, before heading to the historic city of Malacca, steeped in fascinating stories from the past. Then, cross over to Singapore, a stunning city-state where cutting-edge skyscrapers rise alongside tranquil green spaces, offering the perfect fusion of futuristic style and natural beauty.",
    price: "$2399",
    images: ["/assets/images/singapore-trip.png"],
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

