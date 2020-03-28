import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "gatsby";

export default function Header() {
  const styles = createUseStyles({
    header: {
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      "& a": {
        color: "inherit",
        textDecoration: "none",
      },
    },
    nav: {
      display: "flex",
      listStyle: "none",
      justifyContent: "space-between",
      margin: 0,
      padding: "0.5rem 0rem",
    },
    navItem: {
      margin: 0,
      padding: "0 2rem",
    },
    title: {
      margin: 0,
      fontWeight: "bold",
      padding: "0.5rem",
    },
  })();

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
