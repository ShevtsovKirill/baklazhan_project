"use client";

import { useCatalogFilters } from "@/context/CatalogFiltersContext";
import { formatPrice } from "@/lib/format";
import styles from "@/styles/filters/PriceFilter.module.css";
import { FilterCard } from "./FilterCard";

/** Ползунок «Цена, ₸»: показывает товары не дороже выбранной цены */
export function PriceFilter() {
  const { filters, priceRange, updateFilters } = useCatalogFilters();

  return (
    <FilterCard title="Цена, ₸">
      <div className={styles.prices}>
        <span className={styles.price}>{formatPrice(priceRange.min)}</span>
        <span className={styles.price}>{formatPrice(filters.maxPrice)}</span>
      </div>
      <input
        className={styles.slider}
        type="range"
        aria-label="Максимальная цена"
        min={priceRange.min}
        max={priceRange.max}
        step={10}
        value={filters.maxPrice}
        onChange={(event) => updateFilters({ maxPrice: Number(event.target.value) })}
      />
    </FilterCard>
  );
}
