import type { Product } from "@/types/catalog";

// Товары режима «21+» (isSpecial = премиум)
export const adultProducts: Product[] = [
  // Пиво и сидр
  { id: 101, category: "beer-and-cider", name: "Пиво светлое нефильтрованное", emoji: "🍺", tileColor: "#2b2410", price: 690, unit: "0.5 л · 4.9%", rating: 4.5, country: "Германия" },
  { id: 102, category: "beer-and-cider", name: "Пиво тёмное", emoji: "🍺", tileColor: "#24170d", price: 790, unit: "0.5 л · 5.5%", rating: 4.6, country: "Чехия" },
  { id: 103, category: "beer-and-cider", name: "Сидр яблочный полусухой", emoji: "🍻", tileColor: "#1f2512", price: 650, unit: "0.5 л · 5%", rating: 4.4, country: "Казахстан", isFromKazakhstan: true },
  { id: 104, category: "beer-and-cider", name: "Пиво крафтовое IPA", emoji: "🍻", tileColor: "#2b1f0f", price: 1190, oldPrice: 1390, unit: "0.45 л · 6.5%", rating: 4.7, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },

  // Вино
  { id: 111, category: "wine", name: "Вино красное сухое Саперави", emoji: "🍷", tileColor: "#2a0f14", price: 4290, unit: "0.75 л · 13%", rating: 4.7, country: "Грузия" },
  { id: 112, category: "wine", name: "Вино белое полусладкое", emoji: "🥂", tileColor: "#26240f", price: 3490, oldPrice: 3990, unit: "0.75 л · 11.5%", rating: 4.5, country: "Италия" },
  { id: 113, category: "wine", name: "Игристое вино брют", emoji: "🍾", tileColor: "#22210f", price: 5290, unit: "0.75 л · 11%", rating: 4.6, country: "Италия", isSpecial: true },
  { id: 114, category: "wine", name: "Вино розовое сухое", emoji: "🍷", tileColor: "#2b1219", price: 3890, unit: "0.75 л · 12%", rating: 4.4, country: "Франция" },

  // Крепкое
  { id: 121, category: "spirits", name: "Водка классическая", emoji: "🍸", tileColor: "#16202a", price: 3290, unit: "0.5 л · 40%", rating: 4.3, country: "Казахстан", isFromKazakhstan: true },
  { id: 122, category: "spirits", name: "Виски шотландский купажированный", emoji: "🥃", tileColor: "#2a1a0c", price: 12990, oldPrice: 14990, unit: "0.7 л · 40%", rating: 4.7, country: "Шотландия", isSpecial: true },
  { id: 123, category: "spirits", name: "Коньяк 5 лет выдержки", emoji: "🥃", tileColor: "#2a160c", price: 8490, unit: "0.5 л · 40%", rating: 4.8, country: "Армения", isSpecial: true },
  { id: 124, category: "spirits", name: "Ром тёмный", emoji: "🥃", tileColor: "#24130a", price: 9290, unit: "0.7 л · 40%", rating: 4.5, country: "Доминикана" },
  { id: 125, category: "spirits", name: "Джин лондонский сухой", emoji: "🍸", tileColor: "#10202a", price: 10490, unit: "0.7 л · 40%", rating: 4.6, country: "Великобритания" },
  { id: 126, category: "spirits", name: "Текила серебряная", emoji: "🥃", tileColor: "#1f2410", price: 11990, unit: "0.7 л · 38%", rating: 4.5, country: "Мексика" },

  // Закуски под спиртное
  { id: 151, category: "bar-snacks", name: "Креветки королевские варёно-мороженые", emoji: "🍤", tileColor: "#2a1510", price: 4990, oldPrice: 5890, unit: "0.5 кг", rating: 4.7, country: "Вьетнам" },
  { id: 152, category: "bar-snacks", name: "Вобла вяленая", emoji: "🐟", tileColor: "#1f1d14", price: 890, unit: "шт", rating: 4.6, country: "Казахстан", isFromKazakhstan: true },
  { id: 156, category: "bar-snacks", name: "Казы конина, нарезка", emoji: "🥓", tileColor: "#2a1212", price: 2890, unit: "100 г", rating: 4.8, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 154, category: "bar-snacks", name: "Сырная тарелка ассорти", emoji: "🧀", tileColor: "#2a2410", price: 3790, unit: "300 г", rating: 4.8, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 155, category: "bar-snacks", name: "Куриные крылышки BBQ", emoji: "🍗", tileColor: "#2a170c", price: 2490, unit: "500 г", rating: 4.7, country: "Казахстан", isFromKazakhstan: true },
  { id: 160, category: "bar-snacks", name: "Кальмар сушёный стружка", emoji: "🦑", tileColor: "#1f1a24", price: 1490, unit: "100 г", rating: 4.5, country: "Китай" },
  { id: 153, category: "bar-snacks", name: "Арахис солёный жареный", emoji: "🥜", tileColor: "#2a1f10", price: 390, unit: "150 г", rating: 4.4, country: "Казахстан", isFromKazakhstan: true },
  { id: 157, category: "bar-snacks", name: "Оливки с косточкой", emoji: "🫒", tileColor: "#1c2010", price: 1290, unit: "300 г", rating: 4.5, country: "Испания" },
  { id: 161, category: "bar-snacks", name: "Огурчики солёные хрустящие", emoji: "🥒", tileColor: "#142412", price: 990, unit: "0.7 кг", rating: 4.6, country: "Казахстан", isFromKazakhstan: true },
  { id: 158, category: "bar-snacks", name: "Сухарики ржаные с чесноком", emoji: "🍞", tileColor: "#2a2010", price: 290, unit: "100 г", rating: 4.2, country: "Казахстан", isFromKazakhstan: true },
  { id: 159, category: "bar-snacks", name: "Чипсы картофельные с беконом", emoji: "🥔", tileColor: "#2a2412", price: 790, unit: "150 г", rating: 4.3, country: "Казахстан", isFromKazakhstan: true },
  { id: 162, category: "bar-snacks", name: "Претцели солёные", emoji: "🥨", tileColor: "#2a1f10", price: 590, unit: "200 г", rating: 4.4, country: "Германия" },

  // Сигареты
  { id: 131, category: "cigarettes", name: "Сигареты классические красные", emoji: "🚬", tileColor: "#231515", price: 1100, unit: "пачка 20 шт", rating: 4.1, country: "Казахстан", isFromKazakhstan: true },
  { id: 132, category: "cigarettes", name: "Сигареты лёгкие синие", emoji: "🚬", tileColor: "#151a26", price: 1150, unit: "пачка 20 шт", rating: 4, country: "Казахстан", isFromKazakhstan: true },
  { id: 133, category: "cigarettes", name: "Сигариллы вишнёвые", emoji: "🚬", tileColor: "#26131a", price: 2490, unit: "10 шт", rating: 4.3, country: "Нидерланды", isSpecial: true },
  { id: 134, category: "cigarettes", name: "Сигара кубинская", emoji: "🚬", tileColor: "#2a170c", price: 6990, unit: "шт", rating: 4.8, country: "Куба", isSpecial: true },

  // Кальян и стики
  { id: 141, category: "hookah", name: "Табак для кальяна «Мята»", emoji: "💨", tileColor: "#102420", price: 3490, unit: "100 г", rating: 4.5, country: "Германия" },
  { id: 142, category: "hookah", name: "Стики для нагревания табака", emoji: "💨", tileColor: "#1c1c24", price: 1290, unit: "пачка 20 шт", rating: 4.2, country: "Казахстан", isFromKazakhstan: true },
  { id: 143, category: "hookah", name: "Электронная сигарета одноразовая", emoji: "💨", tileColor: "#1a1426", price: 3990, oldPrice: 4490, unit: "шт", rating: 4, country: "Китай" },
  { id: 144, category: "hookah", name: "Уголь для кальяна кокосовый", emoji: "🔥", tileColor: "#2a170c", price: 2290, unit: "1 кг", rating: 4.6, country: "Индонезия" },
];
