import React from "react";
import styles from "./comp.module.css";
import Image from "next/image";
import logo from "../../../../../public/images/logo.png";
import { useTranslation } from "../../../../i18n/index";
import JoinUsLink from "./widgets/joinUsLink";

type Props = {
  params: { lang: string };
};

export default async function NavSection({ params }: Props) {
  const isEnglish = params.lang == "en";

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
      <JoinUsLink params={params}></JoinUsLink>
    </div>
  );
}
