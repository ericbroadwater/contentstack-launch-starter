# Contentstack Launch — Next.js + Tailwind Starter

This is a **Contentstack Launch–ready** starter project using **Next.js + Tailwind CSS**.
It is configured to produce a **static export** (the `out/` folder) so Contentstack Launch can deploy it easily.

## What’s included
- Next.js pages using `getStaticProps`/`getStaticPaths`
- Tailwind CSS ready-to-go
- Contentstack helper (`lib/cms.js`) that reads from env vars
- `npm run build` runs `next build && next export` — output goes to `out/`

## Quick local test
1. Unzip the starter and `cd` into the project folder.
2. Copy `.env.local.example` to `.env.local` and fill in your Contentstack keys.
3. Install + run locally:
```bash
npm install
npm run dev   # then open http://localhost:3000
```
To build the static files (same command Launch will use):
```bash
npm install
npm run build
# output static site is in the `out/` folder
```

## Contentstack: content model you need to create
Create a content type named **page** with these fields:
- `title` — Short text
- `url` — Short text (store values like `/about`, `/contact`)
- `body` — Rich Text

Create at least one entry (e.g., url `/about`) so the site has content to show.

## Deploying with Contentstack Launch
1. Push this repo to GitHub.
2. In Contentstack Launch, create a new project and choose **GitHub**.
3. When configuring the build, set:
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `out`
4. Add environment variables in Launch:
   - `CONTENTSTACK_API_KEY`
   - `CONTENTSTACK_DELIVERY_TOKEN`
   - `CONTENTSTACK_ENVIRONMENT` (e.g. `development`, `production`)
5. Build & deploy.

---
If you want, I can walk you step‑by‑step through: unzipping, running locally, creating the GitHub repo, pushing the code, and connecting Launch — I’ll provide the exact clicks & commands.
