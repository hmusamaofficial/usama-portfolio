# Release verification

Checked on 2026-10-30 in the isolated `/tmp/usama-portfolio-modernization` checkout using Node 24. The separate ERP workspace and its tests were not modified.

## Results

- Production build: passed (Next.js 16.4.3); public content routes prerendered, contact API runs server-side.
- ESLint and TypeScript: passed.
- Backend/service tests: 27 passed, with mocked SMTP and Redis. Cover malformed input, injection escaping, body limits, origins, spam quotas, primary delivery failure and partial success.
- Browser validation: 60 checks passed across desktop (1440 × 1000), tablet (820 × 1180), and mobile Chromium emulation. One compact portfolio specification covers routes, internal links, metadata, theme persistence, keyboard behavior, reduced motion, overflow, console errors, contact states, accessibility scans, social image, redirects and PDF response.
- After the final factual correction, all 21 affected-page checks passed again. No additional test framework or separate automation project was created; the existing checks are retained for practical regression protection.
- Dependency audit: zero known vulnerabilities reported after compatible fixes; this is not a guarantee of absence of vulnerabilities.
- PDF: one tagged A4 page, selectable text, 10.5 pt body type, actual hyperlink annotations. Rendered with Poppler and visually inspected. No clipping or crowding observed. Automated `resume:check` checks page count, headings, shared factual content and hyperlinks.
- Public links: GitHub profile/projects and Texinnova returned HTTP 200. LinkedIn returned HTTP 999 (automated access blocked), so its profile contents were not verified.
- Lighthouse: see [performance.json](performance.json) for measured mobile lab results. These are local simulated results, not field Core Web Vitals or an INP assessment.

The first browser run exposed a locator that stopped matching when the menu label changed to Close; the locator was fixed without weakening expanded-state/focus assertions. Lighthouse exposed a logo label/accessibility mismatch; the accessible name and WCAG 2.1 A coverage were corrected.

## Visual review

- [Original desktop viewport](screenshots/before-desktop.png)
- [Updated desktop viewport](screenshots/after-desktop-hero.png)
- [Updated full desktop page](screenshots/after-desktop.png)
- [Original mobile viewport](screenshots/before-mobile.png)
- [Updated mobile page](screenshots/after-mobile.png)
- [Tablet](screenshots/after-tablet.png)
- [Dark theme](screenshots/after-dark.png)
- [About](screenshots/after-about.png), [Projects](screenshots/after-projects.png), [Contact](screenshots/after-contact.png), [Experience](screenshots/after-experience.png)
- [Actual rendered résumé PDF](screenshots/resume-preview.png)
- [Download résumé](../public/Muhammad-Usama-Resume.pdf)

The original full-page capture hid offscreen content behind entrance animations; viewport captures are used for an honest before comparison. The updated site keeps content visible without animation or JavaScript-dependent entrances.

## Limits and release conditions

- Real SMTP delivery and the hosted Redis integration were not exercised. Configure the server-only variables in [deployment.md](deployment.md) and perform a controlled delivery check before production release. The endpoint fails closed in production when abuse-control configuration is absent; direct email remains available.
- Tests ran in Chromium, including mobile emulation, not physical phones, Safari or Firefox. Automated accessibility scans supplement keyboard/visual checks; they do not replace a full assistive-technology audit.
- Texinnova joining date is **unconfirmed**. The previous August 2025 value is preserved only in [content provenance](content-provenance.md); the site and résumé say Current. MS status and earlier employment/freelance history need factual review.
- A branch preview was automatically created for commit `682f883` under the original preview authorization, before the user's correction. It is **outdated** and contains the superseded employment date. It is not the final review artifact. No later deployment is authorized; `vercel.json` disables further automatic deployment for this working branch. Review the corrected PDF/screenshots/source until preview approval is provided.
- Main remains at `0e725c1ba343af280cb4b05b8b67f16226c80906`; no merge or production deployment was performed.

Recommendation: ready for source/design review. Production release remains conditional on owner approval, factual review, and configuration/verification of the contact infrastructure.
