import { useState, useEffect } from "react";

const COUNT_API_BASE = "https://countapi.mileshilliard.com/api/v1";
const COUNTER_KEY = "scaffold_swarshinde_visits";
const SESSION_STORAGE_KEY = "scaffold_session_viewed";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const isDev = import.meta.env.DEV;
    const hasVisited =
      typeof sessionStorage !== "undefined" &&
      sessionStorage.getItem(SESSION_STORAGE_KEY);

    async function trackVisit() {
      try {
        if (isDev || hasVisited) {
          // Read-only get
          let res = await fetch(`${COUNT_API_BASE}/get/${COUNTER_KEY}`);
          if (res.status === 404) {
            // Self-heal: key not initialized yet, call hit to provision
            res = await fetch(`${COUNT_API_BASE}/hit/${COUNTER_KEY}`);
          }
          if (res.ok) {
            const data = await res.json();
            if (isMounted && typeof data.value === "number") {
              setCount(data.value);
            }
          }
        } else {
          // First production visit in this session: hit to increment
          const res = await fetch(`${COUNT_API_BASE}/hit/${COUNTER_KEY}`);
          if (res.ok) {
            const data = await res.json();
            if (isMounted && typeof data.value === "number") {
              setCount(data.value);
              try {
                sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
              } catch {
                // Ignore session storage errors
              }
            }
          }
        }
      } catch (err) {
        console.debug("[VisitorCounter] Failed to fetch visitor telemetry:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    trackVisit();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div
        className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--color-muted)] rounded-[var(--radius-sm)]"
        aria-hidden="true"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400/60" />
        <span className="opacity-70">System telemetry...</span>
      </div>
    );
  }

  if (count === null) {
    return null;
  }

  return (
    <div
      className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 font-mono text-[11px] font-medium tracking-[0.06em] text-[var(--color-muted)] rounded-[var(--radius-sm)] transition-colors duration-150 hover:border-[#3f3f46] hover:text-[var(--color-fg)]"
      title={`${count.toLocaleString()} visits tracked`}
    >
      <span className="relative flex h-2 w-2 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </span>
      <span>
        <span className="font-semibold text-[var(--color-fg)]">{count.toLocaleString()}</span>{" "}
        <span className="opacity-80">visits</span>
      </span>
    </div>
  );
}
