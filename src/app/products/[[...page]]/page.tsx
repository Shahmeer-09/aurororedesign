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
      <main className="wrap py-10 md:py-14" id="main">
        <div className="mb-9 border-b border-line pb-6">
          <h1 className="text-[clamp(2.75rem,5vw,4.25rem)] leading-none tracking-[-0.03em]">
            Products
          </h1>
          <p className="mt-4 max-w-[52ch] leading-[1.7] text-muted">
            Retreats, online gatherings, and channeled series from Aurora. Each
            item opens its page on auroralunastar.com to complete your purchase.
          </p>
        </div>
        <ProductGrid products={products} />
      </main>
    </>
  );
}
