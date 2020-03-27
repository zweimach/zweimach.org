import React from "react";
import { createUseStyles } from "react-jss";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  const styles = createUseStyles({
    title: {
      fontSize: "3rem"
    },
    subtitle: {
      fontSize: "1.5rem"
    }
  })();

  return (
    <Layout>
      <SEO title="404" />
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Not Found</h2>
    </Layout>
  );
}
