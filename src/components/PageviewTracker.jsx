import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PageviewTracker() {
  const location = useLocation();
  const pollIntervalRef = useRef(null);

  useEffect(() => {
    const track = () => {
      if (window.goatcounter && typeof window.goatcounter.count === "function") {
        window.goatcounter.endpoint = "/api/gc/count";
        window.goatcounter.allow_local = true;
        window.goatcounter.count({
          path: location.pathname + location.search,
        });
        return true;
      }
      return false;
    };

    if (!track()) {
      let attempts = 0;
      if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
      pollIntervalRef.current = setInterval(() => {
        attempts += 1;
        if (track() || attempts > 20) {
          clearInterval(pollIntervalRef.current);
        }
      }, 100);
    }

    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
      }
    };
  }, [location.pathname, location.search]);

  return null;
}
