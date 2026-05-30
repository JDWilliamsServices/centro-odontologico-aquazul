# Centro Odontologico AquaZul

Modern Spanish-first dental clinic website for Centro Odontologico AquaZul in La Romana, Dominican Republic.

Production demo URL: `https://centro-odontologico-aquazul.netlify.app`

## Stack

- Next.js App Router
- Tailwind CSS
- Netlify deployment
- Netlify Forms for appointment and contact submissions
- Calendly booking link support
- Google Calendar link support
- SEO metadata, sitemap, robots, and structured data

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

The JD Intellicore CRM dashboard is available at `http://localhost:3000/crm`.

## Routes

- `/` homepage
- `/servicios` services
- `/doctores` doctors
- `/citas` appointment request
- `/appointments` English alias redirecting to `/citas`
- `/contacto` contact and map
- `/crm` JD Intellicore lead tracking dashboard

## CRM Dashboard

The CRM starts with local sample data for Centro Odontologico AquaZul and can be expanded for future clients. Current sections include:

- Lead profile and project needs
- Follow-up tracker with upcoming and overdue reminder placeholders
- Meeting notes
- Proposal tracker
- Demo checklist

Future CRM integrations should use server-side environment variables and API routes so private keys are never exposed in the browser.

To update the local CRM sample data, edit `src/lib/crmData.js`. That file controls the current lead profile, project needs, follow-ups, meeting notes, proposal status, and demo checklist.

## Environment Variables

Use `.env.example` as the source of truth for local and Netlify variables.

Public values:

```bash
NEXT_PUBLIC_SITE_URL=https://centro-odontologico-aquazul.netlify.app
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/aquazul/consulta
NEXT_PUBLIC_GOOGLE_CALENDAR_URL=https://calendar.google.com/calendar/u/0/r/eventedit
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps?q=La%20Romana%2C%20Dominican%20Republic&output=embed
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/18097707289
```

Do not place Google Calendar API secrets in `NEXT_PUBLIC_*` variables. Future Calendar API integration should use server-only variables in a route handler or Netlify Function.

Server-only placeholders for future CRM integrations:

```bash
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
GMAIL_CLIENT_ID=
GMAIL_CLIENT_SECRET=
GOOGLE_CALENDAR_CLIENT_ID=
GOOGLE_CALENDAR_CLIENT_SECRET=
WHATSAPP_ACCESS_TOKEN=
```

## Netlify Deployment

The repository includes `netlify.toml`.

- Build command: `npm run build`
- Publish directory: `out`
- Node version: `20`
- Production demo URL: `https://centro-odontologico-aquazul.netlify.app`

Detailed GitHub, Netlify, SSL, environment variable, and Squarespace DNS instructions are in [DEPLOYMENT.md](./DEPLOYMENT.md).

## Forms

Netlify Forms detects the contact and appointment forms from `public/__forms.html`.

Configure form email notifications in Netlify for:

- `contacto-aquazul`
- `citas-aquazul`

Recommended notification inbox: `aquazulcod@gmail.com`.
