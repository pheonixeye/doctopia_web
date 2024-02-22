"use client";

import {
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
} from "next/navigation";
import styles from "./comp.module.css";
import Link from "next/link";

type Props = {
  params: { lang: string };
};

export default function LanguageSwitcher({ params }: Props) {
  const isEnglish = params.lang == "en";
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function _constructSearchParamsString(
    srcParams: ReadonlyURLSearchParams
  ): string {
    let _params = "";
    srcParams.forEach((v, k) => (_params += `${k}=${v}&`));
    return _params;
  }

  const path = pathname.split("/");
  path.shift();
  path.shift();
  const res = path.join("/");
  const url = `${res}?${_constructSearchParamsString(searchParams)}`;
  // console.log(url);

  return (
    <Link
      href={`/${isEnglish ? "ar" : "en"}/${url}`}
      className={styles.languageSwitcherBtn}
    >
      {isEnglish ? "ar".toUpperCase() : "en".toUpperCase()}
    </Link>
  );
}
