# Ahmet Builds — Brand Website

Production-ready portfolio website for [ahmetbuilds.com](https://ahmetbuilds.com).

## Stack

- **Next.js 16.2** (App Router)
- **Tailwind CSS v4** with custom brand tokens
- **next-intl v4** for i18n (EN / AR / TR) with automatic RTL for Arabic
- **Framer Motion** for scroll-triggered animations
- **TypeScript** strict mode

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/en`.

## Logo Placement

The two logo files must be placed in `/public/images/`:

| File | Usage |
|---|---|
| `logo-full.png` | Navbar (horizontal logo with text) |
| `logo-icon.png` | Favicon, Footer (circular icon) |

Both files are already in place. The `next/image` component serves them optimized.

## i18n

Translation files live in `/messages/`:

- `en.json` — English
- `ar.json` — Arabic (RTL applied automatically via `dir="rtl"` on `<html>`)
- `tr.json` — Turkish

To add a language: add the locale to `i18n/routing.ts`, create the messages file, and add the locale label to the `LOCALES` array in `components/Navbar.tsx`.

## Brand Tokens (Tailwind)

Defined in `app/globals.css` via `@theme`:

| Token | Value | Usage |
|---|---|---|
| `teal` | `#0EA5A4` | Primary accent, icons, CTAs |
| `ink` | `#0F172A` | Background |
| `sand` | `#E7E5E4` | Body text |
| `navy` | `#1A2F6F` | Gradient start |

Use as Tailwind utilities: `bg-teal`, `text-ink`, `border-sand`, etc.

## Customization

### WhatsApp number
In `components/Contact.tsx`, replace `PHONE_PLACEHOLDER` with your WhatsApp number in international format (digits only):

```tsx
href="https://wa.me/971501234567"
```

### Social links
Update the `SOCIAL_LINKS` arrays in `components/Contact.tsx` and `components/Footer.tsx`.

### Contact email
In `components/Contact.tsx`, the `mailto:` form sends to `hello@ahmet.builds.com` by default.

## Deploy

```bash
npm run build
npm run start
```

For Vercel: push to GitHub and connect — zero configuration needed.
