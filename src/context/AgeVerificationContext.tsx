"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { useIsHydrated, usePersistentStore } from "@/lib/persistentStore";
import { ageVerifiedStore } from "@/lib/storage";

// Проверка возраста для режима 21+.
// Окно «Подтвердите возраст» (components/age-gate/AgeGateModal.tsx) открывается через openGate().

interface AgeVerificationContextValue {
  /** Посетитель подтвердил, что ему есть 21 (запоминается в localStorage) */
  isVerified: boolean;
  /** false, пока не прочитали localStorage — до этого isVerified ещё неизвестен */
  isLoaded: boolean;
  markVerified: () => void;

  isGateOpen: boolean;
  openGate: () => void;
  closeGate: () => void;
}

const AgeVerificationContext = createContext<AgeVerificationContextValue | null>(null);

export function AgeVerificationProvider({ children }: { children: ReactNode }) {
  const isVerified = usePersistentStore(ageVerifiedStore);
  const isLoaded = useIsHydrated();
  const [isGateOpen, setIsGateOpen] = useState(false);

  const markVerified = useCallback(() => ageVerifiedStore.set(true), []);
  const openGate = useCallback(() => setIsGateOpen(true), []);
  const closeGate = useCallback(() => setIsGateOpen(false), []);

  const value = useMemo(
    () => ({ isVerified, isLoaded, markVerified, isGateOpen, openGate, closeGate }),
    [isVerified, isLoaded, markVerified, isGateOpen, openGate, closeGate],
  );

  return <AgeVerificationContext.Provider value={value}>{children}</AgeVerificationContext.Provider>;
}

export function useAgeVerification(): AgeVerificationContextValue {
  const context = useContext(AgeVerificationContext);
  if (!context) throw new Error("useAgeVerification нужно вызывать внутри <AgeVerificationProvider>");
  return context;
}
