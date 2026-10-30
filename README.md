# Muhammad Usama — SQA & Automation

A focused, accessible portfolio built with Next.js App Router, React, TypeScript, and plain CSS. Public content is server-rendered; client code handles navigation, theme choice, and contact submission.

## Develop

Requires Node.js 22+ (Node 24 used for this release).

```sh
npm ci
cp .env.example .env.local
npm run dev
```

No secrets are required to browse the site. Contact delivery requires server-side mail configuration. Production also requires a Redis REST rate limiter; it deliberately fails closed if unavailable.

## Validate

```sh
npm run lint
npm run typecheck
npm test
npm run resume:check # requires Poppler (pdfinfo and pdftotext)
npm run build
npx playwright install chromium
npm run test:e2e
```

The Playwright runner starts the production build on `127.0.0.1:3100`. It uses mocked contact responses, no real inbox, no employer services, and no production database. Tests cover mobile/tablet/desktop, navigation, metadata, internal links, light/dark accessibility scans, reduced motion, form success/failure/partial delivery, and PDF availability. Backend tests and test mocks live under `backend/tests/`.

## Update content and résumé

Edit `src/data/profile.ts`. Keep statements factual and consult [content provenance](docs/content-provenance.md) before restoring unresolved history. Résumé and site use the same profile data.

```sh
npm run build
npm run start -- --port 3100
# In another terminal:
npm run resume:pdf
```

Commit `public/Muhammad-Usama-Resume.pdf` after changes. Render the actual PDF with a PDF renderer and inspect all pages for clipping, readable type, correct links and A4 size. The current design uses 10.5 pt body text, not a scaled screenshot. `/resume.html` redirects to `/resume` for compatibility.

## Structure

- `src/data/profile.ts`: public professional facts, skills, project evidence, navigation
- `src/app/`: server-rendered routes, route metadata, résumé, sitemap and social image
- `src/components/`: shared layout and interactive form
- `src/lib/`: metadata, validation, mail delivery and distributed rate limiting
- `backend/tests/`: isolated service/route tests; no SMTP calls
- `web-app/playwright-tests/portfolio/`: browser regressions
- `docs/`: provenance, deployment instructions, verification and screenshots

See [deployment](docs/deployment.md) and [verification](docs/verification.md). Production promotion requires owner approval.
