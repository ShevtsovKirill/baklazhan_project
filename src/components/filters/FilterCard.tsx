import type { ReactNode } from "react";
import styles from "@/styles/filters/FilterCard.module.css";

/** Белый блок фильтра с заголовком */
export function FilterCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
}
