import { getMode } from "@/lib/catalog";
import styles from "@/styles/catalog/Breadcrumbs.module.css";
import type { ModeId } from "@/types/catalog";

/** Хлебные крошки: «Главная · Полезные продукты · Каталог» */
export function Breadcrumbs({ mode }: { mode: ModeId }) {
  return (
    <div className={styles.breadcrumbs}>
      Главная · {getMode(mode).breadcrumb} · <b className={styles.current}>Каталог</b>
    </div>
  );
}
