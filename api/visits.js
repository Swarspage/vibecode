const COUNT_API_BASE = "https://countapi.mileshilliard.com/api/v1";
const COUNTER_KEY = "scaffold_swarshinde_visits";

export default async function handler(req, res) {
  try {
    let response = await fetch(`${COUNT_API_BASE}/get/${COUNTER_KEY}`);
    if (response.status === 404) {
      // Self-heal: key not initialized yet, call hit to provision
      response = await fetch(`${COUNT_API_BASE}/hit/${COUNTER_KEY}`);
    }

    if (!response.ok) {
      throw new Error(`CountAPI returned HTTP ${response.status}`);
    }

    const data = await response.json();
    const count = typeof data.value === "number" ? data.value : 0;

    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=30");
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({ count, value: count });
  } catch (err) {
    console.error("[api/visits] Error retrieving total visits:", err.message);
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({ count: 0, value: 0, error: err.message });
  }
}


