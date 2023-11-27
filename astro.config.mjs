import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import icons from "astro-icons";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx({
    extendMarkdownConfig: false,
    smartypants: true,
    gfm: true
  }), sitemap(), tailwind(), icons()]
});