"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function FirstVisitRouteRefresh() {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (!pathname || typeof window === "undefined") return;

    // Show themed loader briefly on each route change.
    setShowLoader(true);
    const hideLoaderTimer = window.setTimeout(() => {
      setShowLoader(false);
    }, 450);

    return () => window.clearTimeout(hideLoaderTimer);
  }, [pathname]);

  if (!showLoader) {
    return null;
  }

  return (
    <div
      id="route-loading-area"
      className="pxl-loader style-3"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="loading-dot-spinner">
        <div className="loading-dot"></div>
      </div>
    </div>
  );
}
