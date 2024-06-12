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
        "404-error-page": resolve(__dirname, "404-error-page/index.html"),
        "christmas-promo": resolve(__dirname, "christmas-promo/index.html"),
        subscribe: resolve(__dirname, "subscribe/index.html"),
        "pricing-table": resolve(__dirname, "pricing-table/index.html"),
        "sign-up-2": resolve(__dirname, "sign-up-2/index.html"),
        "project-card": resolve(__dirname, "project-card/index.html"),
        "apps-card": resolve(__dirname, "apps-card/index.html"),
        "collections-list": resolve(__dirname, "collections-list/index.html"),
        "social-login": resolve(__dirname, "social-login/index.html"),
        "cart-item": resolve(__dirname, "cart-item/index.html"),
        "password-field": resolve(__dirname, "password-field/index.html"),
        "profile-header": resolve(__dirname, "profile-header/index.html"),
        "blog-cards-4": resolve(__dirname, "blog-cards-4/index.html"),
        "friend-request": resolve(__dirname, "friend-request/index.html"),
        "mobile-menu": resolve(__dirname, "mobile-menu/index.html"),
        "article-page": resolve(__dirname, "article-page/index.html"),
        steps: resolve(__dirname, "steps/index.html"),
        "website-comps": resolve(__dirname, "website-comps/index.html"),
        "analytics-dashboard": resolve(
          __dirname,
          "analytics-dashboard/index.html"
        ),
        "big-menu-2": resolve(__dirname, "big-menu-2/index.html"),
        "blog-comps": resolve(__dirname, "blog-comps/index.html"),

        joburgers: resolve(__dirname, "joburgers/index.html"),
      },
    },
    outDir: "dist/",
  },
});
