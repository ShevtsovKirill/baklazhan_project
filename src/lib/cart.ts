import { DELIVERY_PRICE, FREE_DELIVERY_THRESHOLD } from "@/config/shop";
import type { CartItems, Product } from "@/types/catalog";
import { getProductById, isAgeRestricted } from "./catalog";

export interface CartLine {
  product: Product;
  quantity: number;
}

export interface CartTotals {
  /** Сколько всего штук в корзине (число на кнопке в шапке) */
  count: number;
  /** Сумма товаров */
  subtotal: number;
  /** 0 — доставка бесплатная */
  delivery: number;
  total: number;
  /** Сколько осталось добавить до бесплатной доставки */
  leftToFreeDelivery: number;
  /** Есть алкоголь или табак — курьер попросит документ */
  hasAgeRestricted: boolean;
}

/** Превращает { id: количество } в список строк корзины с данными товаров */
export function getCartLines(items: CartItems): CartLine[] {
  const lines: CartLine[] = [];
  for (const [id, quantity] of Object.entries(items)) {
    const product = getProductById(Number(id));
    if (product && quantity > 0) lines.push({ product, quantity });
  }
  return lines;
}

/** Доставка бесплатная от FREE_DELIVERY_THRESHOLD */
export function getDeliveryPrice(subtotal: number): number {
  return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_PRICE;
}

export function calculateTotals(lines: CartLine[]): CartTotals {
  const count = lines.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
  const delivery = getDeliveryPrice(subtotal);

  return {
    count,
    subtotal,
    delivery,
    total: subtotal + delivery,
    leftToFreeDelivery: FREE_DELIVERY_THRESHOLD - subtotal,
    hasAgeRestricted: lines.some((line) => isAgeRestricted(line.product)),
  };
}
