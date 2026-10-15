import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

function devApiPlugin() {
	return {
		name: "dev-api-middleware",
		configureServer(server) {
			server.middlewares.use((req, res, next) => {
				if (req.url?.startsWith("/api/visits")) {
					res.setHeader("Content-Type", "application/json");
					return res.end(JSON.stringify({ count: "0", count_unique: "0" }));
				}
				if (req.url?.startsWith("/api/track")) {
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
