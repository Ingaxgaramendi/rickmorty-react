import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Usamos esbuild que acabamos de instalar para que no use LightningCSS
    cssMinify: "esbuild",
  },
});
