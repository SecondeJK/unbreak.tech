import Link from "next/link";
import Styles from "@styles/Header.module.css";
import LogoU from "@components/LogoU";
import Feed from "@components/Header/svg/Feed";

export default function Header() {
  return (
    <header className={Styles.header__container}>
      <div className={Styles.header__inner}>
        <div className={Styles.header__logo}>
          <LogoU />
        </div>
        <nav className={Styles.nav__container}>
          <ul className={Styles.nav__list}>
            <li className={Styles.nav__listItem}>
              <Link href="/">
                <a className={Styles.nav__listItemLink}>Home</a>
              </Link>
            </li>
            <li className={`${Styles.nav__listItem} ${Styles.nav__listItemLink}`}>
              <Link href="/submit">
                <a className={Styles.nav__listItemLink}>
                  Submit<span className={Styles.nav__showOnDesktop}> your article</span>
                </a>
              </Link>
            </li>
          </ul>

          <Link href="/feed.xml">
            <a
              className={`${Styles.nav__listItemLink} ${Styles.nav__rssIcon}`}
              aria-label="View RSS feed">
              <Feed />
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
