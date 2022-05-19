import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["./content/*.md"],
  build: {
    target: ["chrome89", "edge89", "firefox89", "ios15", "opera86", "safari15"],
  },
});
