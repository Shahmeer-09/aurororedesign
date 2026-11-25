import Image from "next/image";
import type { Product } from "./catalog";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function ProductGrid({
  products,
  headingLevel = "h2",
}: {
  products: Product[];
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <ul
      aria-label="Products"
      className="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3"
    >
      {products.map(({ slug, title, price, originalPrice }) => (
        <li key={slug}>
          <a
            className="group flex h-full flex-col rounded-xl"
            href={`https://auroralunastar.com/product/${slug}/`}
          >
            <div className="overflow-hidden rounded-xl border border-line bg-surface group-hover:border-accent motion-safe:transition-colors">
              <Image
                alt=""
                className="aspect-square h-auto w-full object-cover"
                height={300}
                sizes="(min-width: 1200px) 368px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 95vw"
                src={`/aurora/products/${slug}.webp`}
                width={300}
              />
            </div>
            <Heading className="mt-4 mb-2 text-left text-[clamp(1.7rem,2.6vw,2.25rem)] leading-none text-wrap text-foreground group-hover:text-accent">
              {title}
            </Heading>
            <p className="mt-auto flex flex-wrap items-baseline gap-x-3 text-sm tabular-nums">
              <span className="font-semibold text-accent">
                {usd.format(price)}
              </span>
              {originalPrice && (
                <del className="text-muted">
                  <span className="sr-only">Original price </span>
                  {usd.format(originalPrice)}
                </del>
              )}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
}
