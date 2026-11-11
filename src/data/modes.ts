import type { ModeConfig, ModeId } from "@/types/catalog";
import { adultCategories, healthyCategories, junkCategories } from "./categories";
import { adultProducts } from "./products/adult";
import { healthyProducts } from "./products/healthy";
import { junkProducts } from "./products/junk";

/** Порядок режимов на тумблере: слева направо */
export const MODE_ORDER: ModeId[] = ["healthy", "junk", "adult"];

/** Режим, который открывается по умолчанию */
export const DEFAULT_MODE: ModeId = "healthy";

export const MODES: Record<ModeId, ModeConfig> = {
  healthy: {
    id: "healthy",
    label: "Полезное",
    switchIcon: "🥗",
    breadcrumb: "Полезные продукты",
    searchPlaceholder: "Искать полезное — овощи, экзотика, салаты…",
    specialFilterLabel: "Эко / фермерское",
    catalogTitle: "Всё полезное",
    emptyResultsIcon: "🧺",
    emptyCart: { icon: "🛒", title: "Корзина пуста.", hint: "Добавьте свежие продукты!" },
    footerText: "Свежие овощи, фрукты, экзотика, йогурты и готовые салаты с доставкой по Алматы.",
    footerSlogan: "🌱 Ешьте разноцветно — минимум 5 порций овощей и фруктов в день",
    categories: healthyCategories,
    products: healthyProducts,
  },

  junk: {
    id: "junk",
    label: "Вредное",
    switchIcon: "🍔",
    breadcrumb: "Вредное, но вкусное",
    searchPlaceholder: "Искать — бургеры, пицца, десерты…",
    specialFilterLabel: "Хиты",
    catalogTitle: "Что-нибудь вкусное",
    emptyResultsIcon: "🍩",
    emptyCart: { icon: "🍔", title: "Корзина пуста.", hint: "Порадуйте себя чем-нибудь вкусным." },
    footerText: "Фастфуд, сладости и десерты с доставкой по Алматы. Иногда можно!",
    footerSlogan: "🍩 Иногда можно — но не забывайте про овощи",
    categories: junkCategories,
    products: junkProducts,
  },

  adult: {
    id: "adult",
    label: "21+",
    switchIcon: "21",
    breadcrumb: "Режим 21+",
    searchPlaceholder: "Искать — пиво, вино, закуски, сигареты…",
    specialFilterLabel: "Премиум",
    catalogTitle: "Всё 21+",
    emptyResultsIcon: "🫗",
    emptyCart: { icon: "🥃", title: "Корзина пуста.", hint: "Выберите что-нибудь к вечеру." },
    footerText: "Режим 21+. Алкоголь, табак и закуски под спиртное. Пожалуйста, знайте меру.",
    footerSlogan: "⚠️ Чрезмерное употребление алкоголя вредит здоровью. Курение убивает.",
    categories: adultCategories,
    products: adultProducts,
  },
};
