# Junqing (Jessie) Jia — Portfolio

A simple, static academic portfolio site for Dr. Junqing (Jessie) Jia, Associate
Professor of East Asian Languages & Literatures (Chinese) at Hamilton College.
Built with [Astro](https://astro.build/) and designed to be hosted for free on
GitHub Pages.

## Pages

- **Home** (`/`) — introduction, about, contact.
- **Applied Linguistics & Motivation** (`/applied-linguistics-motivation/`) — research focus and publications.
- **Language Pedagogy** (`/language-pedagogy/`) — teaching approach, books, and courses.

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

## Swapping in real images

Placeholder image blocks show exactly which file to add. Drop the real files
into `public/images/` and replace the `<Placeholder … />` component with a plain
`<img>`:

| Placeholder | Suggested file | Used on |
| --- | --- | --- |
| Portrait | `public/images/portrait.jpg` | Home |
| Book cover — *Negotiating the Chinese Workplace* | `public/images/workplace-cover.jpg` | Language Pedagogy |
| Book cover — *Performed Culture in Action* | `public/images/performed-culture-cover.jpg` | Language Pedagogy |
| Book cover — *Perform Suzhou* | `public/images/perform-suzhou-cover.jpg` | Language Pedagogy |

Example, in `src/pages/index.astro`:

```astro
<!-- before -->
<Placeholder variant="portrait" label="Portrait of Junqing Jia" file="images/portrait.jpg" />
<!-- after -->
<img src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/images/portrait.jpg`}
     alt="Junqing Jia" class="placeholder--portrait" style="border-radius:10px;" />
```

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
