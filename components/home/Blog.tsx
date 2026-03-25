'use client';

import Link from 'next/link';

export default function Blog() {
  return (
    <section className="2xl:py-40 lg:py-30 sm:py-25 py-18 relative z-1 bg-light">
        <div className="container">
            <div className="lg:mb-10 sm:mb-5 mb-2.5">
                <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase headline">From Our Blog</h2>
            </div>
            <div className="row">
                <div className="lg:w-1/3 w-full">
                    <div className="mb-10 relative after:absolute after:top-full after:right-[20%] after:w-px xl:after:h-100 after:h-60 after:bg-black/50 max-lg:after:hidden">
                        <p className="xl:text-xl sm:text-lg text-sm font-normal lg:mb-10 sm:mb-5 mb-2.5">Explore insightful articles, expert tips, and the latest trends to help you grow your business and stay ahead in your industry.</p>
                        <span className="absolute lg:top-40 top-0 left-5 flex flex-col items-center justify-center xl:size-49 size-40 z-1 -rotate-20 max-sm:hidden">
                            <span className="text-secondary font-title font-medium xl:text-2sm text-sm">Save Big</span>
                            <span className="text-secondary font-title font-semibold xl:text-xl text-base">Upto </span>
                            <span className="text-secondary font-title font-semibold xl:text-3xxl text-2xxl">70% Off</span>
                            <img src="/assets/images/star.png" alt="" className="absolute -z-1 animate-rotate xl:size-49 size-40" />
                        </span>
                    </div>
                </div>
                <div className="lg:w-2/3 w-full">
                    {[
                      { img: 'img1.png', tag: 'Insurance', title: 'Why Travel Insurance is a Must-Have for Every Vacation', thumb: 'pic1.png' },
                      { img: 'img2.png', tag: 'Explore', title: 'The Ultimate Travel Checklist for Canadians Exploring the World', thumb: 'pic2.png' },
                      { img: 'img3.png', tag: 'Affordable', title: 'Top 10 Affordable International Destinations for Canadian Travelers in 2025', thumb: 'pic3.png' }
                    ].map((blog, idx) => (
                        <div className="relative z-1 duration-200 md:flex group mb-5 bg-white rounded-xxl" key={idx}>
                            <div className="rounded-xxl xl:w-73.75 md:w-62.5 w-full xl:min-w-73.75 md:min-w-62.5 min-w-full md:h-auto sm:h-62.5 h-50 relative overflow-hidden before:absolute before:top-0 before:-left-[75%] before:z-0 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                                <img src={`/assets/images/blog/list/${blog.img}`} alt="" className="size-full object-cover" />
                            </div>
                            <div className="md:ps-7.5 p-2.5 py-5 relative flex flex-col">
                                <div className="mb-2.5 flex-1">
                                    <span className="rounded-2lg text-sm font-normal px-2.5 py-1.25 bg-[#EBEBEB] text-secondary inline-block mb-3">{blog.tag}</span>
                                    <h3 className="xl:text-3xl text-xl font-medium mb-2.5 uppercase"><Link href="/blog-details">{blog.title}</Link></h3>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <img src={`/assets/images/avatar/${blog.thumb}`} alt="" className="size-10 rounded-full" />
                                        <ul className="flex items-center gap-2.5">
                                            <li className="text-base text-black/40 ">By <Link href="/blog-details" className="text-black">Admin</Link></li>
                                            <li className="text-base text-black/40 ">|   January 26, 2025 </li>
                                        </ul>
                                    </div>
                                    <Link href="/blog-details" aria-label="Read blog post" className="size-12.5 flex items-center justify-center rounded-full bg-primary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7 7H17V17" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
