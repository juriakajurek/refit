require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "refit",
    description: `refit`,
    author: `@juriakajurek`,
    siteUrl: `http://www.refit.pl`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo_splashscreen.svg",
      },
    },
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: "http://135.125.235.24:1337/graphql",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "http://135.125.235.24:1337",
        queryLimit: 1000,
        contentTypes: [
          `services`,
          `rooms`,
          `questionnaires`,
          `categories`,
          `default-rooms`,
        ],
      },
    },
  ],
};
