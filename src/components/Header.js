import React from "react";
import { Link } from "gatsby";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span className={styles.title}>
          <Link to="/">zweimach</Link>
        </span>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link to="/blog">blog</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/project">project</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
