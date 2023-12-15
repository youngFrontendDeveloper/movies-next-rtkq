import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={ styles.footer }>
      <div className="container">
       <p className={styles["footer__copyright"]}> &copy; Все права защищены</p>
      </div>
    </footer>
  );
}