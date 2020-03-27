module.exports = {
  siteMetadata: {
    title: "zweimach",
    description: "Personal website and blog of Ananda Umamil",
    siteUrl: "https://zweimach.org",
    author: {
      name: "zweimach",
      email: "zweimach@zweimach.org"
    }
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 80
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
        omitGoogleFont: true
      }
    },
    "gatsby-plugin-jss"
  ]
};
