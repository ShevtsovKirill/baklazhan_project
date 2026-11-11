import type { ModeId } from "@/types/catalog";

// Адреса страниц сайта собраны в одном месте,
// чтобы не писать строки вида `/${mode}/${slug}` по всему проекту.

/** Страница режима со всеми товарами: /healthy */
export function modePath(mode: ModeId): string {
  return `/${mode}`;
}

/** Страница категории: /healthy/vegetables */
export function categoryPath(mode: ModeId, categorySlug: string): string {
  return `/${mode}/${categorySlug}`;
}
