import Link from "next/link";
import Styles from "@styles/Header.module.css";
import LogoU from "@components/LogoU";

export default function Header() {
  return (
    <header className={Styles.header__container}>
      <div className={Styles.header__inner}>
        <nav className={Styles.nav__container}>
          <ul className={Styles.nav__list}>
            <li className={Styles.nav__listItem}>
              <LogoU />
            </li>
            <li className={Styles.nav__listItem}>
              <Link href="/">
                <a className={Styles.nav__listItemLink}>Home</a>
              </Link>
            </li>
            <li
              className={`${Styles.nav__listItem} ${Styles.nav__listItemLink} ${Styles.nav__listItemLink__soon}`}>
              <Link href="/submit">
                <a className={Styles.nav__listItemLink}>Submit your article</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
