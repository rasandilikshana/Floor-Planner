---
name: Canvas interaction quirks and coordinate system
description: Key findings about how the 2D SVG canvas coordinate system works and interaction patterns
type: project
---

## Coordinate system

- Screen x=68 maps to scene X=0 (left edge of canvas). 1 screen pixel = 1 scene unit (cm).
- Scene Y is inverted: screen y=100 maps to scene Y≈1915. Approximately scene Y = 2015 - screen_y.
- The scene is 3000x2000 units. Default origin in scene coords is around Y=2000 at the top.
- Mouse coords readable from `document.querySelector('[title="Mouse X Coordinate"]').textContent`.

## Wall drawing workflow

1. Open catalog (toolbar button 4), click the "wall" item — this enters draw-line mode.
2. Click on SVG canvas to set first vertex; each subsequent click extends the wall chain.
3. Click back on the start vertex to close a room polygon (triggers area auto-detection).
4. Press Escape to exit draw mode after finishing.
5. The catalog closes automatically when a line element is selected.

## Wall selection

- In idle mode (after Escape), click directly on the hatched wall border to select it.
- The wall border is ~20px wide at zoom 1.0x. Click near the center of the wall line.
- On selection: blue endpoint handles appear, dimension label shows in cm, sidebar shows properties panel.

## Zoom / Pan

- Mouse wheel zooms the 2D canvas. Each scroll step changes zoom by ~0.03x.
- Right-click drag pans the viewport.
- Zoom triggers passive event listener errors in console (React 16 + react-svg-pan-zoom quirk).

## After load (file upload)

- Zoom shows "Zoom: 0.000X" immediately after loading a JSON file. Self-corrects to 1.000X when user interacts (e.g., presses Escape or moves mouse). This is a display-only bug in the footer status.

## Undo

- Ctrl+Z undoes one wall at a time (each vertex placement is a separate undo step).
- The sidebar selection updates to show the newly-selected element after undo.
