import React from "react";
import { createUseStyles } from "react-jss";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function BlogListPage() {
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
      <SEO title="Blog" />
      <div className={styles.container}>
        <h1 className={styles.title}>501</h1>
        <h2 className={styles.subtitle}>Not Implemented</h2>
      </div>
    </Layout>
  );
}
