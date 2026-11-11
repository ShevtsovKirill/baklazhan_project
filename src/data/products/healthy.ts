import type { Product } from "@/types/catalog";

// Товары режима «Полезное» (isSpecial = эко / фермерское)
export const healthyProducts: Product[] = [
  // Овощи
  { id: 1, category: "vegetables", name: "Огурцы Green Land Миринда", emoji: "🥒", tileColor: "#e8f6e0", price: 520, unit: "кг", rating: 4.5, country: "Казахстан", isFromKazakhstan: true },
  { id: 2, category: "vegetables", name: "Помидоры черри красные", emoji: "🍅", tileColor: "#fde3e0", price: 925, oldPrice: 1150, unit: "0.5 кг", rating: 4.7, country: "Нидерланды" },
  { id: 3, category: "vegetables", name: "Капуста брокколи", emoji: "🥦", tileColor: "#e3f2e0", price: 804, unit: "кг", rating: 4.6, country: "Китай" },
  { id: 4, category: "vegetables", name: "Морковь мытая", emoji: "🥕", tileColor: "#ffeede", price: 206, unit: "кг", rating: 4.7, country: "Казахстан", isFromKazakhstan: true },
  { id: 5, category: "vegetables", name: "Помидоры сладкие Ташкент", emoji: "🍅", tileColor: "#fde3e0", price: 1321, unit: "0.7 кг", rating: 4.5, country: "Узбекистан" },
  { id: 6, category: "vegetables", name: "Картофель молодой", emoji: "🥔", tileColor: "#f6efd8", price: 189, unit: "кг", rating: 4.4, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 7, category: "vegetables", name: "Баклажаны фиолетовые", emoji: "🍆", tileColor: "#efe3f5", price: 640, unit: "кг", rating: 4.3, country: "Узбекистан" },
  { id: 8, category: "vegetables", name: "Чеснок фермерский", emoji: "🧄", tileColor: "#f3f0ea", price: 1490, oldPrice: 1790, unit: "0.3 кг", rating: 4.8, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 9, category: "vegetables", name: "Перец болгарский красный", emoji: "🫑", tileColor: "#fde3e0", price: 1120, unit: "кг", rating: 4.6, country: "Нидерланды" },
  { id: 10, category: "vegetables", name: "Кукуруза сахарная", emoji: "🌽", tileColor: "#fff3d1", price: 290, unit: "шт", rating: 4.5, country: "Казахстан", isFromKazakhstan: true },

  // Фрукты
  { id: 11, category: "fruits", name: "Бананы Эквадор", emoji: "🍌", tileColor: "#fff6cf", price: 690, unit: "кг", rating: 4.6, country: "Эквадор" },
  { id: 12, category: "fruits", name: "Яблоки Гала", emoji: "🍎", tileColor: "#fde0dd", price: 750, oldPrice: 990, unit: "кг", rating: 4.7, country: "Казахстан", isFromKazakhstan: true },
  { id: 13, category: "fruits", name: "Апельсины сочные", emoji: "🍊", tileColor: "#ffe9cf", price: 890, unit: "кг", rating: 4.6, country: "Египет" },
  { id: 14, category: "fruits", name: "Виноград кишмиш", emoji: "🍇", tileColor: "#ece0f5", price: 1490, unit: "кг", rating: 4.8, country: "Узбекистан", isSpecial: true },
  { id: 15, category: "fruits", name: "Лимоны", emoji: "🍋", tileColor: "#fbf3c8", price: 1120, unit: "кг", rating: 4.4, country: "Турция" },
  { id: 16, category: "fruits", name: "Груша Конференция", emoji: "🍐", tileColor: "#eef4d6", price: 990, unit: "кг", rating: 4.5, country: "Нидерланды" },
  { id: 17, category: "fruits", name: "Арбуз астраханский", emoji: "🍉", tileColor: "#e3f3df", price: 210, unit: "кг", rating: 4.9, country: "Казахстан", isFromKazakhstan: true },

  // Экзотика
  { id: 31, category: "exotic", name: "Драгонфрут (питахайя) красный", emoji: "🐉", tileColor: "#fde0ef", price: 1890, unit: "шт", rating: 4.7, country: "Вьетнам" },
  { id: 32, category: "exotic", name: "Маракуйя фиолетовая", emoji: "🟣", tileColor: "#ece0f5", price: 2490, oldPrice: 2890, unit: "0.5 кг", rating: 4.8, country: "Вьетнам" },
  { id: 33, category: "exotic", name: "Манго спелое", emoji: "🥭", tileColor: "#fff0cf", price: 1290, unit: "шт", rating: 4.8, country: "Таиланд" },
  { id: 34, category: "exotic", name: "Ананас золотой", emoji: "🍍", tileColor: "#fff4cc", price: 1690, unit: "шт", rating: 4.6, country: "Коста-Рика" },
  { id: 35, category: "exotic", name: "Кокос молодой питьевой", emoji: "🥥", tileColor: "#f1ebe3", price: 990, unit: "шт", rating: 4.4, country: "Таиланд" },
  { id: 36, category: "exotic", name: "Авокадо Хасс", emoji: "🥑", tileColor: "#e6f2dc", price: 690, unit: "шт", rating: 4.6, country: "Перу" },
  { id: 37, category: "exotic", name: "Карамбола", emoji: "⭐", tileColor: "#fff6c8", price: 890, unit: "шт", rating: 4.5, country: "Таиланд" },
  { id: 38, category: "exotic", name: "Киви Голд", emoji: "🥝", tileColor: "#eef6d6", price: 1390, unit: "0.5 кг", rating: 4.7, country: "Новая Зеландия" },
  { id: 39, category: "exotic", name: "Батат (сладкий картофель)", emoji: "🍠", tileColor: "#fbe5d6", price: 790, unit: "кг", rating: 4.5, country: "Египет" },
  { id: 40, category: "exotic", name: "Имбирь свежий", emoji: "🫚", tileColor: "#f6ecd6", price: 590, unit: "0.2 кг", rating: 4.4, country: "Китай" },
  { id: 41, category: "exotic", name: "Эдамаме в стручках", emoji: "🫛", tileColor: "#e5f3dc", price: 1490, unit: "0.4 кг", rating: 4.5, country: "Китай" },

  // Ягоды
  { id: 18, category: "berries", name: "Клубника свежая", emoji: "🍓", tileColor: "#fde0e2", price: 2490, oldPrice: 2990, unit: "0.5 кг", rating: 4.7, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 19, category: "berries", name: "Голубика садовая", emoji: "🫐", tileColor: "#e3e6f7", price: 2890, unit: "0.25 кг", rating: 4.6, country: "Перу" },

  // Зелень
  { id: 20, category: "greens", name: "Укроп свежий пучок", emoji: "🌿", tileColor: "#e6f4e0", price: 190, unit: "пучок", rating: 4.5, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 21, category: "greens", name: "Петрушка кудрявая", emoji: "🌱", tileColor: "#e6f4e0", price: 190, unit: "пучок", rating: 4.4, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 22, category: "greens", name: "Салат Айсберг", emoji: "🥬", tileColor: "#e8f6df", price: 560, unit: "шт", rating: 4.3, country: "Нидерланды" },

  // Салаты
  { id: 51, category: "salads", name: "Салат Греческий с фетой", emoji: "🥗", tileColor: "#e6f4e0", price: 1690, unit: "250 г", rating: 4.8, country: "Казахстан", isFromKazakhstan: true },
  { id: 52, category: "salads", name: "Цезарь с курицей гриль", emoji: "🥗", tileColor: "#f3efd9", price: 1890, unit: "250 г", rating: 4.7, country: "Казахстан", isFromKazakhstan: true },
  { id: 53, category: "salads", name: "Витаминный: капуста, морковь, яблоко", emoji: "🥬", tileColor: "#e8f6df", price: 890, unit: "250 г", rating: 4.5, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 54, category: "salads", name: "Киноа с авокадо и шпинатом", emoji: "🥑", tileColor: "#e1f1dc", price: 2190, oldPrice: 2490, unit: "250 г", rating: 4.9, country: "Казахстан", isFromKazakhstan: true },
  { id: 55, category: "salads", name: "С тунцом, фасолью и яйцом", emoji: "🐟", tileColor: "#e3eef7", price: 2090, unit: "250 г", rating: 4.6, country: "Казахстан", isFromKazakhstan: true },
  { id: 56, category: "salads", name: "Фруктовый с драгонфрутом и манго", emoji: "🥭", tileColor: "#fde0ef", price: 1790, unit: "300 г", rating: 4.8, country: "Казахстан", isFromKazakhstan: true },
  { id: 57, category: "salads", name: "Свекла с грецким орехом", emoji: "🥗", tileColor: "#f7dfe6", price: 790, unit: "250 г", rating: 4.5, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 58, category: "salads", name: "Капрезе с моцареллой и базиликом", emoji: "🍅", tileColor: "#fde3e0", price: 1590, unit: "200 г", rating: 4.7, country: "Казахстан", isFromKazakhstan: true },

  // Полезные закуски
  { id: 61, category: "healthy-snacks", name: "Микс орехов несолёных", emoji: "🥜", tileColor: "#f3e8d6", price: 1890, unit: "200 г", rating: 4.8, country: "Узбекистан" },
  { id: 62, category: "healthy-snacks", name: "Хумус классический", emoji: "🫘", tileColor: "#f5ecd9", price: 890, unit: "200 г", rating: 4.6, country: "Казахстан", isFromKazakhstan: true },
  { id: 63, category: "healthy-snacks", name: "Овощные палочки с йогуртовым соусом", emoji: "🥕", tileColor: "#ffeede", price: 990, unit: "200 г", rating: 4.5, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 64, category: "healthy-snacks", name: "Хлебцы цельнозерновые", emoji: "🍘", tileColor: "#f3e6d3", price: 490, unit: "100 г", rating: 4.4, country: "Казахстан", isFromKazakhstan: true },
  { id: 65, category: "healthy-snacks", name: "Батончик финики-орехи без сахара", emoji: "🍫", tileColor: "#efe2d6", price: 390, oldPrice: 490, unit: "шт", rating: 4.7, country: "Казахстан", isFromKazakhstan: true },
  { id: 66, category: "healthy-snacks", name: "Чипсы яблочные без сахара", emoji: "🍏", tileColor: "#eef6d6", price: 690, unit: "50 г", rating: 4.5, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 67, category: "healthy-snacks", name: "Чиа-пудинг на кокосовом молоке", emoji: "🍮", tileColor: "#f1ebe3", price: 890, unit: "150 г", rating: 4.7, country: "Казахстан", isFromKazakhstan: true },
  { id: 68, category: "healthy-snacks", name: "Финики Меджул", emoji: "🌴", tileColor: "#f3e3cf", price: 2290, unit: "500 г", rating: 4.9, country: "Иордания" },

  // Йогурты и молочное
  { id: 42, category: "dairy", name: "Йогурт греческий натуральный 2%", emoji: "🥣", tileColor: "#f0f2f7", price: 590, unit: "200 г", rating: 4.8, country: "Казахстан", isFromKazakhstan: true },
  { id: 43, category: "dairy", name: "Йогурт питьевой черничный", emoji: "🫐", tileColor: "#e8e6f7", price: 420, unit: "0.3 л", rating: 4.6, country: "Казахстан", isFromKazakhstan: true },
  { id: 46, category: "dairy", name: "Йогурт манго-маракуйя", emoji: "🥭", tileColor: "#fff0cf", price: 490, unit: "150 г", rating: 4.7, country: "Казахстан", isFromKazakhstan: true },
  { id: 47, category: "dairy", name: "Скир без добавок", emoji: "🥣", tileColor: "#eef1f7", price: 690, unit: "140 г", rating: 4.6, country: "Казахстан", isFromKazakhstan: true },
  { id: 44, category: "dairy", name: "Кефир 1%", emoji: "🥛", tileColor: "#eef2f7", price: 390, unit: "1 л", rating: 4.7, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 45, category: "dairy", name: "Творог фермерский 5%", emoji: "🥣", tileColor: "#f5f1e6", price: 790, oldPrice: 950, unit: "300 г", rating: 4.8, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 23, category: "dairy", name: "Молоко фермерское 3.2%", emoji: "🥛", tileColor: "#f0f2f7", price: 520, unit: "1 л", rating: 4.8, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 24, category: "dairy", name: "Сыр моцарелла", emoji: "🧀", tileColor: "#fdf3d6", price: 1890, oldPrice: 2290, unit: "0.3 кг", rating: 4.7, country: "Казахстан", isFromKazakhstan: true },
  { id: 25, category: "dairy", name: "Яйцо куриное С0", emoji: "🥚", tileColor: "#f5f1e6", price: 990, unit: "10 шт", rating: 4.6, country: "Казахстан", isFromKazakhstan: true },

  // Рыба
  { id: 72, category: "fish", name: "Лосось охлаждённый, филе", emoji: "🐟", tileColor: "#fde6dc", price: 7490, oldPrice: 8290, unit: "0.5 кг", rating: 4.8, country: "Норвегия" },
  { id: 73, category: "fish", name: "Судак балхашский, филе", emoji: "🐠", tileColor: "#e3eef7", price: 3290, unit: "0.5 кг", rating: 4.6, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 74, category: "fish", name: "Скумбрия свежемороженая", emoji: "🐟", tileColor: "#e6ecf3", price: 1590, unit: "шт", rating: 4.5, country: "Норвегия" },
  { id: 75, category: "fish", name: "Мидии в раковинах", emoji: "🦪", tileColor: "#eef1f7", price: 2490, unit: "0.5 кг", rating: 4.4, country: "Чили" },

  // Хлеб и крупы
  { id: 26, category: "bread-and-grains", name: "Хлеб бородинский", emoji: "🍞", tileColor: "#f3e6d3", price: 340, unit: "шт", rating: 4.5, country: "Казахстан", isFromKazakhstan: true },
  { id: 27, category: "bread-and-grains", name: "Хлеб цельнозерновой с семенами", emoji: "🍞", tileColor: "#f6ecd6", price: 460, unit: "шт", rating: 4.6, country: "Казахстан", isFromKazakhstan: true },
  { id: 28, category: "bread-and-grains", name: "Хлопья овсяные", emoji: "🌾", tileColor: "#fbeecd", price: 450, unit: "500 г", rating: 4.7, country: "Казахстан", isFromKazakhstan: true },
  { id: 48, category: "bread-and-grains", name: "Киноа белая", emoji: "🍚", tileColor: "#f3efe6", price: 1390, unit: "400 г", rating: 4.6, country: "Перу" },

  // Напитки
  { id: 29, category: "drinks", name: "Сок апельсиновый прямого отжима", emoji: "🧃", tileColor: "#ffe9cf", price: 790, unit: "1 л", rating: 4.4, country: "Казахстан", isFromKazakhstan: true },
  { id: 30, category: "drinks", name: "Вода Тассай негаз. 1.5 л", emoji: "💧", tileColor: "#e3eef7", price: 220, unit: "шт", rating: 4.7, country: "Казахстан", isFromKazakhstan: true },
  { id: 69, category: "drinks", name: "Смузи зелёный: шпинат-яблоко", emoji: "🥤", tileColor: "#e3f2e0", price: 790, unit: "0.3 л", rating: 4.6, country: "Казахстан", isFromKazakhstan: true, isSpecial: true },
  { id: 70, category: "drinks", name: "Комбуча имбирная", emoji: "🫖", tileColor: "#fbeecd", price: 690, unit: "0.33 л", rating: 4.5, country: "Казахстан", isFromKazakhstan: true },
  { id: 71, category: "drinks", name: "Кокосовая вода", emoji: "🥥", tileColor: "#eef2e6", price: 890, unit: "0.33 л", rating: 4.5, country: "Таиланд" },
];
