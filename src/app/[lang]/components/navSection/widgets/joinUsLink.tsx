"use client";
import Link from "next/link";
import styles from "../comp.module.css";
import { useTranslation } from "@/i18n/client";
import { usePathname } from "next/navigation";

type Props = {
  params: { lang: string };
};
export default function JoinUsLink({ params }: Props) {
  const isEnglish = params.lang == "en";

  const lang = isEnglish ? "en" : "ar";

  const { t } = useTranslation(params.lang, "translation");

  const path = usePathname();

  return path === "/en" || path === "/ar" ? (
    <Link className={styles.joinUs} href={`/${lang}/joinus`}>
      {t("joinus")}
    </Link>
  ) : (
    <></>
  );
}
