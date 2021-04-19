require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "refit",
    description: `refit`,
    author: `@juriakajurek`,
    siteUrl: `http://localhost:8000/`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo_splashscreen.svg",
      },
    },
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: "http://localhost:1337/graphql",
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
        apiURL: "http://localhost:1337",
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
