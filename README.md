# Mohammad Syeduzzaman — portfolio

A local personal portfolio, ready to open in VS Code. No dependencies or installation required. It uses HTML, CSS, and minimal JavaScript to keep the first version quick to run, maintain, and host. A framework is optional for this content-led website.

## Preview

Run `node server.cjs` (or `npm run dev` if npm is installed), then open http://127.0.0.1:4173. You can also open index.html directly.

## Files

- index.html: portfolio content and project stories
- styles.css: responsive layout and visual design
- portrait.png: profile photo extracted from the user-supplied CV
- i18n.js: complete German translations, EN/DE switch, saved preference, and language-aware résumé links
- app.js: copyright year
- resume.html: public English/German résumé with a Print / save PDF action
- build.cjs: packages only the six public files into dist/
- vercel.json: build/output settings for hosting
- CODEX-HANDOFF.md: context and continuation instructions for VS Code Codex; excluded from website output

## Hosting: GitHub Pages

Selected address: https://syeduzzaman.github.io/ (not live until deployment succeeds).

Use the public repository `syeduzzaman/syeduzzaman.github.io`. In repository Settings > Pages, select GitHub Actions as the source. The included `.github/workflows/pages.yml` builds on pushes to main, packages only the six public files from `dist/`, and deploys them. The deploy job receives only Pages publishing and OIDC permissions; it does not receive repository write permissions.

Run `node build.cjs` locally to check the publish folder. No backend, database, package installation, or environment variables are required. Do not configure branch-root publishing: it would expose internal repository files as website assets. Internal notes, server code, and the original CV are excluded from `dist/`.

The existing vercel.json is an optional alternative hosting configuration, not the selected deployment target.

## Content decisions to confirm

- CV is the source for PlanSo dates, responsibilities, education, and technologies.
- AZ-900 achievement month is omitted because the CV and prior certificate review disagree.
- Language levels are omitted pending a final consistent choice.
- HotBDDeals artwork is a CSS illustration labelled as such, not a screenshot of the live product.
- The company name is shown without an unverified employer website link.
- No invented metrics, testimonials, customers, project screenshots, or proprietary code.
- The public résumé excludes home address and telephone number; original CV is not copied into this folder.
- Before public launch, finalize applicable legal/privacy pages for the actual hosting and website use. The draft has no analytics, tracking scripts, cookies, contact form, or remote font dependencies.

Contact links use the professional email, GitHub, and LinkedIn provided in the CV. Review all content before publishing.

## Languages

English and German are available on both pages using the top EN/DE buttons. An explicit ?lang=en or ?lang=de link takes precedence, then the saved choice, then the browser language. Official certificate and technology names retain their original names. The language choice is stored locally; no data is sent to a service.

## Contact privacy requirement

The user explicitly requires that no mobile or telephone number appear anywhere in the published website, either language, public source, resume, or any downloadable/exported resume. Email is permitted. Preserve this requirement in future edits. Never publish the original CV; use the public resume.html version for viewing and PDF printing.

## Final review

The review improved readable body/metadata text, diagram contrast, language-button target sizes, explicit project headings, tablet stacking, and illustration accessibility semantics. Both English and German content were checked against the translation dictionary; automated round-trip checks restored English exactly after switching. Internal anchors, asset references, source syntax, contact privacy, and the six-file publish allowlist were verified.

Visual browser rendering and PDF pagination are not yet verified: this environment blocks observation of the local file and local HTTP connections. In VS Code, preview both languages at narrow phone, tablet, and desktop widths and print the résumé before public release. The source has responsive rules, but source checks are not a substitute for viewing it.

Comparison references: [Brittany Chiang](https://brittanychiang.com/) and [Lee Robinson](https://leerob.com/) for a clear introduction, concrete work history, and straightforward navigation. This portfolio retains its own cream/green design and original content.
