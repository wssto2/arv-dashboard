import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env": {},
  },
  plugins: [vue()],
  build: {
    lib: {
      entry: "src/main.ts",
      name: "ArvDashboard",
      fileName: (format) => `app.${format}.js`,
    },
  },
});
