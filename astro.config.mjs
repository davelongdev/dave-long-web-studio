import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  site: 'https://ascentwebstudio.com',
  integrations: [sitemap(), tailwind(), icon()]
});
