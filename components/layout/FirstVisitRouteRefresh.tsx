"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const STORAGE_PREFIX = "first-visit-refresh:";

export default function FirstVisitRouteRefresh() {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (!pathname || typeof window === "undefined") return;

    const key = `${STORAGE_PREFIX}${pathname}`;
    const hasRefreshed = sessionStorage.getItem(key);

    if (!hasRefreshed) {
      setShowLoader(true);
      sessionStorage.setItem(key, "1");
      const reloadTimer = window.setTimeout(() => {
        window.location.reload();
      }, 220);

      return () => window.clearTimeout(reloadTimer);
    }

    setShowLoader(false);
  }, [pathname]);

  if (!showLoader) {
    return null;
  }

  return (
    <div
      id="loading-area"
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
