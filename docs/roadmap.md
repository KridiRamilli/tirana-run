# Roadmap

The roadmap is sequential but evidence-driven. An issue may move forward only when its acceptance criteria and verification are complete.

## Phase 0 â€” Foundation

- Establish product scope, architecture boundaries, design tokens, agent rules, and GitHub templates.
- Record unresolved route, content, and provider decisions.
- Create the first fixed-route map implementation issue.

Exit: contributors can explain the product boundary and open a scoped, verifiable pull request.

## Phase 1 â€” Fixed-route map MVP

- Scaffold the typed mobile-first PWA.
- Add the app manifest and minimal installability support.
- Integrate a real MapLibre map with attribution and configurable style URL.
- Add one versioned GeoJSON route and ordered stop dataset.
- Render route, start/end, stop markers, details, loading, and map-error states.
- Add unit/component tests and a mobile smoke test.

Exit: a deployed production build shows the one fixed route and its historical stops on a real map.

## Phase 2 â€” Active walking

- Add explicit session start, pause/stop, and completion states.
- Add permission-aware geolocation and current-position display.
- Calculate transparent, testable progress, elapsed time, and distance behavior.
- Document privacy and battery implications; test degraded GPS states.

Exit: a user can follow the fixed route during a walking session without losing access to route content when location is unavailable.

## Phase 3 â€” Historical experience

- Finalize reviewed stop content and responsive stop details.
- Improve route-to-stop discovery and accessibility.
- Add localization only after the content language decision is accepted.

Exit: every approved stop has consistent, reviewed, accessible historical content.

## Phase 4 â€” Audio and offline resilience

- Add accessible audio controls, transcripts, and stop association.
- Define and implement an explicit cache strategy for shell, route, content, and eligible media/map resources.
- Provide clear downloaded/offline state and storage/error handling.

Exit: documented supported content remains useful offline and audio never blocks text access.

## Backlog discipline

Ideas outside these phases go into a future-ideas issue and do not enter implementation without an explicit product-spec change.

