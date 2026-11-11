"use client";

import { useToast } from "@/context/ToastContext";
import styles from "@/styles/ui/Toast.module.css";

/** Всплывающее сообщение внизу экрана. Текст задаётся через useToast().showToast() */
export function Toast() {
  const { message } = useToast();
  if (!message) return null;

  return (
    <div className={styles.toast} role="status">
      {message}
    </div>
  );
}
