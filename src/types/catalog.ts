// Общие типы магазина: режимы, категории, товары, фильтры.

/** Три режима магазина (порядок как на тумблере в шапке). */
export type ModeId = "healthy" | "junk" | "adult";

export interface Category {
  /** Часть адреса страницы: /healthy/vegetables */
  slug: string;
  /** Название на кнопке и в заголовке раздела */
  title: string;
  /** Текст под заголовком раздела */
  description?: string;
  /** Кнопка категории с фиолетовой рамкой */
  isAccented?: boolean;
  /** Раздел каталога в рамке (на странице «Все товары») */
  isFramed?: boolean;
  /** На товарах категории показывается значок «21+» (алкоголь, табак) */
  isAgeRestricted?: boolean;
}

export interface Product {
  id: number;
  /** slug категории из data/categories.ts */
  category: string;
  name: string;
  /** Эмодзи вместо картинки товара */
  emoji: string;
  /** Цвет квадрата под эмодзи */
  tileColor: string;
  price: number;
  /** Цена до скидки — если есть, у товара показывается значок скидки */
  oldPrice?: number;
  /** Вес / объём / количество: «кг», «0.5 л · 4.9%» */
  unit: string;
  rating: number;
  country: string;
  isFromKazakhstan?: boolean;
  /** Особая подборка режима: эко / хит / премиум (см. specialFilterLabel режима) */
  isSpecial?: boolean;
}

/** Тексты и данные, которые меняются вместе с режимом. */
export interface ModeConfig {
  id: ModeId;
  /** Название режима рядом с тумблером */
  label: string;
  /** Значок секции на тумблере */
  switchIcon: string;
  /** Средняя часть хлебных крошек */
  breadcrumb: string;
  searchPlaceholder: string;
  /** Подпись третьей галочки в фильтре «Подборки» */
  specialFilterLabel: string;
  /** Заголовок каталога на странице «Все товары» */
  catalogTitle: string;
  /** Эмодзи на заглушке «Ничего не найдено» */
  emptyResultsIcon: string;
  /** Заглушка пустой корзины */
  emptyCart: { icon: string; title: string; hint: string };
  footerText: string;
  footerSlogan: string;
  categories: Category[];
  products: Product[];
}

export type SortOption = "recommended" | "price-asc" | "price-desc" | "rating";

/** Состояние фильтров каталога */
export interface CatalogFilters {
  search: string;
  maxPrice: number;
  onlyDiscounted: boolean;
  onlyFromKazakhstan: boolean;
  onlySpecial: boolean;
  /** "" — все страны */
  country: string;
  sort: SortOption;
}

/** Корзина: { id товара: количество } */
export type CartItems = Record<number, number>;
