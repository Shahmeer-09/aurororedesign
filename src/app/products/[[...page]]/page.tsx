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
      <SiteHeader />
      <main className="edition shop-edition" id="main">
        <div className="wrap py-10">
          <div className="mb-9 border-b border-line pb-6">
            <h1 className="text-[clamp(2.75rem,5vw,4.25rem)] leading-none tracking-[-0.03em]">
              Retreats &amp; recordings
            </h1>
            <p className="mt-4 max-w-[52ch] leading-[1.7] text-muted">
              Retreats, online gatherings, and channeled series from Aurora.
              Each item opens its page on auroralunastar.com to complete your
              purchase.
            </p>
          </div>
          <section className="retreat-feature">
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
          </section>
          <h2 className="mb-6">Recordings &amp; gatherings</h2>
          <ProductGrid products={products.slice(2)} headingLevel="h3" />
          <a
            className="text-link mt-8"
            href="https://auroralunastar.com/products/"
          >
            Browse the full shop ↗
          </a>
        </div>
      </main>
    </>
  );
}
