---
name: Aurora Luna Star
description: A centered galaxy homepage in dark plum and warm gold.
colors:
  background: "#160921"
  surface: "#251039"
  foreground: "#f5eff8"
  muted: "#c7b9d1"
  accent: "#edce82"
  accent-hover: "#ffe4a5"
  accent-ink: "#271435"
  purple: "#7800c2"
  purple-hover: "#891be3"
  line: "#523263"
  action-hot-pink: "#ff4fb8"
  action-glow: "#b43dff"
  action-border: "#d2adf3"
  action-ink: "#271333"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(3rem, 5.6vw, 6rem)"
    fontWeight: 500
    lineHeight: 1.05
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
  feature-panel: "1.75rem"
  field: "0.5rem"
  pill: "999px"
components:
  button-primary:
    backgroundColor: "{colors.action-hot-pink}"
    textColor: "{colors.action-ink}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 1.25rem"
---

# Design

## Overview

A dark plum homepage with warm gold emphasis, Cormorant Garamond display typography, and Geist body text. The hero centers the copy and buttons over Aurora’s original homepage footage.

## Colors

Primary actions use solid hot pink with plum text and a violet glow. Secondary actions use a lavender outline over translucent plum. Gold supplies heading emphasis, text links, focus rings, and testimonial attribution. The wider purple palette draws from Aurora’s hair. Edit the color variables in `:root` in `src/app/globals.css`. Tailwind’s `@theme inline` exposes them as utilities such as `bg-purple`, `text-accent`, and `border-line`. The embedded Flodesk signup uses the same primary action styling.

## Typography

Display text and quotations use Cormorant Garamond at medium weight. Body text, navigation, and actions use Geist. Below 768px, the hero display changes to `clamp(2.7rem, 9vw, 4rem)`; section headings keep their fluid scale. The testimonial is italic, multiline, and limited to 58 characters per line.

## Layout

Content uses a centered 72rem maximum container; the full navigation header can extend to 100rem. Section spacing ranges from 4rem to 8rem. The menu replaces desktop navigation below 1280px, and section grids become a single column below 768px.

The hero and header fill the opening viewport. A continuous specialty marquee sits directly below the hero and becomes static for reduced motion. The signup panel follows, with the Muse summit artwork on the left and the live Flodesk form on the right. First and last name fields share a row, with email spanning the form width. The desktop card matches the reference height of roughly 539px and expands with its contents. It stacks on mobile. Three session cards and a six-product preview follow, then Aurora’s arched About portrait, the full testimonial, a Starseeds illustration, and the footer.

The Media page uses a nebula image banner and a presenter feature with the original stage photograph and a speaking inquiry button. Interior pages with banners use the shared `PageHero` component with a 400px minimum height, oversized headings, and the testimonial’s nebula artwork. Products opens directly with a compact title and cover grid. [Live Media page](https://auroralunastar.com/mediakit/)

About pairs the original arched portrait with the biography, followed by a text-only mission section and a testimonial slider aligned to the same column. Portraits and the author name sit above a quote area sized to the active testimonial with timed rotation. Starseeds uses the shared nebula banner and original artwork alongside its introduction and offering details.

Services, Partnerships, and Contact use the shared banner. Services places a session guide and Aurora’s original singing-bowl portrait beside detailed session entries. Partnerships uses an editorial Kejiwa feature and gives the TwistedSage gallery the full content width. Contact uses Aurora’s original portrait beside the hosted form at desktop widths.

## Elevation & Depth

Plum tonal layers, fine borders, and purple image overlays establish depth. A soft black gradient dims the footage behind the homepage copy.

## Shapes

Portraits use the panel radius, while the meditation feature uses the larger feature-panel radius. Action buttons use the pill radius; signup fields use the smaller field radius.

## Components

The complete header includes Home, Media, Products, Starseeds, About, Services, Partnerships, Contact, and Cart. The taller header stays pinned at the top while scrolling and uses translucent purple with backdrop blur. Cart is an accessible icon link visible at desktop and mobile widths.

Buttons pair leading icons with medium-bold Geist labels. Primary actions use a layered violet glow that expands on hover. Secondary action borders turn pink on hover. Featured home and About actions add a small lift. Keyboard focus uses a 2px gold outline offset by 5px. Reduced-motion preferences disable button motion. Form controls keep visible labels, dark plum fills, and a 2.875rem minimum height. The signup action spans the form width.

The document uses native smooth anchor scrolling and a slim purple scrollbar. Reduced-motion preferences use immediate scrolling and static imagery. The testimonial pairs `nebula-hero.webp` with a purple overlay and readable multiline copy. At desktop widths with ordinary motion preferences, `background-attachment: scroll, fixed` holds the galaxy image behind the scrolling quotation. Mobile and reduced-motion states use scrolling backgrounds.

Selected section introductions, homepage service and product groups, and artwork reveal once after entering 64px into the viewport, using a 600ms fade from transparent and a 32px rise. Content renders visible before JavaScript. Below-fold elements are prepared after hydration. Elements already in view on page entry and visitors with reduced motion get the static presentation. Keyboard focus immediately reveals a group.

The footer begins with “Connect with Aurora” and its booking action, followed by the wordmark, complete navigation destinations, and social links.

## Asset sources

- The homepage loop and fallback poster use Aurora Luna Star’s [original hero video](https://auroralunastar.com/wp-content/uploads/2020/09/logo-animation.mp4).
- [Aurora Luna Star](https://auroralunastar.com/) supplies factual copy, wordmark, testimonial.
- The updated portrait comes from Aurora’s [About page](https://auroralunastar.com/about/).
- [Muse preview](https://muse.ai/s/aurora-luna-star-redesign-preview-xfxs6lhxf8hmwv/MzETePr_oF0QTxlk_XtlKJxkzxgBbYJOW9XYjcIHrGg) and the supplied screenshots guide typography, palette, and content hierarchy.

