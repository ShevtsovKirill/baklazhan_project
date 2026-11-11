import Link from "next/link";
import { cn } from "@/lib/classNames";
import { categoryPath } from "@/lib/routes";
import styles from "@/styles/catalog/CatalogSection.module.css";
import type { Category, ModeId, Product } from "@/types/catalog";
import { ProductGrid } from "./ProductGrid";

interface CatalogSectionProps {
  mode: ModeId;
  category: Category;
  products: Product[];
}

/** Раздел на странице «Все товары»: заголовок категории, счётчик, «Смотреть все →» и товары */
export function CatalogSection({ mode, category, products }: CatalogSectionProps) {
  return (
    <div className={cn(styles.section, category.isFramed && styles.framed)}>
      <div className={styles.header}>
        <h2 className={styles.title}>{category.title}</h2>
        <span className={styles.count}>{products.length}</span>
        <Link href={categoryPath(mode, category.slug)} className={styles.seeAll}>
          Смотреть все →
        </Link>
      </div>

      {category.description ? (
        <p className={styles.text}>{category.description}</p>
      ) : (
        <div className={styles.spacer} />
      )}

      <ProductGrid products={products} isAdultMode={mode === "adult"} />
    </div>
  );
}
