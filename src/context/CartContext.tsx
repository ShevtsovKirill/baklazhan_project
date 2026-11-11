"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { calculateTotals, getCartLines, type CartLine, type CartTotals } from "@/lib/cart";
import { usePersistentStore } from "@/lib/persistentStore";
import { cartStore } from "@/lib/storage";

// Корзина: товары, суммы и выезжающая панель справа.
// Содержимое сохраняется в localStorage (см. lib/storage.ts).

interface CartContextValue {
  lines: CartLine[];
  totals: CartTotals;
  getQuantity: (productId: number) => number;
  increment: (productId: number) => void;
  decrement: (productId: number) => void;
  clear: () => void;

  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const items = usePersistentStore(cartStore);
  const [isOpen, setIsOpen] = useState(false);

  // если товара не было — станет 1
  const increment = useCallback((productId: number) => {
    const current = cartStore.get();
    cartStore.set({ ...current, [productId]: (current[productId] ?? 0) + 1 });
  }, []);

  // дошли до нуля — убираем товар из корзины
  const decrement = useCallback((productId: number) => {
    const next = { ...cartStore.get() };
    next[productId] = (next[productId] ?? 0) - 1;
    if (next[productId] <= 0) delete next[productId];
    cartStore.set(next);
  }, []);

  const clear = useCallback(() => cartStore.set({}), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => {
    const lines = getCartLines(items);
    return {
      lines,
      totals: calculateTotals(lines),
      getQuantity: (productId: number) => items[productId] ?? 0,
      increment,
      decrement,
      clear,
      isOpen,
      open,
      close,
    };
  }, [items, isOpen, increment, decrement, clear, open, close]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart нужно вызывать внутри <CartProvider>");
  return context;
}
