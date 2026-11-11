import styles from "@/styles/filters/FiltersSidebar.module.css";
import type { ModeId } from "@/types/catalog";
import { CollectionsFilter } from "./CollectionsFilter";
import { CountryFilter } from "./CountryFilter";
import { PriceFilter } from "./PriceFilter";

/** Левая колонка с фильтрами (на планшете и телефоне скрыта) */
export function FiltersSidebar({ mode }: { mode: ModeId }) {
  return (
    <aside className={styles.sidebar}>
      <PriceFilter />
      <CollectionsFilter mode={mode} />
      <CountryFilter mode={mode} />
    </aside>
  );
}
