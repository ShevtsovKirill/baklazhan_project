import { MIN_AGE } from "@/config/shop";
import styles from "@/styles/catalog/AdultWarning.module.css";

/** Предупреждение про алкоголь и табак (только в режиме 21+) */
export function AdultWarning() {
  return (
    <div className={styles.warning}>
      ⚠️ Чрезмерное употребление алкоголя вредит вашему здоровью. Курение убивает. Продажа алкоголя и табака лицам
      младше {MIN_AGE} года запрещена.
    </div>
  );
}
