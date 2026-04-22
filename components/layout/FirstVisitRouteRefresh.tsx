"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const STORAGE_PREFIX = "first-visit-refresh:";

export default function FirstVisitRouteRefresh() {
  const pathname = usePathname();
  const router = useRouter();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (!pathname || typeof window === "undefined") return;

    const key = `${STORAGE_PREFIX}${pathname}`;
    const hasRefreshed = sessionStorage.getItem(key);

    if (!hasRefreshed) {
      setShowLoader(true);
      sessionStorage.setItem(key, "1");
      const refreshTimer = window.setTimeout(() => {
        // Soft refresh avoids "page could not load" flashes from hard reload.
        router.refresh();
      }, 220);
      const hideLoaderTimer = window.setTimeout(() => {
        setShowLoader(false);
      }, 1200);

      return () => {
        window.clearTimeout(refreshTimer);
        window.clearTimeout(hideLoaderTimer);
      };
    }

    setShowLoader(false);
  }, [pathname, router]);

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
