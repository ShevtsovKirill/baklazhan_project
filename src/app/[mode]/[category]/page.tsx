import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCatalog } from "@/components/catalog/ProductCatalog";
import { findCategory, getMode, isModeId } from "@/lib/catalog";

// Страница одной категории: /healthy/vegetables, /junk/desserts, /adult/wine …

export function generateStaticParams({ params }: { params: { mode: string } }) {
  if (!isModeId(params.mode)) return [];
  return getMode(params.mode).categories.map((category) => ({ category: category.slug }));
}

/** Неизвестная категория — страница 404 */
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/[mode]/[category]">): Promise<Metadata> {
  const { mode, category } = await params;
  if (!isModeId(mode)) return {};
  const found = findCategory(mode, category);
  return found ? { title: `${found.title} — Баклажан Маркет` } : {};
}

export default async function CategoryPage({ params }: PageProps<"/[mode]/[category]">) {
  const { mode, category } = await params;
  if (!isModeId(mode) || !findCategory(mode, category)) notFound();

  return <ProductCatalog mode={mode} categorySlug={category} />;
}
