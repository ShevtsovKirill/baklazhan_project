"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAgeVerification } from "@/context/AgeVerificationContext";
import { modePath } from "@/lib/routes";
import { getStartMode } from "@/lib/storage";

/**
 * Главная (/) — сразу открывает режим, который был в прошлый раз
 * (21+ — только если возраст уже подтверждён), иначе «Полезное».
 */
export default function HomePage() {
  const router = useRouter();
  const { isVerified, isLoaded } = useAgeVerification();

  useEffect(() => {
    if (isLoaded) router.replace(modePath(getStartMode(isVerified)));
  }, [isLoaded, isVerified, router]);

  return null;
}
