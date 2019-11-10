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
