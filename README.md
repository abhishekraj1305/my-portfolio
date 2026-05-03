# Abhishek Raj Portfolio

Hiring-focused portfolio for Data Scientist, Automation Developer, Power Platform Expert, Python Developer, and Digital Transformation Executive roles.

The site presents case-study style proof of work across Python automation, SQL-backed reporting, Power Platform delivery, Microsoft 365 automation, AI/ML prototypes, dashboards, OCR, scraping, and data products.

## Tech Stack

- React 19
- Vite
- React Router
- Framer Motion
- Sharp image optimization
- GitHub Pages deployment

## Local Development

```bash
npm install
npm run optimize:images
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

The app is configured for GitHub Pages at:

```text
https://abhishekraj1305.github.io/my-portfolio/
```

## Quality Checks

```bash
npm test
npm run build
```

## Portfolio Strategy

The strongest projects are presented as case studies with:

- Problem
- My role
- Architecture / workflow
- Tech stack
- Business impact
- Proof links
- What I learned

Lower-signal practice repositories are kept in a learning archive so recruiters see the best technical evidence first.

## Image Pipeline

Original gallery uploads stay in `src/websitephoto`. Optimized WebP derivatives are generated into:

- `src/websitephoto/optimized/thumbs`
- `src/websitephoto/optimized/full`

The gallery loads thumbnails in the grid and full WebP images in the modal.
