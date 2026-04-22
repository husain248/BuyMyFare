"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

function runInit() {
  const w = window as any;
  if (!w.__vendorLibsReady) return;
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
  try {
    if (w.__plexifyGsapInstance) {
      if (typeof w.__plexifyGsapInstance.init === "function") {
        w.__plexifyGsapInstance.init();
      }
      if (typeof w.__plexifyGsapInstance.applySticky === "function") {
        w.__plexifyGsapInstance.applySticky();
      }
    }
    if (w.ScrollSmoother) {
      w.ScrollSmoother.get()?.refresh();
    }
  } catch {}
}

export default function ScriptInitializer() {
  const pathname = usePathname();

  // Re-run init on every client-side route change
  useEffect(() => {
    // Force each new route to start from the top.
    if (typeof window !== "undefined") {
      try {
        window.history.scrollRestoration = "manual";
      } catch {}
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      const w = window as any;
      try {
        if (w.ScrollSmoother?.get()) {
          w.ScrollSmoother.get().scrollTo(0, false);
        }
      } catch {}
    }

    const timer = setTimeout(runInit, 500);
    const topResetTimer = setTimeout(() => {
      const w = window as any;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      try {
        if (w.ScrollSmoother?.get()) {
          w.ScrollSmoother.get().scrollTo(0, false);
        }
      } catch {}
    }, 50);
    const onVendorReady = () => runInit();
    window.addEventListener("vendor-libs-ready", onVendorReady, { once: true });
    return () => {
      clearTimeout(timer);
      clearTimeout(topResetTimer);
      window.removeEventListener("vendor-libs-ready", onVendorReady);
    };
  }, [pathname]);

  // Load custom.js here (client component) so we can use onReady
  return (
    <Script
      src="/assets/js/custom.js"
      strategy="afterInteractive"
      onReady={() => {
        if ((window as any).__vendorLibsReady) {
          runInit();
          // Run again after images settle
          setTimeout(runInit, 800);
        } else {
          const onVendorReady = () => {
            runInit();
            setTimeout(runInit, 800);
          };
          window.addEventListener("vendor-libs-ready", onVendorReady, {
            once: true,
          });
        }
      }}
    />
  );
}
