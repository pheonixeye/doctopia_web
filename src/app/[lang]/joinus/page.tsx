import { useTranslation } from "@/i18n";
import styles from "./page.module.css";
import { doctorJoinRequest } from "@/actions/doctor_join";
import { Metadata } from "next";

type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(params.lang, "translation");
  return {
    title: t("joinus_title"),
    description: t("joinus_description"),
  };
}

export default async function JoinUs({ params }: Props) {
  const isEnglish = params.lang == "en";
  const { t } = await useTranslation(params.lang, "translation");
  return (
    <>
      <h1 className={styles.pageHeading}>{t("doc_join")}</h1>
      <main className={styles.joinUsContainer}>
        <form action={doctorJoinRequest}>
          <label htmlFor="name">{t("name")} :</label>
          <input type="text" name="name" id="name" required />
          <br />
          <label htmlFor="doc_phone">{t("mobile")} :</label>
          <input
            type="text"
            inputMode="numeric"
            name="mobile"
            id="mobile"
            required
            maxLength={11}
            minLength={11}
          />
          <br />

          <label htmlFor="speciality">{t("spec")} :</label>
          <input type="text" name="speciality" id="speciality" required />
          <br />

          <label htmlFor="governorate">{t("gov")} :</label>
          <input type="text" name="governorate" id="governorate" required />
          <br />

          <label htmlFor="city">{t("city")} :</label>
          <input type="text" name="city" id="city" required />
          <br />

          <label htmlFor="email">{t("email")} :</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          />
          <br />
          <div className={styles.submitBtnContainer}>
            <button className="mainBtn" type="submit">
              {t("submit")}
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
