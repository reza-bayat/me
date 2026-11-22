
# Reza Bayat — Personal Website

Personal portfolio website for Reza Bayat.

**Live website:**  
https://reza-bayat.github.io/me/

## Overview

A bilingual personal website built with:

- HTML5
- CSS3
- Vanilla JavaScript
- Responsive design
- Light and dark themes
- Persian (RTL) and English (LTR)
- SEO metadata and structured data
- GitHub Pages deployment

## Project Structure

```text
me/
├── index.html
├── fa/
│   └── index.html
├── en/
│   └── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── profile.webp
│       └── og-cover.jpg
├── robots.txt
├── sitemap.xml
└── README.md
```

## Configuration

Before publishing, update:

1. `YOUR-EMAIL` in both language pages.
2. `assets/images/profile.webp` with the actual profile photo.
3. `assets/images/og-cover.jpg` with the social sharing image.
4. Social media links in both language pages.
5. Personal information and descriptions where necessary.

## Local Preview

Run a local static server from the repository root:

```bash
python -m http.server 8000
```

Open:

- http://localhost:8000/
- http://localhost:8000/fa/
- http://localhost:8000/en/

## GitHub Pages Deployment

1. Push the project to the `main` branch.
2. Open repository Settings.
3. Navigate to Pages.
4. Select Deploy from a branch.
5. Select `main` and `/ (root)`.
6. Save the configuration.

Website URL:

https://reza-bayat.github.io/me/

## SEO

The website includes:

- Separate Persian and English URLs.
- Canonical URLs.
- Reciprocal hreflang links.
- Open Graph metadata.
- Twitter Card metadata.
- Person, WebSite and ProfilePage structured data.
- XML sitemap.

## Notes

The showcased projects are conceptual case studies, not claims of completed client work.

Replace all placeholder information before publishing.
