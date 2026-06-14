# Rick Road Neighbors

Landing page for the resident-led effort to bring **natural gas service to Rick Road**
via PECO's non-binding application process.

A neighbor scans the QR code (or types `rickroadneighbors.com`), lands on this page,
reads the explanation, and taps a button that opens PECO's official Microsoft Forms
application. No database or backend — the site only informs and links out.

## What's here

```
public/index.html      The landing page (this is the whole website)
qr/rickroad-qr.png     QR code, 1200px PNG — for printing flyers/door hangers
qr/rickroad-qr.svg     QR code, vector — scales to any size with no blur
qr/flyer.html          A ready-to-print flyer with the QR code. Open + Cmd/Ctrl-P
scripts/make-qr.js     Regenerates the QR codes
```

## Deploy to Cloudflare Pages (free)

Your domain is already on Cloudflare, so this is the easiest path.

1. Go to the **Cloudflare dashboard → Workers & Pages → Create → Pages**.
2. Either:
   - **Connect to Git** (push this repo to GitHub first, then select it), or
   - **Upload assets** and drag in the **`public`** folder.
3. **Build settings:** no build command needed.
   - Build command: *(leave empty)*
   - Build output directory: `public`
4. After it deploys, go to the new Pages project → **Custom domains** →
   **Set up a custom domain** → enter `rickroadneighbors.com` (and `www.rickroadneighbors.com`).
   Cloudflare adds the DNS records automatically since the domain lives in your account.
5. Done — the QR code points at `https://rickroadneighbors.com` and will work as soon
   as the custom domain is active.

### Fastest no-Git option (Wrangler CLI)

```bash
npx wrangler pages deploy public --project-name rickroadneighbors
```

Then attach the custom domain in the dashboard as in step 4.

## Updating the QR code

The QR points to `https://rickroadneighbors.com`. If you ever want it to point
somewhere else (e.g. straight to the PECO form), regenerate it:

```bash
node scripts/make-qr.js https://your-new-url
```

## Editing the text

All copy lives in [public/index.html](public/index.html) — open it and edit the
text directly. The PECO form link appears twice (the two orange buttons); update
both if the form URL ever changes.
