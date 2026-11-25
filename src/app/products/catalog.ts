export type Product = {
  slug: string;
  title: string;
  price: number;
  originalPrice?: number;
};

const firstPage: Product[] = [
  {
    slug: "trust-yourself-retreat-deposit",
    title: "Trust Yourself Retreat – Deposit",
    price: 444,
  },
  {
    slug: "trust-yourself-retreat-paid-in-full",
    title: "Trust Yourself Retreat – Paid in Full",
    price: 888,
  },
  { slug: "seraphim-elohim", title: "Seraphim & the Elohim", price: 44 },
  {
    slug: "galactic-gathering-alcyone",
    title: "Galactic Gathering: Alcyone",
    price: 44,
  },
  {
    slug: "the-changing-world-three-part-series",
    title: "The Changing World – Three Part Series",
    price: 30,
    originalPrice: 45,
  },
  {
    slug: "galactic-gathering-orion",
    title: "Galactic Gathering: Orion",
    price: 44,
  },
  {
    slug: "three-sessions-with-the-aum-ra-collective",
    title: "Three Sessions with the Aum Ra Collective",
    price: 55,
    originalPrice: 99,
  },
  {
    slug: "the-halls-of-amenti",
    title: "The Halls of Amenti Part I",
    price: 99,
  },
  {
    slug: "galactic-gathering-sirius",
    title: "Galactic Gathering: Sirius",
    price: 99,
  },
];

export async function getProductsPage() {
  "use cache";

  return firstPage;
}
