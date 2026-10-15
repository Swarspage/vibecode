export default async function handler(req, res) {
  try {
    const gcRes = await fetch("https://scaffold.goatcounter.com/counter/TOTAL.json", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    if (!gcRes.ok) {
      throw new Error(`GoatCounter returned ${gcRes.status}`);
    }

    const data = await gcRes.json();
    res.setHeader("Cache-Control", "public, s-maxage=120, stale-while-revalidate=60");
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json(data);
  } catch {
    res.setHeader("Cache-Control", "public, s-maxage=30, stale-while-revalidate=30");
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({ count: "0", count_unique: "0" });
  }
}
