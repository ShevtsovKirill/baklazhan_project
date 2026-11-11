import { DEFAULT_MODE } from "@/data/modes";
import { isModeId } from "./catalog";
import type { CartItems, ModeId } from "@/types/catalog";
import { createPersistentStore } from "./persistentStore";

// Все данные, которые сайт хранит в браузере посетителя.

const EMPTY_CART: CartItems = {};

/** Корзина: { id товара: количество } */
export const cartStore = createPersistentStore<CartItems>("baklazhan:cart", EMPTY_CART);

/** Посетитель уже подтвердил, что ему есть 21 */
export const ageVerifiedStore = createPersistentStore<boolean>("baklazhan:age-verified", false);

/** Режим, открытый в прошлый раз — с него начинается главная страница */
export const lastModeStore = createPersistentStore<ModeId>("baklazhan:last-mode", DEFAULT_MODE);

/** С какого режима начинать: с последнего открытого, но в 21+ — только если возраст подтверждён */
export function getStartMode(isAgeVerified: boolean): ModeId {
  const lastMode = lastModeStore.get();
  if (!isModeId(lastMode)) return DEFAULT_MODE;
  if (lastMode === "adult" && !isAgeVerified) return DEFAULT_MODE;
  return lastMode;
}
