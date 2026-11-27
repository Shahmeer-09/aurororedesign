import Image from "next/image";
import "../../inner.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../_components/site-chrome";
import { getProductsPage } from "../catalog";
import { ProductGrid } from "../product-grid";

export const metadata: Metadata = {
  title: "Products | Aurora Luna Star",
  description:
    "Browse retreats, online gatherings, and recordings from Aurora Luna Star.",
};

export function generateStaticParams() {
  return [{ page: [] }];
}

export default async function ProductsPage({
  params,
}: PageProps<"/products/[[...page]]">) {
  const { page } = await params;
  if (page?.length) notFound();

  const products = await getProductsPage();

  return (
    <>
      <a
        className="fixed top-3 left-3 z-3 -translate-y-[180%] bg-accent px-4 py-3 text-accent-ink focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>
      <SiteHeader overlay />
      <main className="edition shop-edition" id="main">
        <section className="shop-opening">
          <div className="wrap">
            <h1>
              Retreats <em>&amp; Recordings</em>
            </h1>
            <div className="retreat-feature">
              <Image
                src="/aurora/products/trust-yourself-retreat-deposit.webp"
                width={300}
                height={300}
                alt="Trust Yourself Retreat artwork"
              />
              <div>
                <h2>Trust Yourself Retreat</h2>
                <p>Reserve with a deposit or pay in full.</p>
                {products.slice(0, 2).map((item) => (
                  <a
                    className="text-link"
                    key={item.slug}
                    href={`https://auroralunastar.com/product/${item.slug}/`}
                  >
                    {item.title.split(" – ")[1]} · ${item.price} — View product
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="wrap section-space">
          <h2>Recordings &amp; gatherings</h2>
          <p className="mt-4 mb-6 max-w-[52ch] leading-relaxed text-muted">
            Each item opens its page on auroralunastar.com to complete your
            purchase.
          </p>
          <ProductGrid
            products={products.slice(2)}
            headingLevel="h3"
            layout="shelf"
          />
        </div>
        <div className="catalog-end wrap">
          <a className="text-link" href="https://auroralunastar.com/products/">
            Browse the Full Shop ↗
          </a>
        </div>
      </main>
    </>
  );
}
