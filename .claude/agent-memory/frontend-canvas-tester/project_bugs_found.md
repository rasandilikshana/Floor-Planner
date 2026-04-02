---
name: Known bugs and issues in react-planner
description: Bugs and UX issues discovered during testing sessions
type: project
---

## Confirmed bugs

### BUG-1: Zoom shows 0.000X after JSON file load
- **Steps:** Click load project button, upload a JSON file.
- **Expected:** Zoom stays at 1.000X.
- **Actual:** Footer shows "Zoom: 0.000X" until user interacts with canvas.
- **Severity:** Minor (visual only, self-corrects).

### BUG-2: Typo in Guides panel — "Giude" instead of "Guide"
- **Location:** Guides sidebar panel > Horizontal tab > row button text "+ Add Horizontal Giude"
- **Severity:** Low (cosmetic typo).

### BUG-3: Passive event listener console errors on wheel zoom
- **Error:** "Unable to preventDefault inside passive event listener due to target being treated as passive"
- **Trigger:** Any mouse wheel scroll on the 2D canvas.
- **Source:** `react-dom/cjs/react-dom.development.js:1505` — React 16 + modern Chrome passive wheel events conflict.
- **Severity:** Medium — may affect scroll prevention / zoom feel; logged as errors in console.

## UX issues

### UX-1: Catalog tag inconsistent casing
- Window items have tags "window" (lowercase), "Window" (capitalized), and "Finestre" (Italian) on Curtain Window.
- Indicates incomplete internationalization / inconsistent data entry in catalog definitions.

### BUG-4: Fixed-width sidebar (300px) and fixed toolbar (56px) do not scale with viewport
- **Symptom:** At 2560x1440 and 3440x1440, the toolbar (53px wide, 18px icons) and sidebar (300px wide) stay at their fixed pixel dimensions. UI chrome consumes a visually tiny fraction of the screen, making buttons microscopic and sidebar text barely legible.
- **Root cause:** `react-planner.jsx` defines `toolbarW = 56` and `sidebarW = 300` as hardcoded constants (lines 25-27). These are passed as `width` props to `<Toolbar>` and `<Sidebar>`, which apply them as inline `style={{ width, height }}`. No `clamp()`, `min()`, `vw`, or media queries involved.
- **Secondary cause:** No viewport-aware scaling. The `ContainerDimensions` wrapper in `renderer.jsx` correctly measures the container and passes `width/height` to `ReactPlanner`, but the component only uses those values to size the *canvas* (contentW = width - toolbarW - sidebarW), not the chrome panels themselves.
- **Affected files:**
  - `src/react-planner.jsx` lines 25-27 (constants), lines 112-116 (layout math), lines 124-128 (prop passing)
  - `src/components/toolbar/toolbar.jsx` line 173 (`style={{ maxWidth: width, maxHeight: height }}`)
  - `src/components/sidebar/sidebar.jsx` line 83 (`style={{ width, height }}`)
  - `src/components/footerbar/footerbar.jsx` line 86 (`style={{ width, height }}`)
- **Severity:** High — reported user-facing issue on large monitors.

### BUG-5: Toolbar icon size hardcoded at 18px — does not scale
- Icon SVGs inside toolbar buttons are 18x18px at all resolutions.
- At 3440x1440 the toolbar strip is 53px wide and icons appear microscopic — approximately 0.5% of screen width.

## Non-issues (by design)

- favicon.ico 404: demo app has no favicon — harmless.
- THREE.WebGLRenderer 94 console log: intentional Three.js startup message.
- ConsoleDebugger logs on startup: intentional developer plugin logging actions.
