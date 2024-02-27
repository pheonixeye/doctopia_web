// export const runtime = "edge";

import { Clinic, getDoctorSearchResults } from "@/utils/getDoctorSearchResults";
import styles from "./page.module.css";
import { useTranslation } from "@/i18n";
import ClinicCard from "./components/clinicCard";

type Props = {
  params: { lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function DoctorsPage(props: Props) {
  // console.log(props.searchParams);
  const { t } = await useTranslation(props.params.lang, "translation");
  let clinics: Clinic[];
  try {
    clinics = await getDoctorSearchResults({
      spec: props.searchParams.speciality as string,
      gov: props.searchParams.governorate as string,
      city: props.searchParams.city as string | undefined,
      page: props.searchParams.page as string,
    });
  } catch (error: any) {
    throw new Error(error.toString());
  }
  return (
    <>
      <h1 className={styles.searchResultsH1}>{t("search_results")} :</h1>
      <div className={styles.resultsPageContainer}>
        <main className={styles.mainSection}>
          {clinics.map((clinic) => (
            <ClinicCard
              key={clinic.$id}
              lang={props.params.lang}
              clinic={clinic}
            />
          ))}
        </main>
        <div className={styles.filterContainer}></div>
      </div>
    </>
  );
}
