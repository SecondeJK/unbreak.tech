import Link from "next/link";
import Styles from "@styles/Header.module.css";

export default function Header() {
  return (
    <header className={Styles.header__container}>
      <div className={Styles.header__inner}>
        <Link href="/">
          <a className={Styles.header__title}>unbreak.tech</a>
        </Link>
        {/* <nav className={Styles.nav__container}>
          <ul className={Styles.nav__list}>
            <li className={Styles.nav__listItem}>
              <Link href="/">
                <a className={Styles.nav__listItemLink}>Home</a>
              </Link>
            </li>
            <li className={Styles.nav__listItem}>
              <Link href="/contribute">
                <a className={Styles.nav__listItemLink}>Contribute</a>
              </Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
}
