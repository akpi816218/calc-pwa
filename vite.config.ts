import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src",
  server: {
    cors: true,
  },
  appType: "mpa",
  build: {
    rollupOptions: {
      input: {
        main: resolve(join(__dirname, "src", "index.html")),
        404: resolve(join(__dirname, "src", "404.html")),
        card: resolve(join(__dirname, "src", "card", "index.html")),
        education: resolve(join(__dirname, "src", "education", "index.html")),
        projects: resolve(join(__dirname, "src", "projects", "index.html")),
        "ext/osf": resolve(join(__dirname, "src", "ext", "osf", "index.html")),
        "ext/pnpage": resolve(
          join(__dirname, "src", "ext", "pnpage", "index.html"),
        ),
      },
    },
    outDir: "../dist",
  },
  resolve: {
    alias: {
      "@": resolve(join(__dirname, "src")),
    },
  },
  publicDir: "public",
});
