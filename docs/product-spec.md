# Product specification

## Product statement

Tirana Run is a mobile-first PWA that helps a person actively walk one curated route through Tirana while following it on a real map and discovering historical stops along the way.

## Audience and need

The initial audience is a resident or visitor who wants a simple, active way to explore Tirana. They need to understand where the fixed route goes, where they are relative to it, what stops are ahead, and the historical significance of each stop.

## Core experience

1. Open the PWA and see the fixed route and its stops on a real map.
2. Review essential route information and start a walking session.
3. Grant location permission and see current position/progress without changing the route.
4. Open historical stops for concise curated content.
5. Finish or stop the session and see available walking statistics.

## MVP requirements

- Installable, mobile-first PWA shell.
- Exactly one curated fixed route represented as GeoJSON.
- Real map tiles/style with visible attribution and configurable provider settings.
- Ordered historical stops with title, coordinates, short description, and accessible details.
- Start, active, paused/stopped, completed, permission-denied, and location-unavailable states.
- Current-position display when permission is granted.
- Basic session time and distance/progress derived in the browser where feasible.
- The fixed route can be joined from the nearest suitable point while retaining its approved geometry and ordered stops.
- Steps shown for a Tirana Run session are estimates derived from recorded distance and stride length, and are labelled accordingly.
- A lightweight local profile stores display name, language, step goal, stride preference, and audio preference without requiring an account.
- Clear privacy copy: location is used for the active experience and is not silently uploaded.

## Later phases

- Audio guide content and playback for stops.
- Albanian and English UI, historical content, audio, and completion assets.
- Deliberate offline caching of the app shell, route data, stop content, and eligible assets.
- More resilient session persistence and richer personal statistics.
- Completion badge generation and sharing through the Web Share API, with image download and copy fallbacks.

These are planned capabilities, not MVP acceptance criteria.

## Non-goals

- Multiple routes or a route builder.
- Turn-by-turn navigation or guaranteed safety routing.
- Social feeds, leaderboards, competitions, or live-location sharing. A user-initiated completion share card remains in scope.
- Required accounts, admin CMS, payments, or monetization. Optional cloud backup/sync may be considered later.
- Native iOS/Android apps.

## Success criteria

- A first-time user can identify the route and start walking without instruction.
- The route and ordered stops render reliably on a supported mobile browser.
- Denying location does not block route and historical content exploration.
- Primary controls are keyboard accessible and meet WCAG 2.2 AA contrast targets.
- The installable production build has no committed secrets and documents external map dependencies.

## Open product decisions

- Final route coordinates, length, start/end, and authoritative stop list.
- Historical copy, language strategy, and editorial review owner.
- Map style/provider and its usage terms.
- Exact definition of route progress and completion tolerance under noisy GPS.
- Final Albanian/English editorial and audio production workflow.
- Local-profile schema and optional future sync contract.

