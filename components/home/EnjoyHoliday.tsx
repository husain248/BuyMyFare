const activities = [
  {
    img: "/assets/images/tour/style3/img1.png",
    title: "Restaurants",
    desc: "Savor local flavors at top-rated spots.",
  },
  {
    img: "/assets/images/tour/style3/img2.png",
    title: "Sightseeing",
    desc: "Explore iconic sights and hidden gems.",
  },
  {
    img: "/assets/images/tour/style3/img3.png",
    title: "Where to Stay",
    desc: "Find comfort in top-rated stays.",
  },
  {
    img: "/assets/images/tour/style3/img4.png",
    title: "Shops & Boutiques",
    desc: "Discover unique finds and local treasures.",
  },
];

export default function EnjoyHoliday() {
  return (
    <section className="2xl:py-40 lg:py-30 sm:py-25 py-18 relative z-1 after:absolute after:bottom-0 lg:after:-left-55 after:left-0 after:size-full after:bg-no-repeat after:bg-bottom-left after:bg-[url(/assets/images/background/bg2.png)] after:-z-1 max-xl:after:bg-contain before:absolute before:top-0 before:right-0 before:size-full before:bg-no-repeat before:bg-top-right before:bg-[url(/assets/images/background/bg1.png)] before:-z-1">
      <div className="container relative z-1 max-w-7xl">
        <div className="xl:mb-10 sm:mb-5 mb-2.5">
          <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase headline">
            Enjoy Your Holiday
          </h2>
        </div>
        <div className="row">
          <div className="xl:w-1/3 w-full">
            <div className="mb-10 relative after:absolute after:top-full after:right-[20%] after:w-px xl:after:h-100 after:h-60 after:bg-black/50 max-xl:after:hidden">
              <p className="text-sm">
                From iconic landmarks to local hidden gems, we tailor every
                experience to create unforgettable memories. Your perfect
                holiday is just a booking away.
              </p>
            </div>
          </div>
          <div className="xl:w-2/3 w-full">
            <div className="row">
              {activities.slice(0, 2).map((a, i) => (
                <div key={i} className="lg:w-2/5 md:w-1/2 w-full mb-5">
                  <div className="p-5 rounded-2lg bg-[#F2EFEA]">
                    <div className="relative overflow-hidden rounded-2lg">
                      <img
                        src={a.img}
                        alt={a.title}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="pb-2.5 pt-4 px-7.5 text-center">
                      <h3 className="text-2xl font-medium mb-2.5 uppercase">
                        {a.title}
                      </h3>
                      <p className="text-base">{a.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row justify-end">
              {activities.slice(2).map((a, i) => (
                <div key={i} className="lg:w-2/5 md:w-1/2 w-full mb-5">
                  <div className="p-5 rounded-2lg bg-[#F2EFEA]">
                    <div className="relative overflow-hidden rounded-2lg">
                      <img
                        src={a.img}
                        alt={a.title}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="pb-2.5 pt-4 px-7.5 text-center">
                      <h3 className="text-2xl font-medium mb-2.5 uppercase">
                        {a.title}
                      </h3>
                      <p className="text-base">{a.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
