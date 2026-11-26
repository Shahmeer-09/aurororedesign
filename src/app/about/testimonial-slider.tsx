import { TestimonialsMinimal } from "@/components/ui/minimal-testimonial";

const testimonials = [
  {
    name: "Erik L.",
    image: "/aurora/testimonials/erik.webp",
    paragraphs: [
      "I was traveling from Seattle to CA and just knew the time was right to try to locate a good intuitive. Long ago I heard of Mt. Shasta as a special place and so I searched and found Aurora.",
      "She has an extremely powerful gift, and I would have to say this was one of the most poignant spiritual experiences of my life. Also, she’s not spooky, she simply comes straight from the heart of Deity with everything she has, and in a humble way.",
      "We did some chatting then used specialty cards she has, it was stunningly accurate, and not in a “groan that could be for anyone,” kind of way… She seamlessly balanced life coach style interactions with beams from above. Next we did the crystal charged reiki healing, I felt as though 10 billion tons of rainbow light flushed my soul from all the inferior energies that had been pulling me down.",
      "Highest recommend",
    ],
  },
  {
    name: "Georgia P.",
    image: "/aurora/testimonials/georgia.webp",
    paragraphs: [
      "It is hard for me to find the words to articulate the amazing transformation I have experienced working with Aurora. She has been an amazing coach and healer, who was sent by the divine to me so that I too can experience the light. She guided me with love toward my healing. She helped me move through energy that was hindering me through Reiki. Aurora identified opportunities for my growth through her readings. I am so blessed having connected with her and can’t recommend enough working with her.",
    ],
  },
  {
    name: "Shanna S.",
    image: "/aurora/testimonials/shanna.webp",
    paragraphs: [
      "Entering into a space with this magical woman is like entering into another world, and if I didn’t have a job or other responsibilities I would have stayed in that space for a long long time. Aurora is my reiki teacher and an amazing one at that. You can just feel the difference walking into any space that she has created.",
      "I recommend Aurora for anything you are looking for, and if for some reason she cannot help you, she will give you a great recommendation.",
      "I hope you get a chance to experience what I experienced.",
      "Love you Aurora! xoxo",
    ],
  },
  {
    name: "Aline G.",
    image: "/aurora/testimonials/aline.webp",
    paragraphs: [
      "Last year I started going through a spiritual awakening and I had asked my angels to send me someone who would teach and help me through my journey. I met Aurora one random summer night at an event my friend took me to. I sat down next to her which was one of the only 2 seats available (coincidence? I think not) immediately I felt her energy and we got to talking. Something inside of me drew me to her like a magnet, I can’t explain it but at that moment I knew she was the one I asked for.",
      "She gave me her info and said to contact her on Facebook, later that day I noticed I had picked up her business card and it was one of the last ones left on the table. I contacted her the following day and she helped me choose an amythyst necklace since she mentioned she had an affinity for crystals.",
      "Later I discovered she also taught REIKI, at first I didn’t know what it was but I decided to take her class with a friend and after that class was over we took REIKI 2, and since we couldn’t get enough of her and her teachings we finished with the REIKI MASTER class. The second you walk into her sacred space you feel the electricity wrap you in like a mothers embrace, you feel safe and happy.",
      "Aurora is an amazing spiritual coach and healer, and her meditations are out of this world! I Feel so incredibly blessed to have her in my life and I hope that everyone can experience her magic!",
    ],
  },
] as const;

export function TestimonialSlider() {
  return (
    <section
      aria-labelledby="testimonials-title"
      aria-roledescription="carousel"
      className="wrap pt-9 pb-14 md:pt-12 md:pb-20"
    >
      <h2 className="sr-only" id="testimonials-title">
        Testimonials
      </h2>
      <TestimonialsMinimal testimonials={testimonials} />
    </section>
  );
}
