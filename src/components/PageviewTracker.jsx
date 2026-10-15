import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PageviewTracker() {
  const location = useLocation();
  const lastTrackedRef = useRef("");

  useEffect(() => {
    const currentPath = location.pathname + location.search;
    if (lastTrackedRef.current === currentPath) return;
    lastTrackedRef.current = currentPath;

    const params = new URLSearchParams({
      p: currentPath,
      t: typeof document !== "undefined" ? document.title : "",
      r: typeof document !== "undefined" ? document.referrer : "",
    });

    const url = `/api/track?${params.toString()}`;

    try {
      if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
        navigator.sendBeacon(url);
      } else {
        fetch(url, { keepalive: true }).catch(() => {});
      }
    } catch {
      // Ignore network errors
    }
  }, [location.pathname, location.search]);

  return null;
}
