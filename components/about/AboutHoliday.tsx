import Image from "next/image";

export default function AboutHoliday() {
  return (
    <section className="2xl:py-40 lg:py-30 sm:py-25 py-18 relative z-1 after:absolute after:bottom-0 lg:after:-left-55 after:left-0 after:size-full after:bg-no-repeat after:bg-bottom-left after:bg-[url('/assets/images/background/bg2.png')] after:-z-1 max-xl:after:bg-contain before:absolute before:top-0 before:right-0 before:size-full before:bg-no-repeat before:bg-top-right before:bg-[url('/assets/images/background/bg1.png')] before:-z-1">
      <div className="container">
        <div className="xl:mb-10 sm:mb-5 mb-2.5">
          <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase headline">
            What Makes Us Different?
          </h2>
        </div>
        <div className="row">
          <div className="xl:w-1/3 w-full">
            <div className="mb-10 relative after:absolute after:top-full after:right-[20%] after:w-px xl:after:h-100 after:h-60 after:bg-black/50 max-xl:after:hidden">
              <p className="xl:text-xl sm:text-lg text-sm font-normal lg:mb-10 sm:mb-5 mb-2.5 sm:pe-7.5">
                Here’s why Buy My Fare stands out:
              </p>
            </div>
          </div>
          <div className="xl:w-2/3 w-full">
            <div className="row">
              <div className="lg:w-2/5 md:w-1/2 w-full mb-5">
                <div className="p-5 rounded-2lg bg-[#F2EFEA]">
                  <div className="relative overflow-hidden rounded-2lg aspect-square">
                    <Image
                      src="/assets/images/Tailored-Itineraries.jpg"
                      alt="Tailored Itineraries"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="pb-2.5 pt-4 px-7.5 text-center">
                    <h3 className="text-2xl font-medium mb-2.5 uppercase">
                      Tailored Itineraries
                    </h3>
                    <p className="text-base">
                      We design journeys that reflect your interests,
                      preferences, and pace.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/5 md:w-1/2 w-full mb-5">
                <div className="p-5 rounded-2lg bg-[#F2EFEA]">
                  <div className="relative overflow-hidden rounded-2lg aspect-square">
                    <Image
                      src="/assets/images/tour/style3/img2.png"
                      alt="Exclusive Deals"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="pb-2.5 pt-4 px-7.5 text-center">
                    <h3 className="text-2xl font-medium mb-2.5 uppercase">
                      Exclusive Deals
                    </h3>
                    <p className="text-base">
                      Our partnerships with top airlines, hotels, and tour
                      operators mean you get the best value without compromising
                      quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-end">
              <div className="lg:w-2/5 md:w-1/2 w-full mb-5">
                <div className="p-5 rounded-2lg bg-[#F2EFEA]">
                  <div className="relative overflow-hidden rounded-2lg aspect-square">
                    <Image
                      src="/assets/images/Round-the-Clock-Support.jpg"
                      alt="Round-the-Clock Support"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="pb-2.5 pt-4 px-7.5 text-center">
                    <h3 className="text-2xl font-medium mb-2.5 uppercase">
                      Round-the-Clock Support
                    </h3>
                    <p className="text-base">
                      Your peace of mind is our priority—before, during, and
                      after your trip.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/5 md:w-1/2 w-full mb-5">
                <div className="p-5 rounded-2lg bg-[#F2EFEA]">
                  <div className="relative overflow-hidden rounded-2lg aspect-square">
                    <Image
                      src="/assets/images/tour/style3/img4.png"
                      alt="Hassle-Free Service"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="pb-2.5 pt-4 px-7.5 text-center">
                    <h3 className="text-2xl font-medium mb-2.5 uppercase">
                      Hassle-Free Service
                    </h3>
                    <p className="text-base">
                      From planning your itinerary to ensuring a smooth journey,
                      we handle the details so you can focus on enjoying your
                      trip.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
