# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # Type-check + build for production (tsc -b && vite build)
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
npm run deploy     # Build and deploy to GitHub Pages (writes dist/CNAME first)
```

No test suite is configured.

## Architecture

This is a personal portfolio site (aahil.io) built with React 19 + TypeScript + Vite, styled with Tailwind CSS v4 and animated with Framer Motion.

**Navigation model:** Single-page app with client-side section switching. `App.tsx` holds `activeSection` state (`"home" | "about" | "blog"`) and passes `setActiveSection` to `Navbar`. Sections animate in/out via `AnimatePresence`.

**Sections** (`src/sections/`): `Home`, `About`, `Blog` — each is a full-page view rendered conditionally based on `activeSection`.

**Shared component — `ExpandableList`** (`src/components/ExpandableList.tsx`): Used by both the Projects and Blog sections. Renders a list of cards; clicking one expands it to show full `content` (a `ReactNode`). Only one item can be expanded at a time; a "← back" button returns to the list.

**Data files** (`src/data/`): `projects.tsx` and `blogPosts.tsx` export arrays of `{ title, subtitle?, date?, content: ReactNode }` objects. The `content` field is JSX, so rich markup (links, styled paragraphs) lives directly in the data file rather than in a component.

**UI primitives** (`src/components/ui/`): shadcn/ui-style components (e.g. `Card`). Path alias `@/` maps to `src/`.

**Background:** A cherry blossom image (`src/assets/cherryBlossoms.webp`) is preloaded before rendering; a spinning favicon is shown during load.

## Adding content

- **New project:** Add an entry to the `projects` array in `src/data/projects.tsx`.
- **New blog post:** Add an entry to the array in `src/data/blogPosts.tsx`.
- **New section:** Create a component in `src/sections/`, add a nav link in `Navbar.tsx`, and render it conditionally in `App.tsx`.
