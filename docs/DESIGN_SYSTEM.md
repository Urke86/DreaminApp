# DreaminApp — Design system & release checklist

## Positioning
Independent digital product studio. Focus on SaaS, mobile apps and practical AI/automation.

## Visual direction
- Foundation: midnight blue (#090E1B, #0D1424, #111B2D) and restrained atmospheric gradients.
- Accents: lavender (#9D90FF), mint (#90E8D5), light blue (#AACBFF).
- Typography: Manrope for editorial display, DM Sans for body copy. Fonts are loaded via Google Fonts with system sans-serif fallback.
- Reusable styling in `src/index.css`: `studio-gradient-text`, `studio-section-title`, `studio-button-primary`, `studio-button-outline`, `studio-eyebrow`, `studio-grid`.
- No generic stock team pictures, fabricated growth statistics or unapproved testimonials.
- Hero illustration is built with CSS; it is an abstract visual, not a screenshot of a real product.

## User experience
- Focused navigation: Work / Expertise / Studio / Contact.
- Always-accessible SR/EN language toggle.
- Accessible mobile menu with expanded state and Escape close.
- Keyboard skip-to-content link, labeled contact fields, error/success states.
- Respect `prefers-reduced-motion`.
- Service cards and project filters are responsive.

## Scope
- Reworked Hero, Navbar, Services, About, Contact, Footer, LanguageSelector, CSS.
- Retained real portfolio data and updated the portfolio presentation.
- Removed outdated EasyBook price cards from homepage only; EasyBook still appears in portfolio.
- Removed unverified testimonials and fake stats from homepage only.
- Existing Netlify contact endpoint remains in use.

## Release blockers
1. Review layout visually on real mobile and desktop viewport widths; automated build is not a screenshot test.
2. Add approved real product screenshots and case-study pages; do not disclose private client/source information.
3. Verify Netlify preview, SMTP credentials and successful live contact delivery.
4. Confirm domain DNS records and redirect behavior before any hosting changes.
5. Confirm LinkedIn and GitHub public links and wording of all project statuses.
6. Review EasyBook commercial terms separately before reintroducing pricing.
7. Decide whether to delete or archive unused components and newsletter/pricing functions in a later cleanup PR.

## Deploy discipline
Production branch stays `main`. This design is on `chore/phase-1-foundation-2026` with a draft PR. Do not merge or change DNS without explicit approval.
