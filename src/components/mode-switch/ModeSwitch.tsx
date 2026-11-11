"use client";

import { useRouter } from "next/navigation";
import { useState, type KeyboardEvent, type PointerEvent } from "react";
import { useAgeVerification } from "@/context/AgeVerificationContext";
import { MODES, MODE_ORDER } from "@/data/modes";
import { cn } from "@/lib/classNames";
import { modePath } from "@/lib/routes";
import styles from "@/styles/mode-switch/ModeSwitch.module.css";
import type { ModeId } from "@/types/catalog";

// Тумблер на три положения: Полезное / Вредное / 21+.
// Кружок можно тянуть или просто нажать на секцию;
// когда отпускаем — он прыгает в ближайшую секцию и открывается страница режима.

/** Должны совпадать с width у .track и .knob в ModeSwitch.module.css */
const TRACK_WIDTH = 114;
const KNOB_SIZE = 34;
const SECTION_COUNT = MODE_ORDER.length;

/** Сдвиг меньше этого — считаем кликом, а не перетаскиванием */
const DRAG_THRESHOLD = 3;

/** x-координата центра секции */
function sectionCenter(index: number): number {
  return ((index + 0.5) * TRACK_WIDTH) / SECTION_COUNT;
}

/** В какой секции находится точка x */
function sectionAt(x: number): number {
  const index = Math.floor(x / (TRACK_WIDTH / SECTION_COUNT));
  return Math.min(Math.max(index, 0), SECTION_COUNT - 1);
}

/** x внутри тумблера, не дальше центров крайних секций */
function clampX(x: number): number {
  return Math.min(Math.max(x, sectionCenter(0)), sectionCenter(SECTION_COUNT - 1));
}

export function ModeSwitch({ mode }: { mode: ModeId }) {
  const router = useRouter();
  const { isVerified, openGate } = useAgeVerification();

  const currentIndex = MODE_ORDER.indexOf(mode);
  /** Секция, в которую уже прыгнул кружок, пока открывается новая страница */
  const [selectedIndex, setSelectedIndex] = useState(currentIndex);
  /** Позиция кружка, пока его тянут (null — не тянут) */
  const [dragX, setDragX] = useState<number | null>(null);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  const isDragging = dragStartX !== null;
  const knobX = dragX ?? sectionCenter(selectedIndex);

  function pointerX(event: PointerEvent<HTMLDivElement>): number {
    return clampX(event.clientX - event.currentTarget.getBoundingClientRect().left);
  }

  /** Выбрали секцию: открываем страницу режима (в 21+ — только после проверки возраста) */
  function selectSection(index: number) {
    const nextMode = MODE_ORDER[index];

    if (nextMode === mode) {
      setSelectedIndex(currentIndex);
      return;
    }

    if (nextMode === "adult" && !isVerified) {
      setSelectedIndex(currentIndex); // кружок назад
      openGate();
      return;
    }

    setSelectedIndex(index);
    router.push(modePath(nextMode));
  }

  // --- мышь и палец ---

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragStartX(event.clientX);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (dragStartX === null) return;
    if (Math.abs(event.clientX - dragStartX) < DRAG_THRESHOLD) return; // это просто клик
    setDragX(pointerX(event));
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (dragStartX === null) return;
    setDragStartX(null);
    setDragX(null);
    selectSection(sectionAt(pointerX(event)));
  }

  // жест прервался (например, пришёл звонок)
  function handlePointerCancel() {
    setDragStartX(null);
    setDragX(null);
    setSelectedIndex(currentIndex);
  }

  // --- клавиатура: стрелки влево / вправо ---

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight" && currentIndex < SECTION_COUNT - 1) {
      selectSection(currentIndex + 1);
      event.preventDefault();
    }
    if (event.key === "ArrowLeft" && currentIndex > 0) {
      selectSection(currentIndex - 1);
      event.preventDefault();
    }
  }

  const selectedLabel = MODES[MODE_ORDER[selectedIndex]].label;

  return (
    <div className={styles.wrapper}>
      <div
        className={cn(styles.track, isDragging && styles.dragging)}
        role="slider"
        tabIndex={0}
        aria-label="Режим магазина"
        aria-valuemin={0}
        aria-valuemax={SECTION_COUNT - 1}
        aria-valuenow={selectedIndex}
        aria-valuetext={selectedLabel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onKeyDown={handleKeyDown}
      >
        {MODE_ORDER.map((modeId) => (
          <span key={modeId} className={styles.sectionIcon}>
            {MODES[modeId].switchIcon}
          </span>
        ))}
        <span className={styles.knob} style={{ transform: `translateX(${knobX - KNOB_SIZE / 2}px)` }} />
      </div>

      <span className={styles.label}>{selectedLabel}</span>
    </div>
  );
}
