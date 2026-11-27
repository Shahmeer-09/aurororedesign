# Architecture

The project is a Next.js 16 App Router application with React 19, strict TypeScript, Tailwind CSS 4, and Biome. Public content routes render static HTML from Server Components.

| Location | Responsibility |
| --- | --- |
| [src/app/page.tsx](../src/app/page.tsx) | Homepage content and section composition |
| [src/app/media/page.tsx](../src/app/media/page.tsx) | Speaking profile and links to the live media kit’s recordings |
| [src/app/products/](../src/app/products/) | First-page recording catalog and cached listing data |
| [src/app/about/](../src/app/about/) | Biography, mission, and client-side testimonial carousel |
| [src/app/starseeds/page.tsx](../src/app/starseeds/page.tsx) | Starseeds introduction and offerings |
| [src/app/services/](../src/app/services/) | Service details and booking data shared with the homepage |
| [src/app/partnerships/page.tsx](../src/app/partnerships/page.tsx) | Partner photography and store links |
| [src/app/contact/page.tsx](../src/app/contact/page.tsx) | Hosted DigiStartup form and direct form link |
| [src/app/layout.tsx](../src/app/layout.tsx) | Document shell, metadata, self-hosted fonts, and global stylesheet |
| [src/app/_components/](../src/app/_components/) | Site header, footer, and client components for the mobile menu, scroll-aware header, motion preference, and Flodesk embed |
| [src/components/ui/](../src/components/ui/) | Shared UI components, including the testimonial avatar picker |
| [src/components/button.tsx](../src/components/button.tsx) | Shared native button and Next.js link with primary and outline styles |
| [src/app/globals.css](../src/app/globals.css) | CSS variables, Tailwind theme tokens, shared styles, and CSS effects |
| [public/aurora/](../public/aurora/) | Optimized brand imagery, hero video, and fallback poster |

The mobile menu uses a native dialog. The hero checks motion preference before requesting the video. The Flodesk embed loads as visitors approach the meditation section. Flodesk handles signup and delivery, and Schedulista handles bookings, and DigiStartup handles contact form submissions. The app has no API route, database, authentication, or project-specific environment variables.

The catalog is a static `/products` route. The detail route at `/products/[slug]` prebuilds the nine catalog entries with `generateStaticParams` and resolves the slug within Suspense. Unknown slugs use the standard Next.js Not Found view. The homepage and catalog share title and price data through the cached `getProductsPage` function. Detail pages use [the product export](product-details.json) for published copy, product IDs, and quantity limits. The purchase form sends the product ID and selected quantity to Aurora’s WooCommerce cart.

Current external site links are centralized in [site-links.ts](../src/app/site-links.ts). Production routing and hosting are pending.
