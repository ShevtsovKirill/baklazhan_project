"use client";

import { useParams } from "next/navigation";
import { DEFAULT_MODE } from "@/data/modes";
import { isModeId } from "@/lib/catalog";
import type { ModeId } from "@/types/catalog";

/**
 * Режим из адреса страницы (/healthy, /junk, /adult).
 * Нужен компонентам вне app/[mode] — например, корзине в общем layout.
 */
export function useCurrentMode(): ModeId {
  const { mode } = useParams<{ mode?: string }>();
  return isModeId(mode) ? mode : DEFAULT_MODE;
}
