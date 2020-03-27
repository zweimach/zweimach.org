import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function SEO() {
  const {
    site: { siteMetadata: seo },
    imageSharp: {
      fixed: { src: favicon }
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author {
            name
          }
        }
      }
      imageSharp(fixed: { originalName: { eq: "favicon.png" } }) {
        fixed {
          src
        }
      }
    }
  `);

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="shortcut icon" type="image/png" href={favicon} />
      <link rel="canonical" href={seo.siteUrl} />
    </Helmet>
  );
}
