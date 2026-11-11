"use client";

import { useCatalogFilters } from "@/context/CatalogFiltersContext";
import { getCountries, getMode } from "@/lib/catalog";
import type { ModeId } from "@/types/catalog";
import { FilterCard } from "./FilterCard";
import { OptionField } from "./OptionField";

/** Выбор страны (список берётся из товаров режима) */
export function CountryFilter({ mode }: { mode: ModeId }) {
  const { filters, updateFilters } = useCatalogFilters();
  const countries = getCountries(getMode(mode).products);

  return (
    <FilterCard title="Страны">
      <div>
        <OptionField
          type="radio"
          name="country"
          checked={filters.country === ""}
          onChange={() => updateFilters({ country: "" })}
        >
          Все страны
        </OptionField>

        {countries.map((country) => (
          <OptionField
            key={country}
            type="radio"
            name="country"
            checked={filters.country === country}
            onChange={() => updateFilters({ country })}
          >
            {country}
          </OptionField>
        ))}
      </div>
    </FilterCard>
  );
}
