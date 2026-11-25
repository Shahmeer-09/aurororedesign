# Architecture

The project is a Next.js 16 App Router application with React 19, strict TypeScript, Tailwind CSS 4, and Biome. The root route renders the homepage as static HTML from Server Components.

| Location | Responsibility |
| --- | --- |
| [src/app/page.tsx](../src/app/page.tsx) | Homepage content and section composition |
| [src/app/layout.tsx](../src/app/layout.tsx) | Document shell, metadata, self-hosted fonts, and global stylesheet |
| [src/app/_components/](../src/app/_components/) | Site header, footer, and client components for the mobile menu, scroll-aware header, motion preference, and Flodesk embed |
| [src/components/button.tsx](../src/components/button.tsx) | Shared native button and Next.js link with primary and outline styles |
| [src/app/globals.css](../src/app/globals.css) | Theme variables, responsive layouts, and CSS motion |
| [public/aurora/](../public/aurora/) | Optimized brand imagery, hero video, and fallback poster |

The mobile menu uses a native dialog. The hero checks motion preference before requesting the video. The Flodesk embed loads as visitors approach the meditation section. Flodesk handles signup and delivery, and Schedulista handles booking via links from the page. The app has no API route, database, authentication, or project-specific environment variables.

Current external site links are centralized in [site-links.ts](../src/app/site-links.ts). Production routing and hosting are pending.
