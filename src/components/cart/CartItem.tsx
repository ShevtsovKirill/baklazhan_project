"use client";

import { useCart } from "@/context/CartContext";
import type { CartLine } from "@/lib/cart";
import { formatPrice } from "@/lib/format";
import styles from "@/styles/cart/CartItem.module.css";

/** Строка корзины: картинка, название, кнопки − / +, сумма */
export function CartItem({ line }: { line: CartLine }) {
  const { increment, decrement } = useCart();
  const { product, quantity } = line;

  return (
    <div className={styles.item}>
      <div className={styles.image} style={{ background: product.tileColor }}>
        {product.emoji}
      </div>

      <div className={styles.text}>
        {product.name}
        <small className={styles.unitPrice}>
          {formatPrice(product.price)} / {product.unit}
        </small>
      </div>

      <div className={styles.stepper}>
        <button type="button" onClick={() => decrement(product.id)} aria-label="Убрать одну штуку">
          −
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={() => increment(product.id)} aria-label="Добавить ещё одну">
          +
        </button>
      </div>

      <div className={styles.sum}>{formatPrice(product.price * quantity)}</div>
    </div>
  );
}
