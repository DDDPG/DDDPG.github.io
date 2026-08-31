# docs/ — working source materials

This folder holds **private working documents** for the personal site. It is
**tracked in git** for backup and version history, but **excluded from the
Jekyll build** (`_config.yml` → `exclude: docs/`) and **never published** to
GitHub Pages.

## Contents

| Path | Purpose |
| --- | --- |
| `resume-zh_CN.tex` | Chinese CV source (LaTeX) |
| `kangdi_wang_narrative_polished.md` | Polished website copy guide |
| `kangdi_wang_github_io_profile_source.md` | Raw profile / bio source notes |
| `kangdi_wang_personal_website_narrative_framework.md` | Narrative framework draft |
| `superpowers/specs/` | Design specs and planning documents |

## Site content vs. docs

- **Published site content** lives at the repo root: `_data/*.yml`, page
  templates, `assets/`, etc.
- **Working drafts and CV sources** live here in `docs/`.
- Edit `_data/` to change what appears on [dddpg.github.io](https://dddpg.github.io);
  edit `docs/` for offline reference and LaTeX builds.
