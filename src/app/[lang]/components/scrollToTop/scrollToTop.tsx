"use client";

import styles from "./comp.module.css";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button className={styles.scrollToTopBtn} onClick={scrollToTop}>
      ^
    </button>
  );
}
