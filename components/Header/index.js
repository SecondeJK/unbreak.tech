import { useState } from "react";
import styles from "@styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const hamburgerClasses = menuOpen
    ? `${styles.hamburger} ${styles.is__open}`
    : `${styles.hamburger}`;

  const navLinksClasses = menuOpen
    ? `${styles.header__navList}`
    : `${styles.header__navList} ${styles.header__navList__hide}`;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__navOuter}>
          <nav className={styles.header__nav} role="navigation">
            <button
              className={hamburgerClasses}
              onClick={() => toggleMenu()}
              aria-expanded={menuOpen}
              aria-label="Menu Toggle"
              aria-controls="headerLinks"
              type="button">
              <span className={styles.hamburger__box}>
                <span className={styles.hamburger__inner}></span>
              </span>
              <span className={styles.hamburger__text}>Menu</span>
            </button>

            <ul className={navLinksClasses}>
              <li className={styles.header__navListItem}>
                <Link href="/">
                  <a className={styles.header__navListItemLink} aria-label="Navigate to home page">
                    UNBREAK.TECH
                  </a>
                </Link>
              </li>
              <li className={styles.header__navListItem}>
                <Link href="/submit">
                  <a className={styles.header__navListItemLink}>Submit</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
