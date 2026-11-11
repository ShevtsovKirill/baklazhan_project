"use client";

import { useCatalogFilters } from "@/context/CatalogFiltersContext";
import { getMode } from "@/lib/catalog";
import type { ModeId } from "@/types/catalog";
import { FilterCard } from "./FilterCard";
import { OptionField } from "./OptionField";

/** Галочки «Подборки»: со скидкой, Казахстан, эко / хиты / премиум */
export function CollectionsFilter({ mode }: { mode: ModeId }) {
  const { filters, updateFilters } = useCatalogFilters();

  return (
    <FilterCard title="Подборки">
      <OptionField
        type="checkbox"
        checked={filters.onlyDiscounted}
        onChange={(checked) => updateFilters({ onlyDiscounted: checked })}
      >
        Только со скидкой
      </OptionField>
      <OptionField
        type="checkbox"
        checked={filters.onlyFromKazakhstan}
        onChange={(checked) => updateFilters({ onlyFromKazakhstan: checked })}
      >
        Казахстан 🇰🇿
      </OptionField>
      <OptionField
        type="checkbox"
        checked={filters.onlySpecial}
        onChange={(checked) => updateFilters({ onlySpecial: checked })}
      >
        {getMode(mode).specialFilterLabel}
      </OptionField>
    </FilterCard>
  );
}
