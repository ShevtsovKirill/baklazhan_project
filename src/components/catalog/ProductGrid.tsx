import styles from "@/styles/catalog/ProductGrid.module.css";
import type { Product } from "@/types/catalog";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  isAdultMode: boolean;
}

/** Сетка карточек товаров */
export function ProductGrid({ products, isAdultMode }: ProductGridProps) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} isAdultMode={isAdultMode} />
      ))}
    </div>
  );
}
