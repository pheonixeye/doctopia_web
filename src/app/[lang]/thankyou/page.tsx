import Link from "next/link";
import { useTranslation } from "@/i18n";
import styles from "./page.module.css";
import { FaHeartPulse } from "react-icons/fa6";
import Image from "next/image";
import gp from "../../../../public/images/play.png";
import as from "../../../../public/images/app.svg";
import { Metadata } from "next";

type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(params.lang, "translation");
  return {
    title: t("thankyou_title"),
    description: t("thankyou_description"),
  };
}

export default async function ThankYou({ params }: Props) {
  const { t } = await useTranslation(params.lang, "translation");
  return (
    <main className={styles.mainContainer}>
      <div>
        <FaHeartPulse className={styles.heartIcon} />
        <br />
        <h1 className={styles.thankYouHeader}>{t("thank_you_main")}</h1>
        <br />
        <p className={styles.thankYouContent}>{t("thank_you_sub")}</p>
        <br />
      </div>
      <br />
      <div className={styles.appContainer}>
        <Link href={`/googleplayLink`}>
          <Image
            src={gp}
            alt="google play download button"
            width={100}
            height={50}
            loading="lazy"
          ></Image>
        </Link>
        <Link href={`/appstoreLink`}>
          <Image
            src={as}
            alt="app store download button"
            width={100}
            height={50}
            loading="lazy"
          ></Image>
        </Link>
      </div>
      <br />
      <Link className="mainBtn" href={`/${params.lang}/`}>
        {t("home")}
      </Link>
    </main>
  );
}
