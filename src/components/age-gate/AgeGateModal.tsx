"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { MIN_AGE } from "@/config/shop";
import { useAgeVerification } from "@/context/AgeVerificationContext";
import { useToast } from "@/context/ToastContext";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { checkBirthDate, type AgeCheckResult } from "@/lib/age";
import { modePath } from "@/lib/routes";
import styles from "@/styles/age-gate/AgeGateModal.module.css";

const MONTHS = [
  "января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря",
];

const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);

/** Последние 100 лет, начиная с текущего */
function getYears(): number[] {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 100 }, (_, i) => currentYear - i);
}

const ERROR_MESSAGES: Record<Exclude<AgeCheckResult, "ok">, string> = {
  incomplete: "Укажите полную дату рождения",
  "invalid-date": "Такой даты не существует",
  "too-young": `Доступ запрещён: вам ещё нет ${MIN_AGE} года.`,
};

/**
 * Окно «Подтвердите возраст» — открывается при первом входе в режим 21+.
 * Форма монтируется заново при каждом открытии, поэтому поля всегда чистые.
 */
export function AgeGateModal() {
  const { isGateOpen } = useAgeVerification();
  if (!isGateOpen) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="age-gate-title">
        <AgeGateForm />
      </div>
    </div>
  );
}

function AgeGateForm() {
  const router = useRouter();
  const { markVerified, closeGate } = useAgeVerification();
  const { showToast } = useToast();

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  /** Слишком молод — кнопка блокируется до следующего открытия окна */
  const [isBlocked, setIsBlocked] = useState(false);

  // Esc — то же, что «Вернуться назад»
  useEscapeKey(closeGate);

  function handleConfirm() {
    const result = checkBirthDate({ day: Number(day), month: Number(month), year: Number(year) });

    if (result !== "ok") {
      setError(ERROR_MESSAGES[result]);
      if (result === "too-young") setIsBlocked(true);
      return;
    }

    // всё хорошо — запоминаем и пускаем в 21+
    markVerified();
    closeGate();
    router.push(modePath("adult"));
    showToast("🔓 Возраст подтверждён. Добро пожаловать!");
  }

  return (
    <>
      <div className={styles.badge}>{MIN_AGE}+</div>
      <h2 id="age-gate-title" className={styles.title}>
        Подтвердите возраст
      </h2>
      <p className={styles.text}>
        В этом режиме продаются алкоголь и табачная продукция. Укажите дату рождения, чтобы продолжить.
      </p>

      <label className={styles.label}>Дата рождения</label>
      <div className={styles.dateFields}>
        <select className={styles.select} aria-label="День" value={day} onChange={(e) => setDay(e.target.value)}>
          <option value="">День</option>
          {DAYS.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <select className={styles.select} aria-label="Месяц" value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="">Месяц</option>
          {MONTHS.map((name, index) => (
            <option key={name} value={index + 1}>
              {name}
            </option>
          ))}
        </select>

        <select className={styles.select} aria-label="Год" value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Год</option>
          {getYears().map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.error}>{error}</div>

      <PrimaryButton variant="wine" disabled={isBlocked} onClick={handleConfirm}>
        Мне есть {MIN_AGE} — войти
      </PrimaryButton>
      <button type="button" className={styles.cancelButton} onClick={closeGate}>
        Вернуться назад
      </button>

      <div className={styles.footnote}>
        Продажа алкоголя и табака лицам младше {MIN_AGE} года запрещена. При получении курьер проверит документ.
      </div>
    </>
  );
}
