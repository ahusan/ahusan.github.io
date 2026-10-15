# portfolio.ahusan.dev

Professional site for Ahusan Mohamed. Personal site lives at [ahusan.dev](https://ahusan.dev) (repo `spotlight-js`).

Vite + React + React Router, plain CSS. All content is in `src/data/portfolio-data.json`; projects with a
`featured` number appear large on the home page in that order, the rest in the list below them.

```bash
npm install
npm run dev       # local dev server
npm run build     # outputs to build/
npm run deploy    # builds and publishes build/ to the gh-pages branch
```

Design: a nautical chart of the central Maldives (`src/components/Chart.jsx`) with day and night
palettes following the system colour scheme. Tokens are at the top of `src/styles.css`.

Project screenshots are WebP, max 1800px wide. Convert new ones with
`npx sharp-cli -i shot.png -o public -f webp -q 78 resize 1800 --withoutEnlargement`.
