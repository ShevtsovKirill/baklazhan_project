import type { Category } from "@/types/catalog";

// Категории каждого режима, в том порядке, в котором они идут на сайте.
// slug         — часть адреса страницы: /healthy/vegetables
// isAccented   — кнопка категории с фиолетовой рамкой
// isFramed     — раздел каталога в рамке (на странице «Все товары»)
// isAgeRestricted — на товарах категории показывается значок «21+»

// Режим «Полезное»
export const healthyCategories: Category[] = [
  { slug: "vegetables", title: "Овощи" },
  { slug: "fruits", title: "Фрукты" },
  { slug: "exotic", title: "🐉 Экзотика", description: "Драгонфрут, маракуйя, манго и другие фрукты и овощи из тропиков", isAccented: true },
  { slug: "berries", title: "Ягоды" },
  { slug: "greens", title: "Зелень" },
  { slug: "salads", title: "🥗 Салаты", description: "Готовые салаты из свежих овощей — собираем в день доставки", isAccented: true, isFramed: true },
  { slug: "healthy-snacks", title: "🥜 Полезные закуски", description: "Перекусы без лишнего сахара: орехи, хумус, хлебцы, батончики", isAccented: true, isFramed: true },
  { slug: "dairy", title: "Йогурты и молочное" },
  { slug: "fish", title: "🐟 Рыба" },
  { slug: "bread-and-grains", title: "Хлеб и крупы" },
  { slug: "drinks", title: "Напитки" },
];

// Режим «Вредное»
export const junkCategories: Category[] = [
  { slug: "fast-food", title: "🍔 Фастфуд" },
  { slug: "sweets", title: "🍫 Сладкое" },
  { slug: "desserts", title: "🍰 Десерты", description: "Торты, чизкейки, пончики и мороженое — иногда можно", isAccented: true, isFramed: true },
  { slug: "snacks", title: "🍿 Снеки" },
  { slug: "soda-and-energy", title: "⚡ Газировка и энергетики" },
];

// Режим «21+»
export const adultCategories: Category[] = [
  { slug: "beer-and-cider", title: "🍺 Пиво и сидр", isAgeRestricted: true },
  { slug: "wine", title: "🍷 Вино", isAgeRestricted: true },
  { slug: "spirits", title: "🥃 Крепкое", isAgeRestricted: true },
  { slug: "bar-snacks", title: "🍤 Закуски под спиртное", description: "Всё к пиву, вину и крепкому: морепродукты, мясные нарезки, сыры и соленья", isAccented: true, isFramed: true },
  { slug: "cigarettes", title: "🚬 Сигареты", isAgeRestricted: true },
  { slug: "hookah", title: "💨 Кальян и стики", isAgeRestricted: true },
];
