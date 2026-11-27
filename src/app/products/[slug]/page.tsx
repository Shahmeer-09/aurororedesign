import Image from "next/image";
import "../../inner.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { products as detailEntries } from "../../../../docs/product-details.json";
import { SiteHeader } from "../../_components/site-chrome";
import { AddToCart } from "../add-to-cart";
import { firstPage } from "../catalog";
import { ProductDescription } from "../product-description";
import { ProductGrid } from "../product-grid";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = firstPage.find((product) => product.slug === slug);
  return item
    ? {
        title: `${item.title} | Aurora Luna Star`,
        description: item.description,
      }
    : {};
}

export function generateStaticParams() {
  return firstPage.map(({ slug }) => ({ slug }));
}

export default function ProductPage({ params }: PageProps<"/products/[slug]">) {
  return (
    <>
      <SiteHeader overlay />
      <main id="main" className="edition product-detail">
        <Suspense fallback={<p className="wrap py-12">Loading product…</p>}>
          <ProductDetail params={params} />
        </Suspense>
      </main>
    </>
  );
}

async function ProductDetail({
  params,
}: Pick<PageProps<"/products/[slug]">, "params">) {
  const { slug } = await params;
  const item = firstPage.find((product) => product.slug === slug);
  if (!item) notFound();

  const details = detailEntries.find((product) => product.slug === item.slug);
  const description = [details?.shortDescriptionHtml, details?.descriptionHtml]
    .filter(Boolean)
    .join("\n");
  const isRetreat = slug.startsWith("trust-yourself-retreat-");
  const collection = item.title.split(/:| – /)[0];
  const relatedProducts = firstPage
    .filter((product) => product.slug !== slug)
    .map((product) => ({
      product,
      relevance:
        product.title.split(/:| – /)[0] === collection
          ? 2
          : Number(
              detailEntries
                .find((entry) => entry.slug === product.slug)
                ?.categories.some((category) =>
                  details?.categories.some(({ id }) => id === category.id),
                ) ?? false,
            ),
    }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 3)
    .map(({ product }) => product);

  return (
    <article className="wrap">
      <nav className="product-breadcrumb" aria-label="Shop breadcrumb">
        <a className="text-link" href="/products">
          ← Retreats &amp; Recordings
        </a>
      </nav>
      <header className="product-overview">
        <div className="product-heading">
          <h1>{item.title}</h1>
          <p>{item.format}</p>
        </div>
        <Image
          className="product-art"
          src={details?.localCover ?? `/aurora/products/${item.slug}.webp`}
          width={300}
          height={300}
          alt={`${item.title} cover`}
          preload
        />
        <div className="product-purchase">
          <p>{item.description}</p>
          <p className="detail-price">
            <span>{usd.format(item.price)}</span>
            {item.originalPrice && (
              <del>
                <span className="sr-only">Original price </span>
                {usd.format(item.originalPrice)}
              </del>
            )}
          </p>
          {details?.purchase.purchasable &&
          (details.purchase.inStock || details.purchase.onBackorder) ? (
            <AddToCart
              key={details.id}
              productId={details.id}
              minimum={details.purchase.minimumQuantity}
              maximum={
                details.purchase.soldIndividually
                  ? 1
                  : details.purchase.maximumQuantity
              }
              step={details.purchase.quantityStep}
            />
          ) : (
            <p className="text-muted">Unavailable to add to cart.</p>
          )}
        </div>
      </header>
      {description && (
        <ProductDescription html={description} isRetreat={isRetreat} />
      )}
      <section
        className="product-related"
        aria-labelledby="related-products-heading"
      >
        <h2 id="related-products-heading">Related products</h2>
        <ProductGrid products={relatedProducts} headingLevel="h3" />
      </section>
    </article>
  );
}
