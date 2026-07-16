// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://ihsanahmed6.github.io",
  base: "/personal-portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});