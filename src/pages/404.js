import React from "react";
import { createUseStyles } from "react-jss";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  const styles = createUseStyles({
    container: {
      height: "calc(100vh - 200px)",
      padding: "3rem 1rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    title: {
      fontSize: "3rem",
    },
    subtitle: {
      fontSize: "1.5rem",
    },
  })();

  return (
    <Layout>
      <SEO title="404" />
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Not Found</h2>
      </div>
    </Layout>
  );
}