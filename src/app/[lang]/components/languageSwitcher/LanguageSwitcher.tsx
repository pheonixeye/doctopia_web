"use client";

import { usePathname } from "next/navigation";
import styles from "./comp.module.css";
import Link from "next/link";

type Props = {
  params: { lang: string };
};

export default function LanguageSwitcher({ params }: Props) {
  const isEnglish = params.lang == "en";
  const pathname = usePathname();

  const path = pathname.split("/");
  path.shift();
  path.shift();
  const res = path.join("/");
  console.log(res);

  return (
    <Link
      href={`/${isEnglish ? "ar" : "en"}/${res}`}
      className={styles.languageSwitcherBtn}
    >
      {isEnglish ? "ar".toUpperCase() : "en".toUpperCase()}
    </Link>
  );
}
