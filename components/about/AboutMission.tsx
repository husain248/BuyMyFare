import Link from "next/link";
import Image from "next/image";

export default function AboutMission() {
  return (
    <section className="relative">
      <div className="container-full">
        <div className="sticky-wrapper">
          <div className="content--sticky xl:sticky xl:top-0 bg-light">
            <div className="grid grid-cols-12 xl:gap-5">
              <div className="xl:col-span-6 col-span-12">
                <div className="relative z-1 h-full">
                  <div className="overflow-hidden h-auto">
                    <Image
                      src="/assets/images/about/img4.png"
                      alt="Our Mission"
                      width={600}
                      height={400}
                      className="content__img w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="xl:col-span-6 col-span-12">
                <div className="3xl:ps-28 3xl:pe-71.5 px-3.75 xl:pt-35.25 xl:pb-30 py-7.5 flex flex-col h-full">
                  <div className="flex-1">
                    <h2 className="xl:text-5xl lg:text-4xxl sm:text-4xl font-semibold text-3xl headline">
                      Our Mission
                    </h2>
                    <p className="sm:text-xl/7.5 text-lg text-textgray mb-2.5 py-3.75">
                      To inspire and empower every traveler to create their own
                      story while contributing to a better world through
                      responsible tourism. From the moment you choose us, we
                      commit to turning your travel aspirations into tangible,
                      meaningful, and sustainable experiences.”
                    </p>
                  </div>
                  <div className="md:flex items-center gap-5.75">
                    <Link href="/" className="btn btn-primary btn-hover">
                      <span>Let's Connect</span>
                    </Link>
                    {/* <div className="flex items-center gap-5.75 md:mt-0 mt-2.5">
                      <div>
                        <Image
                          src="/assets/images/avatar/pic1.png"
                          alt="Client"
                          width={60}
                          height={60}
                          className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1"
                        />
                        <Image
                          src="/assets/images/avatar/pic2.png"
                          alt="Client"
                          width={60}
                          height={60}
                          className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1"
                        />
                        <Image
                          src="/assets/images/avatar/pic3.png"
                          alt="Client"
                          width={60}
                          height={60}
                          className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1"
                        />
                      </div>
                      <div>
                        <span className="sm:text-lg text-base block text-secondary font-light">
                          <strong className="font-bold">2.5k</strong> client in
                        </span>
                        <span className="sm:text-lg text-base block text-secondary font-light">
                          the world
                        </span>
                      </div>
                    </div> */}
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
