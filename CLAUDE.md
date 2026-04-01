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

**Routing:** `HashRouter` from `react-router-dom`. Routes are defined in `App.tsx`. URLs take the form `aahil.io/#/section` and `aahil.io/#/section/slug`. The hash router is used because the site is hosted on GitHub Pages (no server-side routing).

**Sections** (`src/sections/`): `About`, `Career`, `Projects`, `Blog` — each is a full-page view. Routes are `/about`, `/career`, `/projects`, `/blog`. `/` redirects to `/about`. Section transitions fade in (0.6s) without a fade-out; the previous section unmounts immediately.

**Shared component — `ExpandableList`** (`src/components/ExpandableList.tsx`): Used by both Projects and Blog. Renders a list of cards; clicking one navigates to `/:basePath/:slug`. The expanded item is determined by `useParams`. A "← back" button navigates to `basePath`. Items with `expandable: false` show no hover state and cannot be clicked. The expanded view animates in with `opacity: 0, y: 10 → 1, y: 0` (0.4s); the list disappears immediately on navigation.

**Data files** (`src/data/`): `projects.tsx` and `blogPosts.tsx` export arrays of `{ slug, title, subtitle?, date?, content: ReactNode, expandable? }`. The `slug` is used as the URL segment. The `content` field is JSX.

**UI primitives** (`src/components/ui/`): shadcn/ui-style components (e.g. `Card`). Path alias `@/` maps to `src/`.

**Background:** A cherry blossom image (`src/assets/cherryBlossoms.webp`) is preloaded before rendering; a spinning favicon is shown during load.

**Images:** All assets are `.webp`. Project images live in `src/assets/<project-name>/`. Photos use `h-56 w-auto` (fixed height, natural width). Image pairs use `flex flex-col md:flex-row` — stacked on mobile, side-by-side at md (768px)+.

## Adding content

- **New project:** Add an entry to the `projects` array in `src/data/projects.tsx` with a unique `slug`. Images go in `src/assets/accelerometer/` or a new subfolder; convert to `.webp` before committing.
- **New blog post:** Add an entry to the array in `src/data/blogPosts.tsx` with a unique `slug`.
- **New section:** Create a component in `src/sections/`, add a `<Route>` in `App.tsx`, and add a nav link in `Navbar.tsx`.
- **Disable expansion:** Set `expandable: false` on a list item to render it as a non-interactive card.
