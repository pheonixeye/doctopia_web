import React from "react";
import styles from "./comp.module.css";
// import { useTranslation } from "@/i18n/index";
import { Speciality, getAllSpecialities } from "@/utils/getAllSpecialities";
import { Governorate, getAllGovernorates } from "@/utils/getGovernorates";
import { City, getAllCities } from "@/utils/getAllCities";
import SpecialityPicker from "./widgets/specialityPicker";
import GovCityPicker from "./widgets/govCityPicker";

type Props = {
  params: { lang: string };
};

export default async function SearchSection({ params }: Props) {
  const isEnglish = params.lang == "en";

  // const { t } = await useTranslation(params.lang, "translation");

  const specs: Speciality[] = await getAllSpecialities();
  const govs: Governorate[] = await getAllGovernorates();
  const cities: City[] = await getAllCities();
  return (
    <div className={styles.searchSection}>
      <SpecialityPicker lang={params.lang} specs={specs}></SpecialityPicker>
      <GovCityPicker
        lang={params.lang}
        govs={govs}
        cities={cities}
      ></GovCityPicker>
      <div>
        <button className={styles.searchBtn} type="button">
          Search
        </button>
      </div>
    </div>
  );
}
