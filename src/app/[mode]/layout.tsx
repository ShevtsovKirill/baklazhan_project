import { notFound } from "next/navigation";
import { ModeGuard } from "@/components/age-gate/ModeGuard";
import { AdultWarning } from "@/components/catalog/AdultWarning";
import { Breadcrumbs } from "@/components/catalog/Breadcrumbs";
import { CategoryNav } from "@/components/catalog/CategoryNav";
import { FiltersSidebar } from "@/components/filters/FiltersSidebar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CatalogFiltersProvider } from "@/context/CatalogFiltersContext";
import { MODE_ORDER } from "@/data/modes";
import { isModeId } from "@/lib/catalog";
import styles from "@/styles/layout/ModeLayout.module.css";

// Общий каркас всех страниц режима: /healthy, /junk, /adult и их категорий.
// Шапка, категории, фильтры и подвал остаются на месте,
// а при переходе между категориями меняется только правая колонка (page.tsx).

export function generateStaticParams() {
  return MODE_ORDER.map((mode) => ({ mode }));
}

/** Любой другой адрес — страница 404 */
export const dynamicParams = false;

export default async function ModeLayout({ children, params }: LayoutProps<"/[mode]">) {
  const { mode } = await params;
  if (!isModeId(mode)) notFound();

  return (
    <ModeGuard mode={mode}>
      {/* key={mode} — при смене режима фильтры и поиск сбрасываются */}
      <CatalogFiltersProvider key={mode} mode={mode}>
        <Header mode={mode} />

        <main className={styles.main}>
          <div className={styles.container}>
            <Breadcrumbs mode={mode} />
            {mode === "adult" && <AdultWarning />}
            <CategoryNav mode={mode} />

            <div className={styles.columns}>
              <FiltersSidebar mode={mode} />
              <section>{children}</section>
            </div>
          </div>
        </main>

        <Footer mode={mode} />
      </CatalogFiltersProvider>
    </ModeGuard>
  );
}
