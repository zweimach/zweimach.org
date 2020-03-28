import React from "react";

import styles from "./404.module.scss";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function ProjectListPage() {
  return (
    <Layout>
      <SEO title="Project" />
      <div className={styles.container}>
        <h1 className={styles.title}>501</h1>
        <h2 className={styles.subtitle}>Not Implemented</h2>
      </div>
    </Layout>
  );
}
