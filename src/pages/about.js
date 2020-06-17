import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function AboutPage() {
  const {
    imageSharp: { fixed: userImage },
  } = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "user.jpg" } }) {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="about zweimach" />
      <div className="h-full mx-6">
        <h1 className="my-3 sm:mt-4 sm:mt-8 font-serif text-5xl text-center">
          About
        </h1>
        <div className="flex justify-center mb-6 sm:mb-12">
          <Img className="rounded-full" fixed={userImage} alt="zweimach" />
        </div>
        <div className="my-6 mb-12 flex flex-col sm:flex-row">
          <div className="mb-6 pt-1 sm:mr-6 sm:w-32 border-t-4 border-blue-600">
            <p className="uppercase">bio</p>
          </div>
          <div className="flex-1">
            <p>
              <strong>
                I&apos;m a self-taught software engineer from Indonesia.
              </strong>
            </p>
            <p>
              I have a passion for computer science and mathematics. I used to
              hate math but then fell in love with it because of Haskell and
              functional programming. I build web applications and
              text-processing tools.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
