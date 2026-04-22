"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STORAGE_PREFIX = "first-visit-refresh:";

export default function FirstVisitRouteRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || typeof window === "undefined") return;

    const key = `${STORAGE_PREFIX}${pathname}`;
    const hasRefreshed = sessionStorage.getItem(key);

    if (!hasRefreshed) {
      sessionStorage.setItem(key, "1");
      window.location.reload();
    }
  }, [pathname]);

  return null;
}
