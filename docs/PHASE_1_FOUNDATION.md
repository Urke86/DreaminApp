# Phase 1 — DreaminApp foundation (development branch)

This branch is for a staged refresh of DreaminApp into a digital product studio. It does **not** change the existing production branch or DNS.

## Changes
- Removed the duplicate `public/index.html`; Vite must build the root `index.html`.
- Replaced outdated canonical/Open Graph URLs and stale product/review/search structured data with a minimal Organization + WebSite graph.
- Updated bilingual document title and descriptions to digital product studio positioning.
- Simplified sitemap to one canonical URL (hash anchors aren't separate indexable pages).
- Corrected and hardened the Netlify contact form: strict field validation, plain-text email, server-side SMTP environment verification, generic error responses, and reply-to header.

## Netlify Free configuration
- Repository: `Urke86/DreaminApp`
- Production branch: `main` (**do not change until explicitly approved**)
- Build command: `npm run build`
- Publish directory: `dist`
- Node: 20 or 22 LTS (verify compatibility in CI)
- Required environment values (configure in Netlify UI, never commit secrets): `ZOHO_USER`, `ZOHO_PASS`
- The site continues to use Netlify Functions and existing `netlify.toml`.

## Before release
1. Run `npm ci && npm run build && npm run lint`.
2. Check every deployed form: contact, newsletter and EasyBook pricing.
3. Confirm Zoho email SMTP credentials and domain DNS records (MX, SPF, DKIM, DMARC).
4. Replace placeholder portfolio entries and unverified testimonials with real, approved case studies.
5. Review the existing EasyBook pricing in both language versions and remove misleading claims.
6. Confirm that the deployed site is available at `www.dreaminapp.rs` and HTTPS redirects work.
7. Test mobile navigation, translations, page performance, OG preview, sitemap and email delivery.
8. Review preview deployment security/noindex before sharing; do not index placeholder work.

These edits do not prove the build passes or SMTP delivery works. Both require execution/deployment testing.
