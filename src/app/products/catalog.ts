export type Product = {
  slug: string;
  title: string;
  price: number;
  format: string;
  description: string;
  originalPrice?: number;
};

export const firstPage: Product[] = [
  {
    slug: "trust-yourself-retreat-deposit",
    format: "Mount Shasta, California · May 15–17, 2027",
    description:
      "Reserve a place at Trust Yourself with a deposit. Over three days in Mount Shasta, the retreat explores intuition and discernment through breath, sensation and learning to recognize your own responses.",
    title: "Trust Yourself Retreat – Deposit",
    price: 444,
  },
  {
    slug: "trust-yourself-retreat-paid-in-full",
    format: "Mount Shasta, California · May 15–17, 2027",
    description:
      "Pay in full for the three-day Trust Yourself retreat in Mount Shasta. The practice explores how intuition feels in the body and how to distinguish that sense of knowing from the impulse to seek outside confirmation.",
    title: "Trust Yourself Retreat – Paid in Full",
    price: 888,
  },
  {
    slug: "seraphim-elohim",
    format: "Four-week online series",
    description:
      "Aurora explores the Seraphim and Elohim through angelic activations. The four gatherings consider purification, remembrance and creation through her channeling practice.",
    title: "Seraphim & the Elohim",
    price: 44,
  },
  {
    slug: "galactic-gathering-alcyone",
    format: "Galactic Gathering · Recorded sessions",
    description:
      "These guided journeys explore Alcyone and the beings Aurora associates with the Great Central Sun. The recordings bring together channeling and light language around clarity, creative expression and personal authority.",
    title: "Galactic Gathering: Alcyone",
    price: 44,
  },
  {
    slug: "the-changing-world-three-part-series",
    format: "Three-part series",
    description:
      "Begin with grounding and staying present in the body. The second part explores heart resonance and compassion. The final part considers how a grounded, heart-centered practice relates to abundance.",
    title: "The Changing World – Three Part Series",
    price: 30,
    originalPrice: 45,
  },
  {
    slug: "galactic-gathering-orion",
    format: "Galactic Gathering · Four-week series",
    description:
      "Explore the Annunaki and Mintakan lineages through Aurora’s guided meditations, channeled teachings, sound and light language. Each gathering approaches a different aspect of these star connections.",
    title: "Galactic Gathering: Orion",
    price: 44,
  },
  {
    slug: "three-sessions-with-the-aum-ra-collective",
    format: "Three channeled sessions",
    description:
      "The first two sessions with the Aum Ra Collective focus on channeled insight and activation. The third is a question-and-answer session, bringing the themes of the series into conversation with participants.",
    title: "Three Sessions with the Aum Ra Collective",
    price: 55,
    originalPrice: 99,
  },
  {
    slug: "the-halls-of-amenti",
    format: "Mystery school · Six-week journey",
    description:
      "Aurora introduces the Halls of Amenti through esoteric teachings, meditations and activations. The series explores how these practices relate to personal growth and spiritual guidance.",
    title: "The Halls of Amenti Part I",
    price: 99,
  },
  {
    slug: "galactic-gathering-sirius",
    format: "Galactic Gathering · Four-part video series",
    description:
      "Each part pairs two videos. Start with the teaching, then continue with its companion meditation or activation. Aurora suggests spending a week with each pair before moving to the next theme.",
    title: "Galactic Gathering: Sirius",
    price: 99,
  },
];

export async function getProductsPage() {
  "use cache";

  return firstPage;
}
