import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  mode: "production",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
});
