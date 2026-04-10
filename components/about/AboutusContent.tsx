import Image from "next/image";

export default function AboutusContent() {
  return (
    <section
      id="nextSection"
      className="relative md:py-20 py-15 before:absolute before:top-0 before:right-[21%] before:bg-[#f5f2eb] before:w-[22.35%] before:h-full before:-z-1 max-lg:before:hidden overflow-hidden"
    >
      <div className="absolute -bottom-47.5 lg:-left-72.5 left-0 size-full -z-1 pointer-events-none">
        <Image
          src="/assets/images/background/bg1.png"
          alt="background"
          fill
          className="object-contain object-bottom-left"
        />
      </div>
      <div className="container max-w-[1330px] relative z-1">
        <div className="row">
          <div className="lg:w-1/2 w-full">
            <div className="lg:pt-20 relative mb-10">
              <div className="sm:mb-10 mb-5">
                <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase">
                  Welcome to Buy My Fare
                </h2>
                <p className="mt-5 text-gray-700 leading-relaxed">
                  {" "}
                  At Buy My Fare, we believe that travel is more than just a
                  journey; it’s a collection of moments, stories, and
                  connections that shape who we are. Our passion lies in
                  creating travel experiences that resonate with your heart and
                  leave you with memories to cherish for a lifetime.{" "}
                </p>
                <div className="mt-5 bg-[#F2EFEA] relative overflow-hidden rounded-2xl flex flex-wrap items-center p-5">
                  <div className="text-center relative">
                    <span className="block font-title font-normal text-lg mb-5">
                      Motivated by this vision, I pursued a degree in{" "}
                      <strong>Sustainable Tourism Management</strong>, where I
                      learned how to grow tourism in a way that benefits local
                      communities, protects the environment, and ensures a
                      meaningful experience for travelers. I wanted to create a
                      travel agency that doesn’t just plan trips but also
                      promotes <strong>responsible tourism</strong>, helps
                      eliminate the negative impacts of mass tourism, and
                      empowers travelers to make a positive difference during
                      their journeys.{" "}
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-gray-700 leading-relaxed">
                  {" "}
                  With this foundation, <strong>Buy My Fare</strong> was created
                  to make travel not only hassle-free but also purposeful. We
                  aim to educate travelers about how their choices can support
                  local cultures, protect natural wonders, and ensure that
                  future generations can enjoy these treasures as much as we
                  do.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative max-2xl:flex max-2xl:flex-col max-2xl:gap-5">
              <div
                className="flex items-center justify-start wow fadeInDown"
                data-wow-delay="1s"
              >
                <div className="-rotate-6 bg-white p-2.5 shadow-1">
                  <img
                    src="/assets/images/about/img1.png"
                    alt="About 1"
                    width={450}
                    height={350}
                    className="w-full h-auto"
                    style={{ height: "auto" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div
                className="flex items-center justify-end -mt-12.5 wow fadeInRight"
                data-wow-delay="1s"
              >
                <div className="rotate-2 bg-white p-2.5 shadow-1">
                  <img
                    src="/assets/images/about/img2.png"
                    alt="About 2"
                    width={450}
                    height={350}
                    className="w-full h-auto"
                    style={{ height: "auto" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="flex items-center justify-start -mt-12.5 relative">
                <div className="rotate-6 bg-white p-2.5 shadow-1">
                  <img
                    src="/assets/images/about/img3.png"
                    alt="About 3"
                    width={450}
                    height={350}
                    className="w-full h-auto wow fadeInUp"
                    data-wow-delay="1s"
                    style={{ height: "auto" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
