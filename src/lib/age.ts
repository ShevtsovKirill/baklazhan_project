import { MIN_AGE } from "@/config/shop";

export interface BirthDate {
  day: number;
  /** 1–12 */
  month: number;
  year: number;
}

export type AgeCheckResult = "ok" | "incomplete" | "invalid-date" | "too-young";

/** Полных лет на сегодня: если день рождения в этом году ещё не наступил — минус год */
export function calculateAge({ day, month, year }: BirthDate, today = new Date()): number {
  let age = today.getFullYear() - year;
  const currentMonth = today.getMonth() + 1;
  if (currentMonth < month || (currentMonth === month && today.getDate() < day)) {
    age -= 1;
  }
  return age;
}

/** Проверка даты рождения из окна «Подтвердите возраст» (0 — поле не выбрано) */
export function checkBirthDate(date: BirthDate): AgeCheckResult {
  const { day, month, year } = date;

  if (!day || !month || !year) return "incomplete";

  // такой даты нет (например, 31 февраля — JS превратит её в 3 марта)
  if (new Date(year, month - 1, day).getMonth() !== month - 1) return "invalid-date";

  if (calculateAge(date) < MIN_AGE) return "too-young";

  return "ok";
}
