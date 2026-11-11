import type { ReactNode } from "react";
import styles from "@/styles/filters/OptionField.module.css";

interface OptionFieldProps {
  type: "checkbox" | "radio";
  /** Для radio — общее имя группы */
  name?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: ReactNode;
}

/** Галочка или переключатель с фирменным квадратиком */
export function OptionField({ type, name, checked, onChange, children }: OptionFieldProps) {
  return (
    <label className={styles.option}>
      <input
        className={styles.input}
        type={type}
        name={name}
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span className={styles.box} />
      {children}
    </label>
  );
}
