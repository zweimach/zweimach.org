module.exports = {
  siteMetadata: {
    title: "zweimach",
    description: "Personal website and blog of Ananda Umamil",
    siteUrl: "https://zweimach.org",
    author: {
      name: "zweimach",
      email: "zweimach@zweimach.org",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 80,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "zweimach",
        short_name: "zweimach",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#4d4d4d",
        display: "standalone",
        icon: "src/assets/icon.png",
        theme_color_in_head: false,
      },
    },
  ],
};
