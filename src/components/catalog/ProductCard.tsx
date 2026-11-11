"use client";

import { MIN_AGE } from "@/config/shop";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { getDiscountPercent, isAgeRestricted } from "@/lib/catalog";
import { cn } from "@/lib/classNames";
import { formatPrice } from "@/lib/format";
import styles from "@/styles/catalog/ProductCard.module.css";
import type { Product } from "@/types/catalog";

interface ProductCardProps {
  product: Product;
  /** В режиме 21+ карточка светлая с винным оттенком */
  isAdultMode: boolean;
}

/** Карточка товара: картинка, название, рейтинг, цена и кнопка «в корзину» */
export function ProductCard({ product, isAdultMode }: ProductCardProps) {
  const { getQuantity, increment, decrement } = useCart();
  const { showToast } = useToast();

  const quantity = getQuantity(product.id);
  const discount = getDiscountPercent(product);

  function handleAdd() {
    increment(product.id);
    showToast(`${product.emoji} Добавлено в корзину`);
  }

  return (
    <div className={cn(styles.card, isAdultMode && styles.adult)}>
      {/* значки сверху: скидка и 21+ */}
      {discount !== null && <span className={styles.discount}>−{discount}%</span>}
      {isAgeRestricted(product) && <span className={styles.ageBadge}>{MIN_AGE}+</span>}

      {/* в режиме 21+ фон картинки задаёт CSS, а не цвет товара */}
      <div className={styles.image} style={isAdultMode ? undefined : { background: product.tileColor }}>
        {product.emoji}
      </div>

      <div className={styles.name}>{product.name}</div>
      <div className={styles.info}>
        <span className={styles.star}>★</span> <b className={styles.rating}>{product.rating.toFixed(1)}</b> ·{" "}
        {product.country} · {product.unit}
      </div>

      <div className={styles.bottom}>
        <div>
          <div className={styles.price}>{formatPrice(product.price)}</div>
          {product.oldPrice && <div className={styles.oldPrice}>{formatPrice(product.oldPrice)}</div>}
        </div>

        {/* уже в корзине — счётчик «− 2 +», иначе кнопка «+» */}
        {quantity > 0 ? (
          <div className={styles.stepper}>
            <button type="button" onClick={() => decrement(product.id)} aria-label="Убрать одну штуку">
              −
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={() => increment(product.id)} aria-label="Добавить ещё одну">
              +
            </button>
          </div>
        ) : (
          <button type="button" className={styles.addButton} onClick={handleAdd} aria-label="Добавить в корзину">
            +
          </button>
        )}
      </div>
    </div>
  );
}
