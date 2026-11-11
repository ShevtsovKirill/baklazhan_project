"use client";

import { SearchIcon } from "@/components/ui/icons";
import { useCatalogFilters } from "@/context/CatalogFiltersContext";
import styles from "@/styles/layout/SearchBar.module.css";

/** Поиск по названию товара — фильтрует каталог на лету */
export function SearchBar({ placeholder }: { placeholder: string }) {
  const { filters, updateFilters } = useCatalogFilters();

  return (
    <div className={styles.search}>
      <SearchIcon />
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        aria-label="Поиск товаров"
        value={filters.search}
        onChange={(event) => updateFilters({ search: event.target.value })}
      />
    </div>
  );
}
