import styles from "./Logo.module.scss"
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      Доброе
      <span className={styles["logo__span"]}>Кино</span>
    </Link>
  );
}