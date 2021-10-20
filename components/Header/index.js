import { useState } from "react";
import HeaderStyles from "@styles/Header.module.css";
import Link from "next/link";
import LogoU from "@components/LogoU";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const hamburgerClasses = menuOpen
    ? `${HeaderStyles.hamburger} ${HeaderStyles.is__open}`
    : `${HeaderStyles.hamburger}`;

  const navLinksClasses = menuOpen
    ? `${HeaderStyles.header__navList}`
    : `${HeaderStyles.header__navList} ${HeaderStyles.header__navList__hide}`;

  return (
    <>
      <header className={HeaderStyles.header}>
        <div className={HeaderStyles.header__navOuter}>
          <nav className={HeaderStyles.header__nav} role="navigation">
            <button
              className={hamburgerClasses}
              onClick={() => toggleMenu()}
              aria-expanded={menuOpen}
              aria-label="Menu Toggle"
              aria-controls="headerLinks"
              type="button">
              <span className={HeaderStyles.hamburger__box}>
                <span className={HeaderStyles.hamburger__inner}></span>
              </span>
              <span className={HeaderStyles.hamburger__text}>Menu</span>
            </button>

            <ul className={navLinksClasses}>
              <li className={HeaderStyles.header__navListItem}>
                <Link href="/">
                  <a
                    className={HeaderStyles.header__navListItemLink}
                    aria-label="Navigate to home page">
                    UNBREAK.TECH
                  </a>
                </Link>
              </li>
              <li className={HeaderStyles.header__navListItem}>
                <Link href="/submit">
                  <a className={HeaderStyles.header__navListItemLink}>Submit</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
