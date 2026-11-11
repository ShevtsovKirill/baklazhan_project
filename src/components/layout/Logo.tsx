import styles from "@/styles/layout/Logo.module.css";

/** Логотип «🍆 баклажан.kz» — в шапке и в подвале */
export function Logo() {
  return (
    <div className={styles.logo}>
      <span className={styles.mark}>🍆</span>
      баклажан<em className={styles.accent}>.kz</em>
    </div>
  );
}
