# Auror Redesign

This repository contains the redesigned Aurora Luna Star site. Visitors can compare sessions, browse video products, explore Aurora’s media and partnerships, sign up for her meditation, and contact her. The [PRD](docs/PRD.md) describes the site scope.

The live website is the reference for the redesign. [Aurora Luna Star](https://auroralunastar.com/)

## Local development

Use Node.js 20.9 or later and npm. Install from the checked-in lockfile and start the dev server:

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). The homepage lives in [src/app/page.tsx](src/app/page.tsx). The current setup requires no project-specific environment variables.

| Command | Purpose |
| --- | --- |
| `npm run lint` | Check code with Biome |
| `npm run format` | Format supported files in place |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build locally |

Start with the [project instructions](AGENTS.md) and [current status](docs/PROJECT_STATUS.md) when resuming work.
