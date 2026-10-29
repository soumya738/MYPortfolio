# Soumya's Portfolio

A responsive React portfolio built with Vite, Motion for React, and Lucide icons.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. Deploy the project to Vercel with
the default Vite settings: build command `npm run build` and output directory
`dist`.

## Updating portfolio content

- Edit project descriptions, links, tags, and case-study notes in
  `src/data/projects.js`.
- Update the skill groups and career timeline in `src/data/content.js`.
- Update availability, contact information, and introduction copy in
  `src/App.jsx`.
- The résumé and portrait are loaded from the existing root-level files
  `Soumya_Ankireddypalli_resume.pdf` and `profile_picture.jpg`.

The project previews are original CSS interface illustrations, not screenshots
of the live applications. Replace them with verified screenshots if desired.
