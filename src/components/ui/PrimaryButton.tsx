import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/classNames";
import styles from "@/styles/ui/PrimaryButton.module.css";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** "wine" — винный цвет для окна проверки возраста */
  variant?: "default" | "wine";
}

/** Большая кнопка на всю ширину */
export function PrimaryButton({ variant = "default", className, ...props }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className={cn(styles.button, variant === "wine" && styles.wine, className)}
      {...props}
    />
  );
}
