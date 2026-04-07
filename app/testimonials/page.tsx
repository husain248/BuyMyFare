"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sachin Arora",
    role: "TRAVEL | Tulum Package ",
    text: "Exceptional Service from Mona at Buy My Fare – Highly Recommend! I just wanted to take a moment to express my gratitude for Mona at Buy My Fare, who made our recent trip to Tulum absolutely unforgettable. From the very beginning, Mona went above and beyond to ensure that every detail of our 7-day all-inclusive stay at Dream Tulum Resort was perfectly arranged. She took the time to understand our preferences and tailored the experience to meet all our needs. Her recommendations were spot-on, and she made the booking process seamless and stress-free. The resort itself was nothing short of incredible—beautiful, luxurious, and exactly what we were looking for. Mona even helped us with specific requests, ensuring we had a stress-free and relaxing vacation. Her professionalism, attention to detail, and genuine care for her clients are truly remarkable. If you’re planning a trip, I would absolutely recommend reaching out to Mona at Buy My Fare. We will definitely be booking future trips with her and couldn’t be happier with the experience! Thank you again, Mona, for making our vacation a dream come true!",
    image: "/assets/images/testimonial/Sachin-Arora-150x150.jpg",
  },
  {
    id: 2,
    name: "Satbir Jaswal",
    role: "TRAVEL | Punta Cana Package",
    text: "Buy My Fare planned our Punta Cana trip effortless. The package deal was affordable, and the booking process was straightforward. We had to adjust our dates, and it was done without any hassle. I’ll definitely use their services again.",
    image: "/assets/images/testimonial/Satbir-Jaswal-150x150.jpg",
  },
  {
    id: 3,
    name: "Mohit Sharma",
    role: "TRAVEL | Delhi to Calgary",
    text: "I wanted to express my heartfelt thanks for your excellent service in booking my parents’ flight tickets. As they were flying for the very first time in their life, I was too worried about their experience and safety.Their experience was seamless and comfortable, and everything went smoothly. Your professionalism and attention to detail made a significant difference, and we truly appreciate it. We will definitely be reaching out for future travel needs and recommending your services to others. Thank you once again for making their journey a pleasant one.",
    image: "/assets/images/testimonial/Mohit-Modgil-150x150.jpg",
  },
  {
    id: 4,
    name: "Suraj Bhardwaj",
    role: "TRAVEL | Delhi to Winnipeg",
    text: "I recently booked a trip from Delhi to Winnipeg with Buy My Fare, and I was impressed with the service. The booking process was smooth, and the team was very helpful in finding the best options for my travel needs. I will definitely be using their services again for future trips.",
    image: "/assets/images/testimonial/Suraj-150x150.png",
  },
  {
    id: 5,
    name: "Ranveer Singh Rawat",
    role: "TRAVEL | Vancouver to Delhi",
    text: "I booked a round-trip flight from Vancouver to Delhi, and I couldn’t be happier with the experience. I got offered an excellent deal right away and provided personalized assistance throughout the process. The service was smooth, efficient, and tailored to my needs. Highly recommend Mona for great deals and top-notch customer service!",
    image: "/assets/images/testimonial/Ranveer-Rawat-150x150.jpg",
  },
  {
    id: 6,
    name: "Gagan Sidhu",
    role: "TRAVEL | Delhi to Calgary",
    text: "I booked a trip for my parents from Delhi to Calgary with Buy My Fare, and they did an amazing job! It was their first international flight, and the agency handled everything—from flight bookings to arranging personal assistance. My parents had a smooth, hassle-free experience, thanks to their attention to detail and great customer care. Highly recommend Buy My Fare for anyone seeking reliable and personalized travel service!",
    image: "/assets/images/testimonial/Gagan-150x150.png",
  },
  {
    id: 7,
    name: "Mehak Goyal",
    role: "TRAVEL | Vancouver to Malaysia",
    text: "I booked a multi-city trip with Buy My Fare from Vancouver to Malaysia, then Malaysia to Delhi, and finally Delhi to Vancouver. Despite being inflexible with my dates, they managed to get me the best deal! The entire journey was hassle-free, and they provided excellent pre- and post-trip services. Highly recommend Buy My Fare for great deals and seamless travel! Thank you Mona.",
    image: "/assets/images/testimonial/Mehak-Goyal-150x150.jpg",
  },
  {
    id: 8,
    name: "Aman Kumar",
    role: "TRAVEL | Vancouver to Delhi",
    text: "I  booked a flight from Vancouver to Delhi for my wife, two kids, and myself, and it turned out to be a bit of a rollercoaster, but with a happy ending. Initially, we booked our tickets through FlightHub, but unfortunately, they never sent us the tickets and our money got stuck in a refund process that took forever. We were in a bit of a panic, since we needed to rebook our flights on short notice. Thankfully, a good friend of ours recommended Mona. My wife contacted her right away, and from that moment, the experience was night and day compared to what we had with FlightHub. Mona not only managed to get us the tickets quickly, but she also offered us a much better deal, saving us money compared to the original booking. What really impressed us was the level of service and the knowledge she had about flight options, especially when traveling with kids. She made sure we got the most convenient flights with minimal layovers and even helped us choose seats to ensure the kids were comfortable. She took the stress out of the process, and we were able to relax knowing we were in good hands. Highly recommend Mona for anyone booking flights! She truly goes above and beyond. Thank you so much, Mona!",
    image: "/assets/images/testimonial/Aman-150x150.png",
  },
  {
    id: 9,
    name: "Simran Gandhi",
    role: "TRAVEL | Calgary to Mexico",
    text: "I recently booked an all-inclusive Cancun package with Buy My Fare for a long-awaited family vacation. My husband, two kids, and I had been planning this trip for quite some time. From the start, the experience was smooth and stress-free. Mona helped us secure a fantastic deal, and we even got an extra $200 off through their special Christmas promotion, which was such a nice surprise! Not only did they find us an affordable package, but she also helped us choose a kid-friendly resort that was perfect for our family. The resort had everything we were looking for — great amenities, activities for the kids, and plenty of relaxation for me and my husband. One of the highlights of working with Mona was how she went above and beyond to assist with booking excursions. We wanted to make the most of our time in Cancun, so she suggested some amazing family-friendly tours, and everything was seamlessly arranged. I’m so grateful to have found such a reliable travel planner who truly cares about making your trip memorable and hassle-free. This was one of the best family vacations we’ve had, and I couldn’t be happier with the service from Buy My Fare. Highly recommend to anyone looking for a stress-free travel experience!",
    image: "/assets/images/testimonial/Simran-Gandhi-150x150.jpg",
  },
  {
    id: 10,
    name: "Navpreet Singh",
    role: "TRAVEL | Vancouver to Delhi ",
    text: "I was travelling to India from Vancouver last year and I was having hard time finding a good return ticket and after scrolling endless on internet I found buy my fare and, got connected with them. They got me really decent deal without having me to go through long stays on different airports. Very professional and excellent service. Thank you Mona.",
    image: "/assets/images/testimonial/Navpreet-Singh-150x150.jpg",
  },
];

export default function Testimonials() {
  return (
    <>
      <div
        className="2xxl:min-h-100 lg:min-h-100 sm:min-h-100 min-h-75 text-center relative bg-no-repeat bg-center bg-cover before:absolute before:inset-0 before:bg-black/20"
        style={{
          backgroundImage:
            "url('/assets/images/testimonial/BMF-Testimonials-scaled.webp')",
        }}
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
              What they say
            </span>
            <h1 className="2xxl:text-11xxl xl:text-10xl sm:text-8xl text-5xl mb-2.5 text-white">
              Testimonials
            </h1>
          </div>
        </div>
      </div>
      <section className="bg-[#F5F2EB] py-20">
        <div className="max-w-7xl mx-auto px-5">
          {/* Masonry Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
              >
                {/* Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {item.text}
                </p>

                {/* User */}
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold mb-2">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
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
