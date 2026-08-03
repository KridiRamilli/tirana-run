# Architecture

## Approach

Start as a client-side, static, installable PWA. The fixed route and historical stops are versioned in the repository. No backend is required for the defined MVP.

## Proposed stack

- React, TypeScript, and Vite for the application shell.
- MapLibre GL JS for real-map rendering without coupling domain data to a provider API.
- GeoJSON for route geometry and stop features.
- A Vite PWA plugin for manifest and service-worker integration.
- Vitest and Testing Library for logic/components; Playwright for critical mobile flows.

Confirm dependency versions and browser support in the scaffold PR.

## Boundaries

```text
UI / screens / accessible controls
              |
Application state (route view and walking session)
              |
Domain (Route, Stop, Session, Progress)
        /                 \
Route content          Browser adapters
(validated GeoJSON)    (MapLibre, Geolocation, Storage)
```

Domain logic must not import MapLibre or browser globals. Adapters translate external events into typed application events, which keeps progress logic and error handling testable.

## Data model

- `Route`: stable ID, name, ordered stop IDs, GeoJSON `LineString`, optional metadata.
- `Stop`: stable ID, order, title, `[longitude, latitude]`, short historical summary, optional extended content.
- `WalkingSession`: explicit status, start/end timestamps, latest accepted position, and derived metrics.

Validate repository data at development/build time. A route is invalid when referenced stop IDs are missing, stop order is duplicated, geometry is malformed, or coordinates fall outside expected bounds.

## Map and geolocation

- Load the style URL from documented configuration and show required attribution.
- Render route and stops from app-owned GeoJSON sources/layers.
- Map failures must produce a recoverable UI state; historical content remains available.
- Request geolocation only after an explicit user action.
- Handle denied, unavailable, timeout, and low-accuracy results as normal states.
- Do not upload or persist raw position history by default.

## PWA and offline policy

Phase 1 provides an installable shell and conservative asset caching. Do not promise offline map availability. Phase 4 will define cache eligibility, versioning, invalidation, storage limits, and map-provider terms before caching map resources or large audio.

## Testing strategy

- Unit: data validation, coordinate helpers, progress/session transitions.
- Component: route summary, stop selection/details, permission and map-error states.
- Integration: mocked map/geolocation adapters and repository route data.
- End-to-end: mobile viewport loads route, selects a stop, and survives denied location.

## Security and privacy

- No secrets or private provider tokens in the client or repository.
- Restrict any public map token by origin and least privilege.
- Minimize location collection, explain it before permission, and provide a clear stop action.
- Review third-party map, telemetry, and audio terms before adoption.

## Architecture decisions to record

Use short ADRs under `docs/decisions/` when choosing the map style/provider, completion algorithm, persistence strategy, analytics, localization, or offline map behavior.

