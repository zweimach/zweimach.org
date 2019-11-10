import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

import SEO from "./SEO";

export default function Layout({ children }) {
  const useStyles = createUseStyles({
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
  });
  const styles = useStyles();

  return (
    <Fragment>
      <SEO />
      <div className={styles.container}>{children}</div>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
