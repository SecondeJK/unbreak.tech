import styles from "@styles/Footer.module.css";

export default function Footer() {
  const date = new Date();

  return (
    <footer className={styles.footer}>
      <p className={styles.footer__copyright}>&copy; unbreak.tech {date.getFullYear()}</p>
    </footer>
  );
}
