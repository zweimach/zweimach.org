import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import favicon from "../assets/favicon.png";

export default function SEO() {
  const {
    site: { siteMetadata: seo }
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
