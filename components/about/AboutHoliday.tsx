export default function AboutHoliday() {
  return (
    <section className="2xl:py-40 lg:py-30 sm:py-25 py-18 relative z-1 after:absolute after:bottom-0 lg:after:-left-55 after:left-0 after:size-full after:bg-no-repeat after:bg-bottom-left after:bg-[url('/assets/images/background/bg2.png')] after:-z-1 max-xl:after:bg-contain before:absolute before:top-0 before:right-0 before:size-full before:bg-no-repeat before:bg-top-right before:bg-[url('/assets/images/background/bg1.png')] before:-z-1">
        <div className="container">
            <div className="xl:mb-10 sm:mb-5 mb-2.5">
            <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase headline">Enjoy Your Holiday</h2>
        </div>
            <div className="row">
            <div className="xl:w-1/3 w-full">
                    <div className="mb-10 relative after:absolute after:top-full after:right-[20%] after:w-px xl:after:h-100 after:h-60 after:bg-black/50 max-xl:after:hidden">
                    <p className="xl:text-xl sm:text-lg text-sm font-normal lg:mb-10 sm:mb-5 mb-2.5 sm:pe-7.5">Enjoy your holiday with unforgettable moments, scenic views, local flavors, and carefree, joyful travel experiences.</p>
                </div>
            </div>
            <div className="xl:w-2/3 w-full">
                <div className="row">
                    <div className="lg:w-2/5 md:w-1/2 w-full mb-5">
                        <div className="p-5 rounded-2lg bg-[#F2EFEA]">
                            <div className="relative overflow-hidden rounded-2lg">
                                <img src="/assets/images/tour/style3/img1.png" alt="" className="size-full object-cover" />
                            </div>
                            <div className="pb-2.5 pt-4 px-7.5 text-center">
                                <h3 className="text-2xl font-medium mb-2.5 uppercase">Restaurants</h3>
                                <p className="text-base">Savor local flavors at top-rated spots.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/5 md:w-1/2 w-full mb-5">
                        <div className="p-5 rounded-2lg bg-[#F2EFEA]">
                            <div className="relative overflow-hidden rounded-2lg">
                                <img src="/assets/images/tour/style3/img2.png" alt="" className="size-full object-cover" />
                            </div>
                            <div className="pb-2.5 pt-4 px-7.5 text-center">
                                <h3 className="text-2xl font-medium mb-2.5 uppercase">Sightseeing</h3>
                                <p className="text-base">Explore iconic sights and hidden gems.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-end">
                    <div className="lg:w-2/5 md:w-1/2 w-full mb-5">
                        <div className="p-5 rounded-2lg bg-[#F2EFEA]">
                            <div className="relative overflow-hidden rounded-2lg">
                                <img src="/assets/images/tour/style3/img3.png" alt="" className="size-full object-cover" />
                            </div>
                            <div className="pb-2.5 pt-4 px-7.5 text-center">
                                <h3 className="text-2xl font-medium mb-2.5 uppercase">Where to Stay</h3>
                                <p className="text-base">Find comfort in top-rated stays.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/5 md:w-1/2 w-full mb-5">
                        <div className="p-5 rounded-2lg bg-[#F2EFEA]">
                            <div className="relative overflow-hidden rounded-2lg">
                                <img src="/assets/images/tour/style3/img4.png" alt="" className="size-full object-cover" />
                            </div>
                            <div className="pb-2.5 pt-4 px-7.5 text-center">
                                <h3 className="text-2xl font-medium mb-2.5 uppercase">Shops & Boutiques</h3>
                                <p className="text-base">Discover unique finds and local treasures.</p>
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
