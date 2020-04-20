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
      imageSharp(fixed: { originalName: { eq: "user.jpg" } }) {
        fixed {
          src
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Hi! My name is Umam" />
      <section className={styles.container}>
        <h1>Hi! My name is Ananda Umamil</h1>
        <img
          className={styles.profile}
          src={userImage}
          alt="zweimach"
          width="256px"
          height="256px"
        />
        <div>
          <p>
            <strong>
              I&apos;m a self-taught software engineer from Indonesia.
            </strong>
          </p>
          <p>
            I have a passion for computer science and mathematics. I used to
            hate math but then fell in love with it because of Haskell and
            functional programming. I build web applications and text-processing
            tools.
          </p>
        </div>
      </section>
    </Layout>
  );
}
