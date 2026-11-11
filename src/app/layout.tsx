import type { Metadata } from "next";
import { AgeGateModal } from "@/components/age-gate/AgeGateModal";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Toast } from "@/components/ui/Toast";
import { AppProviders } from "@/context/AppProviders";
import "@/styles/fonts.css";
import "@/styles/theme.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Баклажан Маркет",
  description: "Свежие продукты, фастфуд и товары 21+ с доставкой по Алматы.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <body>
        <AppProviders>
          {children}

          {/* общие для всех страниц: корзина, окно проверки возраста, всплывающее сообщение */}
          <CartDrawer />
          <AgeGateModal />
          <Toast />
        </AppProviders>
      </body>
    </html>
  );
}
