import styles from "./comp.module.css";
import logo from "../../../../../public/images/logo.png";
import Image from "next/image";
import { useTranslation } from "@/i18n";
import Link from "next/link";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiInstagram } from "react-icons/tfi";

type Props = {
  params: { lang: string };
};
export default async function Footer({ params }: Props) {
  const d = new Date();
  const year = d.getFullYear();
  const { t } = await useTranslation(params.lang, "translation");
  return (
    <section className={styles.footerDiv}>
      <div className={styles.logoLink}>
        <Image
          src={logo}
          alt="Company Logo"
          width={100}
          height={100}
          loading="lazy"
        ></Image>
        <h2>{t("title")}</h2>
      </div>
      <div className={styles.socialLinks}>
        <Link href={"#"}>
          <FaFacebookSquare />
        </Link>
        <Link href={"#"}>
          <FaXTwitter />
        </Link>
        <Link href={"#"}>
          <TfiInstagram />
        </Link>
        <Link href={"#"}>
          <FaLinkedin />
        </Link>
      </div>
      <div className={styles.copyright}>Doctopia © Copyright {year}</div>
    </section>
  );
}
