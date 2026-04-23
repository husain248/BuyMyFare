import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Script from "next/script";
import ScriptInitializer from "../components/layout/ScriptInitializer";
import VendorLibraryLoader from "../components/layout/VendorLibraryLoader";
import WhatsAppFloat from "../components/common/WhatsAppFloat";
import { TripPlannerModalProvider } from "../context/TripPlannerModalContext";
import FirstVisitRouteRefresh from "../components/layout/FirstVisitRouteRefresh";
import RouteLoadRecovery from "../components/layout/RouteLoadRecovery";

export const metadata: Metadata = {
  title: "BuyMyFare | Flight Tickets, Tour Packages & Travel Deals",
  description:
    "BuyMyFare offers affordable flight tickets, customizable tour packages, and travel deals. Plan your next adventure with great prices and easy booking.",
  keywords:
    "BuyMyFare, flight tickets, tour packages, travel deals, flight booking, tour booking, travel deals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/assets/images/favicon.png" />
        <link
          rel="preload"
          href="/assets/icons/font-awesome/css/all.min.css"
          as="style"
        />
        <link
          rel="preload"
          href="/assets/icons/line-awesome/css/line-awesome.min.css"
          as="style"
        />
        <link
          rel="preload"
          href="/assets/icons/feather/css/iconfont.css"
          as="style"
        />
        <link
          rel="preload"
          href="/assets/vendor/swiper/swiper-bundle.min.css"
          as="style"
        />

        <link
          rel="stylesheet"
          href="/assets/icons/font-awesome/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/icons/line-awesome/css/line-awesome.min.css"
        />
        <link rel="stylesheet" href="/assets/icons/feather/css/iconfont.css" />
        <link
          rel="stylesheet"
          href="/assets/vendor/swiper/swiper-bundle.min.css"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <TripPlannerModalProvider>
          <RouteLoadRecovery />
          <FirstVisitRouteRefresh />
          <VendorLibraryLoader />
          <ScriptInitializer />
          <div className="page-wraper">
            <Header />
            <div id="smooth-wrapper">
              <div id="smooth-content">
                <main className="page-content">{children}</main>
                <Footer />
              </div>
            </div>
            <WhatsAppFloat />
          </div>
        </TripPlannerModalProvider>

        {/* Vendor scripts loaded after hydration to avoid DOM mismatches */}
        <Script
          src="/assets/vendor/gsap/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/gsap/ScrollSmoother.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/SplitText/SplitText.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/gsap/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/gsap/Draggable.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/gsap/InertiaPlugin.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/xmenu/xmenu.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/animation.js" strategy="afterInteractive" />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="K2/H3F9UoHH8ojZlUpYkNQ"
          async
        />

        {/* custom.js loaded via ScriptInitializer (client component) so onLoad can be used */}
      </body>
    </html>
  );
}
