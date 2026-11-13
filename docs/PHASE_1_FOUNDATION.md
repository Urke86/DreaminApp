# DreaminApp — Phase 1 foundation

Development branch: `chore/phase-1-foundation-2026` · Draft PR #1.

## Current hosting strategy (updated November 2026)

**The user no longer owns `dreaminapp.rs`.** Our permanent free hosting target is `https://dreaminapp.netlify.app/`; the provider subdomain is not an email domain. See [FREE_HOSTING_AND_EMAIL.md](./FREE_HOSTING_AND_EMAIL.md) for current configuration, Netlify Forms notifications and mailbox migration constraints.

This document supersedes previous assumptions about paid domain DNS and Zoho SMTP. No old-domain email addresses should be advertised as active.

## Technical foundation completed

- Single Vite entry point, canonical Netlify metadata and sitemap.
- Responsive bilingual product studio presentation, portfolio and detailed case studies.
- `npm run build`, TypeScript and lint validation in GitHub Actions.
- Existing Netlify project with `npm run build`, publish directory `dist`, Node 20 and Deploy Previews.
- React contact form now submits to **Netlify Forms**; the old Zoho Functions were removed from this branch.

## Release gates

1. Verify `dreaminapp-contact` appears under Netlify Forms and send a real test submission.
2. Configure notification inbox after user creates/selects a new free email address.
3. Confirm new public email and add optional `VITE_CONTACT_EMAIL` to Netlify environment.
4. Confirm approved screenshots and permission for any private-message testimonial.
5. Inspect mobile / desktop, links, language toggle, accessibility, and SEO.
6. Merge only after explicit approval; current `main` and production remain unchanged.

A successful GitHub CI or Netlify deploy is not proof that the contact submission was received.
