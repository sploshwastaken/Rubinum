# Rubinum Web - Project Documentation & Copilot Instructions

## 1. Project Overview
**Rubinum Web** is a modern, high-performance corporate website for a digital solutions agency. It features a dark, software-themed aesthetic with advanced scroll-driven animations, a unified immersive background experience, and a "Neural Infrastructure" design language.

### Tech Stack
- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion 12
- **Icons:** Lucide React
- **Fonts:** Geist Sans & Geist Mono

## 2. Architecture & Structure

### Folder Structure
```
src/
├── app/                 # App Router pages
│   ├── about/           # Refactored: "Neural Infrastructure" design
│   ├── career/          # Refactored: Job listings & Application form
│   ├── contact/         # Refactored: Contact info & Form with Hero
│   ├── technology/      # Refactored: "Neural Infrastructure" design
│   ├── globals.css      # Global styles & Tailwind v4 config
│   ├── layout.tsx       # Root layout with Navbar/Footer structure
│   └── page.tsx         # Homepage (Hero + UnifiedSections wrapper)
├── components/
│   ├── home/            # Homepage specific components
│   │   ├── Hero.tsx             # Cyber/Gradient Hero
│   │   ├── UnifiedSections.tsx  # CORE: The shared background wrapper
│   │   ├── About.tsx            # System Core visual
│   │   ├── Products.tsx
│   │   ├── Services.tsx
│   │   ├── Careers.tsx          # Replaced old Technology section
│   │   └── Technology.tsx       # (Deprecated/Unused on Home)
│   ├── layout/          # Global layout components
│   │   ├── Navbar.tsx           # Updated with "Reverse R" logo & hover effects
│   │   └── Footer.tsx
│   └── ui/              # Reusable UI components
│       └── ScrollToTop.tsx      # Restricted to Homepage only
└── lib/                 # Utilities
```

## 3. Key Design Features

### A. Unified Background System (`UnifiedSections.tsx`)
Instead of individual backgrounds for each section, the middle sections (About, Products, Services, Careers) on the **Homepage** are wrapped in a single `UnifiedSections` component.
- **Mechanism:** Uses a `sticky top-0` container for the background and a negative margin (`-mt-[100vh]`) for the content to overlay it.
- **Visuals:** Gradient Blobs, Moving Grid, Floating Symbols.

### B. Neural Infrastructure Design Language
This design language, originally for the Technology page, has been extended to **About**, **Career**, and **Contact** pages.
- **Theme:** Dark (`#030303`), Glassmorphic, Glowing.
- **Components:** `GlowingCard` (mouse-tracking glow), `TechBadge`.
- **Backgrounds:** Noise texture + Pulse Gradients + Star Field (positioned `absolute` within Hero sections to avoid Footer overlap).

### C. Standardized Hero Sections (Inner Pages)
All inner pages (About, Career, Contact, Technology) share a consistent Hero structure:
- **Height:** `min-h-[80vh]`.
- **Typography:** `text-5xl md:text-7xl lg:text-8xl`, `font-bold`.
- **Badges:** "System Identity" style pill badges with pinging dots.
- **Gradients:** Text gradients typically flow `blue-400` -> `purple-500` -> `orange-500`.

### D. Navbar Branding
- **Logo:** The "R" in the logo icon and the "R" in "RUBINUM" are horizontally flipped (`scale-x-[-1]`) to create a unique brand identity.
- **Interactions:** Links feature a blue gradient underline and subtle glow on hover/active states.

### E. Footer Reveal Effect
The Footer is fixed at the bottom, and the main content "unveils" it by scrolling up.
- **Implementation:** `layout.tsx` has a `mb-[500px]` on the main content wrapper.

## 4. Development Guidelines

### Styling (Tailwind v4)
- Use the new `@theme` directive in CSS variables.
- Primary colors: `#3B82F6` (Blue), `#8B5CF6` (Purple).
- Background: `#030303` (Deep Black).

### Animations
- **Library:** Use `framer-motion` for all complex animations.
- **Performance:** Prefer `useScroll` and `useTransform` for scroll-linked animations.

### Component Rules
- **Home Sections:** Should generally be transparent to let the `UnifiedSections` background show through.
- **Inner Page Backgrounds:** Ensure background elements are contained within their specific sections (e.g., Hero) using `absolute inset-0` to prevent bleeding into the Footer.

## 5. Recent Changes (Jan 2026)
- **Global Refactor:** About, Career, Contact, and Technology pages now share the same "Neural Infrastructure" design and Hero structure.
- **Navbar:** Updated logo to use "Reverse R" styling; simplified hover effects to blue gradient.
- **Bug Fixes:** Fixed background bleeding issues on inner pages where Hero backgrounds covered the Footer.
- **Contact Page:** Added a dedicated Hero section before the contact form.
- **i18n & URL Canonicalization:** 
    - Implemented clean URLs for the default language (English). `/en/*` redirects to `/*`.
    - Middleware handles internal rewrites so Next.js can route `/*` to `src/app/[lang]/*`.
    - Updated `Navbar`, `Footer`, and `LanguageSwitcher` to generate correct paths based on the current locale.
- **Services Section:** Added missing titles and descriptions to the Services section on the homepage, synced with dictionaries.
- **Page Transitions:** 
    - Added a cinematic "System Boot" transition effect (`PageTransition.tsx`) using `template.tsx`.
    - Features a "Initializing..." overlay with dynamic text based on the target page and current language (e.g., "> INITIALIZING TECHNOLOGY CORE...").
    - Supports localized loading text for EN, TR, DE, RU.

## 6. Internationalization (i18n)
- **Strategy:** Sub-path routing (`/[lang]/...`).
- **Default Locale:** `en` (English).
- **URL Structure:**
    - Default (English): `rubinum.com/about` (No `/en` prefix).
    - Others: `rubinum.com/tr/about`, `rubinum.com/de/about`.
- **Middleware:** Handles redirects (External `/en` -> `/`) and rewrites (Internal `/` -> `/en`).
- **Dictionaries:** JSON files in `src/dictionaries/` (en, tr, de, ru).

