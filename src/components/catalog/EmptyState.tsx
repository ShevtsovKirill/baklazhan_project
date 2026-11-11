import styles from "@/styles/catalog/EmptyState.module.css";

/** Заглушка «Ничего не найдено» */
export function EmptyState({ icon }: { icon: string }) {
  return (
    <div className={styles.empty}>
      <div className={styles.icon}>{icon}</div>
      Ничего не найдено. Попробуйте изменить фильтры.
    </div>
  );
}
