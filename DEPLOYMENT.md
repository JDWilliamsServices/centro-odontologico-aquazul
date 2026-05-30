# Netlify Deployment Guide

Production domain: `aquazul.jdintellicore.com`

This project is prepared for GitHub-connected Netlify continuous deployment. Do not purchase domains or change DNS automatically; complete the DNS steps manually in Squarespace after the Netlify site is created.

## Netlify Build Settings

Use these settings when importing the GitHub repository into Netlify:

- Framework preset: `Next.js`
- Base directory: repository root
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: `20`
- Production branch: `main`

The same settings are already defined in `netlify.toml`.

## Environment Variables

Set these in Netlify under Site configuration > Environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://aquazul.jdintellicore.com
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/aquazul/consulta
NEXT_PUBLIC_GOOGLE_CALENDAR_URL=https://calendar.google.com/calendar/u/0/r/eventedit
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps?q=La%20Romana%2C%20Dominican%20Republic&output=embed
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/18097707289
```

Only public browser-safe values should use `NEXT_PUBLIC_`.

For future Google Calendar API event creation, add server-only variables in Netlify and implement the integration in a server route or Netlify Function:

```bash
GOOGLE_CALENDAR_ID=
GOOGLE_CALENDAR_CLIENT_EMAIL=
GOOGLE_CALENDAR_PRIVATE_KEY=
```

## GitHub Continuous Deployment

1. Create a GitHub repository for this project.
2. Push this project to the repository, normally using `main` as the production branch.
3. In Netlify, choose Add new site > Import an existing project.
4. Connect Netlify to GitHub and select the repository.
5. Confirm the build settings above and deploy.
6. Keep Deploy previews enabled for pull requests so Netlify creates preview URLs before merging.

No GitHub Actions workflow is required for standard Netlify continuous deployment; Netlify builds automatically on pushes to the connected branch.

## Custom Domain in Netlify

1. Open the Netlify site dashboard.
2. Go to Domain management.
3. Add custom domain: `aquazul.jdintellicore.com`.
4. Let Netlify verify the domain and show the DNS target for the CNAME record.
5. Set `aquazul.jdintellicore.com` as the primary domain after verification.
6. Enable HTTPS. Netlify will provision a Let's Encrypt SSL certificate after DNS resolves.

## Squarespace DNS Setup

In the Squarespace-managed DNS for `jdintellicore.com`:

1. Open Domains > `jdintellicore.com` > DNS settings.
2. Add a CNAME record.
3. Host/name: `aquazul`.
4. Type: `CNAME`.
5. Data/value: the Netlify target shown in Domain management, usually something like `your-site-name.netlify.app`.
6. Save the record.
7. Return to Netlify and wait for DNS verification and SSL provisioning.

Do not add an A record for this subdomain unless Netlify specifically instructs you to use apex-domain records. A subdomain should use CNAME.

## Contact Form Notifications

Netlify Forms detects the contact and appointment forms from `public/__forms.html`.

Configure email notifications in Netlify:

1. Go to Forms > Form notifications.
2. Add email notifications for `contacto-aquazul` and `citas-aquazul`.
3. Send notifications to `aquazulcod@gmail.com` or the clinic's preferred inbox.

## SSL Notes

The site is SSL-compatible through Netlify-managed HTTPS. The security headers in `netlify.toml` are compatible with Netlify SSL and avoid forcing parent-domain HSTS settings.
