import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { globSync } from "glob";

export default defineConfig({
  root: "./",
  build: {
    rollupOptions: {
      input: globSync("**/*.html", {
        ignore: ["2_base/**", "**/old/**"],
      }).reduce((entries, path) => {
        const entryName = path.replace(/(.*)\\index.html/, "$1");
        if (entryName === "index.html") return entries;
        entries[entryName] = fileURLToPath(new URL(entryName, import.meta.url));
        return entries;
      }, {}),
    },
    outDir: "dist/",
  },
});
