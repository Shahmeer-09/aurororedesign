# Project instructions

Auror Redesign is the Aurora Luna Star homepage, built with Next.js App Router, TypeScript, Tailwind CSS, and Biome.

The live website is the reference for the redesign. [Aurora Luna Star](https://auroralunastar.com/)

## Session context

- At the start of each session, read [README.md](README.md) and [docs/PROJECT_STATUS.md](docs/PROJECT_STATUS.md). Confirm the current task against the relevant code.
- Read the [PRD](docs/PRD.md) before changing product behavior, the [architecture notes](docs/ARCHITECTURE.md) before changing structure or integrations, and the [design notes](docs/DESIGN.md) before user-facing changes.

## Working in this repository

- Follow App Router file conventions under `src/app`. Keep root metadata and shared layout in `src/app/layout.tsx`, global styles in `src/app/globals.css`, and static assets in `public`.
- Keep pages and layouts as Server Components by default. Put browser state in the component that needs it. Reuse `Button` and `ButtonLink` from `src/components/button.tsx` for styled actions and links.
- Follow the existing TypeScript, Tailwind, and Biome configuration. Keep `package-lock.json` current when dependencies change.
- Use `npm ci` for setup, `npm run dev` for local development, `npm run lint` for code checks, and `npm run build` for production builds. The [README](README.md) lists the available scripts.

## Handoff

- After meaningful work and before handing off active work, update [docs/PROJECT_STATUS.md](docs/PROJECT_STATUS.md) with what changed, actual check results, blockers, and the next concrete task.
- Update the relevant document when its requirements, design, architecture, setup, or instructions change. Keep status concise and record deployment only when confirmed.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
