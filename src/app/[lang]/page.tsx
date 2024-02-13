export const runtime = "edge";

import Link from "next/link";
import HeroSection from "./hero_components/heroSection/heroSection";
import SearchSection from "./hero_components/searchSection/searchSection";
import NavSection from "./hero_components/navSection/navSection";
import styles from "./page.module.css";

type Props = {
  params: { lang: string };
};

export default function SearchPage({ params }: Props) {
  return (
    <>
      <section className={styles.mainSection}>
        <NavSection params={params}></NavSection>
        <HeroSection params={params}></HeroSection>
        <SearchSection params={params}></SearchSection>
      </section>
      {/* <Link href={`/${params.lang}/doctors`}>Go To Doctors Page</Link> */}
    </>
  );
}
