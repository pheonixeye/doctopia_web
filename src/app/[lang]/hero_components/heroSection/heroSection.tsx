import React from "react";
import styles from "./comp.module.css";
import { useTranslation } from "../../../i18n/index";

type Props = {
  params: { lang: string };
};

export default async function HeroSection({ params }: Props) {
  //TODO: needs better styling
  const { t } = await useTranslation(params.lang, "translation");
  const isArabic = params.lang == "ar";

  return (
    <div className={styles.heroSection}>
      <h2
        className={
          styles.heroTextOne +
          " " +
          `${isArabic ? styles.heroTextOneArabic : ""}`
        }
      >
        {t("hero1")}
      </h2>
      <h2
        className={
          styles.heroTextTwo +
          " " +
          `${isArabic ? styles.heroTextTwoArabic : ""}`
        }
      >
        {t("hero2")}
      </h2>
      <h2
        className={
          styles.heroTextThree +
          " " +
          `${isArabic ? styles.heroTextThreeArabic : ""}`
        }
      >
        {t("hero3")}
      </h2>
    </div>
  );
}
