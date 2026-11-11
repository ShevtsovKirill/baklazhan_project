"use client";

import { CartIcon } from "@/components/ui/icons";
import { useCart } from "@/context/CartContext";
import styles from "@/styles/cart/CartButton.module.css";

/** Кнопка корзины в шапке со счётчиком товаров */
export function CartButton() {
  const { totals, open } = useCart();

  return (
    <button type="button" className={styles.button} onClick={open}>
      <CartIcon />
      <span className={styles.label}>Корзина</span>
      <span className={styles.count}>{totals.count}</span>
    </button>
  );
}
