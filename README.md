# HSK Path

A Duolingo-style learning platform for HSK Chinese exam preparation.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- Mobile-first design

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, features, HSK levels |
| `/login` | Sign in page |
| `/signup` | 2-step registration with goal selector |
| `/dashboard` | Learner dashboard with streak, XP, lesson path |

## Project Structure

```
/app
  layout.tsx         # Root layout
  globals.css        # Global styles + Tailwind
  page.tsx           # Landing page
  /login
    page.tsx         # Login page
  /signup
    page.tsx         # Signup page (2 steps)
  /dashboard
    page.tsx         # Dashboard
/components
  Navbar.tsx         # Responsive navigation
  Footer.tsx         # Site footer
/lib
  constants.ts       # App constants & routes
/locales
  en.json            # English strings
  zh.json            # Chinese strings
```

## Design System

- **Colors**: Ink black `#0D0D0D`, Vermilion red `#C8391B`, Paper white `#F5F0E8`, Gold `#D4A853`
- **Fonts**: Playfair Display (display) + DM Sans (body)
- **Theme**: Editorial dark with Chinese ink culture accents
