"use client";

import { useAgeVerification } from "@/context/AgeVerificationContext";
import { useCart } from "@/context/CartContext";
import { useCurrentMode } from "@/hooks/useCurrentMode";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { getMode } from "@/lib/catalog";
import { cn } from "@/lib/classNames";
import styles from "@/styles/cart/CartDrawer.module.css";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";

/** Корзина, выезжающая справа */
export function CartDrawer() {
  const { lines, isOpen, close } = useCart();
  const { isGateOpen } = useAgeVerification();
  const { emptyCart } = getMode(useCurrentMode());

  // Esc закрывает корзину (если поверх неё не открыто окно проверки возраста)
  useEscapeKey(close, isOpen && !isGateOpen);

  return (
    <>
      {/* затемнение: клик по нему закрывает корзину */}
      {isOpen && <div className={styles.overlay} onClick={close} />}

      <aside className={cn(styles.drawer, isOpen && styles.open)} aria-label="Корзина" inert={!isOpen}>
        <div className={styles.header}>
          <h2 className={styles.title}>Корзина</h2>
          <button type="button" className={styles.closeButton} onClick={close} aria-label="Закрыть">
            ✕
          </button>
        </div>

        <div className={styles.list}>
          {lines.length > 0 ? (
            lines.map((line) => <CartItem key={line.product.id} line={line} />)
          ) : (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>{emptyCart.icon}</div>
              {emptyCart.title}
              <br />
              {emptyCart.hint}
            </div>
          )}
        </div>

        {/* итог показывается, только если корзина не пустая */}
        {lines.length > 0 && <CartSummary />}
      </aside>
    </>
  );
}
