"use client";

import { City } from "@/utils/getAllCities";
import { Governorate } from "@/utils/getGovernorates";
import { useTranslation } from "@/i18n/client";
import { ChangeEvent, useState } from "react";

type Props = {
  lang: string;
  govs: Governorate[];
  cities: City[];
};

export default function GovCityPicker({ lang, govs, cities }: Props) {
  const isEnglish = lang == "en";
  const { t } = useTranslation(lang, "translation");

  // const [_, setGovId] = useState<number | undefined>(undefined);
  const [cityList, setCityList] = useState<City[]>([]);

  function handleChangeGovId(e: ChangeEvent<HTMLSelectElement>) {
    // setGovId(parseInt(e.target.value));
    setCityList(
      cities.filter((city) => city.governorate_id === e.target.value)
    );
  }

  return (
    <>
      <div>
        <label htmlFor="governorate">{t("pickgov")}</label>
        <select
          name="governorate"
          id="governorate"
          onChange={handleChangeGovId}
        >
          <option value="">{t("gov")}</option>
          {govs?.map((e) => {
            return (
              <option value={e.id} key={e.id}>
                {isEnglish ? e.governorate_name_en : e.governorate_name_ar}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="city">{t("pickcity")}</label>
        <select name="city" id="city">
          <option value="">{t("city")}</option>
          {cityList.map((e) => {
            return (
              <option value={e.id} key={e.id}>
                {isEnglish ? e.city_name_en : e.city_name_ar}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
