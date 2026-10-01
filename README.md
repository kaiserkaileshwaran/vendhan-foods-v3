# Vendhan

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

## Verify a production build

```sh
npm run lint
npm run build
```

## Deploy to Vercel

Import this project in Vercel with the project root as the Root Directory. Vercel detects Vite; use `npm run build` as the build command and `dist` as the output directory. No environment variables are required by the current frontend.
