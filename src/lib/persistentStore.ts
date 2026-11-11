import { useSyncExternalStore } from "react";

// Значения, которые сохраняются в localStorage и переживают перезагрузку страницы
// (корзина, подтверждённый возраст, последний режим).
//
// Сделано через useSyncExternalStore: на сервере и при первой отрисовке
// используется значение по умолчанию, а сразу после загрузки страницы —
// значение из localStorage. Так не бывает ошибок «hydration mismatch».

export interface PersistentStore<T> {
  get: () => T;
  getDefault: () => T;
  set: (value: T) => void;
  subscribe: (listener: () => void) => () => void;
}

export function createPersistentStore<T>(key: string, defaultValue: T): PersistentStore<T> {
  let cached: { value: T } | null = null;
  const listeners = new Set<() => void>();

  function read(): T {
    try {
      const raw = window.localStorage.getItem(key);
      return raw === null ? defaultValue : (JSON.parse(raw) as T);
    } catch {
      // приватный режим браузера или повреждённые данные
      return defaultValue;
    }
  }

  return {
    get() {
      if (!cached) cached = { value: read() };
      return cached.value;
    },
    getDefault() {
      return defaultValue;
    },
    set(value) {
      cached = { value };
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch {
        // хранилище недоступно — значение просто проживёт до перезагрузки
      }
      listeners.forEach((listener) => listener());
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

/** Читает значение хранилища и перерисовывает компонент, когда оно меняется */
export function usePersistentStore<T>(store: PersistentStore<T>): T {
  return useSyncExternalStore(store.subscribe, store.get, store.getDefault);
}

const noopSubscribe = () => () => {};

/**
 * false — на сервере и во время первой отрисовки, true — когда страница загрузилась в браузере.
 * Нужен, чтобы не принимать решений (например, редиректов) до того, как прочитан localStorage.
 */
export function useIsHydrated(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}
