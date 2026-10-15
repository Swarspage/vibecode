export default async function handler(req, res) {
  try {
    const { p = "/", t = "", r = "" } = req.query || {};

    const targetUrl = new URL("https://scaffold.goatcounter.com/count");
    targetUrl.searchParams.set("p", p);
    if (t) targetUrl.searchParams.set("t", t);
    if (r) targetUrl.searchParams.set("r", r);
    targetUrl.searchParams.set("b", "0");

    const userAgent = req.headers["user-agent"] || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36";
    const forwardedFor = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "";

    const headers = {
      "User-Agent": userAgent,
    };
    if (forwardedFor) {
      headers["X-Forwarded-For"] = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor;
    }

    await fetch(targetUrl.toString(), {
      method: "GET",
      headers,
    });

    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({ ok: true });
  } catch {
    res.setHeader("Cache-Control", "no-store, no-cache");
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({ ok: false });
  }
}
