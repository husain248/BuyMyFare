import Image from "next/image";
import { holidayActivities } from "../../data/home-enjoy-holiday";

export default function EnjoyHoliday() {
  return (
    <section className="2xl:py-40 lg:py-30 sm:py-25 py-18 relative z-1 after:absolute after:bottom-0 lg:after:-left-55 after:left-0 after:size-full after:bg-no-repeat after:bg-bottom-left after-bg2 after:-z-1 max-xl:after:bg-contain before:absolute before:top-0 before:right-0 before:size-full before:bg-no-repeat before:bg-top-right before-bg1 before:-z-1">
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
              {holidayActivities.slice(0, 2).map((a, i) => (
                <div key={i} className="lg:w-2/5 md:w-1/2 w-full mb-5">
                  <div className="p-5 rounded-2lg bg-[#F2EFEA]">
                    <div className="relative overflow-hidden rounded-2lg">
                      <Image
                        src={a.img}
                        alt={a.title}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
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
              {holidayActivities.slice(2).map((a, i) => (
                <div key={i} className="lg:w-2/5 md:w-1/2 w-full mb-5">
                  <div className="p-5 rounded-2lg bg-[#F2EFEA]">
                    <div className="relative overflow-hidden rounded-2lg">
                      <Image
                        src={a.img}
                        alt={a.title}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
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
