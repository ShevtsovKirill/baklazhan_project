"use client";

import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { CART_CLOSE_DELAY_MS } from "@/config/shop";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { cn } from "@/lib/classNames";
import { formatPrice } from "@/lib/format";
import styles from "@/styles/cart/CartSummary.module.css";

/** Итог внизу корзины: суммы, доставка и кнопка «Оформить заказ» */
export function CartSummary() {
  const { totals, clear, close } = useCart();
  const { showToast } = useToast();
  const isFreeDelivery = totals.delivery === 0;

  function handleCheckout() {
    showToast(`✅ Заказ оформлен на ${formatPrice(totals.total)}`);
    clear();
    setTimeout(close, CART_CLOSE_DELAY_MS);
  }

  return (
    <div className={styles.summary}>
      <div className={styles.row}>
        <span>Товары</span>
        <span>{formatPrice(totals.subtotal)}</span>
      </div>
      <div className={styles.row}>
        <span>Доставка</span>
        <span>{isFreeDelivery ? "Бесплатно" : formatPrice(totals.delivery)}</span>
      </div>
      <div className={cn(styles.row, styles.total)}>
        <span>Итого</span>
        <span>{formatPrice(totals.total)}</span>
      </div>

      <div className={styles.deliveryNote}>
        {isFreeDelivery
          ? "🎉 Доставка бесплатно!"
          : `Добавьте ещё на ${formatPrice(totals.leftToFreeDelivery)} для бесплатной доставки`}
      </div>

      {/* напоминание про документ, если в корзине алкоголь или табак */}
      {totals.hasAgeRestricted && (
        <div className={styles.idNote}>🔞 Курьер попросит удостоверение личности при получении</div>
      )}

      <PrimaryButton onClick={handleCheckout}>Оформить заказ →</PrimaryButton>
    </div>
  );
}
