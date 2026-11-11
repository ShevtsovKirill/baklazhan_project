import { MODES, MODE_ORDER } from "@/data/modes";
import type { CatalogFilters, Category, ModeConfig, ModeId, Product, SortOption } from "@/types/catalog";

// =====================================================
//  Поиск режимов, категорий и товаров
// =====================================================

/** Проверяет, что строка из адреса — существующий режим */
export function isModeId(value: unknown): value is ModeId {
  return typeof value === "string" && (MODE_ORDER as string[]).includes(value);
}

export function getMode(mode: ModeId): ModeConfig {
  return MODES[mode];
}

export function findCategory(mode: ModeId, slug: string): Category | undefined {
  return MODES[mode].categories.find((category) => category.slug === slug);
}

/** Все товары всех режимов — чтобы найти товар корзины по id из любого режима */
const allProducts: Product[] = MODE_ORDER.flatMap((mode) => MODES[mode].products);
const productsById = new Map(allProducts.map((product) => [product.id, product]));

export function getProductById(id: number): Product | undefined {
  return productsById.get(id);
}

/** slug категорий, у товаров которых показываем значок «21+» */
const ageRestrictedCategories = new Set(
  MODE_ORDER.flatMap((mode) => MODES[mode].categories)
    .filter((category) => category.isAgeRestricted)
    .map((category) => category.slug),
);

/** Алкоголь или табак? */
export function isAgeRestricted(product: Product): boolean {
  return ageRestrictedCategories.has(product.category);
}

/** Размер скидки в процентах: 1150 → 925 = 20 */
export function getDiscountPercent(product: Product): number | null {
  if (!product.oldPrice) return null;
  return Math.round((1 - product.price / product.oldPrice) * 100);
}

// =====================================================
//  Данные для фильтров
// =====================================================

/** Минимальная и максимальная цена для ползунка (максимум округлён вверх до сотен) */
export function getPriceRange(products: Product[]): { min: number; max: number } {
  const prices = products.map((product) => product.price);
  return {
    min: Math.min(...prices),
    max: Math.ceil(Math.max(...prices) / 100) * 100,
  };
}

/** Страны товаров без повторов, по алфавиту */
export function getCountries(products: Product[]): string[] {
  return [...new Set(products.map((product) => product.country))].sort();
}

// =====================================================
//  Фильтрация и сортировка
// =====================================================

/** Оставляет только товары, которые подходят под все фильтры (и под категорию, если она выбрана) */
export function filterProducts(
  products: Product[],
  filters: CatalogFilters,
  categorySlug?: string,
): Product[] {
  const search = filters.search.trim().toLowerCase();

  return products.filter((product) => {
    if (categorySlug && product.category !== categorySlug) return false;
    if (search && !product.name.toLowerCase().includes(search)) return false;
    if (product.price > filters.maxPrice) return false;
    if (filters.onlyDiscounted && !product.oldPrice) return false;
    if (filters.onlyFromKazakhstan && !product.isFromKazakhstan) return false;
    if (filters.onlySpecial && !product.isSpecial) return false;
    if (filters.country && product.country !== filters.country) return false;
    return true;
  });
}

/** Возвращает новый отсортированный список (исходный не меняется) */
export function sortProducts(products: Product[], sort: SortOption): Product[] {
  const sorted = [...products];
  if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
  if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
  return sorted;
}
