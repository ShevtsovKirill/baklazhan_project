"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getMode } from "@/lib/catalog";
import { cn } from "@/lib/classNames";
import { categoryPath, modePath } from "@/lib/routes";
import styles from "@/styles/catalog/CategoryNav.module.css";
import type { ModeId } from "@/types/catalog";

/** Ряд кнопок-категорий. Каждая кнопка — ссылка на страницу категории */
export function CategoryNav({ mode }: { mode: ModeId }) {
  // выбранная категория из адреса: /healthy/vegetables → "vegetables"
  const { category: activeSlug } = useParams<{ category?: string }>();

  return (
    <nav className={styles.nav} aria-label="Категории">
      <Link href={modePath(mode)} className={cn(styles.link, !activeSlug && styles.active)}>
        Все товары
      </Link>

      {getMode(mode).categories.map((category) => (
        <Link
          key={category.slug}
          href={categoryPath(mode, category.slug)}
          className={cn(
            styles.link,
            category.isAccented && styles.accented,
            category.slug === activeSlug && styles.active,
          )}
        >
          {category.title}
        </Link>
      ))}
    </nav>
  );
}
