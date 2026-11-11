"use client";

import { useEffect } from "react";
import { useCatalogFilters } from "@/context/CatalogFiltersContext";
import { filterProducts, findCategory, getMode, sortProducts } from "@/lib/catalog";
import styles from "@/styles/catalog/ProductCatalog.module.css";
import type { ModeId } from "@/types/catalog";
import { CatalogSection } from "./CatalogSection";
import { EmptyState } from "./EmptyState";
import { ProductGrid } from "./ProductGrid";
import { SortSelect } from "./SortSelect";

interface ProductCatalogProps {
  mode: ModeId;
  /** Не указан — страница «Все товары» с разбивкой по разделам */
  categorySlug?: string;
}

/** Правая колонка: заголовок, сортировка и товары, подходящие под фильтры */
export function ProductCatalog({ mode, categorySlug }: ProductCatalogProps) {
  const { filters } = useCatalogFilters();
  const modeConfig = getMode(mode);
  const category = categorySlug ? findCategory(mode, categorySlug) : undefined;
  const isAdultMode = mode === "adult";

  // при переходе в другую категорию — наверх страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  const matching = filterProducts(modeConfig.products, filters, categorySlug);

  return (
    <>
      <div className={styles.toolbar}>
        <h1 className={styles.title}>{category ? category.title : modeConfig.catalogTitle}</h1>
        <SortSelect />
      </div>
      <p className={styles.description}>{category?.description ?? ""}</p>

      {matching.length === 0 ? (
        <EmptyState icon={modeConfig.emptyResultsIcon} />
      ) : category ? (
        // выбрана одна категория — просто сетка
        <ProductGrid products={sortProducts(matching, filters.sort)} isAdultMode={isAdultMode} />
      ) : (
        // «Все товары» — разбиваем по разделам-категориям, пустые разделы не показываем
        modeConfig.categories.map((section) => {
          const products = matching.filter((product) => product.category === section.slug);
          if (products.length === 0) return null;
          return (
            <CatalogSection
              key={section.slug}
              mode={mode}
              category={section}
              products={sortProducts(products, filters.sort)}
            />
          );
        })
      )}
    </>
  );
}
