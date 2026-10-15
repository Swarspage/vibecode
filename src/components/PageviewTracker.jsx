import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PageviewTracker() {
  const location = useLocation();
  const lastTrackedRef = useRef("");

  useEffect(() => {
    const currentPath = location.pathname + location.search;
    if (lastTrackedRef.current === currentPath) return;
    lastTrackedRef.current = currentPath;

    // Small delay ensures route components have updated document.title
    const timer = setTimeout(() => {
      const screenParam =
        typeof window !== "undefined" && window.screen
          ? `${window.screen.width},${window.screen.height},${window.devicePixelRatio || 1}`
          : "";

      const params = new URLSearchParams({
        p: currentPath,
        t: typeof document !== "undefined" ? document.title : "",
        r: typeof document !== "undefined" ? document.referrer : "",
      });

      if (screenParam) {
        params.set("s", screenParam);
      }

      const url = `/api/track?${params.toString()}`;

      if (import.meta.env.DEV) {
        console.log(`[PageviewTracker] Tracked: ${currentPath}`);
      }

      try {
        if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
          navigator.sendBeacon(url);
        } else {
          fetch(url, { keepalive: true }).catch(() => {});
        }
      } catch {
        // Ignore network errors
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);

  return null;
}

