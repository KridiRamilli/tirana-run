# Tirana Run

Tirana Run is a mobile-first Progressive Web App for active walking and discovering Tirana through one curated, fixed route. It combines a real map, walking progress, and historical stops in a focused city experience.

## Product scope

The first usable release will:

- run as an installable PWA;
- show one fixed route on a real map;
- show the route's historical stops;
- support an active walking session with location-based progress;
- present a clear, accessible mobile interface.

Audio guides and stronger offline support are planned after the core route and walking experience are reliable. This project does not provide route creation, route selection, social features, or a general navigation service.

## Status

Phase 1 implementation is in progress: a typed React/Vite PWA shell, MapLibre map, validated fixed-route fixture, and accessible stop list are available on the implementation branch.

## Documentation

- [Product specification](docs/product-spec.md)
- [Roadmap](docs/roadmap.md)
- [Architecture](docs/architecture.md)
- [Design system](docs/design-system.md)
- [Approved visual source of truth](design/README.md)
- [Agent instructions](AGENTS.md)

## Proposed implementation stack

- React + TypeScript + Vite
- MapLibre GL JS with a configurable map style
- GeoJSON for the fixed route and stops
- Vite PWA integration for the app manifest and service worker
- Vitest + Testing Library, with Playwright for critical mobile flows

The stack should be confirmed in the first implementation pull request. Keep external providers configurable and never commit secrets.

## Working method

Work is issue-driven:

1. Start from an accepted GitHub issue with explicit acceptance criteria.
2. Create a small branch and pull request.
3. Run formatting, linting, type checks, tests, and a production build.
4. Include evidence for visual or location-related behavior.
5. Update documentation whenever a product or architecture decision changes.

## Local development

Requires a current Node.js LTS release.

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` to override the public MapLibre-compatible style URL. Never put private tokens in client environment files.

Validation commands: `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`.

## License

No license has been selected yet. All rights are reserved until a license file is added.

