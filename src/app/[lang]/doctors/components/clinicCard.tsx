import { Clinic } from "@/utils/getDoctorSearchResults";
import styles from "./comp.module.css";
import Image from "next/image";

type Props = {
  lang: string;
  clinic: Clinic;
};

export default async function ClinicCard(props: Props) {
  const isEnglish = props.lang == "en";
  return (
    <div className={styles.doctorCardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={"https://picsum.photos/56/150"}
          alt="doctor X image"
          width={150}
          height={150}
          loading="lazy"
        ></Image>
      </div>
      <div className={styles.dataContainer}></div>
      <div className={styles.scheduleContainer}></div>
    </div>
  );
}
