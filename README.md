# Mounta — AI Goal Execution Assistant

> Turn goals into daily action. Your calm AI execution partner.

## Stack

- **Next.js 14** App Router + TypeScript
- **TailwindCSS** with custom design tokens
- **Supabase** — Auth + PostgreSQL
- **OpenAI / Anthropic** — AI plan generation
- **Stripe-ready** pricing architecture
- **PWA** — installable on mobile home screen

---

## Quick Start

```bash
# 1. Clone and install
git clone https://github.com/yourname/mounta
cd mounta
npm install

# 2. Configure environment
cp .env.example .env.local
# Fill in your Supabase + AI API keys

# 3. Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Supabase Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the contents of `lib/schema.sql`
3. Copy your project URL and keys to `.env.local`

---

## PWA / Mobile Install

Mounta is a Progressive Web App. Users can install it on their phone:

- **iOS**: Tap the Share icon → "Add to Home Screen"
- **Android**: Chrome will show an "Install" prompt automatically

The app works offline for previously visited pages thanks to the service worker at `public/sw.js`.

---

## Project Structure

```
mounta/
├── app/
│   ├── layout.tsx          # Root layout with PWA meta
│   ├── page.tsx            # Landing page
│   ├── pricing/page.tsx    # Pricing page
│   ├── dashboard/page.tsx  # MVP dashboard
│   └── api/
│       ├── waitlist/       # POST /api/waitlist
│       ├── goals/          # GET/POST /api/goals
│       ├── plan/           # POST /api/plan (AI)
│       └── actions/        # POST /api/actions (AI)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── WaitlistForm.tsx
│   └── PWAInstallBanner.tsx
├── lib/
│   ├── mounta-engine.ts    # Core AI engine + logic
│   ├── types.ts            # Types + pricing plans
│   └── schema.sql          # Supabase DB schema
└── public/
    ├── manifest.json       # PWA manifest
    └── sw.js               # Service worker
```

---

## Core Engine

The Mounta AI engine (`lib/mounta-engine.ts`) provides:

| Function | Description |
|----------|-------------|
| `GOAL_DECOMPOSITION_PROMPT` | System prompt for goal → plan conversion |
| `DAILY_ACTION_PROMPT()` | Energy-aware daily action generator |
| `calculateConsistencyScore()` | 0–100% score with streak bonus |
| `adaptPlan()` | Smart replanning after missed days |
| `formatDuration()` | Human-readable time display |

---

## Deployment

### Vercel (recommended)
```bash
vercel --prod
```
Add all `.env.example` variables in your Vercel project settings.

### Railway (for API if separated)
```bash
railway up
```

---

## Roadmap

- [ ] Supabase Auth integration
- [ ] Real user goals CRUD
- [ ] Push notifications for daily reminders
- [ ] Streak animations
- [ ] AI-powered weekly reports
- [ ] Calendar sync (Google/Apple)
- [ ] Stripe billing integration

---

*Execution > Motivation.*
