import React from "react";
import styles from "./comp.module.css";
// import { useTranslation } from "@/i18n/index";
import { Speciality, getAllSpecialities } from "@/utils/getAllSpecialities";
import { Governorate, getAllGovernorates } from "@/utils/getGovernorates";
import { City, getAllCities } from "@/utils/getAllCities";
import SpecialityPicker from "./widgets/specialityPicker";
import GovCityPicker from "./widgets/govCityPicker";
import { searchDoctorsRedirect } from "@/actions/search_doctors_redirect";

type Props = {
  params: { lang: string };
};

export default async function SearchSection({ params }: Props) {
  const isEnglish = params.lang == "en";

  const specs: Speciality[] = await getAllSpecialities();
  const govs: Governorate[] = await getAllGovernorates();
  const cities: City[] = await getAllCities();
  return (
    <div className={styles.searchSection}>
      <form action={searchDoctorsRedirect}>
        <SpecialityPicker lang={params.lang} specs={specs}></SpecialityPicker>
        <GovCityPicker
          lang={params.lang}
          govs={govs}
          cities={cities}
        ></GovCityPicker>
        <div style={{ textAlign: "center" }}>
          <button className="mainBtn" type="submit">
            {isEnglish ? "Search" : "ابحث"}
          </button>
        </div>
      </form>
    </div>
  );
}
