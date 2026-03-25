'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const navRoutes = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about-us' },
  { label: 'Tour Packages', path: '/tour-packages' },
  { label: 'Ticket Booking', path: '/ticket-booking' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <header className={`site-header sticky-header-wrapper absolute top-0 left-0 w-full z-999 lg:pt-7.5 [.sticky-header-wrapper.is-fixed]:fixed [.sticky-header-wrapper.is-fixed]:bg-white lg:[.sticky-header-wrapper.is-fixed]:pb-4 lg:[.sticky-header-wrapper.is-fixed]:pt-4 [.sticky-header-wrapper.is-fixed]:animate-headerSlideDown ${isFixed ? 'is-fixed' : ''}`}>
      <div className="main-bar relative lg:text-white text-secondary w-full">
        <div className="container-fluid flex items-center">
          {/* Website Logo */}
          <div className="flex items-center align-middle me-2 logo-dark" style={{ width: '200px' }}>
            <Link aria-label="Go to homepage" href="/" className="table-cell align-middle">
              <img src="/assets/images/Buy-My-Fare-Logo-L-1024x355.png" alt="logo" className="object-contain duration-500 block [.sticky-header-wrapper.is-fixed_&]:hidden" />
              <img src="/assets/images/logo-primary.png" alt="" className="object-contain duration-500 [.sticky-header-wrapper.is-fixed_&]:block hidden" />
            </Link>
          </div>

          <button 
            aria-label="Open menu" 
            className="xmenu-toggler lg:hidden float-right sm:mt-4.5 sm:mb-4 sm:ml-7 ml-4 my-2.5 size-11 bg-white rounded-md relative cursor-pointer max-lg:order-1 [.sticky-header-wrapper.is-fixed_&]:bg-secondary" 
            type="button"
            onClick={toggleMenu}
          >
            <span className="block absolute left-2.5 h-0.5 rounded-px bg-secondary [.sticky-header-wrapper.is-fixed_&]:bg-white duration-300 top-3.25 w-5.5"></span>
            <span className="block absolute left-2.5 h-0.5 rounded-px bg-secondary [.sticky-header-wrapper.is-fixed_&]:bg-white duration-0 top-5.5 w-6.25"></span>
            <span className="block absolute left-2.5 h-0.5 rounded-px bg-secondary [.sticky-header-wrapper.is-fixed_&]:bg-white duration-300 top-8 w-4"></span>
          </button>
          <div 
            className={`lg:hidden fixed top-0 left-0 bg-black size-full duration-300 z-999 menu-close fade-overlay ${isOpen ? 'opacity-60 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
            onClick={closeMenu}
          ></div>
          
          <div
            className="flex lg:basis-auto lg:mx-auto max-lg:flex-col lg:justify-center justify-start lg:items-center max-lg:fixed max-lg:h-screen max-lg:px-5 max-lg:top-0 max-lg:z-9999 max-lg:w-72 max-lg:overflow-auto max-lg:duration-700 header-nav custom-scroll lg:rounded-6xl lg:bg-secondary/40 bg-white p-1.5"
            style={{ left: isOpen ? '0' : '-300px', transition: 'left 0.4s ease' }}
          >
            <div className="flex items-center relative z-9 py-6.25 lg:hidden w-33.75 h-15.25">
              <Link aria-label="Go to homepage" href="/" className="table-cell align-middle" onClick={closeMenu}>
                <img src="/assets/images/logo-primary.png" alt="" className="object-contain duration-500" />
              </Link>
            </div>
            <ul className="lg:flex flex-wrap navbar-nav nav-wrapper">
              <li className="nav-indicator"></li>
              {navRoutes.map((route, idx) => {
                const isActive = pathname === route.path;
                return (
                  <li key={idx} className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group">
                    <Link 
                      className={`lg:py-2.5 py-2 xl:px-4 lg:px-2 relative z-1 lg:inline-block block xl:text-base text-2sm leading-none! font-medium rounded-8xl lg:group-hover:text-heading nav-link ${isActive ? 'active' : ''}`} 
                      href={route.path}
                      onClick={closeMenu}
                    >
                      <span className="inline-block lg:leading-5 leading-7.5">{route.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="lg:hidden block max-lg:p-5 text-center mt-auto">
                <ul>
                  <li className="inline-block mx-0.5">
                    <a rel="noopener noreferrer" aria-label="Facebook" className="size-10 leading-10! border border-black/10 text-center text-secondary hover:bg-primary hover:border-primary fab fa-facebook-f" target="_blank" href="/"></a>
                  </li>
                  <li className="inline-block mx-0.5">
                    <a rel="noopener noreferrer" aria-label="Twitter" className="size-10 leading-10! border border-black/10 text-center text-secondary hover:bg-primary hover:border-primary fab fa-twitter" target="_blank" href="/"></a>
                  </li>
                  <li className="inline-block mx-0.5">
                    <a rel="noopener noreferrer" aria-label="Linkedin" className="size-10 leading-10! border border-black/10 text-center text-secondary hover:bg-primary hover:border-primary fab fa-linkedin-in" target="_blank" href="/"></a>
                  </li>
                  <li className="inline-block mx-0.5">
                    <a rel="noopener noreferrer" aria-label="Instagram" className="size-10 leading-10! border border-black/10 text-center text-secondary hover:bg-primary hover:border-primary fab fa-instagram" target="_blank" href="/"></a>
                  </li>
                </ul>
              </div>
          </div>
          
          <div className="extra-nav flex items-center h-12.5 3xl:pl-7.5 max-lg:ms-auto">
            <div className="flex items-center w-full">
              <ul className="lg:ml-5 sm:ml-3.75 flex items-center gap-5 w-full justify-between">
                <li className="inline-block max-xl:hidden">
                  <Link href="/book-now" className="btn btn-primary btn-hover light">
                    <span>Plan Your Dream Trip</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="fixed -top-full left-0 w-full h-screen bg-white z-999 flex items-center justify-center p-8 duration-500 xmenu-search [.xmenu-search.show]:top-0" id="searchOverlay1">
            <div className="container">
              <form className="w-full text-primary text-3xl font-light text-left outline-none p-1.5 duration-500" action="#">
                <div className="relative flex flex-wrap items-stretch w-full mb-5 border-b-2 border-secondary">
                  <input type="text" className="block relative flex-1 w-[1%] h-12.5 py-2.5 px-5 font-normal text-xl text-secondary duration-300" aria-label="Text input with dropdown button" placeholder="Search Product" />
                  <button className="relative z-2" type="button" aria-label="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <g clipPath="url(#clip0_1362_3437)">
                        <path d="M16.4562 15.4843L12.4102 11.2762C13.4505 10.0396 14.0205 8.48359 14.0205 6.86374C14.0205 3.07913 10.9413 0 7.15671 0C3.3721 0 0.292969 3.07913 0.292969 6.86374C0.292969 10.6484 3.3721 13.7275 7.15671 13.7275C8.57751 13.7275 9.93145 13.299 11.089 12.4854L15.1658 16.7255C15.3362 16.9024 15.5654 17 15.811 17C16.0435 17 16.264 16.9114 16.4314 16.7502C16.7871 16.4079 16.7985 15.8403 16.4562 15.4843ZM7.15671 1.79054C9.95413 1.79054 12.2299 4.06632 12.2299 6.86374C12.2299 9.66117 9.95413 11.9369 7.15671 11.9369C4.35929 11.9369 2.08351 9.66117 2.08351 6.86374C2.08351 4.06632 4.35929 1.79054 7.15671 1.79054Z" fill="#000"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1362_3437">
                          <rect width="17" height="17" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </form>
              <button type="button" aria-label="Close search" className="absolute right-8 top-8 text-gray-600 text-lg size-10 cursor-pointer rounded search-remove"><i className="fa fa-close"></i></button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
