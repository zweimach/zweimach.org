import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

import Header from "./Header";

export default function Layout({ children }) {
  const styles = createUseStyles({
    "@global": {
      body: {
        backgroundColor: "#646464",
        color: "#f8f8ff",
      },
    },
    container: {
      margin: "auto",
      minHeight: "100vh",
    },
    "@media screen and (min-width: 768px)": {
      container: {
        maxWidth: "800px",
      },
    },
  })();

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
