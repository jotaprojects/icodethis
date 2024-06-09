import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  base: "./",
  publicDir: "assets/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        "website-comps": resolve(__dirname, 'website-comps/index.html')
      }
    },
    outDir: "dist/"
  }
});
