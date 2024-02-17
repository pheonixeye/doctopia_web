export const runtime = "edge";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { dir } from "i18next";
import { languages } from "../../i18n/settings";
import { useTranslation } from "../../i18n/index";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";
import FloatingContainer from "./components/floatingContainer/floatingContainer";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import styles from "./page.module.css";
import Footer from "./components/footer/footer";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

type Props = {
  params: { lang: string };
};

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(params.lang, "translation");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} dir={dir(params.lang)}>
      <body className={`${inter.className} ${styles.body}`}>
        {children}
        <FloatingContainer>
          <LanguageSwitcher params={params}></LanguageSwitcher>
          <ScrollToTop></ScrollToTop>
        </FloatingContainer>
        <Footer></Footer>
      </body>
    </html>
  );
}
