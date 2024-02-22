// export const runtime = "edge";

import HeroSection from "./components/heroSection/heroSection";
import SearchSection from "./components/searchSection/searchSection";
import styles from "./page.module.css";

type Props = {
  params: { lang: string };
};

export default async function SearchPage({ params }: Props) {
  return (
    <>
      <section className={styles.mainSection}>
        <HeroSection params={params}></HeroSection>
        <SearchSection params={params}></SearchSection>
      </section>
    </>
  );
}
