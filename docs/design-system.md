# Design system

The approved raster mockups in `design/mockups/approved/` are the visual source of truth. This document explains the system; when prose and a mockup differ visually, stop and surface the conflict rather than inventing a third design. Machine-readable values live in `design/design-tokens.json`.

## Principles

- Map first, action clear: the route stays understandable while the primary walking action is obvious.
- Calm and civic: use a restrained visual language inspired by Tirana without turning landmarks into decoration.
- Outdoor legibility: strong contrast, large targets, and minimal dependence on subtle color differences.
- Progressive disclosure: route overview first, stop detail on demand.
- Inclusive by default: reduced motion, scalable type, keyboard access, and useful non-map fallbacks.

## Foundation tokens

Tokens are starting constraints and should be implemented as CSS custom properties, then visually tested.

```css
:root {
  --color-brand: #45a914;
  --color-brand-strong: #0b5c24;
  --color-route: #2f9418;
  --color-surface: #ffffff;
  --color-surface-muted: #f6f8f1;
  --color-text: #103d22;
  --color-text-muted: #52605e;
  --color-border: #c8cfcc;
  --color-success: #237a4b;
  --color-warning: #9a5b00;
  --color-danger: #b42318;
  --focus-ring: #155eef;
  --radius-sm: 0.5rem;
  --radius-md: 0.875rem;
  --radius-lg: 1.25rem;
  --shadow-sheet: 0 -0.5rem 2rem rgb(23 32 31 / 0.16);
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
}
```

Use a system sans-serif stack initially. Body text is at least 1rem/1.5; labels at least 0.875rem/1.25; headings use a compact responsive scale.

## Core patterns

- App shell with safe-area insets and a full-available-height map region.
- Route summary card/sheet that never hides essential map attribution.
- Primary start/pause/finish control with text and icon, not color alone.
- Stop markers with distinct selected, visited, and current states plus an equivalent ordered stop list.
- Stop detail sheet/dialog with heading, history text, close action, and later audio/transcript region.
- Status banner for GPS/map/offline messages; avoid transient toasts for required actions.
- Skeleton/loading, empty, permission-denied, provider-error, and offline states.

## Accessibility requirements

- Meet WCAG 2.2 AA contrast; verify combinations rather than assuming token compliance.
- Minimum 44 Ã— 44 CSS-pixel interactive targets.
- Visible keyboard focus; logical focus order and focus restoration for sheets/dialogs.
- Do not make the map the only representation of route or stops.
- Respect `prefers-reduced-motion`; no required meaning in animation.
- Announce meaningful walking-session status changes without noisy live updates.
- Keep map attribution visible and readable.

## Responsive behavior

Design mobile-first from 320 CSS pixels. On narrow screens use a bottom sheet/list below the map; on wider screens allow a side panel. Avoid hover-only behavior and test portrait/landscape with browser safe areas.

## Content voice

Use concise, welcoming, factual language. State what location access enables before asking. Historical content must identify its editorial source/reviewer before release. Avoid claiming safety, route accuracy, or offline availability beyond tested behavior.

