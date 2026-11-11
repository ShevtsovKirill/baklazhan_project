/**
 * Склеивает CSS-классы, пропуская пустые значения:
 * cn(styles.card, isAdult && styles.adult) → "card adult" или "card"
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
