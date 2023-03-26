import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindConfig from "./tailwind.config.cjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2999,
  },
});
