"use client";

import { useCatalogFilters } from "@/context/CatalogFiltersContext";
import styles from "@/styles/catalog/SortSelect.module.css";
import type { SortOption } from "@/types/catalog";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "recommended", label: "Рекомендуемые" },
  { value: "price-asc", label: "Сначала дешевле" },
  { value: "price-desc", label: "Сначала дороже" },
  { value: "rating", label: "По рейтингу" },
];

/** Выпадающий список «Сортировка» */
export function SortSelect() {
  const { filters, updateFilters } = useCatalogFilters();

  return (
    <label className={styles.sort}>
      Сортировка:
      <select
        className={styles.select}
        value={filters.sort}
        onChange={(event) => updateFilters({ sort: event.target.value as SortOption })}
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
