'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

const navRoutes = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Tour Packages', path: '/' },
  { label: 'Ticket Booking', path: '/' },
  { label: 'Testimonials', path: '/' },
  { label: 'Blogs', path: '/' },
  { label: 'Contact', path: '/' },
];

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, x: 0 });
  const pathname = usePathname();
  
  const navRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

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

  // Sync indicator with active link or hover
  const updateIndicator = (el: HTMLElement | null) => {
    if (el && navRef.current) {
      const rect = el.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      setIndicatorStyle({
        width: rect.width,
        x: rect.left - navRect.left,
      });
    }
  };

  useEffect(() => {
    // Find active link on load/route change
    const activeRouteIdx = navRoutes.findIndex(route => route.path === pathname);
    if (activeRouteIdx !== -1 && linkRefs.current[activeRouteIdx]) {
      updateIndicator(linkRefs.current[activeRouteIdx]);
    }
  }, [pathname]);

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
              <img src="/assets/images/logo.svg" alt="" className="object-contain duration-500 [.sticky-header-wrapper.is-fixed_&]:block hidden" />
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
                <img src="/assets/images/logo.svg" alt="" className="object-contain duration-500" />
              </Link>
            </div>
            <ul
              ref={navRef}
              className="lg:flex flex-wrap navbar-nav nav-wrapper relative"
              onMouseLeave={() => {
                const activeRouteIdx = navRoutes.findIndex(route => route.path === pathname);
                if (activeRouteIdx !== -1 && linkRefs.current[activeRouteIdx]) {
                  updateIndicator(linkRefs.current[activeRouteIdx]);
                } else {
                  setIndicatorStyle({ width: 0, x: 0 });
                }
              }}
            >
              <li
                className="nav-indicator"
                style={{
                  position: 'absolute',
                  top: '50%',
                  height: '38px',
                  backgroundColor: 'white',
                  borderRadius: '999px',
                  transition: 'transform 0.3s ease, width 0.3s ease',
                  zIndex: 0,
                  pointerEvents: 'none',
                  width: `${indicatorStyle.width}px`,
                  transform: `translateY(-50%) translateX(${indicatorStyle.x}px)`,
                  visibility: indicatorStyle.width > 0 ? 'visible' : 'hidden',
                  opacity: indicatorStyle.width > 0 ? 1 : 0
                }}
              ></li>
              {navRoutes.map((route, idx) => {
                const isActive = pathname === route.path;
                return (
                  <li key={idx} className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group relative z-1">
                    <Link
                      ref={el => { linkRefs.current[idx] = el; }}
                      className={`lg:py-2.5 py-2 xl:px-4 lg:px-2 relative z-1 lg:inline-block block xl:text-base text-2sm leading-none! font-medium rounded-8xl transition-all duration-300 nav-link ${isActive || isFixed ? 'text-secondary active' : 'text-white'} lg:group-hover:text-secondary`}
                      href={route.path}
                      onClick={closeMenu}
                      onMouseEnter={(e) => updateIndicator(e.currentTarget)}
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
        </div>
      </div>
    </header>
  );
}
