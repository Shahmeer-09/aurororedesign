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
- Present Aurora’s speaking experience and direct event inquiries to her contact page.
- Serve the redesign at `/media` and redirect the original `/mediakit/` path within this app. [Live Media page](https://auroralunastar.com/mediakit/)

## About and Starseeds scope

- Present Aurora’s biography, mission, original portrait, and all four client testimonials in full, with their original portraits. Keep the mission on a text-only surface and support portrait selection and automatic rotation that pauses during interaction.
- Explain Aurora’s approach to Starseed spirituality and present the three original offerings with their artwork. The first two lead to the live shop, and Blueprint Activators leads to Contact. [Live About page](https://auroralunastar.com/about/) · [Live Starseeds page](https://auroralunastar.com/welcomestarseeds/)

## Products page scope

- Open `/products` with a compact title and a grid that fits one column on mobile and three on desktop.
- Show all nine products from the first page of the live shop, with their covers and prices. Each listing links to its live product page for purchase. A link opens the full shop. [Live Products page](https://auroralunastar.com/products/)

## Services, Partnerships, and Contact scope

- Services uses the same three session listings as the homepage and shows their original artwork. Keep the two verified Schedulista destinations and route Soul Evolutionary Alchemy inquiries to Contact.
- Partnerships presents Kejiwa and TwistedSage with original product imagery and their existing store links.
- Contact embeds the existing DigiStartup form and offers a direct form link. Redirect the legacy `/contact-aurora/` path to `/contact`.

## Acceptance criteria

- The hero, navigation, and footer fit at mobile, tablet, and desktop widths. The homepage hero centers its copy and buttons.
- The menu works by keyboard and closes with Escape. Booking and meditation links reach their intended destinations.
- The video loops on mobile, tablet, and desktop, with a poster fallback. Visitors who prefer reduced motion see a static presentation. A specialty marquee separates the full-height opening from the meditation signup.
- The Flodesk form can load and report errors. Confirm delivery with an approved test address before launch.

See [project status](PROJECT_STATUS.md) for the current handoff.
