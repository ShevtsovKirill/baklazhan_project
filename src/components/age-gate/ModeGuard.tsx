"use client";

import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { useAgeVerification } from "@/context/AgeVerificationContext";
import { modePath } from "@/lib/routes";
import { getStartMode, lastModeStore } from "@/lib/storage";
import type { ModeId } from "@/types/catalog";

/**
 * Обёртка страниц режима (app/[mode]/layout.tsx):
 *  - запоминает открытый режим, чтобы главная открывала его же в следующий раз;
 *  - не пускает в 21+ без проверки возраста: уводит в обычный режим и открывает окно проверки.
 */
export function ModeGuard({ mode, children }: { mode: ModeId; children: ReactNode }) {
  const router = useRouter();
  const { isVerified, isLoaded, openGate } = useAgeVerification();
  const isLocked = mode === "adult" && !isVerified;

  useEffect(() => {
    if (!isLoaded) return; // ещё не прочитали localStorage

    if (isLocked) {
      router.replace(modePath(getStartMode(false)));
      openGate();
      return;
    }

    lastModeStore.set(mode);
  }, [mode, isLoaded, isLocked, router, openGate]);

  // пока возраст не подтверждён, содержимое 21+ не показываем вовсе
  if (isLocked) return null;

  return children;
}
