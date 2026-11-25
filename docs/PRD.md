# Product requirements

The Aurora Luna Star homepage introduces Aurora’s work, helps visitors choose and book a session, and gives them access to the free Fear Clear meditation.

The live website is the reference for the redesign. [Aurora Luna Star](https://auroralunastar.com/)

## Homepage scope

- Make Book a Session the primary action and the free meditation the secondary action. Keep both available from the hero and footer.
- Summarize the three existing sessions. Link to Schedulista where direct booking is available and Contact for Soul Evolutionary Alchemy.
- Preview six products and link to the full Products page. Introduce Aurora using her existing site content and photography. Keep the About, Starseeds, Products, Media, Partnerships, and Contact destinations accessible.
- Use the existing Flodesk flow for the meditation. Show an actionable fallback when the signup form cannot load.

Booking, commerce, and the remaining live pages remain on their current systems. The route rollout on the production domain needs a separate decision.

## Media page scope

- Use a compact image banner for Speaking Engagements and a wide presenter feature with Aurora’s original stage photograph.
- Include all distinct recordings from the live media kit and link each one to YouTube. Direct speaking inquiries to Aurora’s contact page.
- Serve the redesign at `/media` and redirect the original `/mediakit/` path within this app. [Live Media page](https://auroralunastar.com/mediakit/)

## Products page scope

- Open `/products` with a compact title and a grid that fits one column on mobile and three on desktop.
- Show all nine products from the first page of the live shop, with their covers and prices. Each listing links to its live product page for purchase. A link opens the full shop. [Live Products page](https://auroralunastar.com/products/)

## Acceptance criteria

- The centered hero, navigation, and footer fit at mobile, tablet, and desktop widths.
- The menu works by keyboard and closes with Escape. Booking and meditation links reach their intended destinations.
- The video loops on mobile, tablet, and desktop, with a poster fallback. Visitors who prefer reduced motion see a static presentation. A specialty marquee separates the full-height opening from the meditation signup.
- The Flodesk form can load and report errors. Confirm delivery with an approved test address before launch.

See [project status](PROJECT_STATUS.md) for the current handoff.
