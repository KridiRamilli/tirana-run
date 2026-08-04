# TiRun design reference — 2026-08-04

This folder preserves the original PNG artwork supplied by the product owner. These files are visual source material for the TiRun PWA and are not automatically production assets.

Before wiring any item into the app, confirm its target mockup, crop, transparency requirements, responsive behavior, and optimized WebP variants. Real application maps must remain interactive map layers rather than generated images.

## Inventory

### Backgrounds

- `backgrounds/botanical-glow-left.png` — green botanical background with foliage positioned on the left.
- `backgrounds/botanical-glow-right.png` — green botanical background with foliage positioned on the right.
- `backgrounds/tirana-landmarks-scene.png` — full-height Tirana landmark scene with open space for layout content.

### People

- `people/active-walker-woman.png` — rear-view active walker, female variant.
- `people/active-walker-man.png` — rear-view active walker, male variant.

People must only appear on screens whose approved mockups include people.

### Decorations

- `decorations/leaf-corner-top-right-large.png` — large upper-right watercolor foliage.
- `decorations/leaf-corner-top-right.png` — upper-right watercolor foliage.
- `decorations/leaf-corner-top-left.png` — upper-left watercolor foliage.
- `decorations/leaf-sprig.png` — small standalone watercolor leaf sprig.

### Route

- `routes/fixed-route-numbered.png` — decorative numbered representation of the single fixed route. It is not a replacement for the real interactive map.

### Landmarks

- `landmarks/tirana-landmarks-panorama.png` — transparent panorama of Tirana landmarks and plaza.
- `landmarks/tirana-civic-ensemble.png` — transparent civic-building and clock-tower ensemble.
- `landmarks/clock-tower-landmark.png` — standalone watercolor clock-tower landmark.
- `landmarks/skanderbeg-square-ensemble.png` — Skanderbeg Square ensemble with tower, domed building, and monument.
- `landmarks/rotunda-landmark.png` — standalone round domed landmark.
- `landmarks/skanderbeg-monument.png` — standalone Skanderbeg monument composition.

### Badges

- `badges/walking-route-badge.png` — green walking-route achievement badge.

## Duplicate handling

Two uploaded files for the round domed landmark were byte-for-byte identical (`SHA-256 E9564AB64664...`). Only one canonical copy is stored as `landmarks/rotunda-landmark.png`.

## Status

- Classification: reference candidates
- Provenance: user supplied
- Original format: PNG
- Production selection: pending mockup-by-mockup review
- Optimization and manifest integration: pending final selection
