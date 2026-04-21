"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __vendorLibsReady?: boolean;
    THREE?: any;
    Swiper?: any;
    SwiperModules?: any;
    Masonry?: any;
    Isotope?: any;
    imagesLoaded?: any;
    hoverEffect?: any;
  }
}

export default function VendorLibraryLoader() {
  useEffect(() => {
    let cancelled = false;

    const loadVendorLibraries = async () => {
      try {
        const [threeModule, swiperModule, swiperModules, masonryModule, isotopeModule, imagesLoadedModule, hoverEffectModule] =
          await Promise.all([
            import("three"),
            import("swiper"),
            import("swiper/modules"),
            import("masonry-layout"),
            import("isotope-layout"),
            import("imagesloaded"),
            import("hover-effect"),
          ]);

        if (cancelled) return;

        // Expose globals expected by existing legacy scripts.
        window.THREE = threeModule;
        window.Swiper =
          swiperModule.default ||
          (swiperModule as any).Swiper ||
          (swiperModule as any);
        window.SwiperModules = swiperModules;
        window.Masonry = masonryModule.default;
        window.Isotope = isotopeModule.default;
        window.imagesLoaded = imagesLoadedModule.default;
        window.hoverEffect = hoverEffectModule.default;

        window.__vendorLibsReady = true;
        window.dispatchEvent(new Event("vendor-libs-ready"));
      } catch (error) {
        console.error("Failed to load vendor libraries from npm packages:", error);
      }
    };

    loadVendorLibraries();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
