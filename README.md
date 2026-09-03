# 2012 Chevrolet Express 3500 listing

A mobile-friendly, single-page vehicle listing built with React and Vinext. The finished site exports to static files that can be stored on GitHub and served by a Cloudflare Worker.

## Add the real vehicle information

Edit `lib/vehicle.ts`. All listing content—including price, mileage, location, description, maintenance, specifications, sale notes, contact link, and photo captions—lives in that one file.

For the contact button, replace the placeholder email in `contactHref`. You can use:

- Email: `mailto:name@example.com?subject=2012%20Chevy%20Express%203500`
- Phone: `tel:+15555555555`
- Text: `sms:+15555555555`

## Add photos

Put six landscape JPG files in `public/photos/` using the filenames listed in `public/photos/README.md`. The first photo is the main hero image. Until a file is added, its slot displays a silver “Photo coming soon” panel.

## Work locally

```bash
npm install
npm run dev
```

## Publish with GitHub and Cloudflare Workers

1. Create an empty GitHub repository and push this project to it.
2. Sign in to Cloudflare from this folder with `npx wrangler login`.
3. Run `npm run deploy:cloudflare`.

Cloudflare will build and upload the static site defined in `wrangler.jsonc`. Future updates use the same deploy command.

Set `NEXT_PUBLIC_SITE_URL` to the final public address when building so shared links use the included social preview image. For example: `NEXT_PUBLIC_SITE_URL=https://your-domain.example npm run deploy:cloudflare`.
