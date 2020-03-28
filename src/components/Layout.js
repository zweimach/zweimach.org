import React from "react";
import PropTypes from "prop-types";

import styles from "./Layout.module.scss";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
