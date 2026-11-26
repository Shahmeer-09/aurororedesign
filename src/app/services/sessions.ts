import { siteLinks } from "../site-links";

export const sessions = [
  {
    name: "Bio-Magnetic Alignment",
    description:
      "Explore the beliefs that hold you back and work with them through a guided meditation.",
    slug: "bio-magnetic",
    details:
      "Aurora starts by exploring a goal you want to move toward and the doubts or automatic beliefs you notice around it. She follows with a channeled meditation focused on those patterns and how they show up when you try to make a change.",
    id: "1074087138",
  },
  {
    name: "Heart Intelligence",
    description:
      "Make space to speak freely, then reconnect with yourself through a heart-mind meditation.",
    slug: "heart-intelligence",
    details:
      "Talk through emotions you tend to hold back and how that affects the way you show up in relationships. Aurora offers a space to speak without judgment, then guides a Heart-Mind meditation and shares tools for expressing those feelings in everyday life.",
    id: "1074115334",
  },
  {
    name: "Soul Evolutionary Alchemy",
    slug: "soul-evolutionary",
    details:
      "Aurora approaches the Akashic Records as a way to reflect on past lives, spiritual experiences, and the gifts you associate with them. She guides the meditation at your pace and discusses how you might work with what comes up, whether you’re new to this practice or want to go deeper.",
    description:
      "Explore your Akashic Records through a channeled meditation at your own pace.",
  },
];

export function sessionHref(id?: string) {
  return id
    ? `https://www.schedulista.com/schedule/auroralunastar/choose_time?service_id=${id}`
    : siteLinks.contact;
}
