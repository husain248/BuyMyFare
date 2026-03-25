import Link from 'next/link';

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
                                    <img src="/assets/images/about/img4.png" alt="img" className="content__img size-full object-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <div className="3xl:ps-28 3xl:pe-71.5 px-3.75 xl:pt-35.25 xl:pb-30 py-7.5 flex flex-col h-full">
                                <div className="flex-1">
                                    <h2 className="xl:text-5xl lg:text-4xxl sm:text-4xl font-semibold text-3xl headline">
                                        Our Mission, Your Success
                                    </h2>
                                    <p className="sm:text-xl/7.5 text-lg text-textgray mb-2.5 py-3.75">At Web design agency, our mission is simple: to turn your ideas into impactful realities. We are dedicated to providing innovative, creative solutions that drive growth, elevate brands, and make a lasting impact.</p>
                                </div>
                                <div className="md:flex items-center gap-5.75">
                                    <Link href="/team-1" className="btn btn-primary btn-hover">
                                        <span>Join our team</span>
                                    </Link>
                                    <div className="flex items-center gap-5.75 md:mt-0 mt-2.5">
                                        <div>
                                            <img src="/assets/images/avatar/pic1.png" alt="img" className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1" />
                                            <img src="/assets/images/avatar/pic2.png" alt="img" className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1" />
                                            <img src="/assets/images/avatar/pic3.png" alt="img" className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1" />
                                        </div>
                                        <div>
                                            <span className="sm:text-lg text-base block text-secondary font-light"><strong className="font-bold">2.5k</strong> client in</span>
                                            <span className="sm:text-lg text-base block text-secondary font-light">the world</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content--sticky xl:sticky xl:top-0 bg-light">
                    <div className="grid grid-cols-12 xl:gap-5">
                        <div className="xl:col-span-6 col-span-12">
                            <div className="relative z-1 h-full">
                                <div className="overflow-hidden h-auto">
                                    <img src="/assets/images/about/img5.png" alt="img" className="content__img size-full object-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <div className="3xl:ps-28 3xl:pe-71.5 px-3.75 xl:pt-35.25 xl:pb-30 py-7.5 flex flex-col h-full">
                                <div className="flex-1">
                                    <h2 className="xl:text-5xl lg:text-4xxl sm:text-4xl text-3xl headline font-semibold">
                                        The Visionaries Behind the Brands
                                    </h2>
                                    <p className="sm:text-xl/7.5 text-lg text-textgray mb-2.5 py-3.75">At Web design agency, our mission is simple: to turn your ideas into impactful realities. We are dedicated to providing innovative, creative solutions that drive growth, elevate brands, and make a lasting impact.</p>
                                </div>
                                <div className="md:flex items-center gap-5.75">
                                    <Link href="/team-1" className="btn btn-primary btn-hover">
                                        <span>Join our team</span>
                                    </Link>
                                    <div className="flex items-center gap-5.75 md:mt-0 mt-2.5">
                                        <div>
                                            <img src="/assets/images/avatar/pic1.png" alt="img" className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1" />
                                            <img src="/assets/images/avatar/pic2.png" alt="img" className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1" />
                                            <img src="/assets/images/avatar/pic3.png" alt="img" className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1" />
                                        </div>
                                        <div>
                                            <span className="sm:text-lg text-base block text-secondary font-light"><strong className="font-bold">2.5k</strong> client in</span>
                                            <span className="sm:text-lg text-base block text-secondary font-light">the world</span>
                                        </div>
                                    </div>
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
