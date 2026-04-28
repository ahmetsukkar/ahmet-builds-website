# Ahmet Builds — Project Rules

## Stack
- Next.js 16.2 App Router (NOT pages router)
- Tailwind CSS with custom brand tokens
- next-intl for i18n (EN / AR / TR)
- Framer Motion for animations
- TypeScript strict mode

## Brand Colors (use these exact values)
- Primary Teal: #0EA5A4
- Dark Background: #0F172A
- Light Neutral: #E7E5E4
- Gradient: #1A2F6F → #0EA5A4

## Fonts
- Headings: Space Grotesk
- Body: Inter
- Arabic: Noto Sans Arabic

## i18n Rules
- ALL visible text must go in translation files
- Arabic locale must have dir="rtl" on html element
- Never hardcode text strings in components

## Component Rules
- One component per file
- All components in /components folder
- Use Tailwind only, no inline styles
- Mobile-first responsive design

## Logo Files
- Full logo: /public/images/logo-full.png
- Icon only: /public/images/logo-icon.png