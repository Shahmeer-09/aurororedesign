const liveSite = "https://auroralunastar.com";

export const bookingAnchor = "#sessions";

export const siteLinks = {
  about: `${liveSite}/about/`,
  contact: `${liveSite}/contact-aurora/`,
  media: `${liveSite}/mediakit/`,
  partnerships: `${liveSite}/partnerships/`,
  products: `${liveSite}/products/`,
  services: `${liveSite}/services/`,
  starseeds: `${liveSite}/welcomestarseeds/`,
  cart: `${liveSite}/cart/`,
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Media", href: siteLinks.media },
  { label: "Products", href: siteLinks.products },
  { label: "Starseeds", href: siteLinks.starseeds },
  { label: "About", href: "#about" },
  { label: "Services", href: bookingAnchor },
  { label: "Partnerships", href: siteLinks.partnerships },
  { label: "Contact", href: siteLinks.contact },
  { label: "Cart", href: siteLinks.cart },
];
