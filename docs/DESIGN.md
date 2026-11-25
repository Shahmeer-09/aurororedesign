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
  purple: "#8a36bd"
  purple-hover: "#963dc9"
  line: "#523263"
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
    backgroundColor: "{colors.purple}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.purple-hover}"
---

# Design

## Overview

A dark plum homepage with warm gold emphasis, Cormorant Garamond display typography, and Geist body text. The user’s Muse screenshot supplies the heading treatment and palette. Keep the hero centered over the plum-tinted galaxy video.

## Colors

Purple supplies primary actions with off-white text; its lighter hover shade marks interaction. Gold supplies heading emphasis, text links, focus rings, and testimonial attribution. Background and surface supply the plum layers; muted text and line colors support secondary copy and boundaries. The tokens above follow `src/app/globals.css`.

## Typography

Display text and quotations use Cormorant Garamond at medium weight. Body text, navigation, and actions use Geist. Below 768px, the hero display changes to `clamp(2.7rem, 9vw, 4rem)`; section headings keep their fluid scale. The testimonial is italic, multiline, and limited to 58 characters per line.

## Layout

Content uses a centered 72rem maximum container; the full navigation header can extend to 100rem. Section spacing ranges from 4rem to 8rem. The menu replaces desktop navigation below 1280px, and section grids become a single column below 768px.

The hero and header fill the opening viewport. A continuous specialty marquee sits directly below the hero and becomes static for reduced motion. The signup panel follows, with the Muse summit artwork on the left and the live Flodesk form on the right. First and last name fields share a row, with email spanning the form width. The desktop card matches the reference height of roughly 539px and expands with its contents. It stacks on mobile. Three ruled session rows follow, then Aurora’s About portrait, the full testimonial, the Starseeds nebula framed by orbital rings, and the footer.

## Elevation & Depth

Plum tonal layers, fine borders, and purple image overlays establish depth. The hero headline has a text shadow for separation from the footage.

## Shapes

Portraits use the panel radius, while the meditation feature uses the larger feature-panel radius. Action buttons use the pill radius; signup fields use the smaller field radius.

## Components

The complete header includes Home, Media, Products, Starseeds, About, Services, Partnerships, Contact, and Cart. The mobile menu exposes the same destinations. The header slides away on downward scroll and returns on upward scroll or keyboard focus.

Primary actions pair purple with off-white text. Outline actions use a plum background and a fine lighter border. Buttons have medium-bold Geist labels; keyboard focus uses a 2px gold outline offset by 5px. Form controls keep visible labels, dark plum fills, and a 2.875rem minimum height. The signup action spans the form width.

The document uses native smooth anchor scrolling and a slim purple scrollbar. Reduced-motion preferences use immediate scrolling and static imagery. The testimonial pairs `galaxy.webp` with a purple overlay and readable multiline copy. At desktop widths with ordinary motion preferences, `background-attachment: scroll, fixed` holds the galaxy image behind the scrolling quotation. Mobile and reduced-motion states use scrolling backgrounds.

The footer begins with “Connect with Aurora” and its booking action, followed by the wordmark, complete navigation destinations, and social links.

## Asset sources

- [Aurora Luna Star](https://auroralunastar.com/) supplies factual copy, wordmark, testimonial.
- The updated portrait comes from Aurora’s [About page](https://auroralunastar.com/about/).
- Hero footage and poster use Nicola Narracci’s [Colorful Galaxies and Stars in Cosmic Animation](https://www.pexels.com/video/colorful-galaxies-and-stars-in-cosmic-animation-29823750/) under the [Pexels license](https://www.pexels.com/license/).
- [Muse preview](https://muse.ai/s/aurora-luna-star-redesign-preview-xfxs6lhxf8hmwv/MzETePr_oF0QTxlk_XtlKJxkzxgBbYJOW9XYjcIHrGg) and the supplied screenshots guide typography, palette, and content hierarchy.

