# Interra Project website

Public website for the [Interra Project](https://interra-project.org), built with
[Astro](https://astro.build) and styled with the Interra visual language (v1.1).

## Stack

- **Astro** static site generator (no runtime backend).
- Interra visual identity: aubergine / cream / amber core, strata palette, Space Grotesk
  and JetBrains Mono (SIL OFL fonts, self-hosted under `public/fonts/`).
- Design tokens mirror the Interra visual language and live as CSS variables in
  `src/styles/global.css`.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Structure

```
public/            static assets served at the root (logos, fonts, faces, CNAME)
src/
  components/      Header, Footer, and the Interra motifs (StrataBand, HorizonRings,
                   SpectralReadout) plus the BokehJS interactive-figure demo
  data/            team roster and selected publications
  layouts/         Base layout (head, header, footer)
  pages/           one file per route: index, science, collaboration, data, papers, contact
  styles/          global.css with the design tokens
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages. The Pages source must be set to **GitHub Actions** in the
repository settings. The custom domain is configured via `public/CNAME`.

## Interactive figures

The data page embeds a client-side BokehJS figure as a proof of concept. It renders
entirely in the browser from the CDN library, with no server. Server-side interactive
exploration of the full model ensembles is a separate application, planned alongside the
first data release.
