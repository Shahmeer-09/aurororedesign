const liveSite = "https://auroralunastar.com";

export const bookingAnchor = "/#sessions";

export const siteLinks = {
  about: "/about",
  contact: "/contact",
  media: `/media`,
  partnerships: "/partnerships",
  products: "/products",
  services: "/services",
  starseeds: "/starseeds",
  cart: `${liveSite}/cart/`,
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Media", href: siteLinks.media },
  { label: "Products", href: siteLinks.products },
  { label: "Starseeds", href: siteLinks.starseeds },
  { label: "About", href: siteLinks.about },
  { label: "Services", href: siteLinks.services },
  { label: "Partnerships", href: siteLinks.partnerships },
  { label: "Contact", href: siteLinks.contact },
];
