import React from "react";
import { createUseStyles } from "react-jss";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function AboutPage() {
  const styles = createUseStyles({
    container: {
      backgroundColor: "#32323",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "calc(100vh - 200px)",
      margin: 0,
      textAlign: "center",
    },
    profile: {
      backgroundColor: "#32323",
      borderRadius: "50%",
      margin: "0 auto",
      display: "block",
    },
    text: {
      margin: "0",
    },
  })();

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
