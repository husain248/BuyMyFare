"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const RECOVERY_KEY_PREFIX = "__route_load_recovered__";

function getErrorMessage(reason: unknown): string {
  if (!reason) return "";
  if (typeof reason === "string") return reason;
  if (typeof reason === "object" && reason !== null) {
    const maybeMessage = (reason as { message?: unknown }).message;
    if (typeof maybeMessage === "string") return maybeMessage;
  }
  return "";
}

function isRecoverableRouteLoadError(message: string): boolean {
  const text = message.toLowerCase();
  return (
    text.includes("failed to fetch rsc payload") ||
    text.includes("chunkloaderror") ||
    text.includes("loading chunk") ||
    text.includes("dynamically imported module")
  );
}

export default function RouteLoadRecovery() {
  const pathname = usePathname() || "/";

  useEffect(() => {
    if (typeof window === "undefined") return;

    const recoveryKey = `${RECOVERY_KEY_PREFIX}:${pathname}`;

    const attemptRecovery = (message: string) => {
      if (!isRecoverableRouteLoadError(message)) return;
      if (window.sessionStorage.getItem(recoveryKey) === "1") return;

      window.sessionStorage.setItem(recoveryKey, "1");
      window.location.reload();
    };

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      const message = getErrorMessage(event.reason);
      attemptRecovery(message);
    };

    const onError = (event: ErrorEvent) => {
      const message =
        event.message || getErrorMessage(event.error) || getErrorMessage(event);
      attemptRecovery(message);
    };

    window.addEventListener("unhandledrejection", onUnhandledRejection);
    window.addEventListener("error", onError);

    return () => {
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
      window.removeEventListener("error", onError);
    };
  }, [pathname]);

  return null;
}
