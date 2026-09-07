import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "מערכת ניהול יחידת 3901",
        short_name: "יחידה 3901",
        description: "מערכת ניהול כבאות והצלה - יחידת הר אדר 3901",
        start_url: "/",
        display: "standalone",
        background_color: "#EFEFEF",
        theme_color: "#111111",
        dir: "rtl",
        lang: "he",
        icons: [
          {
            src: "icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        // cache everything needed to run fully once loaded; auto-refresh in the background
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg}"],
      },
    }),
  ],
});
