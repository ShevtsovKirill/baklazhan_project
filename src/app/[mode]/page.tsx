import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCatalog } from "@/components/catalog/ProductCatalog";
import { getMode, isModeId } from "@/lib/catalog";

// Страница режима со всеми товарами: /healthy, /junk, /adult

export async function generateMetadata({ params }: PageProps<"/[mode]">): Promise<Metadata> {
  const { mode } = await params;
  if (!isModeId(mode)) return {};
  return { title: `${getMode(mode).label} — Баклажан Маркет` };
}

export default async function ModePage({ params }: PageProps<"/[mode]">) {
  const { mode } = await params;
  if (!isModeId(mode)) notFound();

  return <ProductCatalog mode={mode} />;
}
