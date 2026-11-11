import { CartButton } from "@/components/cart/CartButton";
import { ModeSwitch } from "@/components/mode-switch/ModeSwitch";
import { UserIcon } from "@/components/ui/icons";
import { getMode } from "@/lib/catalog";
import styles from "@/styles/layout/Header.module.css";
import type { ModeId } from "@/types/catalog";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";

/** Шапка: логотип, поиск, тумблер режимов, профиль, корзина */
export function Header({ mode }: { mode: ModeId }) {
  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <Logo />
        <SearchBar placeholder={getMode(mode).searchPlaceholder} />

        <div className={styles.actions}>
          <ModeSwitch mode={mode} />

          {/* профиль (пока без действия) */}
          <button type="button" className={styles.profileButton} aria-label="Профиль">
            <UserIcon />
          </button>

          <CartButton />
        </div>
      </div>
    </header>
  );
}
