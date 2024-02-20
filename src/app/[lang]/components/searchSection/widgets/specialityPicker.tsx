"use client";
import { useTranslation } from "@/i18n/client";
import { Speciality } from "@/utils/getAllSpecialities";

type Props = {
  lang: string;
  specs: Speciality[];
};

export default function SpecialityPicker({ lang, specs }: Props) {
  const isEnglish = lang == "en";

  const { t } = useTranslation(lang, "translation");
  return (
    <div>
      <label htmlFor="speciality">{t("pickspec")}</label>
      <select name="speciality" id="speciality" required>
        <option value="">{t("spec")}</option>
        {specs?.map((e) => {
          return (
            <option value={e.spec_id} key={e.speciality_en + e.speciality_ar}>
              {isEnglish ? e.speciality_en : e.speciality_ar}
            </option>
          );
        })}
      </select>
    </div>
  );
}
