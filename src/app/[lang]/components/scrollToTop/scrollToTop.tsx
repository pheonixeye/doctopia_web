import Link from "next/link";
import styles from "./comp.module.css";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export default function ScrollToTop() {
  return (
    <Link href="#">
      <div className={styles.scrollToTopBtn}>
        <MdKeyboardDoubleArrowUp className={styles.btnIcon} />
      </div>
    </Link>
  );
}
