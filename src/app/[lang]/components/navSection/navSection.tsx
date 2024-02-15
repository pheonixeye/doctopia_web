import React from "react";
import styles from "./comp.module.css";
import Image from "next/image";
import logo from "../../../../../public/images/logo.png";
import Link from "next/link";
import { useTranslation } from "../../../../i18n/index";

type Props = {
  params: { lang: string };
};

export default async function NavSection({ params }: Props) {
  const isEnglish = params.lang == "en";

  const lang = isEnglish ? "en" : "ar";

  const { t } = await useTranslation(params.lang, "translation");

  return (
    <div className={styles.mainNav}>
      <Image
        className={styles.logo}
        src={logo}
        alt="Website Logo"
        width={100}
        height={100}
      />
      <h1 className={styles.appName}>{t("title")}</h1>
      <Link className={styles.joinUs} href={`/${lang}/doc_reg`}>
        {t("joinus")}
      </Link>
    </div>
  );
}
