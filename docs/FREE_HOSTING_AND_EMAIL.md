# DreaminApp — free hosting and mail migration (Nov 2026)

## Confirmed decision
The previous domain `dreaminapp.rs` is **not owned or renewed** by the studio. Do not publish `dreaminapp.rs` links, invent forwarding from it, or continue exposing `office@dreaminapp.rs` / `partneri@dreaminapp.rs` as working addresses.

Primary production URL: **https://dreaminapp.netlify.app/** (Netlify's provider-owned subdomain).

GitHub deployment: `Urke86/DreaminApp` → Netlify site `dreaminapp`. Production branch remains `main` until PR approval. Preview remains `https://deploy-preview-1--dreaminapp.netlify.app/`.

## No-domain contact flow (implemented on development branch)
- Visible React form posts a URL-encoded `dreaminapp-contact` submission to `/`.
- `index.html` contains the static form blueprint required for Netlify's build-time detection.
- The form has the fields `name`, `email`, `subject`, `message` and honeypot `bot-field`.
- Leads can be reviewed in the Netlify site's **Forms** dashboard, without SMTP credentials or mail hosting.
- Netlify's free credit-based plans include free Forms submissions according to current documentation.
- A public direct-mail link appears **only** if `VITE_CONTACT_EMAIL` is configured at build time. Otherwise, the site links to the existing public Upwork profile.
- Removed obsolete SMTP-backed Netlify Functions that were left over from an earlier Zoho setup. Do not restore them for the old domain.

## Required Netlify UI actions
1. In Netlify open **dreaminapp → Forms** and ensure **Form detection** is enabled.
2. Deploy the preview and verify that `dreaminapp-contact` was detected (some accounts require explicit activation before next deploy).
3. Submit a single realistic test message via Preview and confirm it appears under **Forms → Verified** (or inspect the Spam list). Do not treat HTTP 200 alone as proof of successful submission.
4. Once the owner chooses and creates a **new** email address, go to **Forms → Submission notifications → Add notification → Email notification**, configure that address and confirm it if Netlify requests confirmation.
5. Optionally set `VITE_CONTACT_EMAIL` to that public email in the Netlify project environment, then redeploy. This is a public front-end setting, **not a secret**.
6. Remove unneeded `ZOHO_USER`, `ZOHO_PASS`, old SMTP secrets from Netlify settings only after checking no other site or workflow shares them. Never expose their values.
7. Review usage/credit limits and choose Free. Do not purchase domains or upgrade plans automatically.

## Free email options when there is no owned domain
A `netlify.app` subdomain is a website address, **not a mailbox domain**. Netlify does not provide `name@dreaminapp.netlify.app` inboxes to this site.
- A new Gmail account (for example, `dreaminapp.studio@gmail.com`, **only if available**) is a straightforward free business contact.
- Proton Mail Free can issue a new `@proton.me` address, subject to its free-plan terms.
- Zoho Mail custom-domain business mailboxes require DNS control over a domain you own. They cannot keep `@dreaminapp.rs` addresses working once ownership is lost.

**Old mail content**: exporting old mail via Zoho webmail/admin requires actual account access and depends on the old service state. Domain loss also means old inbound mail cannot automatically forward. Do not claim migration completed without exporting/importing mailbox data and verifying access.

## Before production release
- Update LinkedIn, Upwork, Fiverr and portfolio profile links from `dreaminapp.rs` to the new Netlify URL.
- Confirm 18Holes.Golf client's consent before publishing an Upwork direct-message quote.
- Test mobile, accessibility, Netlify Forms, search metadata, and the `dreaminapp.netlify.app` SSL URL.
- Only merge draft PR after explicit owner sign-off.
