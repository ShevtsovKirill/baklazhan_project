"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { getMode, getPriceRange } from "@/lib/catalog";
import type { CatalogFilters, ModeId } from "@/types/catalog";

// Фильтры каталога: поиск в шапке, цена, галочки, страна и сортировка.
// Провайдер стоит в app/[mode]/layout.tsx с key={mode}: при смене режима
// все фильтры сбрасываются, а при переходе между категориями — сохраняются.

interface CatalogFiltersContextValue {
  filters: CatalogFilters;
  /** Границы ползунка цены для текущего режима */
  priceRange: { min: number; max: number };
  updateFilters: (changes: Partial<CatalogFilters>) => void;
}

const CatalogFiltersContext = createContext<CatalogFiltersContextValue | null>(null);

interface CatalogFiltersProviderProps {
  mode: ModeId;
  children: ReactNode;
}

export function CatalogFiltersProvider({ mode, children }: CatalogFiltersProviderProps) {
  const priceRange = useMemo(() => getPriceRange(getMode(mode).products), [mode]);

  const [filters, setFilters] = useState<CatalogFilters>(() => ({
    search: "",
    maxPrice: priceRange.max,
    onlyDiscounted: false,
    onlyFromKazakhstan: false,
    onlySpecial: false,
    country: "",
    sort: "recommended",
  }));

  const updateFilters = useCallback((changes: Partial<CatalogFilters>) => {
    setFilters((current) => ({ ...current, ...changes }));
  }, []);

  const value = useMemo(() => ({ filters, priceRange, updateFilters }), [filters, priceRange, updateFilters]);

  return <CatalogFiltersContext.Provider value={value}>{children}</CatalogFiltersContext.Provider>;
}

export function useCatalogFilters(): CatalogFiltersContextValue {
  const context = useContext(CatalogFiltersContext);
  if (!context) throw new Error("useCatalogFilters нужно вызывать внутри <CatalogFiltersProvider>");
  return context;
}
