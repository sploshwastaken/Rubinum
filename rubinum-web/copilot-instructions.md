# Rubinum Web - Project Documentation & Copilot Instructions

## 1. Project Overview
**Rubinum Web** is a modern, high-performance corporate website for a digital solutions agency. It features a dark, software-themed aesthetic with advanced scroll-driven animations and a unified, immersive background experience.

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
│   ├── globals.css      # Global styles & Tailwind v4 config
│   ├── layout.tsx       # Root layout with Navbar/Footer structure
│   └── page.tsx         # Homepage (wraps sections in UnifiedSections)
├── components/
│   ├── home/            # Homepage specific components
│   │   ├── Hero.tsx
│   │   ├── UnifiedSections.tsx  # CORE: The shared background wrapper
│   │   ├── About.tsx
│   │   ├── Products.tsx
│   │   ├── Services.tsx
│   │   └── Technology.tsx
│   ├── layout/          # Global layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/              # Reusable UI components
└── lib/                 # Utilities
```

## 3. Key Design Features

### A. Unified Background System (`UnifiedSections.tsx`)
Instead of individual backgrounds for each section, the middle sections (About, Products, Services, Technology) are wrapped in a single `UnifiedSections` component.
- **Mechanism:** Uses a `sticky top-0` container for the background and a negative margin (`-mt-[100vh]`) for the content to overlay it.
- **Visuals:**
  - **Gradient Blobs:** Two large, shifting colored orbs (Blue/Purple/Pink/Emerald) that change color based on scroll position.
  - **Moving Grid:** A 3D perspective grid that moves vertically with scroll.
  - **Floating Symbols:** Three layers of parallax code symbols (`{ }`, `</>`, `//`, `&&`) moving at different speeds.
  - **Data Beams:** Horizontal scanning lines.
  - **Digital Noise:** Subtle grain overlay.

### B. Footer Reveal Effect
The Footer is fixed at the bottom, and the main content "unveils" it by scrolling up.
- **Implementation:** `layout.tsx` has a `mb-[500px]` on the main content wrapper to create space for the fixed footer behind it.

### C. Glassmorphism
Custom Tailwind utility defined in `globals.css`:
```css
@utility glass-panel {
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## 4. Development Guidelines

### Styling (Tailwind v4)
- Use the new `@theme` directive in CSS variables.
- Primary colors: `#3B82F6` (Blue), `#8B5CF6` (Purple).
- Background: `#030303` (Almost Black).

### Animations
- **Library:** Use `framer-motion` for all complex animations.
- **Performance:** Prefer `useScroll` and `useTransform` for scroll-linked animations to run off the main thread where possible.
- **Theme:** Animations should feel "cyber," "smooth," and "cinematic."

### Component Rules
- **Home Sections:** Should generally be transparent to let the `UnifiedSections` background show through.
- **Text:** Use `Geist Sans` for headings/body and `Geist Mono` for code snippets or technical accents.

## 5. Recent Changes (Jan 2026)
- **Unified Background:** Merged individual section backgrounds into one continuous flow.
- **Theme Update:** Shifted to a "Software/Dev" theme with code symbols and IDE-like aesthetics.
- **Visual Balance:** Increased grid visibility and restored gradient colors to avoid the "too black" look.
