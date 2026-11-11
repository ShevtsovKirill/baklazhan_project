/** 8000 → «8 000 ₸» */
export function formatPrice(value: number): string {
  return `${value.toLocaleString("ru-RU")} ₸`;
}
