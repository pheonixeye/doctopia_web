import styles from "./comp.module.css";

export default function floatingContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.floatingActionBtns}>
      <div className={styles.languageSwitcherDiv}>{children}</div>
    </div>
  );
}
