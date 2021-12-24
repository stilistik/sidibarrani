import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  mode: "development",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
});
