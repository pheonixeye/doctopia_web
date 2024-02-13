import React from "react";
import styles from "./comp.module.css";
import { useTranslation } from "../../../i18n/index";

type Props = {
  params: { lang: string };
};

export default async function SearchSection({ params }: Props) {
  const { t } = await useTranslation(params.lang, "translation");

  return (
    <div className={styles.searchSection}>
      <div>
        <label htmlFor="speciality">{t("pickspec")}</label>
        <select name="speciality" id="speciality">
          <option value="rigatoni">{t("spec")}</option>
          <option value="rigatoni">Rigatoni</option>
        </select>
      </div>
      <div>
        <label htmlFor="governorate">{t("pickgov")}</label>
        <select name="governorate" id="governorate">
          <option value="reeses">{t("gov")}</option>
          <option value="reeses">Reeses</option>
        </select>
      </div>
      <div>
        <label htmlFor="city">{t("pickcity")}</label>
        <select name="city" id="city">
          <option value="dave">{t("city")}</option>
          <option value="dave">Dave</option>
        </select>
      </div>
      <div>
        <button className={styles.searchBtn} type="button">
          Search
        </button>
      </div>
    </div>
  );
}
