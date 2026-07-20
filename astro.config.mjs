import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Static output — every page is pre-rendered to plain HTML for GitHub Pages.
  output: 'static',

  // Served at the custom domain profjia.com (configured in the repo's GitHub
  // Pages settings), which maps the site to the domain root — so no `base`
  // subpath. GitHub 301-redirects tuxoar.github.io/profj there.
  site: 'https://profjia.com',

  trailingSlash: 'ignore',
});
