# Junqing (Jessie) Jia — Portfolio

A simple, static academic portfolio site for Dr. Junqing (Jessie) Jia, Associate
Professor of East Asian Languages & Literatures (Chinese) at Hamilton College.
Built with [Astro](https://astro.build/) and hosted for free on GitHub Pages at
**https://tuxoar.github.io/profj/**.

> **✏️ Editing the site content?** See **[EDITING.md](EDITING.md)** — a plain,
> no-coding-required guide. All page text lives in Markdown files under
> `src/content/pages/` and can be edited right in the browser on GitHub.

> This repository (`tuxoar/profj`) is the **canonical, deployed** copy.

## Pages

- **Home** (`/`) — introduction, about, contact.
- **Applied Linguistics & Motivation** (`/applied-linguistics-motivation/`) — research focus and publications.
- **Language Pedagogy** (`/language-pedagogy/`) — teaching approach, books, and courses.

## How content works

The `.astro` files in `src/pages/` are **templates** (the design). The actual
words come from Markdown files in `src/content/pages/` — `home.md`,
`applied-linguistics-motivation.md`, `language-pedagogy.md`. A schema in
`src/content/config.ts` validates those files at build time, so a typo fails the
build loudly instead of publishing a broken page. Editors should only need the
Markdown files; see [EDITING.md](EDITING.md).

## Run locally

Requires [Node.js](https://nodejs.org/) 18.20+ / 20.3+ / 22+.

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:4321)
```

Other commands:

```bash
npm run build    # generate the static site into dist/
npm run preview  # preview the production build locally
```

## Images

Images live in `public/images/`. No code changes are needed to swap them:

- **Portrait** — upload to `public/images/` and set the `portrait:` field in
  `home.md` to the filename (default `portrait.jpg`).
- **Book covers** — upload to `public/images/` and set the `cover:` field on that
  book in `language-pedagogy.md` (e.g. `cover: "workplace.jpg"`). Leave `cover: ""`
  to show a neutral placeholder until a cover is available.

See [EDITING.md](EDITING.md) for the step-by-step (browser-only) version.

## Deploying to GitHub Pages

1. Push this repository to GitHub with `main` as the default branch.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on
   every push to `main`.

### Important: configure the URL in `astro.config.mjs`

Set `site` to your final URL. If you deploy as a **project page**
(`https://<user>.github.io/<repo>/`), you must **also** uncomment and set
`base` to `'/<repo>'`:

```js
site: 'https://<user>.github.io',
base: '/<repo>',   // only for project pages
```

For a **user/organization page** (`https://<user>.github.io/`) or a **custom
domain**, leave `base` unset. For a custom domain, add a `public/CNAME` file
containing the domain.

The site links (nav, cards, images) are all `base`-aware, so they resolve
correctly in either setup.
