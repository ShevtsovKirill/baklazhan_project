import { getMode } from "@/lib/catalog";
import styles from "@/styles/layout/Footer.module.css";
import type { ModeId } from "@/types/catalog";
import { Logo } from "./Logo";

/** Колонки ссылок в подвале */
const FOOTER_COLUMNS = [
  { title: "Покупателям", links: ["Доставка и оплата"] },
  { title: "Компания", links: ["Поставщикам"] },
  { title: "Контакты", links: ["+7 776 723 7799", "Алматы, ежедневно", "8:00 – 23:00"] },
];

/** Подвал: логотип с описанием режима, ссылки, © и слоган */
export function Footer({ mode }: { mode: ModeId }) {
  const { footerText, footerSlogan } = getMode(mode);

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div>
          <Logo />
          <p className={styles.about}>{footerText}</p>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <h4 className={styles.heading}>{column.title}</h4>
            {column.links.map((link) => (
              <a key={link} href="#" className={styles.link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <span>© 2026 баклажан.kz</span>
        <span>{footerSlogan}</span>
      </div>
    </footer>
  );
}
