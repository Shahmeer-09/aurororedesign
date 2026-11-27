import Image from "next/image";
import type { Product } from "./catalog";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function ProductGrid({
  products,
  headingLevel = "h2",
  layout = "gallery",
}: {
  products: Product[];
  headingLevel?: "h2" | "h3";
  layout?: "gallery" | "shelf";
}) {
  const Heading = headingLevel;
  const shelf = layout === "shelf";

  return (
    <ul
      aria-label="Products"
      className={
        shelf
          ? "grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3"
          : "grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
      }
    >
      {products.map(({ slug, title, price, originalPrice }) => (
        <li key={slug}>
          <a
            className={
              shelf
                ? "group grid h-full grid-cols-[5rem_1fr] content-center items-center gap-x-4 border-t border-line py-6 xl:grid-cols-[6.25rem_1fr]"
                : "group flex h-full flex-col"
            }
            href={`https://auroralunastar.com/product/${slug}/`}
          >
            <div
              className={`relative overflow-hidden border border-line bg-surface motion-safe:transition-colors group-hover:border-control-line ${shelf ? "row-span-2 rounded-md" : "rounded-lg"}`}
            >
              <Image
                alt=""
                className="aspect-square h-auto w-full object-cover"
                height={300}
                sizes={
                  shelf
                    ? "(min-width: 1280px) 100px, 80px"
                    : "(min-width: 1200px) 368px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 95vw"
                }
                src={`/aurora/products/${slug}.webp`}
                width={300}
              />
            </div>
            <Heading
              className={`text-left leading-tight text-balance text-foreground group-hover:text-accent motion-safe:transition-colors ${shelf ? "self-end text-[1.55rem]" : "mt-4 mb-2 text-[clamp(1.6rem,2.4vw,2rem)]"}`}
            >
              {title}
            </Heading>
            <p
              className={`flex flex-wrap items-baseline gap-x-3 text-sm tabular-nums ${shelf ? "mt-2 self-start" : "mt-auto"}`}
            >
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
