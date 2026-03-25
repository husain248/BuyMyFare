'use client';

import Link from 'next/link';

export default function TicketBookings() {
  return (
    <section className="2xl:py-40 lg:py-30 sm:py-25 py-18 bg-light relative z-1 after:absolute after:bottom-0 lg:after:-right-55 after:right-0 after:size-full after:bg-no-repeat after:bg-bottom-right after:bg-[url(/assets/images/background/bg2.png)] after:-z-1 max-xl:after:bg-contain overflow-hidden">
        <div className="container">
            <div className="row" id="masonry" data-masonry='{"percentPosition": true}'>
                <div className="grid-sizer w-1/12"></div>
                <div className="card-container xl:w-1/2 w-full mb-5">
                    <span className="text-white font-main" style={{ textTransform: 'capitalize', fontSize: '32px', color: '#072032' }}>Seamless Ticket Bookings</span>
                    <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase lg:mb-7.5 headline">Your Journey Starts Here </h2>
                    <p>Book international flights with ease and confidence. Whether for business or leisure, enjoy hassle-free bookings and competitive fares tailored to your needs.</p>
                </div>
                
                {[
                  { img: 'img1.png', title: 'Vancouver to Mumbai', tag: 'One-Way Trip' },
                  { img: 'img2.png', title: 'Vancouver to Delhi', tag: 'One-Way Trip' },
                  { img: 'img3.png', title: 'Calgary to Seattle', tag: 'Round Trip' },
                  { img: 'img4.png', title: 'Calgary to Las Vegas', tag: 'Round Trip' }
                ].map((ticket, idx) => (
                    <div className="card-container xl:w-1/2 w-full mb-5" key={idx}>
                        <div className="relative z-1 p-2.5 h-full duration-200 bg-white rounded-2xl md:flex group">
                            <div className="rounded-xxl xl:w-73.75 md:w-62.5 w-full xl:min-w-73.75 md:min-w-62.5 min-w-full md:h-full sm:h-62.5 h-50 relative overflow-hidden before:absolute before:top-0 before:-left-[75%] before:z-0 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                                <img src={`/assets/images/tour/style2/${ticket.img}`} alt={ticket.title} className="size-full object-cover" />
                                <span className="absolute top-5 left-5 rounded-3xl text-xs font-medium px-2.5 py-1.5 bg-green text-secondary">Hot Deal</span>
                            </div>
                            <div className="sm:p-7 sm:pe-5 sm:pb-5 p-4 relative flex flex-col w-full">
                                <div className="mb-2.5 flex-1">
                                    <ul className="flex flex-wrap items-center gap-1.25 mb-1.5">
                                        <li className="font-semibold text-xs uppercase">{ticket.tag}</li>
                                    </ul>
                                    <h3 className="xl:text-2xl text-xl uppercase mb-2.5"><Link href="/tour-packages" className="link-hover">{ticket.title}</Link></h3>
                                    <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <h4 className="text-2xxl">
                                        $1299
                                        <del className="text-base text-black/30 font-normal ml-2">$1500</del>
                                    </h4>
                                    <Link href="/tour-packages" aria-label="View trip Packages" className="size-12.5 flex items-center justify-center rounded-full bg-primary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12H19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12 5L19 12L12 19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="card-container xl:w-1/2 w-full mb-5">
                    <Link href="/tour-packages" className="bg-white rounded-xxl flex items-center justify-center p-10 size-full sm:min-h-47.5 min-h-25">
                        <h4 className="sm:text-4xxl text-2xxl text-center">View All Packages</h4>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}
