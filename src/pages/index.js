import React from "react";
import { createUseStyles } from "react-jss";

import Layout from "../components/Layout";
import userImage from "../assets/user.png";

export default function IndexPage() {
  const useStyles = createUseStyles({
    profile: {
      backgroundColor: "rgb(50, 50, 50)",
      borderRadius: "16px",
      width: "256px",
      height: "256px"
    },
    box: {
      textAlign: "center",
      borderRadius: "16px",
      background: "rgb(50, 50, 50)",
      padding: "1rem 3rem",
      margin: "1rem"
    },
    text: {
      margin: "0"
    }
  });
  const styles = useStyles();

  return (
    <Layout>
      <h1>zweimach</h1>
      <a href="https://github.com/zweimach">
        <img className={styles.profile} src={userImage} alt="zweimach" />
      </a>
      <div className={styles.box}>
        <p className={styles.text}>a sufferer of severe chrestomathy.</p>
        <p className={styles.text}>
          loves books, c language, linux, javascript and the web.
        </p>
      </div>
    </Layout>
  );
}
