import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

export default function Layout({ children }) {
  const styles = createUseStyles({
    "@global": {
      body: {
        backgroundColor: "rgb(100, 100, 100)"
      }
    },
    "container": {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // alignContent: "center",
      flexDirection: "column",
      color: "ghostwhite"
    }
  })();

  return <div className={styles.container}>{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
