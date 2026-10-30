# Deployment and operations

## Vercel configuration

Keep the existing Vercel project and production branch `main`. The owner now requires approval before any further deployment, including Preview. `vercel.json` disables automatic deployments for this working branch. Do not remove that branch rule, manually deploy, promote, or merge until approval. Build command: `npm run build`; install: `npm ci`; framework: Next.js; Node.js: 22 or newer supported LTS. No database or employer infrastructure is used.

Set these server-only environment variables separately for Preview and Production:

| Variable | Purpose |
| --- | --- |
| `GMAIL_USER` | Sender and owner notification address |
| `GMAIL_APP_PASSWORD` | Gmail app password, not the account login password |
| `CONTACT_REDIS_URL` | HTTPS Redis REST endpoint supporting atomic `EVAL` |
| `CONTACT_REDIS_TOKEN` | Redis REST bearer token |
| `CONTACT_RATE_SECRET` | Random secret, at least 32 bytes, for identifier hashing |
| `CONTACT_ALLOWED_ORIGINS` | Exact comma-separated preview/custom origins; canonical origin is built in |
| `GOOGLE_SITE_VERIFICATION` | Optional real Search Console value |

Do not commit credentials or expose them with `NEXT_PUBLIC_`. Use a separate preview mail account if testing delivery. No real emails are sent by the automated test suite.

## Contact safeguards

The API validates types, lengths, required fields, header-safe strings and email format; rejects foreign origins, unsupported formats and bodies over 24 KB; escapes HTML; uses an invisible honeypot; and limits requests with atomic shared counters. Limits: 5/IP/15 minutes, 3/recipient/hour, 50 global/hour. IP/email identifiers are HMAC-hashed and expire. Vercel's platform-overwritten `x-vercel-forwarded-for` is used; untrusted client `x-forwarded-for` is not accepted. Non-Vercel hosting uses a shared IP bucket and needs a reviewed proxy integration before scaling.

Missing/unavailable limiter or SMTP configuration returns a generic 503 and offers direct email. Rate-limit failures return 429. Confirmation mail contains no visitor-controlled content. Successful owner delivery remains success if confirmation fails. Like any SMTP workflow, a network interruption after acceptance can leave delivery ambiguous; the UI asks visitors to contact directly before retrying. This is not an exactly-once mail queue.

No message contents, recipient addresses, SMTP errors, or credentials are logged. Gmail retains correspondence according to the owner's account settings. Review retention and mailbox access operationally. Distributed quotas reduce abuse but are not proof that a sender is human; enable Vercel Firewall protection if traffic warrants it.

## Browser security and performance

Security headers deny framing and restrict resources to the same origin. Inline scripts remain permitted because of Next.js hydration and the pre-paint theme bootstrap; this is not a strict nonce-based CSP. No third-party scripts/fonts/analytics are loaded. HTML email escaping protects mail rendering; the site renders text through React. Core content is static/server-rendered, with no motion library, typewriter loop or remote font fetch.

## Release checklist

1. Run lint, typecheck, unit tests, build, and browser suite.
2. Regenerate and visually inspect the PDF if profile/resume/styles changed.
3. Review `docs/content-provenance.md` and screenshots.
4. Configure preview environment variables; verify a controlled real contact delivery only with owner authorization.
5. Confirm preview metadata uses the intended public canonical domain; previews should not be indexed (Vercel preview headers).
6. Owner approves the complete PR and production promotion. Do not automatically merge.
7. After approved deployment, check all pages, PDF, social image, canonical URLs, mail configuration, and provider errors. Roll back via Vercel deployment promotion if needed.
