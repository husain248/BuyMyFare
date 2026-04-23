"use client";

import type { ReactNode } from "react";
import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type StickySidebarProps = {
  children: ReactNode;
  className?: string;
  breakpoint?: number;
};

export default function StickySidebar({
  children,
  className = "",
  breakpoint = 992,
}: StickySidebarProps) {
  const pathname = usePathname();
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let resizeObserver: ResizeObserver | null = null;

    const getBoundary = () => {
      const outer = outerRef.current;
      return outer?.parentElement?.parentElement ?? null;
    };

    const getTopOffset = () => {
      const header = document.querySelector(".site-header");
      if (!header) return 90;
      return Math.round(header.getBoundingClientRect().height + 10);
    };

    const syncStickyLayout = () => {
      const outer = outerRef.current;
      const inner = innerRef.current;
      if (!outer || !inner) return;

      if (window.innerWidth < breakpoint) {
        outer.style.minHeight = "0px";
        inner.style.position = "static";
        inner.style.top = "auto";
        inner.style.transform = "none";
        inner.style.willChange = "auto";
        return;
      }

      const boundary = getBoundary();
      if (!boundary) return;

      const topOffset = getTopOffset();
      const trackHeight = Math.max(
        boundary.getBoundingClientRect().height,
        inner.offsetHeight,
      );
      outer.style.minHeight = `${trackHeight}px`;
      inner.style.position = "sticky";
      inner.style.top = `${topOffset}px`;
      inner.style.transform = "none";
      inner.style.willChange = "auto";
    };

    syncStickyLayout();

    if (outerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        syncStickyLayout();
      });
      resizeObserver.observe(outerRef.current);
      const boundary = getBoundary();
      if (boundary) {
        resizeObserver.observe(boundary);
      }
    }

    if (innerRef.current && resizeObserver) {
      resizeObserver.observe(innerRef.current);
    }

    window.addEventListener("resize", syncStickyLayout);

    if (document.fonts?.ready) {
      document.fonts.ready.then(syncStickyLayout);
    }

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", syncStickyLayout);
    };
  }, [breakpoint, pathname]);

  return (
    <div ref={outerRef} className={className}>
      <div
        ref={innerRef}
        style={{
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}
