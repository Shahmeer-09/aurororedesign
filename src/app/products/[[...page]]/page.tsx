import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../_components/site-chrome";
import { siteLinks } from "../../site-links";
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
        className="fixed top-3 left-3 z-3 -translate-y-[180%] bg-purple px-4 py-3 text-foreground focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main className="wrap py-10 md:py-14" id="main">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-b border-line pb-5">
          <div>
            <h1 className="text-[clamp(2.75rem,5vw,4.25rem)] leading-none tracking-[-0.03em]">
              Products
            </h1>
            <p className="mt-3 text-sm text-muted">
              Retreats, online gatherings, and recordings from Aurora.
            </p>
          </div>
          <a className="text-link" href={siteLinks.liveProducts}>
            Browse the full shop
          </a>
        </div>
        <ProductGrid products={products} />
      </main>
      <SiteFooter />
    </>
  );
}
