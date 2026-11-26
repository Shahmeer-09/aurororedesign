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
      className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      {products.map(({ slug, title, price, originalPrice }) => (
        <li key={slug}>
          <a
            className="group flex h-full flex-col"
            href={`https://auroralunastar.com/product/${slug}/`}
          >
            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface motion-safe:transition-[border-color,box-shadow] motion-safe:duration-300 group-hover:border-accent/60 group-hover:shadow-[0_18px_50px_-26px_var(--purple-hover)]">
              <Image
                alt=""
                className="aspect-square h-auto w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.05]"
                height={300}
                sizes="(min-width: 1200px) 368px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 95vw"
                src={`/aurora/products/${slug}.webp`}
                width={300}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent opacity-0 motion-safe:transition-opacity motion-safe:duration-300 group-hover:opacity-100"
              />
              {originalPrice && (
                <span className="absolute top-3 left-3 rounded-full border border-accent/40 bg-background/85 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.16em] text-accent uppercase">
                  Sale
                </span>
              )}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-3 bottom-3 grid size-10 place-items-center rounded-full border border-accent/40 bg-background/85 text-accent opacity-0 motion-safe:transition-opacity motion-safe:duration-300 group-hover:opacity-100"
              >
                ↗
              </span>
            </div>
            <Heading className="mt-4 mb-2 text-left text-[clamp(1.6rem,2.4vw,2rem)] leading-tight text-balance text-foreground group-hover:text-accent motion-safe:transition-colors">
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
