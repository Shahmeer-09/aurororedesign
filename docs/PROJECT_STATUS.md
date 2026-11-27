# Project status

- **Last updated** · 2026-11-27
- **Current phase** · Public site pages ready for review

## Inner page preview

Seven inner pages now use subject-specific openings and content-sized closing actions. About opens with Aurora’s portrait, Services with her work, Starseeds with a definition and night sky, Media with its playable recording, and Products with the retreat. Partnerships and Contact use the same overlay menu and editorial palette. The homepage retains its full booking footer.

The production build and targeted Biome check passed. Chrome reviewed the homepage and seven inner pages at 1440px and 390px. All visible main images loaded, each route had one H1, and internal fragment links resolved without horizontal overflow. The featured recording mounted its player on click and the external contact form rendered. Booking, inquiry submission, and checkout were not exercised. Full-page screenshots are in `/tmp/aurora-editorial-review`. Local development preview uses port 3000.

## Homepage demo

The local homepage pairs the supplied Aurora title artwork and original video with an ivory portrait introduction, session guide, full Erik L. testimonial over the Milky Way video, Fear Clear signup, and selected shop links. All eight pages now use the GSAP hamburger menu and the root-layout booking footer. The hero uses the original video and centered title. Home in the menu shows Aurora’s garden portrait. Desktop chapters have a 92svh minimum, and the shared plaster-textured footer links portraits to About, Services, and Media. Desktop and mobile Chrome verified navigation, Escape, focus return, reduced motion, and cross-page booking links.

The homepage hero booking CTA now sits at the lower right, separate from the title artwork and menu. Fear Clear continues to use Aurora’s singing-bowl portrait at `/aurora/services/aurora.webp`.

Chrome at 1440px and 390px confirmed the video and image load, pause/play, desktop parallax, reduced-motion pause, booking and meditation anchors, live signup fields, and horizontal fit. Payment, email delivery, and deployment are outside this demo check.

Homepage chapters now overlap on scroll. Chrome at 1440px and 390px confirmed the next chapter paints above the previous one, the sky video plays and pauses, and reduced motion disables the overlap.

The shared footer now fills a viewport with a larger mark, About copy, and four social icons. Fear Clear uses a textured plum backdrop with a cloud layer. Chrome at 1440px and 390px verified footer height, horizontal fit, signup rendering, and gentler scroll overlap after the hero.

The footer now uses a warmer purple texture and the same overlap travel as the hero transition. Later sections use lighter overlap. Background videos have no playback buttons and respect reduced motion. Chrome at 1440px and 390px confirmed in-view playback, reduced-motion pause, and the footer painting over the departing section.

The site uses its original Cormorant Garamond headings and Geist body text. A new twilight photograph adds shaped clouds to the lower hero. Middle sections use 16svh of overlap travel, while the hero and footer handoffs use 30svh. Chrome verified horizontal fit on all eight routes at 320px, 390px, and 1440px.

## Earlier site work

- Simplified the visual system across all eight pages. The original homepage video, moon phases, and Aurora’s photography anchor the design. Shared controls use flat gold and plum, interior titles use a solid backdrop, and the specialty list is static. The latest rules are in [DESIGN.md](DESIGN.md).
- Lint and the production build passed. Chrome checked all eight routes at 320px, 390px, and 1440px and verified the original video, reduced-motion fallback, mobile menu, carousel controls, product counts, and recording thumbnails. Live form submissions remain untested.

- The homepage now uses lunar phases over the original video, the summit meditation spread, a ruled session list, a six-product shelf, and a panoramic Starseeds illustration. The singing-bowl portrait matches the session list height on desktop. The signup button uses a flat pink hover treatment.
- Media leads with all eight recordings verified against the original Media page. Starseeds, About, Partnerships, and Services share the lunar banner and use page-specific layouts for their offerings, biography, gallery, and booking guide. Desktop and mobile Chrome checks covered all five pages, the eight thumbnails, and horizontal overflow. Live signup delivery remains pending.

- Strengthened the shared Motion reveals to a 600ms fade and 32px rise triggered 64px inside the viewport. Home now includes the complete meditation panel, service cards, product group, and About and Starseeds copy. Lint, TypeScript, and a production build passed. Chrome on port 3058 confirmed desktop and mobile entrances, no replay, reduced-motion changes, and visible content without JavaScript.

- The taller navbar stays pinned with a more transparent plum tint and visible backdrop blur. Primary buttons across the site, including the Flodesk signup, use hot pink and a purple hover glow. Secondary buttons use lavender outlines. Shared interior banners have a 400px minimum height.

- Reworked Services using the live session descriptions, service artwork, singing-bowl portrait, and two client testimonials. The session guide jumps directly to each service.
- Expanded the live partner descriptions and reworked the Kejiwa feature and TwistedSage gallery. Both partner destinations are retained.

- Added Services, Partnerships, and Contact routes with shared navigation and original artwork. Services and the homepage share booking destinations. Partnerships keeps both live store links. Contact embeds the original DigiStartup form and redirects from `/contact-aurora/`.

- Added local About and Starseeds routes and connected the header, footer, and homepage links. The legacy `/welcomestarseeds/` path redirects to `/starseeds`.
- About reuses Aurora’s original portrait, expands the biography and mission, and presents all four full testimonials with the original portrait selectors. Starseeds uses four original illustrations and directs Blueprint Activator inquiries to Contact.

- Redesigned `/products` with a compact title and all nine first-page products, local cover thumbnails, and links to the live shop for purchase.
- The Media page includes recorded appearances, the presenter feature, stage photograph, and speaking inquiry button.
- Added a redirect from `/mediakit/` to `/media` within the Next.js app and updated shared navigation links to reach the homepage sections from Media.

- Migrated page layouts and shared controls to Tailwind utilities. Edit the palette in `src/app/globals.css`. The Tailwind stylesheet compiled, and lint and TypeScript passed. The latest Media production build compiled the shared Tailwind styles.

- The action purple samples Aurora’s hair. The CSS theme controls the palette, including the hero tint and decorative glows. Lint and default and hover button contrast checks passed.

- The homepage plays Aurora Luna Star’s original hero MP4 from a local copy, with a matching poster for reduced motion. Lint and the production build passed. Chrome confirmed playback, the poster fallback, and the updated Media page on the production preview at port 3060.
- The Fear Clear panel uses the original Muse summit artwork. Session cards sit above a six-product preview. Meet Aurora has an arched portrait frame, and Starseeds uses the supplied illustration.

## Completed

- [x] Build the centered video hero, responsive navigation and footer, session list, About section, galaxy testimonial, and meditation signup.
- [x] Add reusable primary and outline styles through Button and ButtonLink.
- [x] Verify that the first two session links open the intended scheduler pages. Soul Evolutionary Alchemy links to Contact because its scheduler returns the general list.
- [x] Publish the Media page in the local production preview with the shared Tailwind theme and site navigation.

## Verification

Lint and a fresh production build passed. Chrome on port 3056 confirmed the new video autoplays and loops, the matching poster appears with reduced motion, and the navbar remains pinned at mobile width. Chrome also confirmed the 47% tint, blur, and reduced-transparency fallback.

Lint and the production build passed. Chrome on port 3055 confirmed the shared CTA, hover glow, outlined cart, translucent header, and desktop and mobile pinning on Media. The Flodesk styling was checked against matching markup. Live form submission and hosted Contact form styles were outside this check. The existing dev server on port 3000 served stale CSS during verification.

Lint and TypeScript passed. Desktop Chrome confirmed the pinned glass header, hot-pink fill, expanding glow, outlined CTA, and reduced-motion behavior. A separate 390px Chrome check confirmed the pinned header, cart icon, and mobile menu on About with decorative media requests disabled.

The revised Services and Partnerships pages passed the production build. Chrome at 1440px and 390px confirmed artwork loading, service jump links, partner destinations, and no horizontal overflow. Local preview uses port 3053.

Services, Partnerships, and Contact passed lint and static production prerendering. Chrome at 1440px and 390px confirmed routes, images, link destinations, the legacy redirect, no horizontal overflow, and hosted contact form fields. Form delivery was not tested.

About and Starseeds prerendered successfully and passed desktop and mobile Chrome checks. The current About slider places the portrait selectors above the quote, sizes to the active review, and rotates every 10 seconds in view, with an overlapping slide transition. Rotation pauses during interaction and when reduced motion is enabled. The mission heading and copy share the testimonial column. Earlier Chrome checks covered the slider at 1440px and 390px.

The expanded catalog and homepage preview passed lint and TypeScript. Chrome at 1440px and 390px confirmed six homepage products, nine catalog products, loaded cover art, the new Starseeds illustration, and no horizontal overflow.

The earlier five-item Products redesign passed lint and the production build. Chrome at 1440px and 390px decoded all five covers and showed no horizontal overflow. The product URLs matched the live listings, and `/products/page/2` displayed no listings. Checkout was untested. Local Products preview uses port 3049.

The Media redesign passed lint and the production build. Chrome at 1440px and 390px confirmed the short banner, responsive layout, and no horizontal overflow. All ten page images decoded in Chrome. All eight recording IDs matched the live page, and the legacy URL redirected to `/media`. Local production preview uses port 3047.

Earlier homepage checks passed lint and the production build. Chrome at 1440px and 390px confirmed video playback, the full-height opening, header hide/reveal, reduced motion and no horizontal overflow. Desktop signup panel measured 539px including borders. The external Flodesk form timed out during this check. It rendered in an earlier check.

## Next steps

- [ ] Test meditation delivery using an approved test address and check the homepage in mobile Safari.
- [ ] Confirm the production homepage routing and review any Lovable reference screenshots before launch.
- [ ] Connect Products to the catalog API when available.
- [ ] Verify contact form delivery with an approved test submission.
