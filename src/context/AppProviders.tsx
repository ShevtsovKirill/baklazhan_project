"use client";

import type { ReactNode } from "react";
import { AgeVerificationProvider } from "./AgeVerificationContext";
import { CartProvider } from "./CartContext";
import { ToastProvider } from "./ToastContext";

/** Все общие для сайта провайдеры в одном месте (подключаются в app/layout.tsx) */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <AgeVerificationProvider>
        <CartProvider>{children}</CartProvider>
      </AgeVerificationProvider>
    </ToastProvider>
  );
}
