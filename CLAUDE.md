# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

react-planner is a React component library for drawing 2D floorplans with 3D navigation. Users drag & drop catalog elements (walls, doors, windows, furniture) onto a 2D canvas rendered in SVG, then view the result in 3D via Three.js.

## Commands

- **Dev server:** `npm start` (runs on port 9000)
- **Full build:** `npm run build` (cleans, builds demo + CommonJS + ES modules)
- **Build demo only:** `npm run build-demo`
- **Build CommonJS:** `npm run build-commonjs`
- **Build ES modules:** `npm run build-es`
- **Tests:** No test suite configured (`npm test` exits with error)

## Tech Stack

- React 16, Redux, Immutable.js (v3) for state
- Babel 6 (not 7) with `babel-preset-env` and `babel-preset-react`
- Webpack 4 for demo bundling
- Three.js 0.94 for 3D rendering
- `react-svg-pan-zoom` for 2D canvas interaction

## Architecture

### State Management (Immutable Records)

All state is modeled as Immutable.js Records in `src/models.js`. The hierarchy is:

**State** → **Scene** → **Layer** → elements (Vertex, Line, Hole, Area, Item)

- `State`: top-level app state including mode, catalog, viewer state, snap settings, undo history
- `Scene`: contains layers, groups, grids, guides, dimensions (width/height/unit)
- `Layer`: contains maps of vertices, lines, holes, areas, items, and a selected ElementsSet
- Elements share attributes (id, type, name, properties, visible, selected) defined in `sharedAttributes`

The `Catalog` record manages available element types and uses `factoryElement()` to instantiate elements with default properties based on prototype (lines/holes/areas/items).

### Redux Pattern

The reducer in `src/reducers/reducer.js` dispatches by action type group (defined in `src/constants.js`) to domain-specific reducers: project, viewer2d, viewer3d, items, holes, lines, areas, groups, scene, vertices.

Actions follow the same domain split in `src/actions/`. Each action file exports action creators consumed by components.

### Class Layer (`src/class/`)

Business logic classes (Project, Layer, Line, Hole, Item, Area, Vertex, Group, Guide) that operate on the immutable state. These are the primary mutation logic — they take state and return new state.

### Catalog System

- `src/catalog/catalog.js`: registry for element types with `registerElement()`, `registerMultipleElements()`
- `src/catalog/factories/`: wall-factory and area-factory generate 2D SVG and 3D Three.js geometry
- `src/catalog/properties/`: reusable property editors (color, number, enum, checkbox, string, length, toggle, range, read-only)
- Demo catalog at `demo/src/catalog/` with categories: lines (walls), holes (doors/windows), items (furniture), areas

Each catalog element is a `planner-element.jsx` that exports `{info, properties, render2D, render3D}`.

### Component Structure

- `src/react-planner.jsx`: main component, connects to Redux store
- `src/components/viewer2d/`: SVG-based 2D editor (pan/zoom via react-svg-pan-zoom)
- `src/components/viewer3d/`: Three.js 3D viewer
- `src/components/sidebar/`, `toolbar/`, `footerbar/`, `catalog-view/`: UI panels

### Plugins

Plugin system in `src/plugins/`: Keyboard shortcuts, Autosave (localStorage), ConsoleDebugger. Plugins hook into the planner lifecycle.

### Key Utilities

- `src/utils/geometry.js`, `math.js`: geometric calculations for walls, intersections, areas
- `src/utils/snap.js`, `snap-scene.js`: snapping logic for drawing precision
- `src/utils/graph.js`, `graph-cycles.js`, `graph-inner-cycles.js`: graph algorithms for detecting room boundaries (area detection)
- `src/utils/history.js`: undo/redo via scene history

## Build Outputs

- `demo/dist/`: webpack demo bundle
- `lib/`: CommonJS build (via babel, `BABEL_ENV=commonjs`)
- `es/`: ES modules build (via babel, `BABEL_ENV=es`)

## Key Conventions

- All state mutations go through Immutable.js — never mutate state directly
- Element prototypes are one of: `vertices`, `lines`, `holes`, `areas`, `items`
- Holes (doors/windows) attach to lines (walls) via an offset value
- Areas are auto-detected from closed wall cycles using graph algorithms
- 2D rendering uses SVG; 3D rendering uses Three.js geometries
- The `stateExtractor` prop on ReactPlanner maps the host app's Redux state to the planner's slice
