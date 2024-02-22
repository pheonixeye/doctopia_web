// export const runtime = "edge";

import { getDoctorSearchResults } from "@/utils/getDoctorSearchResults";
import styles from "./page.module.css";

type Props = {
  params: { lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function DoctorsPage(props: Props) {
  console.log(props.searchParams);
  const clinics = await getDoctorSearchResults({
    spec: props.searchParams.speciality as string,
    gov: props.searchParams.governorate as string,
    city: props.searchParams.city as string | undefined,
    page: props.searchParams.page as string,
  });
  // console.log(clinics);
  return (
    <>
      <main className={styles.mainSection}>
        <h1>Search Results:</h1>
        {clinics.map((clinic) => (
          <div key={clinic.mobile}>{JSON.stringify(clinic)}</div>
        ))}
      </main>
    </>
  );
}
