import type { Product } from "@/types/catalog";

// Товары режима «Вредное» (isSpecial = хит)
export const junkProducts: Product[] = [
  // Фастфуд
  { id: 171, category: "fast-food", name: "Бургер двойной с беконом", emoji: "🍔", tileColor: "#fdebd6", price: 1690, unit: "шт", rating: 4.5, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 172, category: "fast-food", name: "Картофель фри", emoji: "🍟", tileColor: "#fff3cc", price: 890, unit: "200 г", rating: 4.4, country: "Казахстан", isFromKazakhstan: true },
  { id: 173, category: "fast-food", name: "Пицца пепперони 30 см", emoji: "🍕", tileColor: "#fde3dc", price: 3990, oldPrice: 4590, unit: "шт", rating: 4.7, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 177, category: "fast-food", name: "Хот-дог с горчицей", emoji: "🌭", tileColor: "#fde9d6", price: 990, unit: "шт", rating: 4.3, country: "Казахстан", isFromKazakhstan: true },
  { id: 178, category: "fast-food", name: "Шаурма с курицей", emoji: "🌯", tileColor: "#f6ead8", price: 1490, unit: "шт", rating: 4.8, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 179, category: "fast-food", name: "Наггетсы куриные", emoji: "🍗", tileColor: "#fff0d6", price: 1290, oldPrice: 1490, unit: "9 шт", rating: 4.5, country: "Казахстан", isFromKazakhstan: true },

  // Сладкое
  { id: 174, category: "sweets", name: "Шоколадный батончик с карамелью", emoji: "🍫", tileColor: "#f1e3d6", price: 390, unit: "шт", rating: 4.6, country: "Россия" },
  { id: 176, category: "sweets", name: "Мармелад кислый", emoji: "🍬", tileColor: "#fde0ef", price: 590, unit: "200 г", rating: 4.3, country: "Германия" },
  { id: 191, category: "sweets", name: "Шоколад молочный «Казахстанский»", emoji: "🍫", tileColor: "#efe2d6", price: 690, unit: "100 г", rating: 4.9, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 192, category: "sweets", name: "Конфеты ассорти в коробке", emoji: "🍬", tileColor: "#f7e1e6", price: 2490, oldPrice: 2890, unit: "250 г", rating: 4.6, country: "Казахстан", isFromKazakhstan: true },
  { id: 193, category: "sweets", name: "Леденец на палочке", emoji: "🍭", tileColor: "#fde0f0", price: 190, unit: "шт", rating: 4.2, country: "Испания" },
  { id: 194, category: "sweets", name: "Печенье с кусочками шоколада", emoji: "🍪", tileColor: "#f3e6d3", price: 790, unit: "200 г", rating: 4.7, country: "Казахстан", isFromKazakhstan: true },

  // Десерты
  { id: 175, category: "desserts", name: "Пончик глазированный", emoji: "🍩", tileColor: "#fde0ea", price: 450, unit: "шт", rating: 4.5, country: "Казахстан", isFromKazakhstan: true },
  { id: 201, category: "desserts", name: "Чизкейк Нью-Йорк", emoji: "🍰", tileColor: "#fff1d6", price: 1290, unit: "кусок", rating: 4.8, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 202, category: "desserts", name: "Торт шоколадный «Прага»", emoji: "🎂", tileColor: "#efe2d6", price: 5990, oldPrice: 6890, unit: "1 кг", rating: 4.7, country: "Казахстан", isFromKazakhstan: true },
  { id: 203, category: "desserts", name: "Мороженое пломбир", emoji: "🍨", tileColor: "#eef2f7", price: 490, unit: "80 г", rating: 4.8, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 204, category: "desserts", name: "Капкейк с кремом", emoji: "🧁", tileColor: "#fde0ef", price: 590, unit: "шт", rating: 4.4, country: "Казахстан", isFromKazakhstan: true },
  { id: 205, category: "desserts", name: "Крем-брюле", emoji: "🍮", tileColor: "#fff0cf", price: 890, unit: "120 г", rating: 4.6, country: "Франция" },

  // Снеки
  { id: 211, category: "snacks", name: "Попкорн карамельный", emoji: "🍿", tileColor: "#fff3cc", price: 590, unit: "100 г", rating: 4.5, country: "Казахстан", isFromKazakhstan: true },
  { id: 212, category: "snacks", name: "Чипсы со вкусом паприки", emoji: "🥔", tileColor: "#fde9d6", price: 690, unit: "150 г", rating: 4.4, country: "Казахстан", isFromKazakhstan: true },
  { id: 213, category: "snacks", name: "Начос с сырным соусом", emoji: "🌮", tileColor: "#fff0cf", price: 1190, unit: "200 г", rating: 4.6, country: "Мексика", isSpecial: true },

  // Газировка и энергетики
  { id: 181, category: "soda-and-energy", name: "Энергетик классический", emoji: "⚡", tileColor: "#f0f6d6", price: 590, unit: "0.45 л", rating: 4.3, country: "Казахстан", isFromKazakhstan: true },
  { id: 183, category: "soda-and-energy", name: "Энергетик без сахара", emoji: "⚡", tileColor: "#e0eef6", price: 620, unit: "0.45 л", rating: 4.2, country: "Казахстан", isFromKazakhstan: true },
  { id: 182, category: "soda-and-energy", name: "Газировка кола", emoji: "🥤", tileColor: "#fde3e0", price: 450, unit: "1 л", rating: 4.5, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 184, category: "soda-and-energy", name: "Лимонад «Тархун»", emoji: "🥤", tileColor: "#e3f3df", price: 390, unit: "0.5 л", rating: 4.4, country: "Казахстан", isFromKazakhstan: true },
];
