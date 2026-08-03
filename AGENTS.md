# AGENTS.md

## Mission and boundaries

Build Tirana Run as a mobile-first PWA for one fixed walking route through Tirana, using a real map, active-walking progress, and curated historical stops. Audio guides and robust offline support are later phases.

Do not add route creation, multiple routes, social feeds, competitions, turn-by-turn navigation, a backend, accounts, or monetization unless an approved product decision changes the scope.

## Source of truth

Read these files before planning work:

1. `docs/product-spec.md`
2. `docs/roadmap.md`
3. `docs/architecture.md`
4. `docs/design-system.md`
5. `design/README.md`, `design/design-tokens.json`, and the approved screen mockups/specs
6. the GitHub issue for the task

If they conflict, stop and surface the conflict. The product specification controls scope; the accepted issue controls the current increment.

## Agent loop

1. Inspect the repository and current issue; do not assume files, commands, or dependencies exist.
2. Restate the goal, acceptance criteria, constraints, and open risks.
3. Make the smallest plan that delivers a reviewable vertical slice.
4. Implement only in-scope changes and preserve unrelated work.
5. Verify formatting, lint, type checks, tests, production build, and relevant mobile behavior.
6. Inspect the diff for scope creep, secrets, accidental generated files, and documentation drift.
7. Report what changed, evidence, limitations, and the next safe step.

When verification fails, diagnose, fix, and rerun the narrowest relevant check before the full required suite. Never claim a check passed unless it ran successfully.

## Engineering rules

- Prefer TypeScript with strict types; avoid `any` unless documented at an external boundary.
- Keep fixed-route and stop content as validated data, separate from UI and map adapters.
- Use GeoJSON/WGS84 coordinates in `[longitude, latitude]` order.
- Isolate map-provider configuration and browser geolocation behind small interfaces.
- Treat location permission denial, unavailable location, and inaccurate GPS as normal states.
- Do not expose API keys. Commit only documented environment-variable examples.
- Avoid adding backend infrastructure before the product requires it.
- Keep components accessible, responsive, and usable on narrow mobile screens.
- Update docs and tests with behavior changes.

## Pixel-perfect UI rules

- Approved mockups in `design/mockups/approved/` are the visual source of truth. The agent implements the design; it does not redesign it.
- Do not change layout hierarchy, colors, typography feel, spacing, card treatment, navigation, or icon style without explicit approval.
- Use `design/design-tokens.json` and the relevant file in `design/screen-specs/`.
- Use a real interactive map even where a mockup uses an illustrated map.
- Validate UI at the 390 × 844 reference viewport, attach a screenshot, and run visual regression checks when an application test harness exists.
- Dynamic content may change, but it must preserve the approved hierarchy and avoid overflow at 320 CSS pixels.
- There is one fixed route. Do not introduce route discovery, multiple routes, or a route carousel.
- The fixed route may be started from the nearest suitable point; this does not make the route editable.

## Pull requests

Use one issue per focused pull request. Include `Closes #<issue>`, a scope summary, screenshots for UI changes, verification commands/results, accessibility notes, and known limitations. Prefer conventional commit messages such as `feat:`, `fix:`, `docs:`, `test:`, and `chore:`.

## Definition of done

Acceptance criteria are met; relevant automated checks pass; the production build succeeds; mobile layout and error states are manually checked; no secrets or unrelated changes are present; and documentation reflects any accepted decision.

