import Styles from "@styles/Footer.module.css";
import GitHub from "@components/Footer/svg/Github";

export default function Footer() {
  const date = new Date();

  return (
    <footer className={Styles.footer}>
      <a href="https://github.com/whitep4nth3r/unbreak.tech" target="_blank" rel="noopener">Contribute on GitHub <div><GitHub /></div></a>
      <p className={Styles.footer__copyright}>&copy; unbreak.tech {date.getFullYear()}</p>
    </footer>
  );
}
