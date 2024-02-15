import React from "react";
import styles from "./comp.module.css";
import { useTranslation } from "../../../../i18n/index";
import { Speciality, getAllSpecialities } from "@/utils/getAllSpecialities";
import { Governorate, getAllGovernorates } from "@/utils/getGovernorates";
import { City, getAllCities } from "@/utils/getAllCities";

type Props = {
  params: { lang: string };
};

export default async function SearchSection({ params }: Props) {
  const isEnglish = params.lang == "en";

  const { t } = await useTranslation(params.lang, "translation");

  const specs: Speciality[] = await getAllSpecialities();
  const govs: Governorate[] = await getAllGovernorates();
  const cities: City[] = await getAllCities();
  return (
    <div className={styles.searchSection}>
      <div>
        <label htmlFor="speciality">{t("pickspec")}</label>
        <select name="speciality" id="speciality">
          <option value="specialities">{t("spec")}</option>
          {specs?.map((e) => {
            return (
              <option
                value={e.toString()}
                key={e.speciality_en + e.speciality_ar}
              >
                {isEnglish ? e.speciality_en : e.speciality_ar}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="governorate">{t("pickgov")}</label>
        <select name="governorate" id="governorate">
          <option value="governorate">{t("gov")}</option>
          {govs?.map((e) => {
            return (
              <option
                value={e.id}
                key={e.governorate_name_en + e.governorate_name_ar}
              >
                {isEnglish ? e.governorate_name_en : e.governorate_name_ar}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="city">{t("pickcity")}</label>
        <select name="city" id="city">
          <option value="city">{t("city")}</option>
          {cities?.map((e) => {
            return (
              <option value={e.id} key={e.city_name_en + e.city_name_ar}>
                {isEnglish ? e.city_name_en : e.city_name_ar}
              </option>
            );
          })}
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
