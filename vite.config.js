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
        "boardme-signup": resolve(__dirname, "boardme-signup/index.html"),
        charts: resolve(__dirname, "charts/index.html"),
        "contraction-timer": resolve(__dirname, "contraction-timer/index.html"),
        "dark-theme-comps": resolve(__dirname, "dark-theme-comps/index.html"),
        "simple-cards-2": resolve(__dirname, "simple-cards-2/index.html"),
        timer: resolve(__dirname, "timer/index.html"),
        "blog-cards-2": resolve(__dirname, "blog-cards-2/index.html"),
        "feedback-form": resolve(__dirname, "feedback-form/index.html"),
        chatbox: resolve(__dirname, "chatbox/index.html"),
        "skewed-pricing": resolve(__dirname, "skewed-pricing/index.html"),
        "search-comps-2": resolve(__dirname, "search-comps-2/index.html"),
        faq: resolve(__dirname, "faq/index.html"),
        poll: resolve(__dirname, "poll/index.html"),
        table: resolve(__dirname, "table/index.html"),
        pagination: resolve(__dirname, "pagination/index.html"),
        "signup-form-1": resolve(__dirname, "signup-form-1/index.html"),
        "agency-search": resolve(__dirname, "agency-search/index.html"),
        "social-profile-2": resolve(__dirname, "social-profile-2/index.html"),
        "member-invite": resolve(__dirname, "member-invite/index.html"),
        "edit-account": resolve(__dirname, "edit-account/index.html"),
        "background-pattern": resolve(
          __dirname,
          "background-pattern/index.html"
        ),
        "top-charts": resolve(__dirname, "top-charts/index.html"),
        "analytics-chart": resolve(__dirname, "analytics-chart/index.html"),
        "big-menu": resolve(__dirname, "big-menu/index.html"),

        joburgers: resolve(__dirname, "joburgers/index.html"),
      },
    },
    outDir: "dist/",
  },
});
