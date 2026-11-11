import Link from "next/link";
import styles from "@/styles/ui/NotFound.module.css";

/** Страница 404 — например, /healthy/unknown-category */
export default function NotFound() {
  return (
    <main className={styles.page}>
      <div>
        <div className={styles.icon}>🍆</div>
        <h1 className={styles.title}>Страница не найдена</h1>
        Такой страницы нет — возможно, ссылка устарела.
        <br />
        <Link href="/" className={styles.link}>
          ← На главную
        </Link>
      </div>
    </main>
  );
}
