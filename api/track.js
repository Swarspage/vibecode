export default async function handler(req, res) {
  const code = process.env.GOATCOUNTER_CODE || process.env.VITE_GOATCOUNTER_CODE || "scaffold";

  try {
    // Handle parameters from query (GET) or parsed JSON/body (POST / sendBeacon)
    const params = {
      ...(req.query || {}),
      ...(typeof req.body === "object" && req.body !== null ? req.body : {}),
    };

    const { p = "/", t = "", r = "", s = "" } = params;

    const targetUrl = new URL(`https://${code}.goatcounter.com/count`);
    targetUrl.searchParams.set("p", p);
    if (t) targetUrl.searchParams.set("t", t);
    if (r) targetUrl.searchParams.set("r", r);
    if (s) targetUrl.searchParams.set("s", s);
    targetUrl.searchParams.set("b", "0");

    const userAgent =
      req.headers["user-agent"] ||
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)";

    const rawForwarded = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "";
    // Extract first client IP if comma-separated
    const clientIp = typeof rawForwarded === "string"
      ? rawForwarded.split(",")[0].trim()
      : Array.isArray(rawForwarded)
        ? rawForwarded[0]
        : "";

    const headers = {
      "User-Agent": userAgent,
    };
    if (clientIp) {
      headers["X-Forwarded-For"] = clientIp;
    }

    const gcRes = await fetch(targetUrl.toString(), {
      method: "GET",
      headers,
    });

    // Drain body so connection terminates cleanly
    await gcRes.text().catch(() => {});

    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[api/track] Error forwarding track event:", err.message);
    res.setHeader("Cache-Control", "no-store, no-cache");
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({ ok: false, error: err.message });
  }
}

