// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://sur.com", // TODO e.g. https://site.com
	integrations: [
		sitemap(),
	],
});