import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

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
      <div className="flex flex-col justify-evenly h-full p-4">
        <h1 className="py-2 text-2xl font-bold text-center">
          Hi! My name is Ananda Umamil
        </h1>
        <img
          className="block rounded-full my-4 mx-auto"
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
      </div>
    </Layout>
  );
}
