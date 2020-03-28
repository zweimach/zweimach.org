import React from "react";
import { Link } from "gatsby";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.title}>
        <Link to="/">zweimach</Link>
      </span>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link to="/blog">blog</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/project">project</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </header>
  );
}
