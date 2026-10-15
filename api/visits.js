export default async function handler(req, res) {
  const code = process.env.GOATCOUNTER_CODE || process.env.VITE_GOATCOUNTER_CODE || "scaffold";

  try {
    const gcRes = await fetch(`https://${code}.goatcounter.com/counter/TOTAL.json`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
        Accept: "application/json",
        Referer: "https://scaffold.swarshinde.dev/",
        Origin: "https://scaffold.swarshinde.dev",
      },
    });

    if (!gcRes.ok) {
      if (gcRes.status === 403) {
        console.warn(
          `[api/visits] GoatCounter returned 403 Forbidden. Enable "Allow adding visitor counts on your website" in your GoatCounter Settings at https://${code}.goatcounter.com/settings.`
        );
      } else {
        console.warn(`[api/visits] GoatCounter returned HTTP status ${gcRes.status}`);
      }
      throw new Error(`GoatCounter returned HTTP ${gcRes.status}`);
    }

    const data = await gcRes.json();
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=30");
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json(data);
  } catch (err) {
    console.error("[api/visits] Error retrieving total visits:", err.message);
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({ count: "0", count_unique: "0", error: err.message });
  }
}

