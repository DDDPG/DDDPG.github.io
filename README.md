# DDDPG.github.io

Personal site of **Kangdi Wang** — Audio AI Researcher & Engineer.
Live at [https://dddpg.github.io](https://dddpg.github.io).

Design system: **"Audible Archive"** — editorial serif typography (Fraunces /
Spectral / IBM Plex Mono), Paper (light) & Studio (dark) themes, a single Signal
Orange accent, spectrogram artwork, and exactly one motion verb: *scan / play*.

## Stack

- [Jekyll](https://jekyllrb.com/) 4.x — content-driven via `_data/*.yml` (no plugins beyond
  `jekyll-seo-tag`, `jekyll-sitemap`, `jekyll-feed`)
- Vanilla CSS (`assets/css/main.css`) + vanilla JS (`assets/js/main.js`) — no frameworks
- Deployed to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Editing content

All site copy lives in `_data/` — edit data, not templates:

| File | Controls |
| --- | --- |
| `_data/profile.yml` | Name, title, tagline, email, links, about, philosophy, DDDPG × εar-LAB duo |
| `_data/papers.yml` | The five-paper portfolio (roles must match official author lists) |
| `_data/projects.yml` | Open-source project cards |
| `_data/news.yml` | Signal Log entries on the homepage |
| `_data/trajectory.yml` | Career trajectory stream anchors (homepage hero) |
| `_data/blog.yml` | External writing cards on `/blog/` |
| `_data/experience.yml` | CV experience section |
| `_data/education.yml` | CV education section |
| `_data/community.yml` | CV community & practice section |
| `_data/skills.yml` | Capabilities matrix |

Pages: `index.html`, `blog.html`, `publications.html`, `projects.html`,
`cv.html`, `404.html`.

Blog posts go in `_posts/` as `YYYY-MM-DD-slug.md` with front matter
(`layout: post`, `title`, optional `excerpt`). They appear on `/blog/` and
get permalinks like `/YYYY/MM/DD/slug.html` (Jekyll default with `permalink: pretty`).

## Local development

Requires Ruby 3.4+ (Windows: [RubyInstaller](https://rubyinstaller.org/)).

```bash
bundle install
bundle exec jekyll serve --livereload
# → http://localhost:4000
```

Build only:

```bash
bundle exec jekyll build   # output in _site/
```

## Repository layout

```
├── _config.yml          # Jekyll site config
├── _data/               # All editable site content (YAML)
├── _includes/           # HTML partials
├── _layouts/            # Page layouts
├── _posts/              # Blog posts (Markdown)
├── assets/              # CSS, JS, images
├── .github/workflows/   # CI + GitHub Pages deploy
├── docs/                # Working docs & CV source (not published)
├── index.html           # Homepage
├── blog.html            # Blog index
├── publications.html
├── projects.html
├── cv.html
└── 404.html
```

## Deployment

This repo uses **GitHub Actions** to build Jekyll and deploy to GitHub Pages —
not the legacy `/docs` folder publish mode.

Push to `main` → `.github/workflows/deploy.yml` runs `jekyll build`, uploads
`_site/` as a Pages artifact, and deploys. One-time setup: in the repository's
**Settings → Pages**, set **Source** to **GitHub Actions**.

Pull requests run `ci.yml`: a strict build plus an offline internal-link check
(external link check is non-blocking).

## Repository hygiene

- `docs/` — working source materials & narrative docs (in git, excluded from site build)
- `design_system_preview.html` — design-system kitchen sink (excluded from the build)
- `.tasks/` — working notes (excluded from the build)
- `_site/` — Jekyll build output (git-ignored; produced by CI)
