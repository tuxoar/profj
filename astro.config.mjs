import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Static output — every page is pre-rendered to plain HTML for GitHub Pages.
  output: 'static',

  // Deployed as a GitHub *project* page at https://tuxoar.github.io/profj/,
  // so `site` is the user domain and `base` is the repo name. All internal
  // links/assets are base-aware, so they resolve under this subpath.
  site: 'https://tuxoar.github.io',
  base: '/profj',

  trailingSlash: 'ignore',
});
