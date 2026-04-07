"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

function runInit() {
  const w = window as any;
  try {
    if (typeof w.plexify === "function") w.plexify().init();
  } catch {}
  try {
    if (typeof w.plexifyCarousel === "function") w.plexifyCarousel().load();
  } catch {}
  try {
    if (typeof w.plexifyCarouselAround === "function")
      w.plexifyCarouselAround();
  } catch {}
}

export default function ScriptInitializer() {
  const pathname = usePathname();

  // Re-run init on every client-side route change
  useEffect(() => {
    const timer = setTimeout(runInit, 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Load custom.js here (client component) so we can use onReady
  return (
    <Script
      src="/assets/js/custom.js"
      strategy="afterInteractive"
      onReady={() => {
        runInit();
        // Run again after images settle
        setTimeout(runInit, 800);
      }}
    />
  );
}
