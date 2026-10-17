import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

function devApiPlugin() {
	return {
		name: "dev-api-middleware",
		configureServer(server) {
			server.middlewares.use(async (req, res, next) => {
				if (req.url?.startsWith("/api/visits")) {
					try {
						const upstream = await fetch("https://scaffold.swarshinde.dev/api/visits");
						if (upstream.ok) {
							const data = await upstream.json();
							res.setHeader("Content-Type", "application/json");
							return res.end(JSON.stringify(data));
						}
					} catch {
						// Fallback if network unavailable
					}
					res.setHeader("Content-Type", "application/json");
					return res.end(JSON.stringify({ count: 0, up_count: 0 }));
				}
				if (req.url?.startsWith("/api/track")) {
					console.log(`[Dev Server] Track hit: ${req.url}`);
					res.setHeader("Content-Type", "application/json");
					return res.end(JSON.stringify({ ok: true }));
				}
				next();
			});
		},
	};
}

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), devApiPlugin()],
});
