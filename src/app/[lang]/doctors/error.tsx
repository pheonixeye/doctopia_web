"use client"; // Error components must be Client Components

import { useEffect } from "react";
import styles from "./page.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.errorDiv}>
      <h2>{error.message}</h2>
      <button className="mainBtn" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
