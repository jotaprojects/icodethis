import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  base: "./",
  publicDir: "assets/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "movie-card": resolve(__dirname, "movie-card/index.html"),
        "login-card": resolve(__dirname, "login-card/index.html"),
        "birthday-list": resolve(__dirname, "birthday-list/index.html"),
        toasts: resolve(__dirname, "toasts/index.html"),
        basics: resolve(__dirname, "basics/index.html"),
        "website-comps": resolve(__dirname, "website-comps/index.html"),
      },
    },
    outDir: "dist/",
  },
});
