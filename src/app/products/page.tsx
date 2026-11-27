import "../inner.css";
import type { Metadata } from "next";
import { SiteHeader } from "../_components/site-chrome";
import { getProductsPage } from "./catalog";
import { ProductGrid } from "./product-grid";

export const metadata: Metadata = {
  title: "Products | Aurora Luna Star",
  description:
    "Browse retreats, online gatherings, and recordings from Aurora Luna Star.",
};

export default async function ProductsPage() {
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
        <div className="wrap section-space">
          <h1>
            Retreats <em>&amp; Recordings</em>
          </h1>
          <p className="mt-4 mb-8 max-w-[52ch] leading-relaxed text-muted">
            Browse retreats, guided meditations, channeled sessions, and
            recordings.
          </p>
          <ProductGrid products={products} />
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
