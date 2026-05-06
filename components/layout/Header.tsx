"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { navRoutes } from "../../data/navigation";
import { useTripPlannerModal } from "../../context/TripPlannerModalContext";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, x: 0 });
  const pathname = usePathname();
  const { openModal } = useTripPlannerModal();

  const navRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const getActiveRouteIdx = () =>
    navRoutes.findIndex((route) =>
      route.path === "/" ? pathname === "/" : pathname.startsWith(route.path),
    );

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    const handleScroll = () => setIsFixed(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const updateIndicator = (el: HTMLElement | null) => {
    if (el && navRef.current) {
      const rect = el.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      setIndicatorStyle({ width: rect.width, x: rect.left - navRect.left });
    }
  };

  const syncIndicatorToActiveRoute = () => {
    const activeRouteIdx = getActiveRouteIdx();
    if (activeRouteIdx !== -1 && linkRefs.current[activeRouteIdx]) {
      updateIndicator(linkRefs.current[activeRouteIdx]);
    } else {
      setIndicatorStyle({ width: 0, x: 0 });
    }
  };

  useLayoutEffect(() => {
    syncIndicatorToActiveRoute();

    let secondFrame: number | null = null;
    const firstFrame = window.requestAnimationFrame(() => {
      syncIndicatorToActiveRoute();

      secondFrame = window.requestAnimationFrame(() => {
        syncIndicatorToActiveRoute();
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame !== null) {
        window.cancelAnimationFrame(secondFrame);
      }
    };
  }, [pathname, isFixed]);

  useEffect(() => {
    if (!navRef.current) return;

    const syncLater = () => {
      window.requestAnimationFrame(() => {
        syncIndicatorToActiveRoute();
      });
    };

    const resizeObserver = new ResizeObserver(() => {
      syncLater();
    });

    resizeObserver.observe(navRef.current);
    window.addEventListener("resize", syncLater);
    window.addEventListener("load", syncLater);

    if (document.fonts?.ready) {
      document.fonts.ready.then(syncLater);
    }

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", syncLater);
      window.removeEventListener("load", syncLater);
    };
  }, [pathname, isFixed]);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <header
      suppressHydrationWarning
      className={`site-header sticky-header-wrapper absolute top-0 left-0 w-full z-999 py-2.5 sm:py-0 lg:pt-7.5 [.sticky-header-wrapper.is-fixed]:fixed [.sticky-header-wrapper.is-fixed]:bg-white lg:[.sticky-header-wrapper.is-fixed]:pb-4 lg:[.sticky-header-wrapper.is-fixed]:pt-4 [.sticky-header-wrapper.is-fixed]:animate-headerSlideDown ${mounted && isFixed ? "is-fixed" : ""}`}
      style={mounted && isMobile && !isFixed ? { backgroundColor: "rgba(0,0,0,0.6)" } : undefined}
    >
      <div className="main-bar relative lg:text-white text-secondary w-full">
        <div className="container max-w-8xl flex items-center">
          {/* Logo */}
          <div
            className="flex items-center align-middle me-2 logo-dark"
            style={{ width: "200px" }}
          >
            <Link
              aria-label="Go to homepage"
              href="/"
              className="table-cell align-middle"
            >
              <Image
                src="/assets/images/Buy-My-Fare-Logo-L-1024x355.png"
                alt="logo"
                width={200}
                height={69}
                priority
                className="block h-auto w-[180px] sm:w-[200px] object-contain duration-500 [.sticky-header-wrapper.is-fixed_&]:hidden"
              />
              <Image
                src="/assets/images/Buy-My-Fare-Logo.png"
                alt="logo"
                width={200}
                height={69}
                className="hidden h-auto w-[180px] sm:w-[200px] object-contain duration-500 [.sticky-header-wrapper.is-fixed_&]:block"
              />
            </Link>
          </div>

          {/* Mobile hamburger */}
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

          {/* Mobile overlay */}
          <div
            className={`lg:hidden fixed top-0 left-0 bg-black size-full duration-300 z-999 menu-close fade-overlay ${isOpen ? "opacity-60 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
            onClick={closeMenu}
          />

          {/* Nav drawer */}
          <div
            className="flex lg:basis-auto lg:mx-auto max-lg:flex-col lg:justify-center justify-start lg:items-center max-lg:fixed max-lg:h-screen max-lg:px-5 max-lg:top-0 max-lg:z-9999 max-lg:w-72 max-lg:overflow-auto max-lg:duration-700 header-nav custom-scroll lg:rounded-6xl lg:bg-secondary/40 bg-white p-1.5"
            style={{
              left: isOpen ? "0" : "-300px",
              transition: "left 0.4s ease",
            }}
          >
            <div className="flex items-center relative z-9 py-6.25 lg:hidden w-33.75 h-15.25">
              <Link
                aria-label="Go to homepage"
                href="/"
                className="table-cell align-middle"
                onClick={closeMenu}
              >
                <Image
                  src="/assets/images/Buy-My-Fare-Logo.png"
                  alt="logo"
                  width={135}
                  height={61}
                  className="h-auto w-[135px] object-contain duration-500"
                />
              </Link>
            </div>

            <ul
              ref={navRef}
              className="lg:flex flex-wrap navbar-nav nav-wrapper relative"
              onMouseLeave={() => {
                setHoveredIdx(null);
                syncIndicatorToActiveRoute();
              }}
            >
              {/* Sliding indicator pill */}
              <li
                className="nav-indicator"
                style={{
                  position: "absolute",
                  top: "50%",
                  height: "38px",
                  backgroundColor: "white",
                  borderRadius: "999px",
                  transition: "transform 0.3s ease, width 0.3s ease",
                  zIndex: 0,
                  pointerEvents: "none",
                  width: `${indicatorStyle.width}px`,
                  transform: `translateY(-50%) translateX(${indicatorStyle.x}px)`,
                  visibility: indicatorStyle.width > 0 ? "visible" : "hidden",
                  opacity: indicatorStyle.width > 0 ? 1 : 0,
                }}
              />

              {navRoutes.map((route, idx) => {
                const isActive =
                  route.path === "/"
                    ? pathname === "/"
                    : pathname.startsWith(route.path);
                const isHovered = hoveredIdx === idx;

                // Desktop color logic:
                // - Hovered item → text-secondary (sits on white pill)
                // - Active item → text-secondary ONLY when nothing is hovered
                // - All other items → text-white (or text-secondary when header is fixed)
                const desktopTextColor = isHovered
                  ? "lg:text-secondary"
                  : isActive && hoveredIdx === null
                    ? isFixed
                      ? "lg:text-secondary"
                      : "lg:text-secondary"
                    : isFixed
                      ? "lg:text-secondary"
                      : "lg:text-white";

                return (
                  <li
                    key={idx}
                    className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group relative z-1"
                  >
                    <Link
                      ref={(el) => {
                        linkRefs.current[idx] = el;
                      }}
                      className={`lg:py-2.5 py-2 xl:px-4 lg:px-2 relative z-1 lg:inline-block block xl:text-sm text-2sm leading-none! font-medium rounded-8xl transition-all duration-300 nav-link
                        ${desktopTextColor}
                        max-lg:text-secondary
                        ${isActive ? "active" : ""}
                      `}
                      href={route.path}
                      onClick={(e) => {
                        // Use hard navigation for primary menu links to avoid
                        // intermittent App Router client-load failures on deploy.
                        e.preventDefault();
                        closeMenu();
                        window.location.assign(route.path);
                      }}
                      onMouseEnter={(e) => {
                        setHoveredIdx(idx);
                        updateIndicator(e.currentTarget);
                      }}
                    >
                      <span className="inline-block lg:leading-5 leading-7.5">
                        {route.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile social icons */}
            <div className="lg:hidden block max-lg:p-5 text-center mt-auto">
              <ul>
                {[
                  {
                    label: "Facebook",
                    icon: "fab fa-facebook-f",
                    href: "https://www.facebook.com/buymyfare",
                  },
                  {
                    label: "Instagram",
                    icon: "fab fa-instagram",
                    href: "https://www.instagram.com/buymyfare/",
                  },
                ].map(({ label, icon, href }) => (
                  <li key={label} className="inline-block mx-0.5">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={href}
                      aria-label={label}
                      className={`size-10 leading-10! border border-black/10 text-center text-secondary hover:bg-primary hover:border-primary ${icon}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA button */}
          <div className="extra-nav flex items-center h-12.5 3xl:pl-7.5 max-lg:ms-auto">
            <div className="flex items-center w-full">
              <ul className="lg:ml-5 sm:ml-3.75 flex items-center gap-5 w-full justify-between">
                <li className="inline-block max-xl:hidden">
                  <button
                    type="button"
                    className="btn btn-primary btn-hover light"
                    onClick={openModal}
                  >
                    <span>Plan Your Dream Trip</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
