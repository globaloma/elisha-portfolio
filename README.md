# Elisha Ibeabuchi — Portfolio

A personal portfolio for **Elisha Ibeabuchi** — UI/UX Designer, Mobile App Developer and Founder & CEO of Crib. Built from the Figma design "MY PORTFOLIO".

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** primitives (Base UI)
- **lucide-react** icons
- Fonts: **Playfair Display** (headings) + **Inter** (body) via `next/font`

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Structure

```
src/
├── app/
│   ├── layout.tsx              # fonts, metadata, dark theme
│   ├── globals.css             # design tokens + utilities (dark + cyan brand)
│   ├── page.tsx                # Home (single-page: hero → contact)
│   └── projects/
│       ├── page.tsx            # "Discover Projects" listing
│       └── [slug]/page.tsx     # Case study (Tranx, LocalBite, VoltPass, Bookmaker)
├── components/
│   ├── icon.tsx                # name → lucide icon map
│   ├── app-preview.tsx         # CSS phone / browser mockups
│   ├── site/                   # sidebar, shell, section-heading, project-card, footer, tag
│   └── ui/                     # shadcn primitives
└── lib/
    ├── data.ts                 # profile, services, projects, experience, etc.
    ├── case-studies.ts         # structured case-study content
    └── utils.ts                # cn()
```

## Design notes

- **Layout:** fixed left sidebar navigation (desktop) with scroll-spy; a top bar + slide-in drawer on mobile.
- **Theme:** dark (`#0b0b0c`) with a cyan brand accent. Each case study re-themes the page to its own brand colour via a single `--brand` CSS variable (Tranx green, LocalBite orange, VoltPass blue, Bookmaker amber).
- **App mockups:** the device screens are rendered in CSS (`app-preview.tsx`) as brand-tinted stand-ins for the Figma screenshots. Swap them for real exported images in `/public` when available.
- **Case-study inner pages** use a consistent structure (Overview → Problem → Goals → Research → Process → Features → Screens → Outcome). The copy is a faithful starting point and can be refined against the detailed Figma case-study frames.

## Content

All copy and data live in `src/lib/data.ts` and `src/lib/case-studies.ts` — edit those to update the site.
