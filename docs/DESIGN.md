---
name: Aurora Luna Star
description: The Aurora Luna Star site design in dark plum and warm gold.
colors:
  background: "#19121d"
  surface: "#241a2a"
  foreground: "#f5eef3"
  muted: "#c9bdca"
  accent: "#e2c58c"
  accent-hover: "#f2d9a7"
  accent-ink: "#201822"
  purple: "#7800c2"
  purple-hover: "#891be3"
  line: "#392e40"
  control-line: "#857389"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(4rem, 6.5vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.99
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.65rem, 5.5vw, 4.6rem)"
    fontWeight: 500
    lineHeight: 0.99
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Geist, sans-serif"
rounded:
  panel: "1rem"
  feature-panel: "0.5rem"
  field: "0.5rem"
  control: "0.5rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.control}"
    padding: "0.5rem 1.25rem"
---

# Design

## Overview

The homepage is a practitioner profile in warm ivory and deep plum. The opening uses the supplied transparent title artwork, centered over Aurora’s original video. The small brand mark and shared Menu trigger sit on the footage. Keep the first booking action beside the introduction. The full site navigation is available in the homepage footer.

## Landing-page layout plan

| Section | Composition and visitor action |
| --- | --- |
| Opening | Center the original transparent title over the video. Keep the playable media and menu controls at opposite corners. |
| Introduction | Cut to ivory and Aurora’s garden portrait. Set the fear question in roman and italic serif, then offer booking and her story. |
| Private sessions | Present three illustrated session covers on a warm rose and apricot field. Each entry reaches its own booking or inquiry destination. |
| Client voice | Center Erik L.’s full testimonial over the purple-tinted Milky Way timelapse. |
| Fear Clear | Pair Aurora’s garden portrait with the live signup. Keep the form visible alongside its 30-minute meditation description. |
| Retreats and recordings | Lead with the retreat cover. Place three recordings in a quieter list alongside it, then link to the shop. |
| Footer | Pair the brand mark and booking link with a three-photo directory on textured plum. Include site destinations, cart, and meditation. Reuse this ending across routes. |

Desktop chapters use a 92svh minimum and expand with their contents. Narrow screens follow the natural reading height. The hero and the section above the footer use 30svh of overlap travel. Other chapters use 16svh. Reduced motion keeps the chapters in normal flow and shows a still sky by default. The Home menu preview uses Aurora’s garden portrait. The global footer uses Xinyi Wen’s pink clouds under an even dark purple tint. [Unsplash photo](https://unsplash.com/photos/pink-clouds-filling-the-sky-qjCHPZbeXCQ)

The testimonial combines roman and italic Cormorant Garamond over the Eclipse Chasers timelapse and a masked cloud photograph. [Milky Way footage](https://www.pexels.com/video/milky-way-timelapse-27775202/) · [Cloud photograph](https://www.pexels.com/photo/clouds-in-the-sky-8726320/)

## Guidelines for new pages

- **Choose the opening based on the page’s purpose.** Use the shared [PageHero](../src/app/_components/page-hero.tsx) for left-aligned introductions on a solid plum surface. Use a compact title block when visitors come to browse a collection, as on Products.
- **Build the page body on plum.** Use the shared `wrap` container and `section-space` utility from [globals.css](../src/app/globals.css). Alternate open text sections with image-led sections and use fine borders to separate lists or content groups.
- **Use gold to guide attention.** Set large headings in Cormorant Garamond and keep descriptions and controls in Geist. Use muted plum-gray for supporting copy and warm gold for primary actions and keyboard focus.
- **Reuse the site controls.** Start with the shared [SiteHeader and SiteFooter](../src/app/_components/site-chrome.tsx). Use the shared [Button and ButtonLink](../src/components/button.tsx) for actions, the outline variant for secondary actions, and gold text links for inline navigation.
- **Frame imagery according to its purpose.** Use simple frames for photography and artwork. Existing service and partner portraits may use an arch. Where text overlaps footage or artwork, darken the image only as much as needed for readability.
- **Design the mobile reading order.** Stack most desktop columns below 768px and place the heading, key copy, and action before supporting artwork when that helps visitors act. Verify keyboard focus, reduced motion, and horizontal fit at narrow widths.

## Colors

Primary actions use a flat gold fill and dark plum text. Secondary actions use a neutral outline. Use warm white for headings, muted plum-gray for body copy, and gold for links and focus rings. Maintain this palette through the shared variables in [globals.css](../src/app/globals.css), including the embedded Flodesk form.

## Typography

Display text and quotations use Cormorant Garamond at medium weight. Body text, navigation, and actions use Geist. The homepage introduction sets the second half of its question in italic bronze. Below 640px it uses balanced wrapping and a smaller fluid scale. Interior titles align to the content edge.

## Layout

Content uses a centered 72rem maximum container; the full navigation header can extend to 100rem. Section spacing ranges from 4rem to 8rem. The same menu opens at all widths. Section grids become a single column below 768px.

The homepage uses its own [editorial stylesheet](../src/app/home.css). Pair a rectangular garden portrait with the introduction on ivory. Follow with the three illustrated sessions, a full-width Milky Way testimonial, the Fear Clear signup on a bright pink fur texture with dark plum text and a raspberry-plum signup action, and a retreat cover beside three recording links. On narrow screens these spreads stack. Keep photography static. The hero footage has up to 48px of desktop scroll travel and a still poster for reduced motion. Both background videos play in view when motion is enabled.

Media leads with eight linked recording thumbnails, followed by a presenter feature with the original stage photograph and a speaking inquiry button. Interior pages with banners use the shared `PageHero` component with a flat surface and fluid title. Products opens directly with a compact title and cover grid. [Live Media page](https://auroralunastar.com/mediakit/)

About pairs the original portrait with the biography, followed by a two-column text-only mission section and a testimonial slider aligned to the same column. Portraits and the author name sit above a quote area sized to the active testimonial with timed rotation. Starseeds uses the shared title band and original artwork alongside its introduction, followed by three illustrated offering columns on desktop.

Services, Partnerships, and Contact use the shared banner. Services places a session guide and Aurora’s original singing-bowl portrait beside detailed session entries. Partnerships uses an editorial Kejiwa feature and gives the TwistedSage gallery the full content width. Contact uses Aurora’s original portrait beside the hosted form at desktop widths.

## Elevation & Depth

Use adjacent shades of plum and fine rules to separate sections. A dark overlay keeps the homepage copy readable over the original video.

## Shapes

Homepage photographs and artwork have square corners. Buttons and signup fields use an 8px radius.

## Components

The shared header places the Aurora mark on the left and Menu on the right. On Home it overlays the footage. Two sliding panels reveal large Cormorant Garamond links on ivory. On desktop, hovering or focusing a destination changes the facing photograph. Mobile uses the entire sheet for links. Escape and Close restore focus to the trigger.

Buttons pair 16px line icons with medium-weight Geist labels. Primary hover lightens the gold fill. Secondary hover raises the plum surface one step. Keyboard focus uses a 2px gold outline offset by 5px. Reduced-motion preferences disable button motion. Form controls keep visible labels, dark plum fills, and a 2.875rem minimum height. The signup action spans the form width.

The document uses native smooth anchor scrolling and a slim purple scrollbar. Reduced-motion preferences use immediate scrolling and the homepage poster.

Selected interior-page introductions, product listings, and portraits reveal once after entering 64px into the viewport, using a 240ms fade and an 8px rise. Content renders visible before JavaScript. Below-fold elements are prepared after hydration. Elements already in view on page entry and visitors with reduced motion get the static presentation. Keyboard focus immediately reveals a group.

The root layout renders the homepage’s “Work with Aurora” footer on every route. It fills at least one viewport and pairs the larger Aurora mark and an About excerpt with photo links and social icons. Booking and meditation links target the corresponding homepage sections.

## Asset sources

- The archived twilight cloud reference is by Ludvig Hedenborg. [Pexels photograph](https://www.pexels.com/photo/fluffy-purple-and-dark-clouds-in-the-sunset-light-9465354/)

- The homepage loop and fallback poster use Aurora Luna Star’s [original hero video](https://auroralunastar.com/wp-content/uploads/2020/09/logo-animation.mp4).
- [Aurora Luna Star](https://auroralunastar.com/) supplies factual copy, wordmark, testimonial.
- The updated portrait comes from Aurora’s [About page](https://auroralunastar.com/about/).
- [Muse preview](https://muse.ai/s/aurora-luna-star-redesign-preview-xfxs6lhxf8hmwv/MzETePr_oF0QTxlk_XtlKJxkzxgBbYJOW9XYjcIHrGg) and the supplied screenshots guide typography, palette, and content hierarchy.


## Background references

- Pink clouds by Xinyi Wen, used in the footer. [Unsplash](https://unsplash.com/photos/pink-clouds-filling-the-sky-qjCHPZbeXCQ)
- Gray and white marble by Swati B, saved for later. [Unsplash+](https://unsplash.com/photos/a-gray-and-white-marble-texture-background-PiueVZnO17o)
- Pink and purple stone texture by Erika Löwe, saved for later. [Unsplash](https://unsplash.com/photos/a-pink-and-purple-background-with-a-grungy-effect-gi7JKGndUL4)

- Pink fur texture by Alexander Grey, used in Fear Clear with a light blush wash. [Unsplash](https://unsplash.com/photos/a-close-up-of-a-pink-fur-texture-dG9fUG0Jpos)
