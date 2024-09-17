import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import svgr from "vite-plugin-svgr";

import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      // Add more aliases as needed
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
  plugins: [
    svgr(),
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: "Tyler Tessmann | Web Developer Resume",
        },
        tags: [
          {
            tag: "meta",
            attributes: {
              name: "description",
              content: "Resume of Tyler Tessmann, Web Developer",
            },
          },
        ],
      },
      minify: true,
    }),
  ],
  css: {
    postcss: "./postcss.config.js",
  },
});
