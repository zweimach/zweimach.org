import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styles from "./about.module.scss";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function AboutPage() {
  const {
    imageSharp: {
      fixed: { src: userImage },
    },
  } = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "user.png" } }) {
        fixed {
          src
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="About" />
      <div className={styles.container}>
        <img
          className={styles.profile}
          src={userImage}
          alt="zweimach"
          width="256px"
          height="256px"
        />
        <p className={styles.text}>a sufferer of severe chrestomathy.</p>
        <p className={styles.text}>
          loves books, c language, linux, javascript and the web.
        </p>
      </div>
    </Layout>
  );
}
